---
name: wd-arranque
description: Úsalo cuando se inicia un proyecto de cliente nuevo. Cubre creación de carpeta en Google Drive, captura autónoma de screenshots (Chrome MCP), análisis visual, extracción del design system y scaffolding completo del proyecto Next.js (globals.css, layout.tsx, page.tsx, next.config.ts, utils.ts, Navbar y Footer stubs). Todo el template de scaffolding está inline — no depende de archivos externos. Las referencias viven en Drive, no en el repo local. Actívalo cuando el usuario diga "arrancar proyecto", "iniciar desde cero", o cuando haya una URL de referencia.
---

## Filosofía de Ejecución HUBBLE

1. **Ingeniería, no Creatividad:** El agente es un ejecutor. Si existe una referencia, mantenga la misma maquetación, espaciado, tipografía y color. Reemplace el contenido con un marcador de posición (imágenes a través de `https://placehold.co/`, texto genérico). No modifique ni añada nada al diseño.
2. **Validación Visual Iterativa:** Tras cada bloque de código, el agente debe realizar un ciclo de comparación (Output vs. Referencia) Compárala con la referencia, corrige las discrepancias, alineación o color y vuelve a capturarla.

---

## Fase A — Análisis visual de la imagen completa

**Paso 0 — Crear carpeta en Drive y obtener la referencia visual:**

Las referencias visuales viven en **Google Drive**, no en el repositorio local. La carpeta raíz de proyectos Hubble en Drive es `1YcIx2gTCku01u4YKrGBoEVYyJKmdIqv3`.

Ejecutar en este orden:

**0a — Crear estructura en Drive (siempre, al iniciar el proyecto):**
1. Usar el MCP de Google Drive para crear una carpeta con el nombre del cliente dentro de `1YcIx2gTCku01u4YKrGBoEVYyJKmdIqv3`.
2. Dentro de esa carpeta, crear la subcarpeta `references`.
3. Registrar el ID de la carpeta del cliente y el ID de `references` en `./MEMORY.md` bajo la sección `## Drive` (ver formato abajo).

```md
## Drive

- Carpeta del proyecto: [nombre_cliente] — ID: `[ID_CARPETA_CLIENTE]`
- references/: ID: `[ID_REFERENCES]`
```

**0b — Obtener la referencia visual:**

- **Hay URL en `./MEMORY.md`** → capturar el sitio de forma autónoma:
  1. Usar el Chrome MCP (`mcp__Claude_in_Chrome__navigate`) para abrir la URL.
  2. Tomar screenshots full-page con scroll progresivo, con nombres descriptivos (`01-hero.png`, `02-servicios.png`, etc.).
  3. Subir cada screenshot a la carpeta `references/` en Drive usando el MCP de Google Drive.
  4. Una vez subidos, continuar al paso 1 (el análisis opera sobre las imágenes recién capturadas en memoria de sesión — no es necesario releerlas desde Drive).
- **No hay URL** → preguntar al usuario cuál es la URL del sitio de referencia antes de continuar. No inventar ni asumir.

> **Regla:** No se crea carpeta `./references/` local. Drive es la única fuente de verdad para las referencias visuales del proyecto.

**Análisis visual (Paso 1):** Analizar las imágenes capturadas en el Paso 0 (en memoria de sesión). Si el agente ya las tiene en contexto, no releer desde Drive — respetar el principio One-Time Read. Extrae todo en un solo paso:

**1. Inventario de secciones** — Lista cada sección de arriba a abajo con su estructura exacta:

```
Hero → full-viewport, imagen de fondo, overlay oscuro, título 3 líneas, 2 botones
Categorías → header 2 cols + grid 4 cards full-image con overlay
...
```

**2. Colores** — Analiza por capas, sin asumir "blanco puro":

