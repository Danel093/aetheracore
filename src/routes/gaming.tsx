import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import heroImg from "@/assets/carousel-gaming-pc.jpg";
import imgGaming from "@/assets/product-gaming.jpg";
import imgMiniPc from "@/assets/product-mini-pc.jpg";
import imgMonitor from "@/assets/product-monitor.jpg";

const FAQ = [
  {
    q: "¿1080p, 1440p o 4K?",
    a: "Para 1080p competitivo, una RTX 4060 sobra. Para 1440p ultra apunta a 4070 SUPER. 4K real exige 4080 o superior.",
  },
  {
    q: "RAM: 16GB vs 32GB",
    a: "16GB DDR5 sigue siendo suficiente para gaming puro. 32GB solo si transmites, editas o usas múltiples ventanas pesadas en simultáneo.",
  },
  {
    q: "Refrigeración: aire o líquida",
    a: "Air cooling de buena gama maneja un Ryzen 7 sin problema. Solo invierte en AIO 280/360mm para i9 o Ryzen 9 con overclock.",
  },
  {
    q: "Fuente: la pieza más subestimada",
    a: "Mínimo 80+ Bronze 650W para builds medios. Para RTX 4070 Ti+ usa 80+ Gold 850W. Una fuente mala fríe componentes caros.",
  },
];

export const Route = createFileRoute("/gaming")({
  head: () => ({
    meta: [
      { title: "Gaming PCs — Octa Core | Builds de alto FPS" },
      {
        name: "description",
        content:
          "PCs Gamer optimizados para alto FPS, refrigeración silenciosa y estética premium. Builds AAA y eSports con envío a todo Colombia.",
      },
      { property: "og:title", content: "Gaming PCs — Octa Core" },
      {
        property: "og:description",
        content: "Builds gaming optimizados para FPS y eSports en Colombia.",
      },
      { property: "og:url", content: "https://aetheracore.lovable.app/gaming" },
    ],
    links: [
      { rel: "canonical", href: "https://aetheracore.lovable.app/gaming" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Gaming"
      title="Build for"
      highlight="performance."
      description="PCs Gamer ensamblados a mano y testeados pieza por pieza. Hardware seleccionado para sacar el máximo en AAA, eSports y streaming, sin pagar de más."
      heroImage={heroImg}
      bullets={[
        "144+ FPS en 1080p y 1440p",
        "Refrigeración silenciosa optimizada",
        "Estética RGB minimalista",
        "Listo para streaming en OBS",
      ]}
      popular={[
        {
          name: "Octa Strike R5",
          tag: "Entry Gaming",
          description:
            "Ryzen 5 5600 + RTX 4060 + 16GB DDR4. La mejor relación FPS/precio para 1080p ultra.",
          price: "Desde $3.290.000",
          badge: "Top ventas",
          image: imgGaming,
        },
        {
          name: "Octa Pulse R7",
          tag: "Mid-High Gaming",
          description:
            "Ryzen 7 7700 + RTX 4070 SUPER + 32GB DDR5. 1440p ultra y 4K alto sin compromisos.",
          price: "Desde $5.890.000",
          badge: "Top ventas",
          image: imgGaming,
        },
        {
          name: "Octa Apex i7",
          tag: "Streaming Build",
          description:
            "Core i7-14700K + RTX 4070 Ti + 32GB DDR5 + WiFi 6E. Juega y stremea sin caídas de FPS.",
          price: "Desde $7.450.000",
          badge: "Nuevo",
          image: imgGaming,
        },
        {
          name: "Octa Vortex i9",
          tag: "Enthusiast 4K",
          description:
            "Core i9-14900K + RTX 4080 SUPER + 64GB DDR5 + AIO 360mm. 4K ultra a 120 FPS.",
          price: "Desde $12.990.000",
          image: imgGaming,
        },
        {
          name: "Octa Compact ITX",
          tag: "Mini Gaming",
          description:
            "Build SFF Ryzen 7 + RTX 4070 en chasis ITX. Mismo poder, mitad del espacio.",
          price: "Desde $6.290.000",
          badge: "Nuevo",
          image: imgMiniPc,
        },
        {
          name: "Octa Esports Lite",
          tag: "Competitive",
          description:
            "Ryzen 5 + RTX 4060 + monitor 180Hz incluido. Optimizado para Valorant, CS2 y LoL.",
          price: "Desde $4.190.000",
          badge: "Oferta",
          image: imgMonitor,
        },
      ]}
      novelties={[
        {
          title: "RTX 50 Series disponible",
          description:
            "Reservas abiertas para builds con RTX 5070 y 5080. Stock limitado primer trimestre.",
        },
        {
          title: "AMD Ryzen 9000 series",
          description:
            "Nuevos procesadores Zen 5 en stock. Hasta 16% más rendimiento gen-on-gen.",
        },
        {
          title: "Chasis con pantalla integrada",
          description:
            "Lian Li y NZXT con displays LCD para monitorear temps y FPS en vivo.",
        },
      ]}
      buyingGuide={[
        {
          title: "¿1080p, 1440p o 4K?",
          body: "Para 1080p competitivo, una RTX 4060 sobra. Para 1440p ultra apunta a 4070 SUPER. 4K real exige 4080 o superior. No te dejes vender de más.",
        },
        {
          title: "RAM: 16GB vs 32GB",
          body: "16GB DDR5 sigue siendo suficiente para gaming puro. 32GB solo si transmites, editas o usas múltiples ventanas pesadas en simultáneo.",
        },
        {
          title: "Refrigeración: aire o líquida",
          body: "Air cooling de buena gama maneja un Ryzen 7 sin problema. Solo invierte en AIO 280/360mm para i9 o Ryzen 9 con overclock.",
        },
        {
          title: "Fuente: la pieza más subestimada",
          body: "Mínimo 80+ Bronze 650W para builds medios. Para RTX 4070 Ti+ usa 80+ Gold 850W. Una fuente mala fríe componentes caros.",
        },
      ]}
    />
  ),
});
