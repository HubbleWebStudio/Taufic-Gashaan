---
name: wd-construccion
description: Úsalo para construir secciones de un proyecto ya scaffoldeado, una a la vez. Con referencia visual (imagen o URL): análisis milimétrico + replicación fiel amplificada con Vocabulario Compositivo. Sin referencia visual: usar primero wd-prototipo para generar el HTML de referencia, luego volver aquí para construir en Next.js.
---

# Skill: Construcción sección por sección

Una sección a la vez. No construyas la siguiente hasta aprobar la actual.

> **Estándar Hubble:** Cada sección que sale de este skill debe poder estar en Awwwards. Si al ver el screenshot parece una página de WordPress 2014, no se aprueba — se rediseña usando el Vocabulario Compositivo Hubble hasta que alcance el nivel.

---

## Antes de empezar

1. Leer `./MEMORY.md` (compartido) — confirmar colores, fuentes y tokens canónicos del cliente.
2. Leer `./STATE-web.md` (bitácora propia) — confirmar qué secciones están construidas y cuál sigue.
3. Verificar el tipo de referencia disponible:
   - **Imagen** en `./references/sections/` → seguir Paso 1-A
   - **URL de sitio** → seguir Paso 1-B (Chrome MCP)
   - **Sin referencia visual** → activar `wd-prototipo` primero. El `prototipo.html` aprobado se convierte en la referencia para este skill.

---

## Vocabulario Compositivo Hubble

Este es el estándar de calidad visual de Hubble Web Studio. Cada sección debe usar al menos una técnica de este catálogo. No hay secciones "planas" — todo tiene intención compositiva.

### V-01 · OVERFLOW BREAK — Imagen que perfora sección
La imagen o elemento 3D desborda el límite de su sección y entra en la sección adyacente.
```tsx
// Contenedor padre: relative overflow-visible
// Imagen: absolute -bottom-24 right-0 z-20 w-[55%]
<section className="relative overflow-visible">
  <motion.img
    className="absolute -bottom-28 right-[-5%] z-20 w-[52%]"
    initial={{ y: 40, opacity: 0 }}
    animate={isInView ? { y: 0, opacity: 1 } : {}}
    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
  />
</section>
```

### V-02 · Z-LAYER COMPOSITION — Composición en capas Z
Múltiples elementos en el eje Z: fondo → imagen → decorativo → texto. Crea profundidad real.
```tsx
<section className="relative overflow-hidden">
  {/* Layer 0: fondo */}
  <div className="absolute inset-0 z-0 bg-[--color-bg]" />
  {/* Layer 1: imagen principal */}
  <motion.div className="absolute inset-0 z-10" style={{ y: parallaxY }} />
  {/* Layer 2: elemento decorativo flotante */}
  <motion.img className="absolute top-[15%] right-[8%] z-20 w-48 pointer-events-none"
    animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }} />
  {/* Layer 3: contenido texto */}
  <div className="relative z-30 max-w-screen-xl mx-auto px-8 py-32" />
</section>
```

### V-03 · DIAGONAL DIVIDER — Divisor diagonal entre secciones
Transición angular entre sección oscura y clara. Elimina el corte horizontal.
```tsx
// Al final de la sección oscura:
<div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
  <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
    <polygon points="0,80 1440,0 1440,80" fill="var(--color-bg-light)" />
  </svg>
</div>
// O via clip-path en la sección:
// className="[clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]"
```

### V-04 · PERFORATED FRAME — Frame gráfico que el contenido rompe
Marco grueso (borde o rectángulo) que la imagen principal atraviesa en overflow.
```tsx
<div className="relative">
  {/* Frame */}
  <div className="absolute inset-4 border-2 border-[--color-accent] z-0" />
  {/* Imagen que perfora */}
  <motion.img
    className="relative z-10 -mt-8 -mr-8 ml-8 mb-8"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
  />
</div>
```

### V-05 · CASCADING CARDS — Cards en cascada superpuestas
Múltiples cards a diferentes escalas, ángulos y Z-levels. No son un grid — son una composición.
```tsx
const cards = [
  { rotate: -4, x: -20, y: 0, z: 10, scale: 0.92 },
  { rotate: 2, x: 30, y: -15, z: 20, scale: 0.96 },
  { rotate: 0, x: 0, y: 0, z: 30, scale: 1 }, // card frontal
]
// Cada card: absolute con transform aplicado, stagger de entrada
```

