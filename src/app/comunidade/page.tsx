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
  title: 'Comunidade — Luiz Macedo',
  description:
    'Uma comunidade para profissionais de Tech que levam a carreira a sério. Produto, senioridade, carreira internacional e discussões práticas.',
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
              Uma comunidade para profissionais de Tech que{' '}
              <span className="text-accent">levam a carreira a sério.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Produto, senioridade, carreira internacional e discussões práticas
              com menos superficialidade e mais contexto.
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
            title="Um espaço para quem quer mais profundidade"
            align="left"
          />
          <div className="mt-10 space-y-4 text-lg text-muted leading-relaxed">
            <p>
              Um grupo para profissionais de Tech que querem conversar sobre carreira
              com mais seriedade. Não é sobre quantidade de pessoas — é sobre a qualidade
              das conversas, a profundidade das trocas e o comprometimento de quem participa.
            </p>
            <p>
              Aqui você vai encontrar discussões sobre produto, senioridade, gestão de
              stakeholders, carreira internacional e decisões profissionais — com contexto,
              experiência prática e sem superficialidade.
            </p>
            <p>
              Facilitado por Luiz Macedo, Senior Product Manager na Microsoft com
              20 anos em tecnologia e 12 na empresa, a comunidade combina conteúdos
              selecionados, encontros periódicos e trocas entre profissionais.
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
            description="Conteúdo, contexto e conversas que contribuem para a sua carreira."
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
        title="Quer saber quando a comunidade abrir?"
        description="A comunidade está em construção. Entre na lista de espera para ser avisado quando as inscrições abrirem."
        buttonText="Entrar na lista de espera"
        buttonHref={siteConfig.links.tally.waitlist}
      />
    </>
  );
}

const features = [
  {
    title: 'Discussões sobre carreira',
    description: 'Conversas sobre produto, senioridade, posicionamento e decisões profissionais — com contexto e experiência.',
  },
  {
    title: 'Encontros periódicos',
    description: 'Sessões ao vivo com temas relevantes e espaço para perguntas reais sobre carreira e produto.',
  },
  {
    title: 'Trocas entre profissionais',
    description: 'Conexão com outros profissionais de Tech que também levam a carreira a sério e valorizam profundidade.',
  },
  {
    title: 'Espaço para perguntas reais',
    description: 'Um canal para discutir dúvidas concretas sobre gestão de stakeholders, transições e posicionamento.',
  },
  {
    title: 'Conteúdos selecionados',
    description: 'Reflexões, análises e materiais sobre produto, carreira internacional e senioridade.',
  },
  {
    title: 'Acompanhamento',
    description: 'Um ambiente que contribui para a sua evolução profissional com consistência e seriedade.',
  },
];

const forWho = [
  'Profissionais de Tech (produto, engenharia, design, liderança) que querem conversas com mais profundidade',
  'Quem tem experiência e quer trocar com profissionais em momento parecido',
  'Profissionais interessados em carreira internacional e empresas globais',
  'Quem valoriza contexto e está cansado de conteúdo superficial',
];

const notForWho = [
  'Quem busca conexões por quantidade, não qualidade',
  'Profissionais que só querem consumir sem contribuir',
  'Quem espera solução pronta sem se comprometer com o processo',
];

const faqItems = [
  {
    question: 'Quando a comunidade vai abrir?',
    answer:
      'A comunidade está em fase de construção. Entre na lista de espera para ser avisado quando as inscrições abrirem. Quem estiver na lista terá prioridade.',
  },
  {
    question: 'A comunidade é paga?',
    answer:
      'Sim. A comunidade terá um modelo de assinatura para manter a qualidade e o compromisso dos participantes. Os detalhes serão compartilhados com a lista de espera.',
  },
  {
    question: 'Qual a diferença entre a mentoria e a comunidade?',
    answer:
      'A mentoria é individual e focada no seu plano de carreira. A comunidade é sobre trocas em grupo, conversas e conteúdo coletivo. São complementares.',
  },
  {
    question: 'Preciso ser sênior para participar?',
    answer:
      'Não necessariamente, mas a comunidade é voltada para profissionais com alguma experiência que querem crescer com mais seriedade. As conversas refletem esse contexto.',
  },
  {
    question: 'Como vou acessar a comunidade?',
    answer:
      'A plataforma será definida e comunicada antes da abertura. O foco é em simplicidade e qualidade da experiência.',
  },
];
