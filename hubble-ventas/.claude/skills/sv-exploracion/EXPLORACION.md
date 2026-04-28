---
name: sv-exploracion
description: Genera el deck de primer contacto para un prospecto sin necesidad de brief. Investiga su presencia digital actual, arma el diagnóstico, incluye una propuesta de marketing de 1 mes y genera la presentación en Canva. Orquesta con hubble-web-designer para el prototipo web. Actívalo cuando el usuario diga "prepara el primer contacto con [cliente]", "arma la exploración de [cliente]", "voy a ver a [cliente]", "necesito algo para presentarle a [cliente]" o cuando el prospecto aún no tenga brief llenado.
---

# Skill: sv-exploracion
## Deck de Primer Contacto · Sin brief requerido

Este skill genera el paquete completo para el primer acercamiento comercial con un prospecto. No requiere brief — trabaja con información pública y el giro del negocio. El objetivo no es cerrar: es despertar interés, demostrar que ya hiciste tarea sobre su negocio, y dejar la puerta abierta para el brief y la propuesta completa.

**Lo que entrega este skill:**
1. Deck de Canva (primer contacto) — diagnóstico digital + propuesta de marketing muestra + CTA
2. Instrucción para hubble-web-designer — prototipo web del giro del cliente
3. Checklist de la reunión — qué mostrar en qué orden

---

## Insumos Requeridos

Antes de ejecutar, verificar que el usuario proporcionó:

- [ ] Nombre del prospecto / empresa
- [ ] Giro o industria (ej: "firma de arquitectura", "restaurante", "despacho contable")
- [ ] Ciudad o mercado (si aplica — para buscar competencia local)
- [ ] Cualquier dato extra conocido (Instagram, sitio web actual, nombre del dueño)

Si el usuario solo da nombre y giro, es suficiente para arrancar. No detener por falta de datos extra.

---

## Fase 1 — Investigación de Presencia Digital (Web Search)

Buscar en este orden:

### 1.1 Auditoría del prospecto
- ¿Tienen sitio web? ¿Cómo es? (velocidad, mobile, diseño, CTA visible)
- ¿Tienen Instagram activo? ¿Cuándo fue la última publicación?
- ¿Aparecen en Google con su nombre? ¿Tienen Google Business?
- ¿Tienen reseñas visibles?

Sintetizar en máximo 5 observaciones concretas, con tono de "oportunidad" no de crítica. Ejemplo:
> "Su sitio web existe pero no está optimizado para móvil, donde el 78% de sus clientes potenciales buscaría sus servicios."

### 1.2 Benchmark del giro
Buscar 2-3 datos actuales (2024-2026) sobre digitalización en el giro del cliente. Priorizar datos que justifiquen la inversión. Ejemplos para arquitectura:
- % de clientes que buscan arquitectos en línea antes de contactar
- Crecimiento de presencia digital en firmas de arquitectura en México
- Impacto del portafolio digital en conversión de prospectos

### 1.3 Competencia local (si aplica)
Identificar 2-3 competidores del mismo giro y ciudad. Para cada uno: ¿tienen web? ¿tienen Instagram activo? ¿qué tan bien se ven digitalmente? Esto se usa en el deck para mostrar que la competencia sí está invirtiendo.

Guardar todos los hallazgos antes de pasar a Fase 2.

---

## Fase 2 — Propuesta de Marketing Muestra (1 mes)

Construir un plan de contenido genérico pero creíble para el giro del prospecto. La idea es mostrar cómo se vería su presencia en Instagram si trabajaran con Hubble — no es un plan real todavía, es una muestra de lo que es posible.

**Estructura del plan de 1 mes:**

| Semana | Contenido |
|---|---|
| Semana 1 | 1 Reel de presentación del negocio + 2 posts de producto/servicio |
| Semana 2 | 1 Reel de proceso o behind-the-scenes + 2 posts de portafolio |
| Semana 3 | 1 Reel educativo (tip del giro) + 2 posts de testimonial o proyecto |
| Semana 4 | 1 Reel de CTA directo + 2 posts de cierre de mes |

**Totales del mes:** 4 Reels + 8 Posts = 12 piezas de contenido

Adaptar los temas al giro. Para arquitectura:
- Reels: tour de un proyecto terminado, proceso de diseño, "antes y después", tips de diseño de interiores
- Posts: renders, planos conceptuales, proyectos destacados, equipo

Incluir en el deck 1 slide con el resumen del plan y 1 slide con ejemplos de cómo se vería (describir visualmente, no generar imágenes todavía).

---

## Fase 3 — Deck en Canva (Duplicar Plantilla Hubble)

**Misma plantilla que sv-propuesta.** El deck de primer contacto y el deck de cierre comparten el mismo design system de Hubble. Esto garantiza coherencia visual y reduce el trabajo manual de Santiago.

