import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Comunidade Intencionais',
  description:
    'Comunidade exclusiva para profissionais de tech que querem crescer com intenção, trocar com pares de alto nível e acelerar resultados.',
};

export default function ComunidadePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
        </div>
        <Container size="narrow" className="relative z-10">
          <div className="text-center">
            <Badge className="mb-6">Em breve</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Comunidade{' '}
              <span className="text-accent">Intencionais</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Um espaço exclusivo para profissionais de tech que querem crescer com intenção,
              trocar com pares de alto nível e acelerar resultados — juntos.
            </p>
            <div className="mt-10">
              <Button href={siteConfig.links.tally.waitlist} external size="lg">
                Entrar na lista de espera
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* O que é */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container size="narrow">
          <SectionHeader
            label="O que é"
            title="Mais do que um grupo — um ecossistema"
            align="left"
          />
          <div className="mt-10 space-y-4 text-lg text-muted leading-relaxed">
            <p>
              A Comunidade Intencionais é o espaço onde profissionais de tech sérios
              se encontram para trocar experiências reais, desafiar ideias e crescer
              junto com quem está no mesmo nível de ambição.
            </p>
            <p>
              Não é mais um grupo genérico. É um ecossistema curado para quem
              quer discutir produto, carreira internacional, gestão de stakeholders
              e alta performance com profundidade — e com quem realmente entende.
            </p>
            <p>
              Facilitado por Luiz Macedo, Senior PM na Microsoft com 20 anos de tech
              e 12 anos na empresa, a comunidade combina conteúdo exclusivo, encontros
              ao vivo e networking intencional.
            </p>
          </div>
        </Container>
      </section>

      {/* O que você encontra */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container>
          <SectionHeader
            label="Na comunidade"
            title="O que você vai encontrar"
            description="Conteúdo, conexões e conversas que movem sua carreira."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <Card key={i}>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Para quem é */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card hover={false} className="border-accent/20">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent">✓</span>
                </span>
                Para quem é
              </h3>
              <ul className="space-y-4">
                {forWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-sm">●</span>
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false} className="border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-surface-hover rounded-lg flex items-center justify-center">
                  <span className="text-muted">✕</span>
                </span>
                Para quem não é
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-muted/40 mt-1 text-sm">●</span>
                    <span className="text-muted/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container size="narrow">
          <SectionHeader
            label="Dúvidas"
            title="Perguntas frequentes"
          />
          <div className="mt-12">
            <FAQ items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <CTASection
        label="Lista de espera"
        title="Quer fazer parte dos Intencionais?"
        description="A comunidade está em construção. Entre na lista de espera para ser avisado assim que abrirmos as portas."
        buttonText="Entrar na lista de espera"
        buttonHref={siteConfig.links.tally.waitlist}
      />
    </>
  );
}

const features = [
  {
    title: 'Conteúdo exclusivo',
    description: 'Insights sobre produto, carreira e alta performance que não estão em nenhum blog ou podcast.',
  },
  {
    title: 'Encontros ao vivo',
    description: 'Sessões com Luiz Macedo e convidados sobre temas estratégicos — com espaço para perguntas reais.',
  },
  {
    title: 'Networking intencional',
    description: 'Conexões com profissionais de tech de alto nível que compartilham dos mesmos valores e ambição.',
  },
  {
    title: 'Discussões de alto nível',
    description: 'Trocas sobre gestão de stakeholders, navegação na incerteza e decisões de carreira complexas.',
  },
  {
    title: 'Acesso a bastidores',
    description: 'Como decisões são realmente tomadas em Big Tech, sem filtro e sem marketing.',
  },
  {
    title: 'Accountability em grupo',
    description: 'Um ambiente que te puxa para cima e te mantém no caminho — com pares que cobram resultado.',
  },
];

const forWho = [
  'Profissionais de tech (PM, engenharia, design, liderança) que querem crescer com intenção',
  'Quem já tem experiência e quer trocar com pares de nível similar',
  'Profissionais interessados em carreira internacional e Big Tech',
  'Quem valoriza profundidade e está cansado de conteúdo superficial',
];

const notForWho = [
  'Quem busca networking por quantidade, não qualidade',
  'Profissionais que só querem consumir sem contribuir',
  'Quem espera fórmula mágica ou atalho para crescimento',
];

const faqItems = [
  {
    question: 'Quando a comunidade vai abrir?',
    answer:
      'A comunidade está em fase de construção. Entre na lista de espera para ser avisado em primeira mão quando abrirmos as portas. Quem estiver na lista terá condições especiais.',
  },
  {
    question: 'A comunidade é paga?',
    answer:
      'Sim. A comunidade terá um modelo de assinatura para manter a qualidade e o compromisso dos membros. Detalhes serão compartilhados com a lista de espera.',
  },
  {
    question: 'Qual a diferença entre a mentoria e a comunidade?',
    answer:
      'A mentoria (Os Intencionais) é 1:1 e focada no seu plano individual. A comunidade é sobre troca em grupo, networking e conteúdo coletivo. São complementares.',
  },
  {
    question: 'Preciso ser senior para participar?',
    answer:
      'Não necessariamente, mas a comunidade é voltada para profissionais com alguma experiência que querem crescer com intenção. O nível das discussões reflete isso.',
  },
  {
    question: 'Como vou acessar a comunidade?',
    answer:
      'A plataforma será definida e comunicada antes do lançamento. O foco é em simplicidade e qualidade da experiência, não em mais uma ferramenta complicada.',
  },
];
