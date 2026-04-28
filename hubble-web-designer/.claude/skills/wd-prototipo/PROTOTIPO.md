---
name: wd-prototipo
description: Úsalo cuando no hay referencia visual propia y el usuario quiere construir algo nuevo, o cuando quiere replicar una página de referencia antes de pasar a Next.js. Genera un index.html standalone, sección por sección, con HTML + CSS embebido. Sin frameworks, sin creatividad — solo replicación milimétrica. El HTML aprobado se convierte en la referencia de wd-construccion.
---

# Skill: wd-prototipo
## HTML fiel — sección por sección

Una sección a la vez. El agente no avanza hasta que el usuario aprueba visualmente la sección actual.

> **Propósito único:** replicar lo que se ve. Cero decisiones de diseño propias. Si la referencia tiene una caja azul con texto blanco centrado, eso es lo que se construye. No se interpreta, no se mejora, no se "eleva".

---

## Antes de empezar

1. Identificar la referencia disponible:
   - **Screenshot(s)** → el usuario los provee (carpeta local, imagen pegada, etc.)
   - **URL** → el agente la abre con Chrome MCP, toma screenshot sección por sección
   - **Descripción textual** → solo si no hay imagen; el agente pide al usuario que la amplíe hasta tener claridad suficiente

2. Confirmar el output esperado:
   - Un único archivo `./web-app/prototipo.html` (o la ruta que indique el usuario)
   - HTML + CSS embebido en `<style>`. Sin JS salvo que la referencia tenga interacciones que valgan la pena aproximar.
   - Sin dependencias externas salvo Google Fonts (link en `<head>`).

3. Definir el plan de secciones antes de construir:

```
Secciones detectadas:
1. Navbar    — [descripción breve del layout]
2. Hero      — [descripción breve]
3. [...]
N. Footer   — [descripción breve]
```

Mostrar al usuario y pedir confirmación. Sin aprobación no se construye.

---

## Por cada sección — ciclo

### Paso 1 — Análisis de la sección

Leer la referencia (imagen o screenshot vía Chrome MCP) una sola vez y extraer:

```
Sección: [nombre]
Fondo: [color exacto / imagen]
Layout: [flex / grid / posicionamiento]
Fuente heading: [familia, peso, tamaño aproximado, color]
Fuente body: [familia, peso, tamaño aproximado, color]
Colores usados: [lista hex o rgb]
Elementos: [lista exacta — botones, íconos, imágenes, badges, etc.]
Espaciados clave: [padding, gaps, márgenes notables]
Border-radius: [valores visibles]
Sombras / efectos: [box-shadow, blur, gradiente, etc.]
Texto visible: [transcribir todo el texto real]
Ancho máximo del contenedor: [estimado en px]
```

No dejar campos vacíos. Si algo no es visible, estimarlo y marcarlo con `(estimado)`.

### Paso 2 — Construcción

Generar el bloque HTML+CSS de la sección. Reglas:

- **Sin hardcode de dimensiones de viewport** salvo que la referencia lo requiera explícitamente.
- **Variables CSS** para colores y fuentes repetidos — definirlas en `:root {}` al inicio del `<style>`.
- **Google Fonts:** agregar el `<link>` correcto en `<head>`. Usar la fuente que más se acerque a la referencia.
- **Imágenes:** usar Unsplash con las dimensiones adecuadas. URL directa en `<img src="">`.
- **Íconos:** usar Heroicons o Lucide inline SVG si son simples. No depender de icon fonts externas.
- **No Flexbox cuando Grid replica mejor la referencia, y viceversa.** Elegir según lo que se ve.
- **Responsive:** el prototipo es desktop-first. Si la referencia es mobile, adaptar. No agregar breakpoints que la referencia no tenga.

Después de generar el bloque, integrarlo en el `prototipo.html` completo y mostrar el archivo actualizado.

### Paso 3 — Verificación visual

Pedir al usuario que abra `prototipo.html` en el navegador (o hacerlo via Chrome MCP si ya está abierto) y tome un screenshot.

Checklist de fidelidad — marcar cada ítem:

```
□ Fondo correcto (color / imagen)
□ Layout coincide (columnas, dirección, proporciones)
□ Tipografía fiel (familia, peso, tamaño relativo)
□ Colores correctos (fondo, texto, botones, bordes)
□ Espaciados similares (padding, gaps)
□ Border-radius correcto
□ Efectos presentes (sombras, gradientes, blur)
□ Texto correcto
□ Elementos todos presentes
```

Si hay discrepancias → corregir en un solo paso. No avanzar a la siguiente sección hasta aprobar la actual.

### Paso 4 — Aprobar y continuar

Cuando el usuario aprueba:
- Confirmar: "✅ [Sección] aprobada. ¿Continúo con [siguiente]?"
- Actualizar el plan de secciones marcando la completada.

---

## Cierre

Cuando todas las secciones estén aprobadas:

```
✅ Prototipo completo — [N] secciones.

Archivo: [ruta/prototipo.html]

Siguiente paso: activar wd-construccion para portar este prototipo a Next.js.
El HTML aprobado es la referencia visual — wd-construccion lo toma como Paso 1-A.
```

Actualizar `./STATE-web.md` con la entrada:
```
- wd-prototipo completado [fecha] — prototipo.html listo como referencia para wd-construccion
```

---

## Reglas de Operación (Core)

- **Sin imágenes de referencia, no hay prototipo.** Este skill NO puede operar "a ciegas". Si el usuario no ha provisto imágenes (en `capturas/` o como URL), pedirlas antes de empezar. Validado en Taufic 2026-04-28: con 4 imágenes el prototipo quedó aprobado al primer intento.
- **Flujo de imágenes en Taufic:** el usuario sube las imágenes a `../capturas/` antes de invocar el skill. El agente las lee con One-Time Read en el Paso 1 de cada sección.
- **Fidelidad sobre estética.** Si la referencia tiene algo que parece "feo", se replica igual. No se interpreta.
- **Sección por sección, sin saltarse.** El orden del plan es el orden de construcción.
- **Sin frameworks.** HTML semántico + CSS embebido. Nada más.
- **Un solo archivo de output.** `prototipo.html` acumula las secciones. No archivos parciales.
- **Chrome MCP como aliado.** Si la referencia es una URL, usar `navigate` + `screenshot` para capturar cada sección. No pedir al usuario que lo haga manualmente.
