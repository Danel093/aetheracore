import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { QuickConsultPanel } from "./quick-consult-panel";

// WhatsApp icon (brand)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.03 1.318-1.044 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.518 3.41 4.554 4.34.616.287 2.035.888 2.722.888.317 0 .57-.014.83-.073.92-.215 1.39-1.118 1.605-1.96.07-.273.07-.473.043-.616-.073-.4-1.32-.928-1.49-.928zm-2.96 7.354h-.014a9.78 9.78 0 0 1-4.97-1.36l-.357-.214-3.696.97.985-3.6-.232-.37a9.764 9.764 0 0 1-1.5-5.214c.002-5.4 4.395-9.794 9.795-9.794a9.73 9.73 0 0 1 6.923 2.872 9.73 9.73 0 0 1 2.866 6.93c-.003 5.4-4.396 9.78-9.8 9.78m8.336-18.116a11.66 11.66 0 0 0-8.328-3.45C10.692 2.992 5.65 8.034 5.65 14.232c0 1.98.518 3.913 1.5 5.616L5.55 25.495l5.785-1.516a11.65 11.65 0 0 0 5.578 1.42h.005c6.466 0 11.508-5.045 11.51-11.243a11.555 11.555 0 0 0-3.382-7.974" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "573017367858";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "🚀 ¡Hola Octa Core! Quiero llevar mi setup al siguiente nivel. ¿Me asesoran con mi build ideal?",
);

export function FloatingActions() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3">
        {/* Consulta rápida → abre panel */}
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          aria-label="Abrir panel de consulta rápida"
          className="group relative flex items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-foreground border border-border shadow-lg transition-transform group-hover:scale-105">
            Consulta rápida
          </span>
          <span
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-white shadow-[0_8px_30px_-5px_rgba(0,132,255,0.6)] transition-transform group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #0084ff 0%, #00c6ff 100%)",
            }}
          >
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
          </span>
        </button>

        {/* WhatsApp directo */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Asesoría directa por WhatsApp"
          className="group relative flex items-center gap-3"
        >
          <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-foreground border border-border shadow-lg transition-transform group-hover:scale-105">
            Asesoría Directa
          </span>
          <span
            className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full text-white shadow-[0_8px_30px_-5px_rgba(37,211,102,0.7)] transition-transform group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#25D366" }} />
            <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
          </span>
        </a>
      </div>

      <QuickConsultPanel open={panelOpen} onOpenChange={setPanelOpen} />
    </>
  );
}
