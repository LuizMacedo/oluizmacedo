import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do site oluizmacedo.com.br.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28">
      <Container size="narrow">
        <span className="text-accent text-sm font-semibold tracking-widest uppercase">
          Legal
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: junho de 2025
        </p>

        <div className="mt-10 prose-custom space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Informações Gerais
            </h2>
            <p className="text-muted leading-relaxed">
              Esta Política de Privacidade descreve como o site
              oluizmacedo.com.br (&quot;Site&quot;), mantido por Luiz Macedo
              (&quot;nós&quot;, &quot;nosso&quot;), coleta, usa e protege as
              informações pessoais dos visitantes e usuários (&quot;você&quot;).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Dados Coletados
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 pl-2">
              <li>
                Dados fornecidos voluntariamente via formulários (nome, e-mail,
                mensagem)
              </li>
              <li>
                Dados de navegação coletados automaticamente (cookies, IP,
                páginas visitadas) via Google Analytics 4
              </li>
              <li>
                Informações fornecidas ao se inscrever em listas de espera ou ao
                aplicar para mentoria
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Uso dos Dados
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 pl-2">
              <li>Responder a solicitações de contato</li>
              <li>
                Enviar comunicações sobre mentoria, cursos e conteúdo relevante
              </li>
              <li>
                Melhorar a experiência do site e entender o comportamento dos
                visitantes
              </li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Cookies e Rastreamento
            </h2>
            <p className="text-muted leading-relaxed">
              Utilizamos o Google Analytics 4 para análise de tráfego e
              comportamento do site. Esta ferramenta pode usar cookies para
              coletar informações anônimas sobre como você interage com o site.
              Você pode desabilitar cookies nas configurações do seu navegador.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-muted leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com
              terceiros, exceto quando necessário para o funcionamento do site
              (ex: provedores de formulários como Tally, plataformas de
              analytics) ou quando exigido por lei.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Seus Direitos
            </h2>
            <p className="text-muted leading-relaxed">
              Você tem o direito de solicitar acesso, correção ou exclusão dos
              seus dados pessoais a qualquer momento. Para exercer esses
              direitos, entre em contato pelo formulário disponível em{" "}
              <a
                href="/contato"
                className="text-accent hover:text-accent-light transition-colors underline"
              >
                /contato
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Segurança
            </h2>
            <p className="text-muted leading-relaxed">
              Adotamos medidas razoáveis para proteger suas informações pessoais
              contra acesso não autorizado, uso indevido ou perda. No entanto,
              nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Alterações
            </h2>
            <p className="text-muted leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que
              você revise esta página regularmente. A data da última atualização
              sempre estará indicada no topo.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Contato
            </h2>
            <p className="text-muted leading-relaxed">
              Para dúvidas sobre esta política ou sobre seus dados, entre em
              contato pelo formulário em{" "}
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
