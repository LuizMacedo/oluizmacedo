import Image from 'next/image';
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
              Carreira em Tech exige mais do que execução.{' '}
              <span className="text-accent">Exige direção.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Produto, senioridade e carreira internacional para profissionais
              que querem crescer com mais clareza.
            </p>
            <p className="mt-4 text-sm text-muted/70 max-w-xl mx-auto">
              Uma trajetória construída ao longo de 20 anos em tecnologia,
              12 deles na Microsoft, entre produto, certificações e contextos globais.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/mentoria" size="lg">
                Conheça a mentoria
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
            title="Profissionais de Tech em busca de mais clareza"
            description="Meu trabalho é direcionado a quem leva a própria carreira a sério e quer tomar decisões com mais contexto."
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
            description="Quatro áreas que orientam a mentoria, a comunidade e o conteúdo."
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
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/luiz-macedo.jpg"
                  alt="Luiz Macedo — Senior Product Manager na Microsoft"
                  width={560}
                  height={700}
                  className="w-full h-full object-cover"
                  priority
                />
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
                  Senior Product Manager na Microsoft, vivendo no Texas, EUA há quase 10 anos.
                  São 20 anos trabalhando com tecnologia e 12 na Microsoft, em experiências
                  que passam por engenharia, produto, certificações e contextos globais.
                </p>
                <p>
                  Tenho M.S. in Product Management pela Capitol Technology University e
                  graduação em Sistemas de Informação. Participei da criação de certificações
                  da Microsoft, incluindo a AZ-400, e de cursos no Microsoft Learn como
                  AZ-2008, AZ-2010 e AZ-2001.
                </p>
                <p>
                  Hoje uso essa experiência para compartilhar reflexões e orientar profissionais
                  de Tech que querem crescer com mais clareza em produto, senioridade e carreira
                  internacional.
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
            label="Programas"
            title="Formatos diferentes para momentos diferentes da carreira"
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
        title="Quer receber novidades?"
        description="Entre na lista de espera para saber sobre mentoria, comunidade e novos conteúdos."
        buttonText="Entrar na lista de espera"
        buttonHref={siteConfig.links.tally.waitlist}
      />
    </>
  );
}

const audiences = [
  {
    icon: '◆',
    title: 'Profissionais de produto que querem sair do operacional',
    description:
      'Você entrega, mas sente que a evolução travou. Quer mais clareza sobre como passar da execução para a influência estratégica.',
  },
  {
    icon: '◆',
    title: 'Profissionais de tecnologia avaliando transição para produto',
    description:
      'Vem de engenharia, design ou outra área e quer entender o que de fato muda ao migrar para Product Management.',
  },
  {
    icon: '◆',
    title: 'Quem busca carreira internacional',
    description:
      'Está avaliando oportunidades fora do Brasil ou em empresas globais e quer orientação de quem já passou por isso.',
  },
  {
    icon: '◆',
    title: 'Quem quer mais clareza sobre senioridade e direção',
    description:
      'Busca contexto sobre posicionamento, gestão de stakeholders e próximos passos para a carreira.',
  },
];

const pillars = [
  {
    icon: '▣',
    title: 'Produto e estratégia',
    description: 'Gestão de produto com visão sênior: priorização, discovery, métricas e decisões de negócio.',
  },
  {
    icon: '◈',
    title: 'Carreira internacional',
    description: 'Posicionamento, preparação e contexto para quem quer trabalhar em empresas globais.',
  },
  {
    icon: '⬡',
    title: 'Senioridade e influência',
    description: 'Gestão de stakeholders, comunicação executiva e posicionamento profissional.',
  },
  {
    icon: '◇',
    title: 'Clareza e direção profissional',
    description: 'Diagnóstico de carreira, tomada de decisão e planejamento de próximos passos.',
  },
];

const credentials = [
  'Microsoft (12 anos)',
  'M.S. in Product Management',
  'Co-criador AZ-400',
  'Sistemas de Informação',
  'Texas, EUA',
  '20 anos em Tech',
];

const products = [
  {
    badge: 'Mentoria',
    title: 'Mentoria',
    description:
      'Acompanhamento para profissionais de Tech que querem mais clareza sobre produto, senioridade e carreira internacional.',
    href: '/mentoria',
    cta: 'Saiba mais',
    primary: true,
    external: false,
  },
  {
    badge: 'Comunidade',
    title: 'Comunidade',
    description:
      'Espaço para profissionais de Tech que valorizam boas conversas sobre carreira, produto e senioridade.',
    href: '/comunidade',
    cta: 'Conhecer a comunidade',
    primary: false,
    external: false,
  },
  {
    badge: 'Em breve',
    title: 'Treinamentos',
    description:
      'Programas focados em temas específicos de produto, carreira e senioridade. Em desenvolvimento.',
    href: siteConfig.links.tally.waitlist,
    cta: 'Lista de espera',
    primary: false,
    external: true,
  },
];