### V-06 · OVERSIZED VIEWPORT TYPE — Tipografía que ocupa el viewport
Headline a escala de 10-20vw. El texto ES la composición.
```tsx
// Tailwind: text-[12vw] leading-[0.9] font-black tracking-tight
// Con color en una palabra:
<h1 className="text-[11vw] leading-none font-black">
  URBAN{' '}
  <span className="text-[--color-accent]">Verge</span>
</h1>
```

### V-07 · GHOST TYPE — Texto con fade progresivo
El texto transiciona de sólido a transparente — visible en la parte superior, desaparece hacia abajo.
```tsx
<h2 className="[mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)]
               text-5xl font-bold">
  A MODERN PLATFORM
  <br /><span className="opacity-50">TRUSTED LOCAL</span>
  <br /><span className="opacity-20">EXPERTISE</span>
</h2>
```

### V-08 · MIXED TYPE TENSION — Tensión entre familias tipográficas
Combinar serif bold con script italic en la misma composición. Crea carácter.
```tsx
<h1 className="font-display font-black text-8xl leading-none">
  TERRA
  <span className="font-serif italic font-normal ml-4 text-6xl align-bottom opacity-90">
    cotta
  </span>
</h1>
```

### V-09 · CUTOUT SUBJECT — Sujeto cortado que desborda página
PNG con fondo transparente (persona, objeto, edificio) que extiende más allá de su sección.
```tsx
<section className="relative overflow-visible min-h-[600px]">
  <div className="relative z-10 max-w-2xl pt-24 pl-16">
    {/* Contenido texto izquierda */}
  </div>
  <motion.img
    src={IMG.hero.cutout}  // PNG transparente
    className="absolute right-0 top-0 h-[120%] w-auto object-contain z-20
               drop-shadow-2xl pointer-events-none"
    initial={{ x: 60, opacity: 0 }}
    animate={isInView ? { x: 0, opacity: 1 } : {}}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  />
</section>
```

### V-10 · ANNOTATION CALLOUTS — Etiquetas flotantes de anotación
Cards pequeñas que apuntan a elementos de la composición como callouts de UI.
```tsx
// Posicionadas con absolute, z-30, sobre el sujeto/imagen
<motion.div
  className="absolute top-[35%] right-[28%] z-30
             bg-white rounded-xl shadow-xl px-4 py-3 w-44"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={isInView ? { scale: 1, opacity: 1 } : {}}
  transition={{ delay: 0.6, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
>
  <p className="text-xs text-muted-foreground font-medium">Wearable Integration</p>
</motion.div>
```

### V-11 · GLASSMORPHISM CARD — Card de cristal esmerilado
Overlay sobre imagen con efecto frosted glass. Para estadísticas, CTAs o highlights.
```tsx
<div className="backdrop-blur-md bg-white/[0.08] border border-white/20
                rounded-2xl px-6 py-5 shadow-xl">
  <p className="text-white/90 text-sm font-medium">Energy Efficiency</p>
  <p className="text-white text-xs mt-1 opacity-70">Leading sustainable design...</p>
</div>
```

### V-12 · TRUST BAR — Barra de logos de confianza
Strip horizontal de partners/clientes. Refuerza credibilidad.
```tsx
<div className="flex items-center justify-center gap-10 flex-wrap opacity-60">
  {logos.map((Logo, i) => (
    <motion.div key={i}
      className="grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08 }}
    >
      <Logo className="h-7 w-auto" />
    </motion.div>
  ))}
</div>
```

### V-13 · TECH SPEC TABLE — Tabla de especificaciones como elemento de diseño
Datos técnicos del producto/propiedad como bloque tipográfico limpio. No es una tabla HTML genérica.
```tsx
<dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
  {specs.map(({ label, value }) => (
    <div key={label} className="border-b border-white/10 pb-2">
      <dt className="text-white/40 uppercase tracking-widest text-[10px] font-medium">{label}</dt>
      <dd className="text-white font-medium mt-0.5">{value}</dd>
    </div>
  ))}
</dl>
```

