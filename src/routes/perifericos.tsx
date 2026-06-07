import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import heroImg from "@/assets/carousel-peripherals.jpg";
import imgKeyboard from "@/assets/product-keyboard.jpg";
import imgMouse from "@/assets/product-mouse.jpg";
import imgMonitor from "@/assets/product-monitor.jpg";
import imgHeadset from "@/assets/product-headset.jpg";
import imgRouter from "@/assets/product-router.jpg";

const FAQ = [
  {
    q: "Hertz vs respuesta de panel",
    a: "180Hz IPS es el sweet spot 2026 para gaming + trabajo. 240Hz+ solo si juegas competitivo. OLED si priorizas color sobre brillo.",
  },
  {
    q: "Mecánico: ¿qué switch?",
    a: "Lineales (Red, Yellow) para gaming. Tactiles (Brown, Holy Panda) para escritura mixta. Clickys (Blue) si no compartes oficina.",
  },
  {
    q: "Audio: abierto o cerrado",
    a: "Auriculares abiertos suenan más natural pero filtran sonido. Cerrados aíslan y dan más bajos.",
  },
  {
    q: "WiFi: cuándo upgradear",
    a: "Si tu router tiene más de 4 años o no soporta WiFi 6, upgradeas y notas la diferencia. Mesh solo si tienes 2+ pisos o muros gruesos.",
  },
];

export const Route = createFileRoute("/perifericos")({
  head: () => ({
    meta: [
      { title: "Periféricos & Conexión Global — Aethera Core" },
      {
        name: "description",
        content:
          "Teclados mecánicos, mouse, monitores, audio y red de última generación. Curados para integrarse a tu setup. Envíos a toda Colombia.",
      },
      { property: "og:title", content: "Periféricos — Aethera Core" },
      {
        property: "og:description",
        content: "Tecnología de última generación para tu setup.",
      },
      { property: "og:url", content: "https://aetheracore.lovable.app/perifericos" },
    ],
    links: [
      { rel: "canonical", href: "https://aetheracore.lovable.app/perifericos" },
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
      eyebrow="Conexión Global"
      title="Cutting-edge"
      highlight="for your setup."
      description="Periféricos y tecnología seleccionados con criterio. Cada pieza pasa por nuestro filtro: que valga lo que cuesta y se sienta como parte de tu Aethera."
      heroImage={heroImg}
      bullets={[
        "Teclados mecánicos hot-swap",
        "Monitores 1440p / 4K HDR",
        "Audio de estudio y gaming",
        "Routers WiFi 6E y mesh",
      ]}
      popular={[
        {
          name: "Teclado Mecánico Aethera K75",
          tag: "Input",
          description:
            "75% layout, hot-swap, switches Gateron, RGB south-facing y firmware QMK/VIA.",
          price: "Desde $389.000",
          badge: "Top ventas",
          image: imgKeyboard,
        },
        {
          name: "Mouse Inalámbrico Pulse 4K",
          tag: "Input",
          description:
            "Sensor PixArt 3395, 4000Hz polling, 60g. Pensado para FPS competitivo.",
          price: "Desde $329.000",
          badge: "Nuevo",
          image: imgMouse,
        },
        {
          name: "Monitor 27\" QHD 180Hz IPS",
          tag: "Display",
          description:
            "1440p, IPS Fast, HDR400, 1ms GtG. El sweet spot para gaming y productividad.",
          price: "Desde $1.290.000",
          badge: "Top ventas",
          image: imgMonitor,
        },
        {
          name: "Monitor 32\" 4K 144Hz HDR",
          tag: "Display Pro",
          description:
            "4K UHD, MiniLED HDR1000, USB-C 90W. Perfecto para creadores y gaming AAA.",
          price: "Desde $3.490.000",
          image: imgMonitor,
        },
        {
          name: "Headset HiFi Cloud Studio",
          tag: "Audio",
          description:
            "Drivers 50mm, micrófono cardioide, DAC integrado. Para gaming, calls y mezcla.",
          price: "Desde $549.000",
          image: imgHeadset,
        },
        {
          name: "Router WiFi 6E Mesh Tri-band",
          tag: "Conectividad",
          description:
            "Pack 2 nodos, 6Gbps, cobertura 400m². Latencia mínima para gaming online.",
          price: "Desde $1.190.000",
          badge: "Oferta",
          image: imgRouter,
        },
      ]}
      novelties={[
        {
          title: "Switches magnéticos Hall-Effect",
          description:
            "Activación ajustable por software. La nueva referencia para shooters competitivos.",
        },
        {
          title: "Monitores OLED 240Hz",
          description:
            "Negros perfectos y respuesta 0.03ms. La nueva era del display gaming premium.",
        },
        {
          title: "WiFi 7 disponible",
          description:
            "Routers tri-band 320MHz con MLO. Hasta 4x el throughput de WiFi 6E real.",
        },
      ]}
      buyingGuide={[
        {
          title: "Hertz vs respuesta de panel",
          body: "180Hz IPS es el sweet spot 2026 para gaming + trabajo. 240Hz+ solo si juegas competitivo. OLED si priorizas color sobre brillo en habitación oscura.",
        },
        {
          title: "Mecánico: ¿qué switch?",
          body: "Lineales (Red, Yellow) para gaming. Tactiles (Brown, Holy Panda) para escritura mixta. Clickys (Blue) si no compartes oficina. Hot-swap te deja experimentar.",
        },
        {
          title: "Audio: abierto o cerrado",
          body: "Auriculares abiertos suenan más natural y airy, pero filtran sonido. Cerrados aíslan y dan más bajos. Para oficina compartida, cerrados; para casa, abiertos.",
        },
        {
          title: "WiFi: cuándo upgradear",
          body: "Si tu router tiene más de 4 años o no soporta WiFi 6, upgradeas y notas la diferencia. Mesh solo si tienes 2+ pisos o muros gruesos. Cable Ethernet sigue siendo rey.",
        },
      ]}
    />
  ),
});
