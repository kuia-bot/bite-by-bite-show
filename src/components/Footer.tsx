import { Link } from "@tanstack/react-router";
import { ChefHat, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-cream text-cream-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <ChefHat className="h-6 w-6" aria-hidden="true" />
              <span className="font-display text-lg font-semibold">Casa do Sabor</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Experiência gastronômica única com ingredientes frescos, receitas de família e um ambiente acolhedor.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                <span>Rua das Oliveiras, 123<br />Jardim Europa, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                <span>Ter - Dom: 12h às 15h e 19h às 23h<br />Segunda: fechado</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/menu" className="transition-colors hover:text-primary">Menu</Link>
              </li>
              <li>
                <Link to="/sobre" className="transition-colors hover:text-primary">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contato" className="transition-colors hover:text-primary">Contato</Link>
              </li>
              <li>
                <Link to="/reservas" className="transition-colors hover:text-primary">Reservas</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Casa do Sabor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
