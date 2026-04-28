---
name: cerrar-sesion
description: Úsalo al cerrar una sesión de trabajo en este proyecto. Guarda el estado del proyecto (progreso, pendientes, notas) y extrae aprendizajes que puedan mejorar los skills de Hubble. Esos aprendizajes quedan en una sección "Feedback para Maestro" dentro del MEMORY.md del proyecto para que el Maestro los procese en su próxima sesión. Actívalo con "cerramos", "cierre de sesión", "voy a cerrar", "guardemos" o variantes.
---

# Skill: cerrar-sesion (nivel proyecto)
## Cierre de Sesión — Estado del Proyecto + Feedback para Hubble

Al cerrar, este skill hace dos cosas: deja el proyecto ordenado para la próxima sesión, y extrae aprendizajes que pueden mejorar los skills y procesos de Hubble Web Studio.

---

## Fase A — Escaneo de la Sesión

Revisar el contexto completo de la conversación y construir un inventario en dos bloques:

**Bloque 1 — Estado del proyecto:**
1. ¿Qué trabajo se hizo? (secciones construidas, refinamientos, contenido generado, decisiones de diseño)
2. ¿Qué quedó en progreso o bloqueado?
3. ¿Cuál es el próximo paso concreto?
4. ¿Qué notas dejó el usuario para la próxima sesión?

**Bloque 2 — Aprendizajes para Hubble:**
1. ¿Qué técnica o patrón funcionó mejor de lo esperado? (compositivo, animación, workflow)
2. ¿Qué parte del skill fue confusa, lenta o produjo un resultado inferior?
3. ¿Faltó algo en el skill que hubiera acelerado el trabajo?
4. ¿Apareció un patrón nuevo que debería quedar documentado?
5. ¿Hay algo que el agente hizo mal o que podría mejorar en próximas sesiones?

Presentar el inventario completo antes de escribir nada:

```
## Inventario de cierre — [YYYY-MM-DD]

Trabajo realizado:
  - [ítem]

Estado actual:
  - [ítem en progreso / bloqueado]

Próximo paso: [acción concreta]

Aprendizajes para Hubble:
  - [aprendizaje] → posible mejora en [skill]

¿Falta algo que quieras agregar antes de cerrar?
```

Esperar confirmación. No escribir nada antes del OK.

---

## Fase B — Escritura

### B1 — Estado del proyecto

Actualizar los archivos de estado según el agente activo en la sesión:

- **`./MEMORY.md`** — si hubo cambios de marca, paleta, fuentes o decisiones cross-agent.
- **`./STATE-web.md`** — si trabajó `hubble-web-designer`: secciones construidas ✅, en progreso ⏳, próximos pasos.
- **`./STATE-marketing.md`** — si trabajó `hubble-marketing`: estrategia avanzada, piezas generadas, calendario.

Formato mínimo para el registro en STATE:

```md
## Progreso — [YYYY-MM-DD]

Sesión: [resumen en 1 línea]
Completado: [lista]
En progreso: [lista]
Bloqueado: [si aplica]
Próximo paso: [acción concreta + quién la ejecuta]
```

### B2 — Feedback para Maestro

Si el Bloque 2 del escaneo identificó aprendizajes relevantes, escribirlos en `./MEMORY.md` del proyecto bajo esta sección:

```md
## Feedback para Maestro — [YYYY-MM-DD] ⏳

> Pendiente de procesamiento. El Maestro lee esta sección, genera BL o aprendizajes cruzados, y la borra.

### Aprendizajes
- [descripción del aprendizaje] → mejora en `[skill]` / nuevo BL
- [...]

### Sugerencias de mejora de skill
- [skill]: [qué cambiaría y por qué]

### Patrones nuevos detectados
- [patrón]: [dónde apareció, por qué es útil]
```

Si no hay aprendizajes relevantes para Hubble, no crear la sección — no forzar feedback vacío.

---

## Fase C — Confirmación de Cierre

```
✅ Sesión cerrada — [YYYY-MM-DD]

Estado guardado en:
  - [archivo]: [resumen]

Feedback para Maestro: [X ítems pendientes en MEMORY.md / ninguno]

Próximo paso del proyecto: [acción]

Hasta la próxima.
```

---

## Reglas de Operación

- **Inventario antes de escritura.** El usuario aprueba qué se guarda.
- **Hechos, no transcripciones.** Valor operativo, no diálogo.
- **No duplicar lo ya guardado.** Si el agente ya actualizó STATE durante la sesión, solo complementar.
- **Feedback solo si es real.** No inventar aprendizajes para llenar la sección. Si la sesión fue rutinaria, el cierre es solo B1.
- **La sección Feedback es temporal.** Existe solo hasta que el Maestro la lee y procesa. El Maestro la borra al consumirla.