### V-14 · FLOATING VIDEO CARD — Mini reproductor de video flotante
Card de video posicionado como overlay o elemento independiente.
```tsx
<motion.div
  className="absolute bottom-8 right-8 z-30 rounded-2xl overflow-hidden
             shadow-2xl w-56 cursor-pointer group"
  whileHover={{ scale: 1.04 }}
>
  <div className="relative aspect-video bg-black">
    <img src={thumbnail} className="w-full h-full object-cover opacity-80" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm
                      flex items-center justify-center group-hover:bg-white/30 transition">
        <PlayIcon className="w-5 h-5 text-white ml-0.5" />
      </div>
    </div>
    <span className="absolute bottom-2 right-2 text-white text-xs bg-black/50
                     rounded px-1.5 py-0.5">1:17</span>
  </div>
</motion.div>
```

### V-15 · INLINE HEADLINE PILLS — Pills de ícono dentro del headline
Badges con ícono embebidos directamente en el texto del título.
```tsx
<h1 className="text-5xl font-bold leading-tight">
  Smart Platform for Health & Fitness{' '}
  <span className="inline-flex items-center gap-2 align-middle">
    {features.map((icon, i) => (
      <span key={i} className="inline-flex items-center justify-center
                                w-10 h-10 rounded-full bg-muted text-muted-foreground">
        {icon}
      </span>
    ))}
  </span>
</h1>
```

### V-16 · SOCIAL PROOF WIDGET — Widget de prueba social flotante
Stack de avatares + número + badge de confianza como elemento flotante.
```tsx
<motion.div className="flex items-center gap-3 bg-white rounded-full
                        shadow-lg px-4 py-2.5 w-fit"
  initial={{ y: 20, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 1 } : {}}
  transition={{ delay: 0.8 }}
>
  <div className="flex -space-x-2">
    {avatars.slice(0, 3).map((src, i) => (
      <img key={i} src={src} className="w-8 h-8 rounded-full ring-2 ring-white object-cover" />
    ))}
  </div>
  <div>
    <p className="text-xs font-bold leading-none">Plus 25k</p>
    <p className="text-[10px] text-muted-foreground">Trusted!</p>
  </div>
</motion.div>
```

### V-17 · 3D FLOAT OBJECT — Objeto 3D flotante con animación de levitación
Render/ilustración sin fondo que flota con animación continua suave.
```tsx
<motion.img
  src={IMG.hero.render3d}  // PNG con fondo transparente
  className="w-full max-w-2xl drop-shadow-2xl pointer-events-none"
  animate={{ y: [0, -18, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
/>
```

---

## Biblioteca de Animaciones Hubble

### Entradas de sección
```tsx
// Estándar — fade + rise
initial={{ opacity: 0, y: 28 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}

// Clip-path reveal — texto que emerge de máscara
initial={{ clipPath: 'inset(0 100% 0 0)' }}
animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}

// Scale desde centro — elementos hero
initial={{ scale: 0.88, opacity: 0 }}
animate={isInView ? { scale: 1, opacity: 1 } : {}}
transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}

// Slide desde borde
initial={{ x: -60, opacity: 0 }}
animate={isInView ? { x: 0, opacity: 1 } : {}}
transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
```

### Stagger — grupos de elementos
```tsx
// Contenedor padre
variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
initial="hidden"
animate={isInView ? 'visible' : 'hidden'}

// Hijo
variants={{
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
}}

// Texto por líneas — stagger manual
{lines.map((line, i) => (
  <motion.span key={i} className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: '100%' }}
      animate={isInView ? { y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
    >
      {line}
    </motion.span>
  </motion.span>
))}
```

### Parallax scroll
```tsx
// En el componente:
const ref = useRef(null)
const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
const y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

// Aplicar a imagen de fondo o elemento decorativo:
<motion.div style={{ y }} className="absolute inset-0">
  <img className="w-full h-[120%] object-cover" />
</motion.div>
```

### Hover — interacciones
```tsx
// Lift estándar
whileHover={{ y: -6, transition: { duration: 0.25 } }}
whileTap={{ scale: 0.97 }}

// Perspectiva 3D en card
style={{ perspective: 1200 }}
whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
transition={{ duration: 0.3 }}

// Imagen que crece al hover
whileHover={{ scale: 1.06 }}
transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
```

### Animaciones continuas
```tsx
// Levitación (objetos 3D, decorativos)
animate={{ y: [0, -16, 0] }}
transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}

// Pulso sutil
animate={{ scale: [1, 1.04, 1] }}
transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}

// Rotación lenta (elementos decorativos)
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
```

---

## Por cada sección — ciclo obligatorio