- Fondo base (¿crema cálida? ¿gris frío?)
- Color de marca (botones CTA, badges, acentos)
- Color oscuro (footer, secciones de contraste)
- Grises de texto (principal ≈ #1A1A1A, secundario ≈ #6B6B6B)
- Color de bordes (casi invisible, versión apagada del fondo)

**3. Tipografía** — Observa los headings grandes:

- ¿Serif o sans-serif? ¿Geométrica o humanista?
- ¿Mismo peso en headings y body, o hay contraste?
- Escala aproximada: display ≈ 3.5rem / h2 ≈ 1.75rem / body ≈ 1rem

**4. Layout** — Container width, padding de secciones, border-radius de cards y botones.

**5. Presenta el análisis al usuario y espera confirmación antes de continuar.**

```
Design System extraído:
- Secciones: [lista]
- Colores: bg #XXXX / primario #XXXX / oscuro #XXXX / texto #XXXX
- Fuentes: headings [Nombre] [peso] / body [Nombre]
- Radius: cards Xpx / botones Xpx / Container max-w-XXXX

¿Procedo con el scaffolding?
```

**Escritura técnica:** Antes de preguntar al usuario, el agente debe escribir los tokens de diseño canónicos en `./MEMORY.md` (cuaderno compartido — paleta, fuentes, radios de marca) y el inventario de secciones + estado del scaffolding en `./STATE-web.md` (bitácora operativa del web).

---

## Fase B — Scaffolding del proyecto

El proyecto se crea en `./web-app/`. Las referencias viven en Drive (no crear carpeta `./references/` local).

### B1 — Instalación

```bash
# Desde la raíz del workspace del cliente
mkdir -p ./web-app
cd ./web-app
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npx shadcn@latest init
npm install framer-motion lucide-react clsx tailwind-merge
```

Para Shadcn: Style → Default · Base color → el más cercano al primario · CSS variables → Yes.

```bash
# Estructura de carpetas dentro de src/
mkdir -p src/components/features
mkdir -p src/components/shared
mkdir -p src/lib
```

### B2 — globals.css (template completo)

Reemplaza `./web-app/src/app/globals.css` con los tokens extraídos del diseño:

```css
@import "tailwindcss";

@theme {
  /* ── Colores ─────────────────────────────────────────── */
  --color-brand-primary:       #XXXX;   /* Botones CTA, íconos activos */
  --color-brand-primary-light: #XXXX;   /* Versión clara del primario */
  --color-brand-secondary:     #XXXX;   /* Acento / color secundario */

  --color-bg:      #XXXX;   /* Fondo base de la página */
  --color-bg-card: #XXXX;   /* Fondo de cards / elementos elevados */
  --color-bg-dark: #XXXX;   /* Secciones CTA / footer oscuro */

  --color-text-primary:   #XXXX;   /* Texto principal */
  --color-text-secondary: #XXXX;   /* Subtítulos / texto secundario */
  --color-text-on-dark:   #XXXX;   /* Texto sobre fondos oscuros */

  --color-border: #XXXX;   /* Bordes sutiles */

  /* ── Tipografía ──────────────────────────────────────── */
  --font-heading: var(--font-heading-var), serif;
  --font-body:    var(--font-body-var), sans-serif;

  /* ── Escala tipográfica ──────────────────────────────── */
  --text-display:    3.5rem;   --text-display--line-height:    1.1;
  --text-h1:         2.5rem;   --text-h1--line-height:         1.2;
  --text-h2:         1.75rem;  --text-h2--line-height:         1.3;
  --text-h3:         1.25rem;  --text-h3--line-height:         1.4;
  --text-body-lg:    1.125rem; --text-body-lg--line-height:    1.6;
  --text-body:       1rem;     --text-body--line-height:       1.6;
  --text-small:      0.875rem; --text-small--line-height:      1.5;
  --text-label:      0.75rem;  --text-label--line-height:      1.4;

  /* ── Border radius ───────────────────────────────────── */
  --radius-card:  1rem;
  --radius-btn:   0.5rem;
  --radius-badge: 9999px;

  /* ── Espaciado ───────────────────────────────────────── */
  --spacing-section:      6rem;
  --spacing-section-sm:   4rem;
  --spacing-container-px: 1.5rem;
  --width-container:      80rem;
}

@layer base {
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { min-height: 100vh; }
}

@layer components {
  .container-hubble {
    max-width: var(--width-container);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-container-px);
    padding-right: var(--spacing-container-px);
  }
  .section-padding {
    padding-top: var(--spacing-section);
    padding-bottom: var(--spacing-section);
  }
}
```

> **Zero-Hardcode:** Si durante la construcción necesitas un valor nuevo, agrégalo aquí primero. Nunca valores hardcodeados en componentes (excepto `rgba()` para overlays con opacidad variable).

### B3 — layout.tsx

```tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
// ↑ Reemplaza con las fuentes del diseño extraídas en el análisis

import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body-var',
  display: 'swap',
})

const fontHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nombre del Cliente',       // TODO: Reemplazar
  description: 'Descripción del negocio', // TODO: Reemplazar
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body className="font-body bg-bg text-text-primary antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

### B4 — page.tsx

```tsx
export default function Home() {
  return (
    <main>
      {/* Las secciones se agregan aquí en orden visual de arriba a abajo */}
    </main>
  )
}
```

### B5 — next.config.ts

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
```

### B6 — src/lib/utils.ts

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### B7 — Navbar stub (mínimo para que el layout compile)

`./web-app/src/components/shared/Navbar.tsx`:

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-hubble flex items-center justify-between h-16">
        <Link href="/" className="font-heading font-bold text-h3 text-text-primary">
          {/* TODO: Logo del cliente */}
          NombreCliente
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-small font-medium text-text-secondary hover:text-brand-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="bg-brand-primary text-text-on-dark text-small px-5 py-2 rounded-btn font-medium">
            Cotizar
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
```

`./web-app/src/components/shared/Footer.tsx` — stub mínimo:

```tsx
export default function Footer() {
  return (
    <footer className="bg-bg-dark py-12">
      <div className="container-hubble text-center text-small text-text-on-dark/60">
        {/* TODO: Construir con wd-construccion cuando llegue la sección footer */}
        © {new Date().getFullYear()} NombreCliente
      </div>
    </footer>
  )
}
```

### B8 — Verificación del scaffold

```bash
# Dentro de ./web-app/
npm run dev    # debe correr en localhost:3000 sin errores
npm run build  # debe compilar sin errores de TypeScript
```

Si hay errores de TypeScript en el scaffold, resuélvelos antes de construir componentes.

---

## Fase C — Actualizar MEMORY.md y STATE-web.md

Al finalizar el scaffolding, separar la escritura en **dos archivos** según a quién le sirve:

### C1 — `./MEMORY.md` (compartido — lo lee todo el ecosistema)

Actualizar o crear las secciones de identidad visual. Aquí solo lo que es cross-agent:

```md
## Identidad visual (fuente única de verdad)

### Paleta
| Token | Hex | Uso |
|---|---|---|
| primary | #XXXX | ... |
| ... |

### Tipografías
- Heading: [familia] — Google Fonts: [url]
- Body: [familia] — Google Fonts: [url]
```

### C2 — `./STATE-web.md` (bitácora del web — solo ejecución)

Estado del scaffolding, inventario de secciones del mock, escalas tipográficas y radios específicos del web:

```md
# State — Hubble Web Designer · [Cliente]

## Fase actual
- Skills ejecutados: wd-arranque ✅
- Skills pendientes: wd-construccion (por sección)

## Escalas y radios específicos del web
- Escala tipográfica: display Xrem / h1 Xrem / ...
- Radios: cards Xrem / botones Xrem / ...
- Container: max-w-XXrem
- Spacing de sección: py-Xrem

## Secciones detectadas en referencia global
[lista del inventario de la Fase A]

## Progreso de construcción
| Sección | Estado |
|---|---|
| Scaffolding Next.js | ✅ |
| ... | ⏳ |
```

> No crear un nuevo `CLAUDE.md` — ya existe en la raíz del workspace y declara el contrato.

**Al terminar: indica al usuario que el proyecto está listo para construcción e invoca `wd-construccion` por la primera sección.**
