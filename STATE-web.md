# STATE-web — Taufic Gashaan · Web Designer

> Bitácora operativa del hubble-web-designer. No toca MEMORY.md salvo tokens canónicos nuevos.

---

## Estado General

- **Skill activo:** `wd-construccion` (reconstrucción completa con Vocabulario Compositivo Hubble)
- **Fase actual:** Todas las secciones reconstruidas · Pendiente wd-auditoria (Fase D)
- **Última actualización:** 2026-04-28

## Design System

- **MASTER.md:** `./web-app/design-system/taufic-gashaan/MASTER.md`
- **Estilo:** Exaggerated Minimalism
- **Paleta aplicada en globals.css:** #C8102E · #1A1A1A · #F5F0EB
- **Tipografía aplicada en layout.tsx:** Archivo (heading, peso 900) / Space Grotesk (body) vía `next/font/google`
- **Radios:** 0 px en todo el sitio (arquitectura = esquinas rectas)

## Estructura del Proyecto

```
web-app/
├── app/
│   ├── globals.css          ← @theme con tokens de Taufic
│   ├── layout.tsx           ← Archivo + Space Grotesk cargadas
│   ├── page.tsx             ← Ensambla todos los componentes
│   └── components/
│       ├── shared/
│       │   ├── Navbar.tsx   ✅ Flotante transparente → oscuro+blur al scroll · caps wide-spacing
│       │   └── Footer.tsx   ✅ Logo consistente · dos cuentas IG · border rojo superior
│       └── features/
│           ├── Hero.tsx     ✅ V-02 Z-Layer (4 capas) + V-13 Spec Callouts + V-14 Video Card + parallax
│           ├── Proyectos.tsx ✅ V-01 Overflow Break (números ghost) + V-11 Glassmorphism hover · grid asimétrico
│           ├── Nosotros.tsx  ✅ V-08 Mixed Type Tension + V-10 Annotation Callouts · fondo arquitectónico
│           └── Contacto.tsx  ✅ V-06 Oversized Viewport Type "HABLE/MOS." a 12vw
└── design-system/
    └── taufic-gashaan/
        └── MASTER.md
```

## Secciones — Estado

| Sección | Estado | Técnicas | Notas |
|---|---|---|---|
| Navbar | ✅ reconstruida | Identidad flotante adaptativa | Crema sobre oscuro · blur+solid al scroll |
| Hero | ✅ reconstruida | V-02 · V-13 · V-14 · Parallax | Foto Unsplash placeholder — **reemplazar con foto real** |
| Proyectos | ✅ reconstruida | V-01 · V-11 | Grid 58/40% asimétrico · imágenes Unsplash placeholder |
| Nosotros | ✅ reconstruida | V-08 · V-10 | Imagen bg placeholder · fondo arquitectónico |
| Contacto | ✅ reconstruida | V-06 | "HABLE/MOS." a 12vw · ghost TG decorativo |
| Footer | ✅ reconstruida | Identidad | Logo · dos cuentas IG · border rojo |

## Referencias Visuales Aplicadas

- **Struktura (Frame Houses):** Hero full-bleed · spec callouts flotantes · video card · tipografía oversized
- **Quad (AI Architecture):** Grid asimétrico editorial · ghost numbers · mixed typography · brutalismo moderno

## TODOs Antes de Reunión Real

1. Reemplazar `https://wa.me/523312345678` con número real en Navbar y Contacto
2. Reemplazar imagen Hero con foto real de proyecto Taufic
3. Reemplazar imágenes Proyectos con fotos reales de cada proyecto
4. Reemplazar imagen bg Nosotros con foto real de Taufic/despacho
5. Reemplazar copy placeholder en Hero, Nosotros y Contacto
6. Reemplazar duración del video card cuando haya showreel real

## Dev Server

```bash
cd web-app && npm run dev
# Corre en localhost:3002
```

## Pendiente (Fase D)

- [ ] Correr `wd-auditoria` sobre la landing completa
- [ ] Resolver todos los issues P0 que reporte la auditoría
- [ ] Actualizar este archivo con score final + issues aceptados conscientemente