### Paso 1-A — Referencia imagen: análisis milimétrico

Lee `./references/sections/0X.png` **una sola vez** y extrae todo en un único paso:

```
Sección: [nombre]
Layout: [grid cols / flex / full-width / split / etc.]
Técnicas compositivas detectadas: [lista de técnicas del Vocabulario Hubble visibles]
Elementos: [lista exacta]
Colores específicos: [valores no presentes en tokens base]
Tipografía: [tamaño estimado, peso, estilo]
Espaciados: [padding, gaps]
Efectos: [gradientes, overlays, sombras, blur, clip-path]
Texto visible: [transcribir todo]
Animaciones inferidas: [qué debería moverse y cómo]
Dudas: [preguntar antes de construir]
```

### Paso 1-B — Referencia URL (Chrome MCP): inspección profunda

Cuando la referencia es una URL (sitio con motion, WebGL, efectos que no se capturan en screenshot):

```
1. navigate(url) — cargar la página
2. read_page() — DOM: identificar secciones, componentes, estructura
3. javascript_tool:
   // Librerías de animación
   console.log({
     gsap: typeof window.gsap,
     three: typeof window.THREE,
     lenis: typeof window.Lenis,
     scrollTrigger: typeof ScrollTrigger,
   })
4. javascript_tool:
   // CSS custom properties del design system
   const root = getComputedStyle(document.documentElement)
   const props = ['--color', '--font', '--radius', '--spacing']
     .flatMap(p => [...document.styleSheets]
       .flatMap(s => { try { return [...s.cssRules] } catch { return [] } })
       .filter(r => r.cssText?.includes(p))
       .map(r => r.cssText.slice(0, 200))
     )
   console.log(props.join('\n'))
5. javascript_tool:
   // Fuentes cargadas
   document.fonts.ready.then(() =>
     console.log([...document.fonts].map(f => `${f.family} ${f.weight} ${f.style}`).join('\n'))
   )
6. Identificar patrones de movimiento por observación: ¿parallax? ¿scroll-linked? ¿cursor tracking? ¿page transitions?
7. Sintetizar en el mismo formato de análisis que Paso 1-A, añadiendo:
   - Stack de animación detectado: [gsap / framer / css / webgl]
   - Patrones de movimiento: [descripción]
   - Equivalente en Framer Motion: [cómo se replica]
```

> Si la librería es GSAP/Three.js y el efecto es complejo (WebGL, shaders), documentar el patrón y proponer la aproximación más cercana posible en Framer Motion. No replicar exactamente — capturar el espíritu del movimiento.

### Paso 1.5 — Consulta puntual a `wd-biblioteca` (solo si aplica)

Si tras el análisis hay una decisión abierta que la referencia no resuelve — qué chart usar, qué íconos, qué comportamiento hover, qué fuente combina — invocar la biblioteca en modo puntual:

```bash
cd ./hubble-web-designer/.claude/skills/wd-biblioteca
python3 scripts/search.py "[query]" --domain <dominio>
```

Dominios: `style`, `color`, `typography`, `google-fonts`, `icons`, `chart`, `landing`, `product`, `ux`, `react`, `web`.

Transcribir solo la decisión al análisis con 1 línea de justificación. Si la sección se resuelve con la referencia y los tokens activos, saltar este paso.

### Paso 2 — Declaración de técnica + construcción

**Antes de escribir código**, declarar:

```
Técnica(s) compositivas a usar en esta sección:
  - Principal: [V-XX · Nombre] — [por qué aplica a esta sección]
  - Secundaria: [V-XX · Nombre] (si aplica)

Animación principal: [nombre del patrón de la Biblioteca Hubble]
Complejidad de capas: [cuántas capas Z tiene la composición]
```

Si no hay ninguna técnica del vocabulario → **no continuar**. Proponer al usuario cuál aplicaría antes de construir.

**Archivo:** `./web-app/src/components/features/[NombreSeccion].tsx`

