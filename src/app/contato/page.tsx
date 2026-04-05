import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/constants';
import { LinkedInIcon, InstagramIcon, MailIcon } from '@/components/icons/SocialIcons';

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
                Preencha o formulário abaixo com sua mensagem.
                Responderei o mais breve possível.
              </p>
              <Button href={siteConfig.links.tally.contato} external>
                Abrir formulário de contato
              </Button>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5 text-accent" />
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
                <LinkedInIcon className="w-5 h-5 text-accent" />
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
                <InstagramIcon className="w-5 h-5 text-accent" />
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
