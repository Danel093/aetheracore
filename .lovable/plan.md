## Objetivo

Crear un **panel de consulta lateral compacto** que se despliegue desde el borde derecho de la pantalla al hacer clic en el botón flotante "Consulta rápida". Ocupará solo ~380px en escritorio (≈25% de la pantalla) y full-width solo en móvil, dejando visible el resto de la landing.

## Cómo se verá

```text
Escritorio (>768px)                      Móvil
┌─────────────────────────┬──────────┐   ┌──────────────┐
│                         │  Panel   │   │   Panel      │
│   Landing Aethera Core  │ consulta │   │  consulta    │
│   (visible, ~75%)       │  ~380px  │   │  full width  │
│                         │          │   │              │
└─────────────────────────┴──────────┘   └──────────────┘
```

- Se abre desde la derecha con animación slide-in.
- Fondo de la página queda visible (sin overlay oscuro en escritorio) para no romper la experiencia.
- Botón "X" para cerrar + cerrar al hacer clic fuera.
- Mantiene los botones flotantes WhatsApp/Messenger debajo.

## Contenido del panel

1. **Encabezado** con logo del pulpo + título "Consulta rápida" + botón cerrar.
2. **Mini formulario** (3 campos):
   - Nombre
   - WhatsApp / correo
   - Tipo de build (select: Gaming / Productividad / Periféricos / Otro)
   - Mensaje (textarea corto)
3. **CTA principal**: botón cyan "Enviar por WhatsApp" → arma el mensaje con los datos del formulario y abre `wa.me/573017367858?text=...` en pestaña nueva.
4. **Atajos secundarios**: enlaces directos a WhatsApp y Messenger por si prefieren chat directo.
5. **Microcopy de confianza**: "Respuesta en menos de 24h · Cobertura nacional".

## Implementación técnica

- Usar el componente `Sheet` de shadcn (`src/components/ui/sheet.tsx` ya existe) con `side="right"` y `className="w-full sm:max-w-sm"` para limitar el ancho a ~384px en desktop y full en móvil.
- Crear `src/components/quick-consult-panel.tsx` que exporta:
  - `QuickConsultPanel` (el contenido del Sheet con el formulario).
  - Estado `open` controlado vía contexto ligero o prop drilling desde `FloatingActions`.
- Modificar `src/components/floating-actions.tsx`:
  - El chip "Consulta rápida" + el botón Messenger se convierten en un único botón que **abre el panel** (en lugar de ir directo a Messenger).
  - Mover el enlace directo a Messenger dentro del panel como atajo secundario.
  - Mantener el botón WhatsApp flotante tal como está.
- El submit del formulario **no requiere backend**: construye el texto y redirige a `wa.me`. Cero dependencias nuevas.
- Estilos con tokens existentes (`bg-card`, `border-border`, `text-cyan`, `glow-cyan`) — sin colores hardcodeados.
- Accesibilidad: `Sheet` ya maneja focus trap, ESC para cerrar, y `aria-label` en el trigger.

## Archivos a tocar

- **Nuevo**: `src/components/quick-consult-panel.tsx`
- **Editar**: `src/components/floating-actions.tsx` (cambiar acción del botón Messenger por abrir panel + mover enlace Messenger adentro).

## Lo que NO se hará

- No se crea base de datos ni endpoint — el envío va directo a WhatsApp.
- No se reemplaza el botón flotante de WhatsApp (sigue como acceso de 1 clic).
- No se modifica la sección CTA inferior de la landing.