**Reglas estrictas:**
- Solo tokens de `./web-app/src/app/globals.css` (`@theme {}`). Valores nuevos → agregarlos primero al theme.
- Cero valores hardcodeados en JSX (excepto `rgba()` para overlays con opacidad variable).
- Framer Motion para todas las entradas y hovers. Usar la Biblioteca de Animaciones Hubble.
- `useInView` con `once: true` para triggers de scroll. `threshold: 0.15` por defecto.
- Imágenes externas → Unsplash con dimensiones correctas.
- Imágenes del cliente → **Vercel Blob, nunca `public/`**. Flujo obligatorio:
  1. **Carpeta temporal dedicada** — nunca apuntar el script directamente a `/tmp`.
  2. `mkdir -p /tmp/<cliente>-upload`
  3. Copiar solo las imágenes a subir a esa carpeta.
  4. `node scripts/upload-images.mjs /tmp/<cliente>-upload imagenes/seccion` desde `./web-app/`
  5. Leer `./web-app/blob-manifest.json` — copiar la URL generada
  6. Registrar en `./web-app/src/lib/images.ts` bajo la sección correspondiente
  7. Referenciar: `import { IMG } from '@/lib/images'` → `src={IMG.seccion.nombre}`
  8. `rm -rf /tmp/<cliente>-upload/`

  **Flujo Drive → Blob:** Si las imágenes viven en Google Drive:
  1. `mcp__claude_ai_Google_Drive` (`search_files` → `download_file_content`) → `/tmp/<cliente>-upload/`
  2. `node scripts/upload-images.mjs /tmp/<cliente>-upload imagenes/<seccion>`
  3. URLs de `blob-manifest.json` → `images.ts`
  4. `rm -rf /tmp/<cliente>-upload/`

- Todo texto no real: `{/* TODO: Reemplazar con contenido real */}`

### Paso 3 — Importar en page.tsx

Agregar el componente en `./web-app/src/app/page.tsx` en el orden correcto (arriba a abajo).

### Paso 4 — Verificación visual + gate de calidad

Pedir al usuario screenshot de `localhost:3000`.

**Gate 1 — Fidelidad a la referencia:**
```
¿El layout general (columnas, dirección, proporciones) coincide con la referencia? [sí / no]
¿La escala tipográfica y pesos son fieles? [sí / no]
¿La paleta de colores respeta la referencia? [sí / no]
¿Se usó al menos una técnica del Vocabulario Compositivo Hubble? [sí / cuál / no]
¿Los elementos viven en el espacio o están encerrados en cajas rectangulares? [espacio / cajas]
```

Si layout, tipografía o colores no coinciden → **no avanzar al Gate 2**. Corregir fidelidad primero. El Vocabulario Compositivo amplifica la referencia — nunca la reemplaza. Solo si fidelidad pasa y la composición se ve genérica, agregar técnica faltante.

**Gate 2 — Fidelidad a la referencia (solo si Gate 1 pasa):**
```
□ Layout (columnas, dirección, alineación)
□ Tipografía (familia, peso, tamaño relativo, escala)
□ Colores (fondo, texto, botones, overlays)
□ Espaciados (padding interno, gaps)
□ Border-radius
□ Efectos (sombras, gradientes, blur, clip-path)
□ Contenido (textos, íconos, estructura de datos)
□ Animaciones (¿se sienten como la referencia?)
```

Lista TODAS las discrepancias. Corregir en un solo paso. Objetivo: ≥90% de fidelidad a la referencia + 100% de Gate 1.

### Paso 5 — Aprobar y registrar

Cuando la sección pase ambos gates:
1. Actualizar `./STATE-web.md` → marcar ✅ con las técnicas compositivas usadas. Si se introdujo token nuevo de marca (color, fuente), reflejarlo también en `./MEMORY.md`.
2. Confirmar: "✅ [Sección] aprobada — técnicas: [lista]. ¿Continúo con [siguiente]?"

### Paso 6 — Pre-Entrega (al cerrar la última sección)

Obligatorio solo cuando el usuario indica que la página está lista para entregar.

Invocar **`wd-auditoria`**: `npx impeccable detect` + revisión heurística Nielsen + 2 personas. Produce score técnico /20, score UX /40, plan P0-P3.

Todo P0 se resuelve. P1 se negocia. P2/P3 a backlog.

Registrar score final e issues aceptados en `./STATE-web.md`. Si hubo ajuste cross-agent (paleta, fuente), reflejar en `./MEMORY.md`.

---

## Orden recomendado de construcción

`Navbar → Hero → [secciones medias en orden visual] → CTA → Footer`

El Navbar y Footer primero porque definen la identidad que se repite en toda la página. El Hero es la sección que define el tono compositivo — si el Hero pasa el Gate 1, el resto de la página tiene un estándar claro a seguir.
