import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com Luiz Macedo para parcerias, convites para eventos, ou qualquer outra questão profissional.',
};

export default function ContatoPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <Container size="narrow">
          <div className="text-center">
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Vamos conversar
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
              Para parcerias, convites, dúvidas sobre mentoria ou qualquer
              questão profissional — use o formulário abaixo.
            </p>
          </div>

          {/* Tally Form Placeholder */}
          <div className="mt-12">
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Formulário de contato
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-md mx-auto mb-6">
                O formulário de contato será integrado via Tally.
                Por enquanto, use o botão abaixo para acessar o formulário externo.
              </p>
              <Button href={siteConfig.links.tally.contato} external>
                Abrir formulário de contato
              </Button>

              {/* 
                INTEGRAÇÃO TALLY:
                Para integrar o formulário inline, substitua este bloco por:
                <iframe 
                  data-tally-src="https://tally.so/embed/FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1"
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Formulário de contato"
                />
                E adicione o script do Tally no layout ou nesta página:
                <Script src="https://tally.so/widgets/embed.js" />
              */}
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">E-mail</p>
                <p className="text-xs text-muted">contato@oluizmacedo.com.br</p>
              </div>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                <p className="text-xs text-muted">Conecte-se profissionalmente</p>
              </div>
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <p className="text-xs text-muted">Conteúdo e bastidores</p>
              </div>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