**Flujo:**
1. Verificar en MEMORY.md del Maestro el ID de plantilla activo (sección "Recursos de Ventas"). ID actual: `DAHEV67qtbE`.
2. Pedir al usuario que duplique la plantilla manualmente en Canva (File → Make a copy) y que comparta el link del nuevo diseño.
   > El MCP de Canva no tiene herramienta de duplicado directo — la copia la hace Santiago en 10 segundos.
3. Renombrar el diseño: `[NOMBRE_PROSPECTO] — Exploración Hubble [FECHA]`
4. Anotar el nuevo design ID.

**Contenido por slide:**

| # | Slide | Contenido |
|---|---|---|
| 1 | Portada | "Hubble Web Studio × [NOMBRE_PROSPECTO]" · fecha · tagline de Hubble |
| 2 | Contexto de mercado | [DATO_MERCADO_1] con ícono o número grande |
| 3 | Contexto de mercado | [DATO_MERCADO_2] |
| 4 | Contexto de mercado | [DATO_MERCADO_3] |
| 5 | Diagnóstico — tu situación actual | 3-5 hallazgos de la auditoría (Fase 1.1), formulados como oportunidades |
| 6 | Lo que hace la competencia | 2-3 competidores: estado digital de cada uno. Mensaje implícito: "ya están invirtiendo" |
| 7 | La solución — ecosistema digital | Descripción breve de lo que Hubble construiría para ellos: web + redes + WhatsApp |
| 8 | Propuesta de contenido (1 mes) | Tabla semanal de la Fase 2 |
| 9 | Así se vería tu Instagram | Descripción visual de 3-4 piezas ejemplo del plan |
| 10 | Precios base | Los 3 paquetes web (One-Page, Multi-Página, Multi-Página Plus) + mención de complementos |
| 11 | Siguiente paso | "Si te interesa, la siguiente reunión es el brief: 30 min y tendrás una propuesta personalizada en 48h" |
| 12 | CTA final | Logo de Hubble · datos de contacto de Santiago · Instagram de Hubble |

---

## Fase 4 — Prototipo Web (Inline con hubble-web-designer)

Al terminar el deck, ejecutar el prototipo web dentro de la misma sesión — sin delegar al usuario ni abrir otra ventana.

**Flujo:**

1. Verificar que existe `./hubble-web-designer/CLAUDE.md` en el workspace del proyecto activo.
2. Leer `./hubble-web-designer/CLAUDE.md` con `Read`.
3. Leer el skill `wd-diseño` con `Read` — ruta: `./hubble-web-designer/.claude/skills/wd-diseño/DISEÑO.md`.
4. Asumir el rol de `hubble-web-designer` para esta fase y ejecutar el prototipo bajo las reglas de `wd-diseño`.

**Requisitos del prototipo:**
- Una sola página (landing) — no un sitio completo
- Diseño aspiracional del giro: debe verse como el mejor sitio del sector, no genérico
- Secciones: Hero con headline potente · Servicios o productos · Portafolio o galería · Contacto vía WhatsApp
- Stack: Next.js + Tailwind + Framer Motion (el estándar de Hubble)
- Sin datos reales del cliente — usar copy placeholder elegante
- El diseño debe poder correr en localhost para mostrarse en reunión

> **Modo demo:** Este prototipo es un entregable comercial, no de producción. `wd-auditoria` no es obligatoria en este contexto — aplicar solo si el cliente ya está en cierre y pide un sitio más acabado.

---

## Fase 5 — Checklist de la Reunión

Entregar al usuario este checklist antes de la reunión:

```
✅ Deck de Canva listo: [link]
⏳ Prototipo web: correr en localhost antes de la reunión (instrucción arriba)
✅ Página de Hubble: hubblewebstudio.com — abrir en pestaña lista
✅ Precios: visibles en la página de Hubble

ORDEN RECOMENDADO EN LA REUNIÓN:
1. Apertura (2 min) — quién es Hubble, conexión personal con el prospecto
2. Deck: diagnóstico digital (5-7 min) — mostrar que investigaste SU negocio
3. Deck: propuesta de marketing muestra (3 min) — mostrar cómo se vería su Instagram
4. Prototipo web en localhost (3-5 min) — "así se vería tu sitio"
5. Página de Hubble (2 min) — proyectos realizados, credibilidad
6. Precios en página (2 min) — transparencia total
7. Cierre (2 min) — "¿agendamos el brief? Son 30 min y en 48h tienes tu propuesta"

Tiempo total estimado: 20-25 minutos
```

---

## Notas de Mejora Continua

> Esta sección se actualiza después de cada primer contacto ejecutado.

- **Taufic Gashaan (2026-04-27):** Primera ejecución real. La Fase 4 originalmente delegaba al usuario abrir otra sesión de hubble-web-designer. En la práctica, el agente ejecutó el prototipo inline leyendo el CLAUDE.md y el skill `wd-diseño` directamente. Funcionó mejor: el contexto del brief ya estaba disponible y no hubo fricción de cambio de sesión. Skill actualizado en v1.1 para reflejar esta arquitectura.
