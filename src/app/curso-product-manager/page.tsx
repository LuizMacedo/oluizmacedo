import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Curso: Product Manager — Em preparação",
  description:
    "Treinamento completo de Product Management com visão sênior e prática de Big Tech. Em breve, por Luiz Macedo.",
};

export default function CursoPMPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />
        </div>
        <Container size="narrow" className="relative z-10">
          <div className="text-center">
            <Badge className="mb-6">Em preparação</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Curso: <span className="text-accent">Product Manager</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Treinamento completo para quem quer dominar Product Management com
              a visão de quem trabalha em Big Tech — direto ao ponto, sem
              enrolação.
            </p>
            <div className="mt-10">
              <Button href={siteConfig.links.tally.waitlist} external size="lg">
                Entrar na lista de espera
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* O que esperar */}
      <section className="py-20 md:py-28 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                O que esperar
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Um curso pensado para quem quer resultado, não certificado
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>
                  Este treinamento está sendo desenvolvido com base na minha
                  experiência real como Senior PM na Microsoft e em outras
                  empresas de tecnologia.
                </p>
                <p>
                  O foco será em habilidades práticas que realmente fazem
                  diferença no dia a dia: discovery, priorização, métricas,
                  stakeholder management, comunicação executiva e visão
                  estratégica de produto.
                </p>
                <p>
                  Nada de conteúdo reciclado. Cada módulo será construído com
                  profundidade, exemplos reais e frameworks aplicáveis.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <Card key={i} className="p-5">
                  <span className="text-accent text-xs font-mono font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {topic}
                  </h3>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Credenciais */}
      <section className="py-20 md:py-28 bg-surface/30 border-t border-border">
        <Container size="narrow">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-accent text-xl font-bold">LM</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Criado por quem vive produto todos os dias
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-xl mx-auto">
              Luiz Macedo é Senior Product Manager na Microsoft, com trajetória
              em startups e Big Tech. O curso reflete experiência real, não
              teoria de livro.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge variant="muted">Microsoft</Badge>
              <Badge variant="muted">Senior PM</Badge>
              <Badge variant="muted">Big Tech</Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        label="Lista de espera"
        title="Quer garantir acesso antecipado?"
        description="Entre na lista de espera e seja notificado quando o curso estiver disponível. Quem entrar agora terá condições exclusivas de lançamento."
        buttonText="Entrar na lista de espera"
        buttonHref={siteConfig.links.tally.waitlist}
      />
    </>
  );
}

const topics = [
  "Discovery & Validação",
  "Priorização estratégica",
  "Métricas que importam",
  "Roadmap & Planning",
  "Stakeholder Management",
  "Comunicação executiva",
  "Visão de produto",
  "Crescimento na carreira",
];
