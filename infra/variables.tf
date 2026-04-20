variable "location" {
  description = "Região Azure onde o recurso será criado. SWA requer: westus2, centralus, eastus2, westeurope ou eastasia."
  type        = string
  default     = "centralus"
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

variable "domain_name" {
  description = "Domínio personalizado do site (zona DNS já deve existir no Azure DNS)."
  type        = string
  default     = "oluizmacedo.com.br"
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
