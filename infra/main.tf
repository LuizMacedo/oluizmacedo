# Referência ao Resource Group existente — nunca gerenciado por este Terraform.
# Garante que o RG não será deletado acidentalmente via terraform destroy.
data "azurerm_resource_group" "main" {
  name = var.resource_group_name
}

# Referência à zona DNS existente — nunca gerenciada por este Terraform.
data "azurerm_dns_zone" "main" {
  name                = var.domain_name
  resource_group_name = data.azurerm_resource_group.main.name
}

resource "azurerm_static_web_app" "main" {
  name                = var.app_name
  resource_group_name = data.azurerm_resource_group.main.name
  location            = var.location
  sku_tier            = var.sku_tier
  sku_size            = var.sku_tier

  tags = {
    project     = "oluizmacedo"
    environment = "production"
    managed_by  = "terraform"
  }
}

# ─────────────────────────────────────────────────────────────
# Custom domains
# ─────────────────────────────────────────────────────────────

# Domínio apex: oluizmacedo.com.br
# Usa dns-txt-token — valida via registro TXT _dnsauth
resource "azurerm_static_web_app_custom_domain" "apex" {
  static_web_app_id = azurerm_static_web_app.main.id
  domain_name       = var.domain_name
  validation_type   = "dns-txt-token"
}

# Domínio www: www.oluizmacedo.com.br
# Usa cname-delegation — o próprio CNAME valida e roteia.
# IMPORTANTE: o CNAME deve existir antes do custom domain ser registrado.
resource "azurerm_static_web_app_custom_domain" "www" {
  static_web_app_id = azurerm_static_web_app.main.id
  domain_name       = "www.${var.domain_name}"
  validation_type   = "cname-delegation"

  depends_on = [azurerm_dns_cname_record.www]

  lifecycle {
    # validation_type não é retornado pela API após a validação ser concluída,
    # então ignoramos para evitar recriação desnecessária do custom domain.
    ignore_changes = [validation_type]
  }
}

# ─────────────────────────────────────────────────────────────
# Registros DNS
# ─────────────────────────────────────────────────────────────

# TXT _dnsauth — valida o domínio apex no SWA
resource "azurerm_dns_txt_record" "swa_validation_apex" {
  name                = "_dnsauth"
  zone_name           = data.azurerm_dns_zone.main.name
  resource_group_name = data.azurerm_resource_group.main.name
  ttl                 = 3600

  record {
    value = azurerm_static_web_app_custom_domain.apex.validation_token
  }
}

# ALIAS A @ → SWA — roteia o apex para o Static Web App
resource "azurerm_dns_a_record" "apex_alias" {
  name                = "@"
  zone_name           = data.azurerm_dns_zone.main.name
  resource_group_name = data.azurerm_resource_group.main.name
  ttl                 = 3600
  target_resource_id  = azurerm_static_web_app.main.id

  depends_on = [azurerm_static_web_app_custom_domain.apex]
}

# CNAME www → SWA — roteia www e valida o domínio www
# Criado ANTES do custom domain www (cname-delegation requer o CNAME já existente)
resource "azurerm_dns_cname_record" "www" {
  name                = "www"
  zone_name           = data.azurerm_dns_zone.main.name
  resource_group_name = data.azurerm_resource_group.main.name
  ttl                 = 3600
  record              = azurerm_static_web_app.main.default_host_name
}
