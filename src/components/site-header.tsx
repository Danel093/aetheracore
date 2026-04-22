import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aethera-logo.png";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Gaming PCs", href: "#gaming" },
  { label: "Productividad", href: "#productividad" },
  { label: "Periféricos", href: "#perifericos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_30px_-10px_rgba(0,210,255,0.25)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Aethera Core logo"
              className="h-10 w-auto md:h-12 drop-shadow-[0_0_12px_rgba(0,210,255,0.4)] transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg md:text-xl font-extrabold tracking-tight text-gradient-cyan">
                AETHERA CORE
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tecnología en movimiento
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_rgba(0,210,255,0.7)] hover:scale-[1.03]"
          >
            Cotizar
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-border/60 pt-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/90 hover:bg-secondary hover:text-cyan transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground"
            >
              Cotizar
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
