import { createFileRoute } from "@tanstack/react-router";
import { MenuCard } from "@/components/MenuCard";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Casa do Sabor" },
      { name: "description", content: "Explore o menu do Casa do Sabor: entradas, pratos principais, sobremesas e uma carta de vinhos selecionada." },
      { property: "og:title", content: "Menu — Casa do Sabor" },
      { property: "og:description", content: "Explore o menu do Casa do Sabor: entradas, pratos principais, sobremesas e uma carta de vinhos selecionada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

const menuItems = [
  {
    title: "Risoto de Cogumelos",
    description: "Arroz arbóreo cremoso com mix de cogumelos silvestres, lascas de parmesão e tomilho fresco.",
    price: "R$ 68",
    imageSrc: "/images/prato-risoto.jpg",
    imageAlt: "Risoto de cogumelos em uma tigela branca com parmesão e tomilho",
    tag: "Vegetariano",
  },
  {
    title: "Ancho Grelhado",
    description: "Corte nobre de 400g com manteiga de ervas, legumes assados e redução de vinho tinto.",
    price: "R$ 128",
    imageSrc: "/images/prato-steak.jpg",
    imageAlt: "Ancho grelhado com manteiga de ervas e legumes assados",
    tag: "Chef",
  },
  {
    title: "Salada Burrata",
    description: "Tomates heirloom, burrata cremosa, manjericão fresco, azeite extra virgem e redução de balsâmico.",
    price: "R$ 54",
    imageSrc: "/images/prato-salada.jpg",
    imageAlt: "Salada de burrata com tomates coloridos e manjericão",
  },
  {
    title: "Petit Gâteau",
    description: "Bolo de chocolate com centro derretido acompanhado de sorvete de baunilha e framboesas.",
    price: "R$ 42",
    imageSrc: "/images/prato-sobremesa.jpg",
    imageAlt: "Petit gâteau de chocolate com sorvete de baunilha",
    tag: "Sobremesa",
  },
];

function MenuPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <section className="bg-cream py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-cream-foreground sm:text-5xl">Nosso Menu</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Pratos criados com paixão, ingredientes de qualidade e um toque especial em cada detalhe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <MenuCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
