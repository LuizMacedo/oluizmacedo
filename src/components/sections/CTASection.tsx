import { siteConfig } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  label?: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function CTASection({
  label,
  title,
  description,
  buttonText = 'Entrar na lista de espera',
  buttonHref = siteConfig.links.tally.waitlist,
  className = '',
}: CTASectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <Container size="narrow">
        <div className="relative rounded-3xl border border-accent/20 bg-gradient-to-br from-surface via-background to-surface p-8 md:p-16 text-center overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative z-10">
            {label && (
              <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                {label}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                {description}
              </p>
            )}
            <div className="mt-8">
              <Button href={buttonHref} external size="lg">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
