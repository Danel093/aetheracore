import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import heroImg from "@/assets/carousel-workstation.jpg";
import imgWorkstation from "@/assets/product-workstation.jpg";
import imgGaming from "@/assets/product-gaming.jpg";
import imgServer from "@/assets/product-server.jpg";

const FAQ = [
  {
    q: "Núcleos vs frecuencia",
    a: "Render y compilación aman muchos núcleos (Ryzen 9, Threadripper). Edición de video en Premiere prefiere alta frecuencia con menos núcleos.",
  },
  {
    q: "VRAM: la métrica que importa",
    a: "Para 4K timeline en DaVinci necesitas mínimo 12GB VRAM. Para IA local, 16GB es el piso real.",
  },
  {
    q: "Almacenamiento por capas",
    a: "SSD NVMe rápido para SO y proyectos activos, SSD SATA para librerías, HDD grande para backups.",
  },
  {
    q: "Multi-monitor real",
    a: "Para 3 o 4 monitores 4K asegúrate de tener GPU con 4 salidas DisplayPort y un buen escritorio.",
  },
];

export const Route = createFileRoute("/productividad")({
  head: () => ({
    meta: [
      { title: "Workstations — Octa Core | Render y edición 4K" },
      {
        name: "description",
        content:
          "Workstations para creadores, ingenieros y oficinas. Render 3D, edición 4K, CAD y multitarea profesional. Envíos a todo Colombia.",
      },
      { property: "og:title", content: "Workstations — Octa Core" },
      {
        property: "og:description",
        content: "Equipos profesionales para render, edición y multitarea.",
      },
      { property: "og:url", content: "https://aetheracore.lovable.app/productividad" },
    ],
    links: [
      { rel: "canonical", href: "https://aetheracore.lovable.app/productividad" },
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
      eyebrow="Productividad"
      title="Power for"
      highlight="professionals."
      description="Workstations diseñadas para creadores, ingenieros, arquitectos y equipos de oficina exigentes. Estabilidad 24/7 y rendimiento bajo carga continua."
      heroImage={heroImg}
      bullets={[
        "Render 3D, edición 4K y CAD",
        "ECC RAM y SSDs NVMe Gen4",
        "Conectividad multi-monitor",
        "Garantía y soporte empresarial",
      ]}
      popular={[
        {
          name: "Octa Studio R7",
          tag: "Creator Workstation",
          description:
            "Ryzen 7 + 32GB DDR5 + RTX 4060 Ti 16GB. Edición 4K en Premiere y DaVinci sin lag.",
          price: "Desde $5.490.000",
          badge: "Top ventas",
          image: imgWorkstation,
        },
        {
          name: "Octa Render X9",
          tag: "3D & CAD",
          description:
            "Ryzen 9 7950X + RTX 4070 Ti SUPER + 64GB DDR5. Blender, AutoCAD y Revit a velocidad real.",
          price: "Desde $8.990.000",
          image: imgWorkstation,
        },
        {
          name: "Octa Office Pro",
          tag: "Oficina Premium",
          description:
            "Core i5-14400 + 16GB DDR5 + 1TB NVMe. Multitarea fluida para Excel pesado y videollamadas.",
          price: "Desde $2.690.000",
          badge: "Top ventas",
          image: imgWorkstation,
        },
        {
          name: "Octa DevBox",
          tag: "Desarrolladores",
          description:
            "Ryzen 9 + 64GB RAM + 2TB NVMe Gen4. Compila proyectos grandes y corre Docker sin sudar.",
          price: "Desde $7.290.000",
          badge: "Nuevo",
          image: imgGaming,
        },
        {
          name: "Octa AI Forge",
          tag: "IA & Machine Learning",
          description:
            "Core i9 + RTX 4090 24GB + 128GB RAM. Entrena modelos LLM locales y genera imágenes IA.",
          price: "Desde $18.990.000",
          badge: "Nuevo",
          image: imgGaming,
        },
        {
          name: "Octa Server Mini",
          tag: "Pyme Server",
          description:
            "Servidor compacto Ryzen 7 + 4 bahías HDD + Proxmox preinstalado. NAS y backups en uno.",
          price: "Desde $4.890.000",
          image: imgServer,
        },
      ]}
      novelties={[
        {
          title: "AMD Threadripper 7000",
          description:
            "Workstations con hasta 96 núcleos para render arquitectónico y simulación científica.",
        },
        {
          title: "DDR5 ECC empresarial",
          description:
            "Memoria con corrección de errores para servidores críticos y workstations 24/7.",
        },
        {
          title: "GPUs NVIDIA RTX Ada",
          description:
            "Tarjetas profesionales con drivers Studio certificados para Adobe, Autodesk y Maxon.",
        },
      ]}
      buyingGuide={[
        {
          title: "Núcleos vs frecuencia",
          body: "Render y compilación aman muchos núcleos (Ryzen 9, Threadripper). Edición de video en Premiere prefiere alta frecuencia con menos núcleos (i7/i9 K).",
        },
        {
          title: "VRAM: la métrica que importa",
          body: "Para 4K timeline en DaVinci necesitas mínimo 12GB VRAM. Para IA local, 16GB es el piso real. Una RTX con poca VRAM cuella todo el sistema.",
        },
        {
          title: "Almacenamiento por capas",
          body: "SSD NVMe rápido para SO y proyectos activos, SSD SATA para librerías, HDD grande para backups. No metas todo en un solo disco.",
        },
        {
          title: "Multi-monitor real",
          body: "Para 3 o 4 monitores 4K asegúrate de tener GPU con 4 salidas DisplayPort y un buen escritorio. Es donde más se nota la productividad ganada.",
        },
      ]}
    />
  ),
});
