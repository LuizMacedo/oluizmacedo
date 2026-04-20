terraform {
  required_version = ">= 1.5.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }

  # Descomente e configure o bloco abaixo para usar estado remoto no Azure Blob Storage.
  # Primeiro crie a storage account manualmente (ou com az cli):
  #
  #   az storage account create \
  #     --name stoluizmacedotfstate \
  #     --resource-group rg-oluizmacedo \
  #     --sku Standard_LRS \
  #     --location brazilsouth
  #
  #   az storage container create \
  #     --name tfstate \
  #     --account-name stoluizmacedotfstate
  #
  # Depois rode: terraform init -migrate-state
  #
  # backend "azurerm" {
  #   resource_group_name  = "rg-oluizmacedo"
  #   storage_account_name = "stoluizmacedotfstate"
  #   container_name       = "tfstate"
  #   key                  = "oluizmacedo.tfstate"
  # }
}
