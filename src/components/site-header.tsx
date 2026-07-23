import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/aethera-octopus.png";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to?: string; href?: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Gaming PCs", to: "/gaming" },
  { label: "Productividad", to: "/productividad" },
  { label: "Periféricos", to: "/perifericos" },
  { label: "Nosotros", href: "/#nosotros" },
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
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Octa Core logo"
              className="h-11 w-11 md:h-14 md:w-14 rounded-full object-contain bg-transparent drop-shadow-[0_0_14px_rgba(0,210,255,0.55)] transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg md:text-xl font-extrabold tracking-tight text-gradient-cyan">
                OCTA CORE
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tecnología en movimiento
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const className =
                "relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group";
              const inner = (
                <>
                  {item.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
                </>
              );
              return item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={className}
                  activeProps={{ className: cn(className, "text-cyan") }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {inner}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={className}>
                  {inner}
                </a>
              );
            })}
          </nav>

          <a
            href="/#contacto"
            className="hidden lg:inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_rgba(0,210,255,0.7)] hover:scale-[1.03]"
          >
            Contacto
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
            {NAV_ITEMS.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground/90 hover:bg-secondary hover:text-cyan transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground/90 hover:bg-secondary hover:text-cyan transition-colors"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground"
            >
              Contacto
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
