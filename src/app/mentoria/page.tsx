import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mentoria — Luiz Macedo',
  description:
    'Mentoria para profissionais de Tech que buscam mais clareza sobre produto, senioridade e carreira internacional.',
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
            <Badge className="mb-6">Mentoria</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Mentoria para profissionais de Tech que buscam mais{' '}
              <span className="text-accent">clareza sobre os próximos passos da carreira.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Um programa de mentoria com acompanhamento para quem quer tomar decisões
              profissionais com mais contexto, profundidade e direção.
            </p>
            <div className="mt-10">
              <Button href={siteConfig.links.tally.mentoria} external size="lg">
                Quero saber mais sobre a mentoria
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* O Cenário */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container size="narrow">
          <SectionHeader
            label="O cenário"
            title="Você conhece essa sensação?"
            align="left"
          />
          <div className="mt-10 space-y-4 text-lg text-muted leading-relaxed">
            <p>
              Você entrega, trabalha duro, mas sente que a evolução travou.
              Não sabe se o que falta é habilidade técnica, posicionamento
              ou visibilidade.
            </p>
            <p>
              Consome conteúdo, assiste palestras, mas não consegue transformar
              nada disso num plano claro. Ou pior: sabe o que quer, mas não tem
              com quem validar as decisões que precisa tomar.
            </p>
            <p>
              A mentoria existe para isso: trazer clareza, contexto e uma perspectiva
              sênior para as decisões que realmente importam na sua carreira.
            </p>
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container>
          <SectionHeader
            label="Como funciona"
            title="A estrutura da mentoria"
            description="Seis frentes de trabalho que orientam o acompanhamento, adaptadas ao momento de cada profissional."
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

      {/* Sobre o mentor */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container size="narrow">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-accent/20 mx-auto mb-6">
              <Image
                src="/images/luiz-macedo.jpg"
                alt="Luiz Macedo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre o mentor</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                Sou Luiz Macedo, Senior Product Manager na Microsoft, vivendo no Texas, EUA
                há quase 10 anos. São 20 anos trabalhando com tecnologia e 12 na Microsoft,
                em experiências que passam por engenharia, produto, certificações e contextos globais.
              </p>
              <p>
                Tenho M.S. in Product Management pela Capitol Technology University e
                graduação em Sistemas de Informação. Participei da criação de certificações
                da Microsoft, incluindo a AZ-400.
              </p>
              <p>
                Na mentoria, trago a perspectiva de quem já passou por muitas das situações
                que os mentorados enfrentam hoje — com foco em clareza, contexto e decisões
                profissionais concretas.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge variant="muted">Microsoft (12 anos)</Badge>
              <Badge variant="muted">M.S. in Product Management</Badge>
              <Badge variant="muted">Co-criador AZ-400</Badge>
              <Badge variant="muted">Texas, EUA</Badge>
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
        title="Quer saber mais sobre a mentoria?"
        description="Preencha o formulário com algumas informações sobre o seu momento profissional. Se houver fit, entro em contato para uma conversa inicial."
        buttonText="Preencher formulário"
        buttonHref={siteConfig.links.tally.mentoria}
      />
    </>
  );
}

const methodSteps = [
  {
    title: 'Diagnóstico do momento atual',
    description: 'Entender onde você está profissionalmente, quais são os desafios reais e o que faz sentido priorizar agora.',
  },
  {
    title: 'Clareza sobre objetivo e contexto',
    description: 'Definir com objetividade o que você quer alcançar e quais são as variáveis relevantes para isso.',
  },
  {
    title: 'Decisões de posicionamento',
    description: 'Como se posicionar com credibilidade dentro e fora da empresa, de forma consistente e alinhada ao seu perfil.',
  },
  {
    title: 'Gestão de stakeholders e comunicação',
    description: 'Trabalhar a comunicação com liderança, pares e times — da 1:1 à apresentação executiva.',
  },
  {
    title: 'Plano de desenvolvimento',
    description: 'Construir um plano realista de crescimento com metas, prioridades e prazos definidos.',
  },
  {
    title: 'Acompanhamento e revisão',
    description: 'Revisões periódicas para ajustar o plano conforme a realidade muda — com contexto e feedback direto.',
  },
];

const forWho = [
  'Profissionais de produto que querem sair do operacional e ganhar mais clareza sobre posicionamento',
  'Profissionais de Tech avaliando transição para Product Management',
  'Quem está considerando oportunidades em empresas globais ou carreira internacional',
  'Profissionais que querem feedback sênior, direto e prático sobre decisões de carreira',
  'Quem busca contexto de quem já viveu situações parecidas em empresa grande',
];

const notForWho = [
  'Quem busca fórmula pronta ou resultado sem comprometimento',
  'Profissionais que não têm disponibilidade para se dedicar ao processo',
  'Quem espera coaching motivacional ou conselhos genéricos',
  'Pessoas que esperam que o mentor tome as decisões por elas',
];

const whatYouGet = [
  {
    title: 'Sessões por vídeo',
    description: 'Encontros individuais com foco no que é relevante para o seu momento. Sem turma, sem conteúdo genérico.',
  },
  {
    title: 'Diagnóstico de carreira',
    description: 'Análise honesta de onde você está e mapeamento das oportunidades e pontos de atenção.',
  },
  {
    title: 'Plano de ação',
    description: 'Definição de prioridades, próximos passos e metas realistas com prazos claros.',
  },
  {
    title: 'Feedback direto',
    description: 'Revisão de currículo, LinkedIn, posicionamento profissional e decisões de carreira.',
  },
  {
    title: 'Suporte entre sessões',
    description: 'Canal assíncrono para dúvidas pontuais e acompanhamento entre encontros.',
  },
];

const faqItems = [
  {
    question: 'Quanto custa a mentoria?',
    answer:
      'O valor é compartilhado após uma primeira análise de perfil e alinhamento de expectativas. Como a proposta ainda é personalizada, prefiro primeiro entender se há fit.',
  },
  {
    question: 'Qual a duração e frequência das sessões?',
    answer:
      'As sessões costumam ser quinzenais ou mensais, com duração de 45 a 60 minutos. A frequência é definida juntos, com base no que faz sentido para o seu momento.',
  },
  {
    question: 'Preciso ser Product Manager para participar?',
    answer:
      'Não necessariamente. A mentoria é voltada para profissionais de Tech com interesse em produto, carreira internacional ou senioridade. Se você está avaliando uma transição para produto, também faz sentido.',
  },
  {
    question: 'A mentoria é em português ou inglês?',
    answer:
      'As sessões são em português. Se você precisar de apoio com materiais em inglês (currículo, LinkedIn, preparação para entrevista), também posso ajudar.',
  },
  {
    question: 'Como funciona o processo de aplicação?',
    answer:
      'Você preenche um formulário com algumas informações sobre o seu momento profissional. Eu analiso e, se houver fit, entro em contato para uma conversa inicial antes de começarmos.',
  },
  {
    question: 'O que diferencia essa mentoria?',
    answer:
      'Experiência prática de 20 anos em tecnologia, 12 na Microsoft. O foco é em clareza, contexto e decisões profissionais — não em motivação ou conteúdo genérico.',
  },
];
