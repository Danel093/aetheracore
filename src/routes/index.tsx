import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Gamepad2,
  Cpu,
  Globe2,
  Truck,
  ShieldCheck,
  Zap,
  Headphones,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/aethera-hero.png";
import octopusLogo from "@/assets/aethera-octopus.png";
import carouselGaming from "@/assets/carousel-gaming-pc.jpg";
import carouselPeripherals from "@/assets/carousel-peripherals.jpg";
import carouselWorkstation from "@/assets/carousel-workstation.jpg";
import carouselMonitor from "@/assets/carousel-monitor.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SiteHeader } from "@/components/site-header";
import { FloatingActions } from "@/components/floating-actions";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aethera Core — Eleva tu potencial" },
      {
        name: "description",
        content:
          "Hardware de alto rendimiento en Colombia. PCs Gaming, productividad y periféricos con envíos a todo el país.",
      },
      { property: "og:title", content: "Aethera Core — Eleva tu potencial" },
      {
        property: "og:description",
        content: "Redefinimos la experiencia tecnológica en Colombia.",
      },
      { property: "og:url", content: "https://aetheracore.lovable.app/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [
      { rel: "canonical", href: "https://aetheracore.lovable.app/" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <CoreServices />
        <Features />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const slides = [
    { src: heroImage, alt: "Build PC Aethera Core completa", label: "Setup Insignia" },
    { src: carouselGaming, alt: "PC Gamer con iluminación cyan", label: "Gaming Builds" },
    { src: carouselMonitor, alt: "Monitor curvo gaming ultrawide", label: "Inmersión Total" },
    { src: carouselPeripherals, alt: "Teclado mecánico y mouse RGB", label: "Periféricos Premium" },
    { src: carouselWorkstation, alt: "Workstation profesional dual monitor", label: "Productividad Pro" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20 bg-gradient-core"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-40 animate-pulse-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.15 220 / 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Copy — compact */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              <span className="text-gradient-cyan">Aethera Core:</span>
              <br />
              <span className="text-foreground">Eleva tu potencial.</span>
            </h1>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-muted-foreground leading-relaxed">
              Redefinimos la experiencia tecnológica en Colombia. Hardware de alto
              rendimiento equilibrando{" "}
              <span className="text-silver font-semibold">potencia y costo.</span>
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/gaming"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_rgba(0,210,255,0.8)] hover:scale-[1.03]"
              >
                Explorar PCs Gaming
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card/50 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:border-cyan hover:text-cyan transition-all"
              >
                Conoce más
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { k: "+500", v: "Builds entregadas" },
                { k: "100%", v: "Cobertura nacional" },
                { k: "24/7", v: "Asesoría directa" },
              ].map((s) => (
                <div key={s.v} className="text-center lg:text-left">
                  <dt className="font-display text-2xl md:text-3xl font-extrabold text-gradient-cyan">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan/30 via-transparent to-cyan/20 blur-2xl pointer-events-none" />
            <div className="relative rounded-2xl border border-border/60 overflow-hidden glow-cyan bg-card">
              <Carousel
                opts={{ loop: true, align: "start" }}
                plugins={[autoplay.current]}
                className="w-full"
              >
                <CarouselContent className="ml-0">
                  {slides.map((slide) => (
                    <CarouselItem key={slide.alt} className="pl-0 basis-full">
                      <div className="relative aspect-[4/3] md:aspect-[5/4] w-full">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent pointer-events-none" />
                        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-background/70 backdrop-blur px-3 py-1.5 text-xs font-semibold text-cyan">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                          {slide.label}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CORE SERVICES ---------------- */
const SERVICES = [
  {
    id: "gaming",
    to: "/gaming" as const,
    icon: Gamepad2,
    title: "Gaming",
    tagline: "Build for performance.",
    description:
      "PCs gamer optimizados para alto FPS, refrigeración silenciosa y estética premium. Listos para AAA y eSports.",
  },
  {
    id: "productividad",
    to: "/productividad" as const,
    icon: Cpu,
    title: "Productividad",
    tagline: "Power for professionals.",
    description:
      "Workstations para creadores, ingenieros y oficinas. Render, edición 4K y multitarea sin compromisos.",
  },
  {
    id: "perifericos",
    to: "/perifericos" as const,
    icon: Globe2,
    title: "Conexión Global",
    tagline: "Cutting-edge for a connected world.",
    description:
      "Periféricos y tecnología de última generación seleccionados para integrarse con tu setup y tu mundo.",
  },
];

function CoreServices() {
  return (
    <section id="servicios" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            Tres pilares
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
            Potencia <span className="text-gradient-cyan">a tu medida</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Configuraciones inteligentes diseñadas para extraer cada watt de rendimiento
            sin inflar el presupuesto.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="glow-cyan-hover group relative rounded-2xl border border-border bg-card p-7 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, oklch(0.82 0.15 220 / 0.18), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-transparent border border-cyan/30 text-cyan group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cyan">{s.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <Link
                  to={s.to}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-cyan transition-colors"
                >
                  Quiero ver más
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
const FEATURES = [
  {
    icon: Truck,
    title: "Envíos a todo el país 📍",
    desc: "Despachos seguros y empacados profesionalmente desde nuestro taller hacia cualquier ciudad de Colombia.",
  },
  {
    icon: ShieldCheck,
    title: "Especialistas en Gama Media",
    desc: "Encontramos el equilibrio perfecto entre precio y rendimiento real, sin pagar de más por marketing.",
  },
  {
    icon: Zap,
    title: "Componentes seleccionados",
    desc: "Solo trabajamos con marcas verificadas y testeamos cada build antes de entregarla.",
  },
  {
    icon: Headphones,
    title: "Soporte post-venta",
    desc: "Acompañamiento real después de la compra. Tu setup también es nuestra responsabilidad.",
  },
];

function Features() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 bg-gradient-core">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              Por qué Aethera Core
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold leading-tight">
              Tecnología{" "}
              <span className="text-gradient-cyan">en movimiento</span>, hecha para
              Colombia.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Nacimos para democratizar el alto rendimiento. Cada build es una promesa:
              potencia honesta, precio justo y respaldo local.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-2 text-xs font-semibold text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
                Stock disponible hoy
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold text-muted-foreground">
                Garantía respaldada
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="glow-cyan-hover rounded-2xl border border-border bg-card/70 backdrop-blur p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan/10 text-cyan border border-cyan/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contacto" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-core p-10 md:p-16 text-center glow-cyan">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full blur-3xl opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.82 0.15 220 / 0.5) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold">
              ¿Listo para <span className="text-gradient-cyan">elevar tu setup?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Cuéntanos qué necesitas. Diseñamos tu build ideal y te enviamos cotización
              en menos de 24 horas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/573017367858?text=${encodeURIComponent("🚀 ¡Hola Aethera Core! Quiero llevar mi setup al siguiente nivel. ¿Me asesoran con mi build ideal?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_-5px_rgba(0,210,255,0.8)] hover:scale-[1.03]"
              >
                Asesoría directa por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hola@aetheracore.co"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card/50 px-8 py-3.5 text-sm font-semibold hover:border-cyan hover:text-cyan transition-all"
              >
                Escríbenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={octopusLogo} alt="Aethera Core" className="h-12 w-12 rounded-full object-contain drop-shadow-[0_0_12px_rgba(0,210,255,0.5)]" />
              <span className="font-display text-lg font-extrabold text-gradient-cyan">
                AETHERA CORE
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Tecnología de movimiento — Gaming &amp; Productividad — Conexión Global.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: TikTokIcon, label: "TikTok", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-cyan hover:border-cyan transition-colors"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Catálogo
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#gaming" className="hover:text-cyan transition-colors">Gaming PCs</a></li>
              <li><a href="#productividad" className="hover:text-cyan transition-colors">Productividad</a></li>
              <li><a href="#perifericos" className="hover:text-cyan transition-colors">Periféricos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Compañía
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#nosotros" className="hover:text-cyan transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-cyan transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Garantía</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Aethera Core. Todos los derechos reservados. Colombia 🇨🇴
          </p>
          <p className="text-xs text-muted-foreground">
            Tecnología de movimiento · Gaming &amp; Productividad · Conexión Global
          </p>
        </div>
      </div>
    </footer>
  );
}
