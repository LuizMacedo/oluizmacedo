import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl" />
        </div>

        <Container size="narrow" className="relative z-10">
          <div className="text-center">
            <Badge className="mb-6">Senior Product Manager @ Microsoft</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              O próximo nível da sua carreira em Tech{' '}
              <span className="text-accent">não depende de esforço, mas de intenção.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Aprenda o jogo silencioso das Big Techs com quem ajudou a criar as regras.
              20 anos de experiência, 12 anos de Microsoft, direto do Texas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/mentoria" size="lg">
                Conheça Os Intencionais
              </Button>
              <Button href="/#sobre" variant="secondary" size="lg">
                Sobre mim
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Para quem é */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container>
          <SectionHeader
            label="Para quem é"
            title="Se você se identifica, estou falando com você"
            description="Meu trabalho é voltado para profissionais de tech que estão prontos para o próximo nível — com intenção."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((item, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl mt-1">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pilares */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container>
          <SectionHeader
            label="Pilares"
            title="O que você encontra aqui"
            description="Três áreas que guiam tudo o que eu faço — da mentoria ao conteúdo."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <Card key={i} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <span className="text-accent text-xl">{pillar.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 md:py-28 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface via-surface-hover to-surface border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-3xl font-bold">LM</span>
                  </div>
                  <p className="text-xs text-muted/60">Foto profissional em breve</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/20 rounded-2xl -z-10" />
            </div>

            {/* Bio */}
            <div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Sobre</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Luiz Macedo
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Senior Product Manager na Microsoft, vivendo no Texas, EUA.
                  São 20 anos trabalhando com tecnologia e 12 anos na Microsoft,
                  em contextos que vão de startups brasileiras a Big Tech global.
                </p>
                <p>
                  Mestre em Product Management pela Capitol Technology University
                  e co-criador da certificação AZ-400 da Microsoft. Acredito que
                  crescimento profissional real vem de decisões intencionais — não
                  de fórmulas mágicas ou motivação vazia.
                </p>
                <p>
                  Mentoro profissionais que querem parar de gerir o como e começar
                  a gerir o porquê. Vida real, café e liberdade. Alta performance em 4h.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {credentials.map((c, i) => (
                  <Badge key={i} variant="muted">{c}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Programas */}
      <section id="programas" className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container>
          <SectionHeader
            label="Próximos passos"
            title="Mentoria, comunidade e treinamentos"
            description="Programas para profissionais que querem resultado, não mais conteúdo genérico."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Card key={i} className="flex flex-col">
                <div className="flex-1">
                  {product.badge && (
                    <Badge className="mb-4">{product.badge}</Badge>
                  )}
                  <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{product.description}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    href={product.href}
                    variant={product.primary ? 'primary' : 'secondary'}
                    size="sm"
                    className="w-full"
                    external={product.external}
                  >
                    {product.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <CTASection
        label="Lista de espera"
        title="Quer entrar na lista de espera dos Intencionais?"
        description="Receba novidades sobre mentoria, comunidade e treinamentos exclusivos. Sem spam, só o que importa."
        buttonText="Quero entrar na lista de espera"
        buttonHref={siteConfig.links.tally.waitlist}
      />
    </>
  );
}

const audiences = [
  {
    icon: '◆',
    title: 'PMs que estão estagnados no operacional',
    description:
      'Você entrega, mas sente que virou executor. Quer sair do ciclo de apagar incêndio e começar a influenciar estratégia de verdade.',
  },
  {
    icon: '◆',
    title: 'Profissionais de tech que miram Big Tech',
    description:
      'Quer entrar ou crescer em empresas globais e precisa de orientação prática de quem vive isso há mais de uma década.',
  },
  {
    icon: '◆',
    title: 'Quem quer carreira internacional com pés no chão',
    description:
      'Não busca fórmula mágica. Quer um plano real para se posicionar no mercado global com clareza e estratégia.',
  },
  {
    icon: '◆',
    title: 'Profissionais que querem gerir o porquê, não o como',
    description:
      'Está cansado de conteúdo genérico e quer mentoria direta, com visão sênior e experiência real de Big Tech.',
  },
];

const pillars = [
  {
    icon: '▣',
    title: 'Produto & Estratégia',
    description: 'Gestão de produto com visão sênior. Priorização, discovery, métricas e as decisões que movem o negócio.',
  },
  {
    icon: '◈',
    title: 'Carreira Internacional',
    description: 'Como construir, posicionar e avançar sua carreira em Big Tech e empresas globais — direto do Texas.',
  },
  {
    icon: '⬡',
    title: 'Alta Performance',
    description: 'Produtividade real, rotinas sustentáveis e mentalidade de resultado. Alta performance em 4h.',
  },
  {
    icon: '◇',
    title: 'Senioridade & Influência',
    description: 'Navegando na incerteza, gestão de stakeholders, comunicação executiva e alavancagem de carreira.',
  },
];

const credentials = [
  'Microsoft (12 anos)',
  'MS em Product Management',
  'Co-criador AZ-400',
  'Carreira Internacional',
  'Texas, EUA',
  '20 anos em Tech',
];

const products = [
  {
    badge: 'Mentoria',
    title: 'Os Intencionais',
    description:
      'Mentoria 1:1 para profissionais que estão estagnados no operacional e querem parar de gerir o como e começar a gerir o porquê.',
    href: '/mentoria',
    cta: 'Saiba mais',
    primary: true,
    external: false,
  },
  {
    badge: 'Comunidade',
    title: 'Intencionais',
    description:
      'Comunidade exclusiva para profissionais de tech que querem crescer com intenção, trocar com pares de alto nível e acelerar resultados.',
    href: '/comunidade',
    cta: 'Conhecer a comunidade',
    primary: false,
    external: false,
  },
  {
    badge: 'Em breve',
    title: 'Treinamentos Estratégicos',
    description:
      'Programas focados em Product Management, carreira internacional e alta performance. Direto ao ponto, sem enrolação.',
    href: siteConfig.links.tally.waitlist,
    cta: 'Lista de espera',
    primary: false,
    external: true,
  },
];
