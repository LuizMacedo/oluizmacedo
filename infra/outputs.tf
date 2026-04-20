output "hostname" {
  description = "URL pública do Static Web App (produção)."
  value       = "https://${azurerm_static_web_app.main.default_host_name}"
}

output "api_key" {
  description = "Token de deploy — adicione como secret AZURE_STATIC_WEB_APPS_API_TOKEN no repositório GitHub."
  value       = azurerm_static_web_app.main.api_key
  sensitive   = true
}
