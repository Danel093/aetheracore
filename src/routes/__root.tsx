import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-cyan">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aethera Core — Eleva tu potencial | Gaming & Productividad Colombia" },
      {
        name: "description",
        content:
          "Aethera Core: hardware de alto rendimiento en Colombia. PCs Gaming, productividad y periféricos especializados en gama media. Envíos a todo el país.",
      },
      { name: "author", content: "Aethera Core" },
      { property: "og:title", content: "Aethera Core — Eleva tu potencial | Gaming & Productividad Colombia" },
      {
        property: "og:description",
        content: "Tecnología de alto rendimiento equilibrando potencia y costo. Colombia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Aethera Core — Eleva tu potencial | Gaming & Productividad Colombia" },
      { name: "description", content: "Redefinimos la experiencia tecnológica en Colombia. Hardware de alto rendimiento equilibrando potencia y costo" },
      { property: "og:description", content: "Redefinimos la experiencia tecnológica en Colombia. Hardware de alto rendimiento equilibrando potencia y costo" },
      { name: "twitter:description", content: "Redefinimos la experiencia tecnológica en Colombia. Hardware de alto rendimiento equilibrando potencia y costo" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1LeSF0RBMeU1BJxfr3e001TXTT22/social-images/social-1776997047449-Gemini_Generated_Image_3mj1tc3mj1tc3mj1.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1LeSF0RBMeU1BJxfr3e001TXTT22/social-images/social-1776997047449-Gemini_Generated_Image_3mj1tc3mj1tc3mj1.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
