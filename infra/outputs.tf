output "hostname" {
  description = "URL padrão do Static Web App (azurestaticapps.net)."
  value       = "https://${azurerm_static_web_app.main.default_host_name}"
}

output "custom_domain_apex" {
  description = "URL pública do site com domínio personalizado (apex)."
  value       = "https://${var.domain_name}"
}

output "custom_domain_www" {
  description = "URL pública do site com domínio personalizado (www)."
  value       = "https://www.${var.domain_name}"
}

output "api_key" {
  description = "Token de deploy — adicione como secret AZURE_STATIC_WEB_APPS_API_TOKEN no repositório GitHub."
  value       = azurerm_static_web_app.main.api_key
  sensitive   = true
}
