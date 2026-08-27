import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { FeatureSection } from "../components/FeatureSection";
import { MenuCard } from "../components/MenuCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa do Sabor — Restaurante em São Paulo" },
      { name: "description", content: "Sabores que contam histórias. Cozinha contemporânea brasileira com ingredientes frescos e ambiente acolhedor no Casa do Sabor." },
      { property: "og:title", content: "Casa do Sabor — Restaurante em São Paulo" },
      { property: "og:description", content: "Sabores que contam histórias. Cozinha contemporânea brasileira com ingredientes frescos e ambiente acolhedor no Casa do Sabor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    title: "Risoto de Cogumelos",
    description: "Arroz arbóreo cremoso com cogumelos silvestres e parmesão.",
    price: "R$ 68",
    imageSrc: "/images/prato-risoto.jpg",
    imageAlt: "Risoto de cogumelos com parmesão",
    tag: "Vegetariano",
  },
  {
    title: "Ancho Grelhado",
    description: "Corte nobre com manteiga de ervas e legumes assados.",
    price: "R$ 128",
    imageSrc: "/images/prato-steak.jpg",
    imageAlt: "Ancho grelhado com legumes",
    tag: "Chef",
  },
  {
    title: "Petit Gâteau",
    description: "Bolo de chocolate com centro derretido e sorvete de baunilha.",
    price: "R$ 42",
    imageSrc: "/images/prato-sobremesa.jpg",
    imageAlt: "Petit gâteau de chocolate",
    tag: "Sobremesa",
  },
];

function Index() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">Destaques do Menu</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Uma seleção dos pratos mais amados pelos nossos clientes.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Ver Menu Completo
          </Link>
        </div>
      </section>

      <FeatureSection />

      <section className="bg-wine py-16 text-center text-wine-foreground lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Reserve sua mesa</h2>
          <p className="mx-auto mt-4 max-w-2xl opacity-90">
            Garanta seu lugar e desfrute de uma experiência gastronômica inesquecível com quem você ama.
          </p>
          <div className="mt-8">
            <Link
              to="/reservas"
              className="inline-flex items-center justify-center rounded-md bg-terracotta px-8 py-3 text-base font-medium text-terracotta-foreground transition-colors hover:bg-terracotta/90"
            >
              Fazer Reserva
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
