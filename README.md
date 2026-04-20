# oluizmacedo.com.br

Site pessoal e profissional de Luiz Macedo — hub institucional e comercial para mentoria, cursos e conteúdo sobre produto, carreira internacional e alta performance em tecnologia.

## Stack

- **Framework**: [Next.js 16](https://nextjs.org/) com App Router
- **Linguagem**: TypeScript
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deploy**: [Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static)
- **Analytics**: Google Analytics 4
- **Formulários**: [Tally](https://tally.so/) (embed/links)

## Estrutura do Projeto

```
src/
├── app/                          # Rotas (App Router)
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Layout raiz (metadata, header, footer)
│   ├── globals.css               # Estilos globais e design tokens
│   ├── not-found.tsx             # Página 404
│   ├── sitemap.ts                # Sitemap dinâmico
│   ├── robots.ts                 # Robots.txt
│   ├── mentoria/                 # Página de mentoria
│   ├── curso-product-manager/    # Curso PM (placeholder)
│   ├── curso-carreira-internacional/ # Curso Carreira (placeholder)
│   ├── links/                    # Link in bio
│   ├── contato/                  # Contato
│   ├── obrigado/                 # Confirmação pós-formulário
│   ├── politica-de-privacidade/  # Política de privacidade
│   └── termos-de-uso/            # Termos de uso
├── components/
│   ├── ui/                       # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/                 # Seções reutilizáveis
│   │   ├── CTASection.tsx
│   │   └── FAQ.tsx
│   ├── layout/                   # Layout (header, footer)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── GoogleAnalytics.tsx       # GA4 integration
└── lib/
    └── constants.ts              # Configurações do site, links, navegação
```

## Setup Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- npm

### Instalação

```bash
git clone https://github.com/LuizMacedo/oluizmacedo.git
cd oluizmacedo
npm install
```

### Variáveis de Ambiente

Copie o arquivo de exemplo e preencha com seus valores:

```bash
cp .env.example .env.local
```

| Variável                         | Descrição                                     | Obrigatória                           |
| -------------------------------- | --------------------------------------------- | ------------------------------------- |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | ID do Google Analytics 4 (ex: `G-XXXXXXXXXX`) | Não (analytics desabilitado se vazio) |

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

O build gera arquivos estáticos em `out/` (configurado com `output: 'export'`).

## Deploy — Azure Static Web Apps

O projeto está configurado para deploy no Azure Static Web Apps com output estático.

### Via Azure CLI

```bash
# Instalar Azure SWA CLI (se necessário)
npm install -g @azure/static-web-apps-cli

# Build
npm run build

# Deploy
swa deploy ./out --deployment-token <SEU_TOKEN>
```

### Via GitHub Actions

Crie um workflow em `.github/workflows/azure-swa.yml`:

```yaml
name: Azure Static Web Apps

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: upload
          app_location: out
          skip_app_build: true
```

### Domínio Customizado

Após o deploy inicial no Azure Static Web Apps:

1. Acesse o recurso no Azure Portal
2. Vá em **Settings → Custom domains**
3. Adicione seu domínio (ex: `oluizmacedo.com.br`)
4. Configure os registros DNS conforme indicado:
   - **CNAME** para subdomínios (`www.oluizmacedo.com.br`)
   - **TXT** para domínio raiz (`oluizmacedo.com.br`)
5. O certificado SSL é provisionado automaticamente

## Configurações Importantes

### Sitemap e Robots

Gerados automaticamente via `src/app/sitemap.ts` e `src/app/robots.ts`. O sitemap é acessível em `/sitemap.xml` e o robots em `/robots.txt`.

### Google Analytics 4

Configurado via componente `GoogleAnalytics`. Basta definir a variável de ambiente `NEXT_PUBLIC_GA4_MEASUREMENT_ID`. Se vazia, o GA4 não é carregado.

### Formulários (Tally)

Os CTAs de formulário apontam para URLs do Tally definidas em `src/lib/constants.ts`. Para integrar:

1. Crie os formulários no [Tally](https://tally.so/)
2. Atualize as URLs em `siteConfig.links.tally` no arquivo de constantes
3. Para embed inline (ex: página de contato), use o iframe do Tally conforme comentário no código

### Integrações Futuras

O site está preparado para integração com:

- **Hotmart/Kiwify**: atualize os links de CTA nos cursos quando disponíveis
- **Blog**: adicione uma rota `/blog` com MDX ou CMS headless
- **Newsletter**: integre com ConvertKit, Mailchimp ou similar via Tally webhooks
- **Checkout**: conecte os CTAs de curso às plataformas de pagamento

## Design System

### Cores

| Token        | Hex       | Uso                        |
| ------------ | --------- | -------------------------- |
| `background` | `#0c0a09` | Fundo principal            |
| `surface`    | `#1c1917` | Cards e elementos elevados |
| `border`     | `#292524` | Bordas                     |
| `foreground` | `#fafaf9` | Texto principal            |
| `muted`      | `#a8a29e` | Texto secundário           |
| `accent`     | `#C8956C` | Dourado / CTA / destaques  |

### Tipografia

- **Sans**: Geist Sans (via `next/font/google`)
- **Mono**: Geist Mono (detalhes e badges)

### Componentes

- `Button` — primário (dourado), secundário (outline), ghost
- `Card` — surface com hover animado
- `Badge` — tags de destaque
- `SectionHeader` — label + título + descrição
- `Container` — wrapper com max-width (narrow, default, wide)
- `CTASection` — bloco de conversão reutilizável
- `FAQ` — accordion interativo

## Licença

Todos os direitos reservados. © Luiz Macedo.
