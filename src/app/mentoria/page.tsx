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
  title: 'Os Intencionais — Mentoria',
  description:
    'Mentoria 1:1 com Luiz Macedo para profissionais de tech estagnados no operacional que querem parar de gerir o como e começar a gerir o porquê.',
};

export default function MentoriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
        </div>
        <Container size="narrow" className="relative z-10">
          <div className="text-center">
            <Badge className="mb-6">Os Intencionais</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Pare de gerir o como.{' '}
              <span className="text-accent">Comece a gerir o porquê.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Mentoria 1:1 para profissionais de tech estagnados no operacional que querem
              tomar decisões intencionais, influenciar estratégia e chegar no próximo nível.
            </p>
            <div className="mt-10">
              <Button href={siteConfig.links.tally.mentoria} external size="lg">
                Quero aplicar para Os Intencionais
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* O Problema */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container size="narrow">
          <SectionHeader
            label="O cenário"
            title="Você conhece essa sensação?"
            align="left"
          />
          <div className="mt-10 space-y-4 text-lg text-muted leading-relaxed">
            <p>
              Você entrega, trabalha duro, mas sente que virou executor. O crescimento
              travou e você não sabe se o que falta é habilidade técnica, posicionamento
              ou simplesmente visibilidade.
            </p>
            <p>
              Consome conteúdo, assiste palestras, mas não consegue transformar
              nada disso num plano claro. Ou pior: sabe o que quer, mas não tem
              com quem validar as decisões que precisa tomar.
            </p>
            <p>
              Se você está estagnado no operacional, o problema não é esforço.
              É intenção. Você precisa de alguém que já navegou na incerteza
              e pode te mostrar o caminho com clareza.
            </p>
          </div>
        </Container>
      </section>

      {/* O Método Intencional */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container>
          <SectionHeader
            label="O Método"
            title="O Método Intencional"
            description="Navegando na incerteza, gestão de stakeholders e alavancagem de carreira."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodSteps.map((item, i) => (
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

      {/* Para quem é / não é */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Para quem é */}
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

            {/* Para quem não é */}
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

      {/* O que vai encontrar */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container size="narrow">
          <SectionHeader
            label="Na prática"
            title="O que você vai encontrar"
            align="left"
          />
          <div className="mt-10 space-y-6">
            {whatYouGet.map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-xl border border-border bg-surface/50">
                <span className="text-accent font-mono text-sm font-bold mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sobre Luiz */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container size="narrow">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-accent text-2xl font-bold">LM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre o mentor</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                Sou Luiz Macedo, Senior Product Manager na Microsoft, vivendo no Texas, EUA.
                São 20 anos trabalhando com tecnologia e 12 anos na Microsoft — de startups
                brasileiras a Big Tech global.
              </p>
              <p>
                Mestre em Product Management pela Capitol Technology University e co-criador
                da certificação AZ-400 da Microsoft. Acredito que crescimento profissional
                real vem de decisões intencionais, não de fórmulas mágicas.
              </p>
              <p>
                Na mentoria, trago a experiência de quem navega na incerteza todos os dias
                e a perspectiva de quem sabe que resultado sustentável exige equilíbrio.
                Vida real, café e liberdade.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge variant="muted">Microsoft (12 anos)</Badge>
              <Badge variant="muted">MS em Product Management</Badge>
              <Badge variant="muted">Co-criador AZ-400</Badge>
              <Badge variant="muted">Carreira Internacional</Badge>
            </div>
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
        label="Próximo passo"
        title="Pronto para ser intencional?"
        description="Aplique para Os Intencionais. Vou analisar seu perfil e, se fizer sentido, entramos em contato para alinhar expectativas e começar."
        buttonText="Aplicar para Os Intencionais"
        buttonHref={siteConfig.links.tally.mentoria}
      />
    </>
  );
}

const methodSteps = [
  {
    title: 'Diagnóstico intencional',
    description: 'Entenda onde você está, onde quer chegar e o que realmente está te travando — sem autoengano.',
  },
  {
    title: 'Navegando na incerteza',
    description: 'Aprenda a tomar decisões com informação incompleta, como se faz em Big Tech todos os dias.',
  },
  {
    title: 'Gestão de stakeholders',
    description: 'Domine as conversas que movem sua carreira — de 1:1s a apresentações executivas e influência lateral.',
  },
  {
    title: 'Posicionamento estratégico',
    description: 'Pare de ser invisível. Aprenda a se posicionar com credibilidade dentro e fora da empresa.',
  },
  {
    title: 'Alavancagem de carreira',
    description: 'Identifique e ative os pontos de alavanca que aceleram seu crescimento sem depender de sorte.',
  },
  {
    title: 'Accountability real',
    description: 'Alguém que cobra resultado, celebra progresso e te ajuda a manter o foco no que importa.',
  },
];

const forWho = [
  'PMs (júnior a staff) estagnados no operacional que querem influenciar estratégia',
  'Profissionais de tech em transição para Product Management',
  'Quem quer preparar currículo e perfil para Big Tech e empresas globais',
  'Profissionais que querem gerir o porquê — não só o como',
  'Quem busca feedback direto, sem enrolação, de quem vive Big Tech há 12 anos',
];

const notForWho = [
  'Quem busca fórmula mágica ou resultado sem esforço',
  'Profissionais que não têm tempo ou disposição para se comprometer',
  'Quem quer coaching motivacional ou terapia de carreira',
  'Pessoas que esperam que o mentor faça o trabalho por elas',
];

const whatYouGet = [
  {
    title: 'Sessões 1:1 por vídeo',
    description: 'Encontros individuais com foco total no que importa para você. Sem turma, sem conteúdo genérico.',
  },
  {
    title: 'Diagnóstico de carreira',
    description: 'Análise honesta de onde você está e mapeamento claro das lacunas e oportunidades reais.',
  },
  {
    title: 'Plano de ação intencional',
    description: 'Definição de metas concretas, prioridades e próximos passos realistas — com prazo.',
  },
  {
    title: 'Feedback direto e construtivo',
    description: 'Revisão de currículo, LinkedIn, posicionamento, decisões de carreira e gestão de stakeholders.',
  },
  {
    title: 'Suporte entre sessões',
    description: 'Canal assíncrono para dúvidas rápidas e acompanhamento entre encontros.',
  },
];

const faqItems = [
  {
    question: 'Quanto custa a mentoria?',
    answer:
      'O valor é discutido diretamente após a análise do seu perfil. Cada mentoria é personalizada, e o investimento reflete isso. Prefiro alinhar expectativas antes de falar de preço.',
  },
  {
    question: 'Qual a duração e frequência das sessões?',
    answer:
      'As sessões costumam ser quinzenais ou mensais, com duração de 45 a 60 minutos. A frequência é definida juntos, com base no que faz sentido para o seu momento.',
  },
  {
    question: 'Preciso ser Product Manager para participar?',
    answer:
      'Não necessariamente. Os Intencionais é voltado para profissionais de tech com interesse em produto, carreira internacional ou alta performance. Se você está em transição para produto, também faz sentido.',
  },
  {
    question: 'A mentoria é em português ou inglês?',
    answer:
      'As sessões são em português. Se você precisar de apoio com materiais em inglês (currículo, LinkedIn, preparação para entrevista), também posso ajudar.',
  },
  {
    question: 'Como funciona o processo de aplicação?',
    answer:
      'Você preenche um formulário curto com informações sobre seu momento profissional. Eu analiso e, se houver fit, entro em contato para uma conversa inicial antes de começarmos.',
  },
  {
    question: 'O que diferencia Os Intencionais de outras mentorias?',
    answer:
      'Experiência real de quem vive Big Tech há 12 anos, não teoria. O foco é em decisões intencionais, gestão de stakeholders e alavancagem de carreira — não em motivação vazia ou conteúdo genérico.',
  },
];
