import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Casa do Sabor" },
      { name: "description", content: "Conheça a história do Casa do Sabor, nossa missão e a equipe apaixonada por gastronomia por trás de cada prato." },
      { property: "og:title", content: "Sobre Nós — Casa do Sabor" },
      { property: "og:description", content: "Conheça a história do Casa do Sabor, nossa missão e a equipe apaixonada por gastronomia por trás de cada prato." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <section className="bg-cream py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-cream-foreground sm:text-5xl">Sobre Nós</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Uma história de amor pela culinária, pela família e pelo prazer de receber bem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold text-foreground">Da cozinha de casa para o seu coração</h2>
            <p className="text-muted-foreground">
              O Casa do Sabor nasceu do sonho da chef Ana Martins de transformar as receitas que aprendeu com a avó em uma experiência gastronômica sofisticada e acolhedora. Desde 2015, nosso restaurante é referência em São Paulo para quem busca sabor, qualidade e um atendimento que faz a diferença.
            </p>
            <p className="text-muted-foreground">
              Cada ingrediente é escolhido a dedo, cada prato é preparado com atenção aos detalhes e cada cliente é recebido como parte da nossa família.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <Heart className="mx-auto h-8 w-8 text-terracotta" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">Feito com Amor</h3>
              <p className="mt-2 text-sm text-muted-foreground">Cada receita carrega história e dedicação.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <Award className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">Premiado</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reconhecido entre os melhores da cidade.</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm sm:col-span-2">
              <Users className="mx-auto h-8 w-8 text-olive" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">Equipe Apaixonada</h3>
              <p className="mt-2 text-sm text-muted-foreground">Profissionais dedicados a encantar em cada detalhe.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
