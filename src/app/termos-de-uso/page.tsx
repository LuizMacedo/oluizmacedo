import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site oluizmacedo.com.br.",
};

export default function TermosDeUsoPage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <Container size="narrow">
        <span className="text-accent text-sm font-semibold tracking-widest uppercase">
          Legal
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Termos de Uso
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: abril de 2026
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Aceitação dos Termos
            </h2>
            <p className="text-muted leading-relaxed">
              Ao acessar e usar o site oluizmacedo.com.br (&quot;Site&quot;),
              você concorda com estes Termos de Uso. Se não concordar com
              qualquer parte destes termos, por favor não utilize o Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Uso do Site
            </h2>
            <p className="text-muted leading-relaxed">
              O conteúdo deste Site — incluindo textos, imagens, vídeos e
              materiais — é disponibilizado para fins informativos e
              educacionais. Você pode acessar e consumir o conteúdo para uso
              pessoal e profissional, mas não pode reproduzir, distribuir ou
              comercializar o conteúdo sem autorização prévia por escrito.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Propriedade Intelectual
            </h2>
            <p className="text-muted leading-relaxed">
              Todo o conteúdo publicado neste Site é protegido por direitos
              autorais e pertence a Luiz Macedo, salvo indicação em contrário.
              Marcas, logos e nomes comerciais mencionados são propriedade de
              seus respectivos donos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Produtos e Serviços
            </h2>
            <p className="text-muted leading-relaxed">
              Os produtos e serviços oferecidos através deste Site (mentoria,
              cursos, conteúdos educacionais) possuem termos específicos que
              serão apresentados no momento da contratação ou inscrição. A
              responsabilidade sobre os resultados depende do comprometimento
              individual de cada participante.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Links Externos
            </h2>
            <p className="text-muted leading-relaxed">
              Este Site pode conter links para sites de terceiros (como
              plataformas de pagamento, redes sociais e ferramentas de
              formulários). Não somos responsáveis pelo conteúdo, políticas de
              privacidade ou práticas desses sites externos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Isenção de Responsabilidade
            </h2>
            <p className="text-muted leading-relaxed">
              O conteúdo deste Site é fornecido &quot;como está&quot;, sem
              garantias de qualquer tipo. Não garantimos que o conteúdo esteja
              sempre atualizado, completo ou livre de erros. Decisões
              profissionais ou de carreira baseadas no conteúdo deste Site são
              de responsabilidade exclusiva do usuário.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Limitação de Responsabilidade
            </h2>
            <p className="text-muted leading-relaxed">
              Em nenhuma hipótese seremos responsáveis por danos diretos,
              indiretos, incidentais ou consequenciais decorrentes do uso ou
              impossibilidade de uso deste Site ou de seus serviços.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Alterações dos Termos
            </h2>
            <p className="text-muted leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a
              qualquer momento. Alterações serão publicadas nesta página com a
              data de atualização revisada. O uso continuado do Site após
              alterações constitui aceite dos novos termos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Legislação Aplicável
            </h2>
            <p className="text-muted leading-relaxed">
              Estes Termos de Uso são regidos pelas leis aplicáveis, e eventuais
              disputas serão resolvidas nos foros competentes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              10. Contato
            </h2>
            <p className="text-muted leading-relaxed">
              Para dúvidas sobre estes termos, entre em contato pelo formulário
              em{" "}
              <a
                href="/contato"
                className="text-accent hover:text-accent-light transition-colors underline"
              >
                /contato
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
