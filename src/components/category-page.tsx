import { useState } from "react";
import { ArrowRight, Sparkles, Star, TrendingUp, X, ImageIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FloatingActions } from "@/components/floating-actions";

export type Product = {
  name: string;
  tag: string;
  description: string;
  price: string;
  badge?: "Nuevo" | "Top ventas" | "Oferta";
  image?: string;
};

export type CategoryPageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  heroImage: string;
  bullets: string[];
  popular: Product[];
  novelties: { title: string; description: string }[];
  buyingGuide: { title: string; body: string }[];
};

export function CategoryPage(props: CategoryPageProps) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const wa = `https://wa.me/573017367858?text=${encodeURIComponent(
    `🚀 ¡Hola Octa Core! Me interesa ${props.title}. ¿Me asesoran?`,
  )}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16 bg-gradient-core">
          <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
          <div
            className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.82 0.15 220 / 0.5) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                {props.eyebrow}
              </span>
              <h1 className="mt-3 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
                {props.title}{" "}
                <span className="text-gradient-cyan">{props.highlight}</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
                {props.description}
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 max-w-xl">
                {props.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_rgba(0,210,255,0.8)] hover:scale-[1.03]"
                >
                  Cotizar por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold hover:border-cyan hover:text-cyan transition-all"
                >
                  Ver productos
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan/30 via-transparent to-cyan/20 blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl border border-border/60 overflow-hidden glow-cyan bg-card aspect-[5/4]">
                <img
                  src={props.heroImage}
                  alt={props.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Productos populares */}
        <section id="productos" className="relative py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                  <TrendingUp className="h-3.5 w-3.5" /> Más buscados
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold">
                  Mercancía <span className="text-gradient-cyan">popular</span>
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                Click en cualquier producto para ver su imagen ampliada.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {props.popular.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setActiveProduct(p)}
                  className="glow-cyan-hover group relative rounded-2xl border border-border bg-card p-6 flex flex-col text-left hover:border-cyan/60 transition-all hover:-translate-y-1 cursor-pointer"
                >
                  {p.badge && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan">
                      <Star className="h-3 w-3" />
                      {p.badge}
                    </span>
                  )}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-border/60">
                    <span className="font-display text-lg font-extrabold text-gradient-cyan">
                      {p.price}
                    </span>
                    <a
                      href={`https://wa.me/573017367858?text=${encodeURIComponent(
                        `🚀 Hola, me interesa: ${p.name}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 border border-cyan/40 px-3 py-1.5 text-xs font-bold text-cyan hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Cotizar
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Novedades */}
        <section className="relative py-20 md:py-24 bg-gradient-core">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                <Sparkles className="h-3.5 w-3.5" /> Novedades 2026
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold">
                Lo que <span className="text-gradient-cyan">acaba de llegar</span>
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {props.novelties.map((n) => (
                <div
                  key={n.title}
                  className="rounded-2xl border border-cyan/20 bg-card/60 backdrop-blur p-6 hover:border-cyan/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 border border-cyan/30 text-cyan">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {n.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guía de compra */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
                  Antes de comprar
                </span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight">
                  Información{" "}
                  <span className="text-gradient-cyan">útil seleccionada</span>
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Lo esencial para tomar una decisión inteligente sin pagar de
                  más por marketing.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {props.buyingGuide.map((g, i) => (
                  <div
                    key={g.title}
                    className="rounded-xl border border-border bg-card/70 backdrop-blur p-6 hover:border-cyan/40 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display text-2xl font-extrabold text-gradient-cyan w-10 flex-shrink-0">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold">
                          {g.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                          {g.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-core p-10 md:p-14 text-center glow-cyan">
              <h2 className="font-display text-2xl md:text-4xl font-extrabold">
                ¿Listo para armar tu{" "}
                <span className="text-gradient-cyan">setup ideal?</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Te asesoramos sin compromiso y diseñamos la configuración
                perfecta para tu presupuesto.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_rgba(0,210,255,0.8)] hover:scale-[1.03]"
              >
                Hablar con un especialista
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <FloatingActions />

      {/* Floating product preview */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in-0 duration-200"
          onClick={() => setActiveProduct(null)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <div
            className="relative z-10 w-full max-w-2xl rounded-2xl border border-cyan/40 bg-card shadow-2xl glow-cyan overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute top-3 right-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border text-foreground hover:bg-cyan hover:text-background transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto bg-gradient-core">
                {activeProduct.image ? (
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width={768}
                    height={768}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-cyan/40">
                    <ImageIcon className="h-16 w-16" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="p-6 md:p-7 flex flex-col">
                {activeProduct.badge && (
                  <span className="self-start inline-flex items-center gap-1 rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan mb-3">
                    <Star className="h-3 w-3" />
                    {activeProduct.badge}
                  </span>
                )}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {activeProduct.tag}
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-extrabold">
                  {activeProduct.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {activeProduct.description}
                </p>
                <div className="mt-5 pt-4 border-t border-border/60">
                  <span className="block font-display text-2xl font-extrabold text-gradient-cyan">
                    {activeProduct.price}
                  </span>
                  <a
                    href={`https://wa.me/573017367858?text=${encodeURIComponent(
                      `🚀 Hola, me interesa: ${activeProduct.name}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_rgba(0,210,255,0.8)]"
                  >
                    Cotizar por WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
