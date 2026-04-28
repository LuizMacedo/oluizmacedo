import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { LinkedInIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Todos os links de Luiz Macedo — mentoria, comunidade, redes sociais e contato.",
};

export default function LinksPage() {
  return (
    <div className="flex items-center justify-center px-4 pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30 mx-auto mb-4">
          <Image
            src="/images/luiz-macedo.jpg"
            alt="Luiz Macedo"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Bio */}
        <h1 className="text-xl font-bold text-foreground">Luiz Macedo</h1>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Senior Product Manager @ Microsoft.
          <br />
          Produto, senioridade e carreira internacional em Tech.
        </p>

        {/* Links */}
        <div className="mt-8 space-y-3">
          {links.map((link, i) => (
            <LinkItem key={i} {...link} />
          ))}
        </div>

        {/* Social icons */}
        <div className="mt-8 flex items-center justify-center gap-5">
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

        {/* Bottom branding */}
        <p className="mt-10 text-xs text-muted/40">oluizmacedo.com.br</p>
      </div>
    </div>
  );
}

function LinkItem({
  label,
  href,
  external,
  highlight,
}: {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}) {
  const className = `
    block w-full rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-200
    ${
      highlight
        ? "border-accent/40 bg-accent/5 text-accent hover:bg-accent/10"
        : "border-border bg-surface text-foreground hover:border-accent/30 hover:bg-surface-hover"
    }
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

const links = [
  {
    label: "Mentoria",
    href: "/mentoria",
    highlight: true,
  },
  {
    label: "Comunidade (em breve)",
    href: "/comunidade",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luizfmacedo/",
    external: true,
  },
  {
    label: "Instagram — @o.pm.intencional",
    href: "https://instagram.com/o.pm.intencional",
    external: true,
  },
];
