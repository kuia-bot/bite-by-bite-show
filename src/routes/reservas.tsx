import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reservas — Casa do Sabor" },
      { name: "description", content: "Reserve sua mesa no Casa do Sabor. Escolha data, horário e número de pessoas para uma experiência inesquecível." },
      { property: "og:title", content: "Reservas — Casa do Sabor" },
      { property: "og:description", content: "Reserve sua mesa no Casa do Sabor. Escolha data, horário e número de pessoas para uma experiência inesquecível." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReservasPage,
});

function ReservasPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <section className="bg-cream py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-cream-foreground sm:text-5xl">Reservas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Garanta seu lugar e viva uma experiência gastronômica memorável.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nome-reserva" className="block text-sm font-medium text-foreground">Nome</label>
                <input
                  id="nome-reserva"
                  type="text"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-foreground">Telefone</label>
                <input
                  id="telefone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="data" className="block text-sm font-medium text-foreground">Data</label>
                <input
                  id="data"
                  type="date"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="hora" className="block text-sm font-medium text-foreground">Horário</label>
                <select
                  id="hora"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                >
                  <option value="">Selecione</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
              <div>
                <label htmlFor="pessoas" className="block text-sm font-medium text-foreground">Pessoas</label>
                <select
                  id="pessoas"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                >
                  <option value="">Selecione</option>
                  <option value="1">1 pessoa</option>
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                  <option value="5">5 pessoas</option>
                  <option value="6">6 pessoas</option>
                  <option value="7+">7 ou mais</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="observacoes" className="block text-sm font-medium text-foreground">Observações</label>
              <textarea
                id="observacoes"
                rows={3}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                placeholder="Alguma preferência ou ocasião especial?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-terracotta px-4 py-3 text-sm font-medium text-terracotta-foreground transition-colors hover:bg-terracotta/90"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
