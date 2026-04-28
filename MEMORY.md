# Memory — Taufic Gashaan

> Cuaderno compartido cross-agent. Se actualiza al cierre de cada skill.

---

## Datos del Cliente

- **Empresa:** Taufic Gashaan
- **Industria:** Arquitectura (residencial premium + contenedores)
- **Fecha de arranque:** 2026-04-27
- **Drive del proyecto:** https://drive.google.com/drive/folders/1O-BZLplD7BMJRzvZLWRhTIrG64UXAKIc
- **Drive referencias/imágenes:** https://drive.google.com/drive/folders/17tj9msIqeHFb4Dlo9rsLRY1dG55oIRX8

## Contacto

- **Instagram:** https://www.instagram.com/tauficgashaan.mx/
- **Nombre contacto:** Taufic Gashaan (dueño)

## Identidad de Marca

- **Colores del sistema de diseño (canónicos — aprobados 2026-04-28):**
  - `#0D0D0D` — Negro (base y tipografía)
  - `#FFFFFF` — Blanco (fondo)
  - `#C8102E` — Rojo Taufic (acento, CTA, marcadores)
- **Tipografía:** Archivo 900 (titulares oversized) + DM Serif Display italic (taglines, quotes)
- **Estilo:** Cinematic minimalism — tipografía oversized, alto contraste, bordes 1px, glassmorphism en cards flotantes
- **Voz de marca:** Premium, directa, sin adornos. "Proyectos que perduran."
- **Diferenciador clave:** Pionero mundial en arquitectura de contenedores habitables de lujo. Reconocido por AMDI y medios internacionales.
- **Design system MASTER.md:** `./web-app/design-system/taufic-gashaan/MASTER.md`

## Estado de Skills

| Skill | Estado | Notas |
|---|---|---|
| `sv-exploracion` | ✅ completado — 2026-04-27 | Deck Canva `DAHIElIP_0Q` (30 slides). |
| `wd-prototipo` | ✅ completado — 2026-04-28 | `prototipo.html` aprobado (14 secciones). Portado a Next.js. Deployado en Vercel. |
| `sv-propuesta` | ⏳ pendiente | Requiere brief llenado post-reunión |
| `wd-construccion` | ⏳ pendiente | Usar `prototipo.html` aprobado como referencia. Activar cuando haya luz verde del cliente. |
| `mk-arranque` | 🔒 bloqueado | Se activa después de sv-propuesta |

## Entregables Generados

### Deck sv-exploracion
- **Canva design ID:** `DAHIElIP_0Q`
- **URL de edición:** https://www.canva.com/d/Auvdswh4bxFG9Ni
- **30 slides** — diagnóstico, benchmarking (screenshots reales), competencia local GDL + referentes internacionales, arquitectura del sitio, sistema de diseño, banner IA, prototipo, precios
- **Banner slide 16:** Generado con Imagen 4 (Gemini). Asset Canva: `MAHIF0iMNdg`. Drive: `1KhouwkFUTBodLW99kBS8SwCLuskCilU9`

### Prototipo Web (aprobado 2026-04-28)
- **Ruta local:** `./web-app/` — `npm run dev` (localhost:3002)
- **Stack:** Next.js 16 · TypeScript · Tailwind CSS v4
- **Repo GitHub:** `https://github.com/HubbleWebStudio/Taufic-Gashaan` (proyecto completo: agentes + web-app)
- **Vercel:** Root Directory = `web-app` — redeploy automático en cada push a `main`
- **HTML estático de referencia:** `./web-app/public/prototipo.html`
- **Secciones (14):** Navbar · Hero texto · Hero imagen (glassmorphism) · Pill tags · Stats (dark) · Cinematic spec · Feature · Mini-features · Gallery grid · Testimonial (dark) · CTA banner (dark) · Process · Brand footer ("TAUFIC" oversized) · Footer bar
- **TODO:** Reemplazar imágenes Unsplash + copy placeholder con assets reales del cliente antes de lanzar

## Notas para la próxima sesión — 2026-04-28

- **`wd-prototipo` se activa directo desde este workspace** — ya no desde Maestro. Santiago subirá imágenes de referencia a `capturas/` antes de invocar el skill. Con imágenes el prototipo sale en un solo intento.
- **El prototipo aprobado es la referencia para `wd-construccion`** — no generar secciones desde cero. Usar `./web-app/public/prototipo.html` como guía de fidelidad.
- **Próximo hito:** reunión con Taufic → brief → `sv-propuesta` → luz verde → `wd-construccion` para portar secciones a componentes Next.js reales con imágenes y copy del cliente.

## Notas del Cliente

- Tiene **dos cuentas de Instagram** operando en paralelo sin estrategia unificada: `@tauficgashaan.mx` y `@tauficgashaan.design`
- Tiene sitio web y Facebook activos pero sin estrategia editorial
- Su autoridad como pionero en contenedores no se está traduciendo en clientes inbound desde GDL — oportunidad central de la propuesta
