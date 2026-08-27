import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Casa do Sabor" },
      { name: "description", content: "Entre em contato com o Casa do Sabor. Endereço, telefone, horário de funcionamento e informações para eventos." },
      { property: "og:title", content: "Contato — Casa do Sabor" },
      { property: "og:description", content: "Entre em contato com o Casa do Sabor. Endereço, telefone, horário de funcionamento e informações para eventos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <main className="min-h-screen bg-background pb-16">
      <section className="bg-cream py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-cream-foreground sm:text-5xl">Contato</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Estamos aqui para receber você. Tire dúvidas, faça sugestões ou reserve sua mesa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Endereço</h3>
                <p className="mt-1 text-muted-foreground">Rua das Oliveiras, 123<br />Jardim Europa, São Paulo - SP</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10 text-olive">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Telefone</h3>
                <p className="mt-1 text-muted-foreground">(11) 3456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-foreground">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">E-mail</h3>
                <p className="mt-1 text-muted-foreground">contato@casadosabor.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wine/10 text-wine">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Horário de Funcionamento</h3>
                <p className="mt-1 text-muted-foreground">Terça a Domingo: 12h às 15h e 19h às 23h<br />Segunda-feira: fechado</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-card-foreground">Envie uma mensagem</h2>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground">Nome</label>
                <input
                  id="nome"
                  type="text"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">E-mail</label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-foreground">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
