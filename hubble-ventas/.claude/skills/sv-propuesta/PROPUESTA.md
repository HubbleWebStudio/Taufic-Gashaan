---
name: sv-propuesta
description: Genera una propuesta comercial completa en Canva para un prospecto. Requiere un brief llenado. Actívalo cuando el usuario diga "genera la propuesta para [cliente]", "tengo el brief listo", "arma la presentación de ventas" o "prepara la propuesta".
---

# Skill: sv-propuesta
## Generación de Propuesta Comercial en Canva

Este skill toma un brief de descubrimiento llenado y produce una propuesta profesional en Canva, duplicando la plantilla oficial de Hubble y rellenando cada sección con contenido personalizado al prospecto.

---

## Insumos Requeridos

Antes de ejecutar cualquier fase, verificar que el brief contiene:

- [ ] Nombre del proyecto / empresa
- [ ] Giro o industria del negocio
- [ ] Diagnóstico: qué hace, qué problema tiene, qué quiere lograr
- [ ] Referencias web y competidores mencionados
- [ ] Identidad de marca: colores, tono, logo (si existe)
- [ ] Alcance del proyecto: secciones, funcionalidades, productos
- [ ] Presupuesto estimado

Si alguno de estos campos está vacío, **detener y listar los faltantes al usuario antes de continuar.**

---

## ID de Plantilla Canva

> **Plantilla oficial:** `DAHEV67qtbE` (Vivero Las Rosas — versión con placeholders)
>
> ⚠️ Antes de usar, verificar en MEMORY.md del Maestro si existe un ID de plantilla más reciente en la sección "Recursos de Ventas".

---

## Fases de Ejecución

### Fase 1 — Investigación de Mercado (Web Search)

Antes de tocar Canva, investigar:

1. **Estadísticas de industria** relevantes al giro del prospecto (2024-2026). Buscar 2-3 datos duros que justifiquen la inversión digital.

2. **Análisis de competidores directos** mencionados en el brief: visitar cada sitio web, identificar qué hacen bien y qué les falta. Máximo 3 competidores.

3. **Referentes de estatus/nicho y estilo de vida** mencionados en el brief: visitar y describir qué elemento visual o de posicionamiento los hace aspiracionales para el prospecto.

Guardar los hallazgos en un bloque de notas interno antes de pasar a Fase 2.

---

### Fase 2 — Duplicar Plantilla en Canva

1. Usar el MCP de Canva para importar/duplicar la plantilla oficial.
2. Renombrar el diseño: `[NOMBRE_CLIENTE] — Propuesta Hubble [FECHA]`
3. Anotar el nuevo design ID para usarlo en las fases siguientes.

> Si el MCP no permite duplicar directamente, informar al usuario y pedirle que lo haga manualmente desde Canva (File → Make a copy) y que comparta el link del nuevo diseño.

---

### Fase 3 — Edición de Contenido (Canva MCP)

Usar `start-editing-transaction` → `perform-editing-operations` → `commit-editing-transaction`.

Editar slide por slide en este orden:

#### Slides de Portada y Contexto
| Placeholder | Contenido a insertar |
|---|---|
| `[NOMBRE_CLIENTE]` | Nombre del proyecto del brief |
| `[FECHA]` | Fecha actual |
| `[DATO_MERCADO_1]` | Estadística más impactante del giro (Fase 1) |
| `[DATO_MERCADO_2]` | Segundo dato de mercado |
| `[DATO_MERCADO_3]` | Tercer dato de mercado |

#### Slides de Diagnóstico
| Placeholder | Contenido a insertar |
|---|---|
| `[DESAFIO_ACTUAL]` | Problema actual del negocio (extraído del brief: sección 2 Visión + sección 3 Audiencia) |
| `[META_ECOSISTEMA]` | Descripción de la solución propuesta en términos del cliente |

#### Slides de Competencia y Referentes
| Placeholder | Contenido a insertar |
|---|---|
| `[COMPETIDOR_1]` | Nombre + URL + observación (Fase 1) |
| `[COMPETIDOR_2]` | Nombre + URL + observación |
| `[COMPETIDOR_3]` | Nombre + URL + observación |
| `[REFERENTE_NICHO_1]` | Referente de estatus/nicho con observación |
| `[REFERENTE_VIDA_1]` | Referente de estilo de vida con observación |

#### Slides de Arquitectura y Sistema de Diseño
| Placeholder | Contenido a insertar |
|---|---|
| `[SECCIONES_SITIO]` | Lista de páginas/secciones del alcance (brief sección 4 y 6) |
| `[COLOR_PRIMARIO]` | Hex del color principal del cliente (brief sección 7) |
| `[COLOR_SECUNDARIO]` | Hex del color secundario |
| `[COLOR_BASE]` | Hex del color de fondo/neutro |
| `[TONO_MARCA]` | Tono de comunicación (brief sección 7) |
| `[INSTAGRAM]` | Handle de Instagram del cliente |

#### Slides de Precios
Calcular el paquete según este criterio:

| Presupuesto declarado | Paquete a destacar |
|---|---|
| Hasta $6,000 MX | Multi-Página |
| $6,000 – $9,000 MX | Multi-Página Plus |
| $9,000+ MX | Multi-Página Plus + complementos |
| Sin definir | Presentar los tres con recomendación basada en alcance |

Actualizar los valores de precios si han cambiado desde la plantilla (consultar con Santiago antes de modificar precios).

---

### Fase 4 — Reporte de Entrega

Al terminar, reportar al usuario:

```
✅ Propuesta generada: [link del diseño en Canva]

Slides completados automáticamente:
- Portada y contexto de mercado
- Diagnóstico del cliente
- Competencia y referentes
- Arquitectura y sistema de diseño
- Precios y paquete recomendado

⚠️ Requieren intervención manual de Santiago:
- Imágenes y fotos del cliente (slides XX-XX)
- Link del prototipo web — generado por hubble-web-designer (slide XX)
- Revisión final de precios antes de presentar

Tiempo estimado de personalización manual: 20-30 minutos.
```

---

## Notas de Mejora Continua

> Esta sección se actualiza después de cada propuesta generada.

- (pendiente de primera ejecución real)
