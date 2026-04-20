# Terraform — Infraestrutura oluizmacedo.com

Gerencia o Azure Static Web App (`swa-oluizmacedo`) no Resource Group `rg-oluizmacedo`.

## Pré-requisitos

- [Terraform >= 1.5](https://developer.hashicorp.com/terraform/install)
- [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli) autenticado: `az login`

## Primeiro uso

```bash
cd infra
terraform init
terraform plan
terraform apply
```

Ao final do `apply`, copie o token de deploy para o GitHub:

```bash
terraform output -raw api_key
```

Adicione como secret `AZURE_STATIC_WEB_APPS_API_TOKEN` em:  
**GitHub → Settings → Secrets and variables → Actions**

## Estado remoto (recomendado)

Para persistir o estado no Azure Blob Storage, siga as instruções comentadas em `versions.tf`.

## Remontando a infra do zero

```bash
terraform init
terraform apply
# Copie o api_key para o GitHub Secret novamente
```

> **Importante:** o `terraform destroy` remove APENAS os recursos declarados neste módulo (`swa-oluizmacedo`). O Resource Group `rg-oluizmacedo` é referenciado via `data source` e **nunca será deletado** por este Terraform.
