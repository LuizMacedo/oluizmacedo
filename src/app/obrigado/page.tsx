import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Obrigado',
  description: 'Obrigado por entrar em contato ou se inscrever. Luiz Macedo vai retornar em breve.',
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <Container size="narrow">
        <div className="text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Recebido.
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg mx-auto">
            Obrigado pelo seu interesse. Se for necessário, entro em contato em breve.
            Enquanto isso, fique à vontade para explorar o site.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" variant="secondary">
              Voltar ao início
            </Button>
            <Button href="/mentoria" variant="ghost">
              Conhecer a mentoria
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
