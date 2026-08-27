import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <img
        src="/images/restaurant-hero.jpg"
        alt="Ambiente acolhedor do restaurante Casa do Sabor com mesas postas e iluminação quente"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-terracotta sm:text-base">
          Cozinha contemporânea brasileira
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Sabores que contam histórias
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          No Casa do Sabor, cada prato é uma celebração de ingredientes frescos, técnicas refinadas e o carinho da cozinha caseira.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ver Menu
          </Link>
          <Link
            to="/reservas"
            className="inline-flex items-center justify-center rounded-md bg-terracotta px-6 py-3 text-base font-medium text-terracotta-foreground transition-colors hover:bg-terracotta/90"
          >
            Reservar Mesa
          </Link>
        </div>
      </div>
    </section>
  );
}
