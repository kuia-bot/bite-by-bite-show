import { UtensilsCrossed, Leaf, Wine, Clock } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Selecionamos diariamente os melhores produtos de produtores locais e estações.",
  },
  {
    icon: UtensilsCrossed,
    title: "Receitas de Família",
    description: "Técnicas herdadas de gerações, reinventadas com elegância contemporânea.",
  },
  {
    icon: Wine,
    title: "Carta de Vinhos",
    description: "Rótulos nacionais e importados escolhidos para harmonizar com cada prato.",
  },
  {
    icon: Clock,
    title: "Atendimento Impecável",
    description: "Uma equipe dedicada a tornar cada visita inesquecível, do início ao fim.",
  },
];

export function FeatureSection() {
  return (
    <section className="w-full bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold text-cream-foreground sm:text-4xl">
            Por que escolher o Casa do Sabor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Mais do que uma refeição, oferecemos uma experiência completa para todos os sentidos.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border bg-background p-6 text-center shadow-sm">
              <div className="mx-flex mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 text-olive">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
