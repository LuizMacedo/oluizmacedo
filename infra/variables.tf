variable "location" {
  description = "Região Azure onde o recurso será criado."
  type        = string
  default     = "brazilsouth"
}

variable "resource_group_name" {
  description = "Nome do Resource Group existente."
  type        = string
  default     = "rg-oluizmacedo"
}

variable "app_name" {
  description = "Nome do recurso Azure Static Web App."
  type        = string
  default     = "swa-oluizmacedo"
}

variable "sku_tier" {
  description = "SKU do Static Web App. 'Free' para sites pessoais estáticos; 'Standard' para APIs e auth customizada."
  type        = string
  default     = "Free"

  validation {
    condition     = contains(["Free", "Standard"], var.sku_tier)
    error_message = "sku_tier deve ser 'Free' ou 'Standard'."
  }
}
