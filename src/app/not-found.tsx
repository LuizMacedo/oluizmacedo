import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <Container size="narrow">
        <div className="text-center">
          <span className="text-accent text-6xl font-bold font-mono">404</span>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
            Página não encontrada
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-md mx-auto">
            O conteúdo que você procura não existe ou foi movido.
          </p>
          <div className="mt-8">
            <Button href="/">Voltar ao início</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
