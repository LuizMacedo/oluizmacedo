# Referência ao Resource Group existente — nunca gerenciado por este Terraform.
# Garante que o RG não será deletado acidentalmente via terraform destroy.
data "azurerm_resource_group" "main" {
  name = var.resource_group_name
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
