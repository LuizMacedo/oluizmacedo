import Link from 'next/link';
import { siteConfig, footerLinks } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { LinkedInIcon, InstagramIcon } from '@/components/icons/SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50">
      <Container size="wide" className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-muted leading-relaxed max-w-sm">
              Produto, senioridade e carreira internacional.
              Mentoria e comunidade para profissionais de Tech que querem crescer com mais clareza.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.principal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted/50 text-center max-w-xl leading-relaxed">
            Este é um projeto pessoal. As opiniões e conteúdos aqui compartilhados são
            de responsabilidade exclusiva de Luiz Macedo e não representam posições
            oficiais de qualquer empregador.
          </p>
        </div>
      </Container>
    </footer>
  );
}
