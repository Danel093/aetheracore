import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import octopusLogo from "@/assets/aethera-octopus.png";

const WHATSAPP_NUMBER = "573017367858";
const MESSENGER_URL = "https://m.me/aetheracore";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BUILD_TYPES = [
  "Gaming",
  "Productividad",
  "Periféricos",
  "Otro",
];

export function QuickConsultPanel({ open, onOpenChange }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState(BUILD_TYPES[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🚀 ¡Hola Aethera Core!%0A%0A*Nombre:* ${encodeURIComponent(
      name || "—",
    )}%0A*Contacto:* ${encodeURIComponent(
      contact || "—",
    )}%0A*Interés:* ${encodeURIComponent(type)}%0A*Mensaje:* ${encodeURIComponent(
      message || "Quiero asesoría para mi build ideal.",
    )}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-sm bg-card/95 backdrop-blur-xl border-l border-cyan/20 p-0 flex flex-col [&>button.absolute]:hidden"
      >
        {/* Header */}
        <SheetHeader className="relative p-6 border-b border-border/60 space-y-0">
          <div className="flex items-center gap-3 pr-10">
            <img
              src={octopusLogo}
              alt="Aethera Core"
              className="h-10 w-10 rounded-full object-contain drop-shadow-[0_0_10px_rgba(0,210,255,0.5)]"
            />
            <div className="text-left">
              <SheetTitle className="font-display text-lg font-extrabold text-gradient-cyan">
                Consulta rápida
              </SheetTitle>
              <SheetDescription className="text-xs text-muted-foreground">
                Respuesta en menos de 24h
              </SheetDescription>
            </div>
          </div>
          <SheetClose className="absolute right-4 top-4 z-50 inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/70 hover:text-cyan hover:bg-background/60 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan/40">
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </SheetClose>
        </SheetHeader>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
              Nombre
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
              WhatsApp o correo
            </label>
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+57 300 000 0000"
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
              ¿Qué te interesa?
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40 transition-colors"
            >
              {BUILD_TYPES.map((t) => (
                <option key={t} value={t} className="bg-background">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
              Mensaje
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Cuéntanos qué necesitas..."
              className="w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="group w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_rgba(0,210,255,0.8)] hover:scale-[1.02]"
          >
            Enviar por WhatsApp
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Shortcuts */}
          <div className="pt-4 border-t border-border/60">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground text-center mb-3">
              o chatea directo
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2 text-xs font-semibold text-foreground hover:border-cyan hover:text-cyan transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2 text-xs font-semibold text-foreground hover:border-cyan hover:text-cyan transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Messenger
              </a>
            </div>
            <p className="mt-4 text-[11px] text-center text-muted-foreground">
              Cobertura nacional · Asesoría sin costo
            </p>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
