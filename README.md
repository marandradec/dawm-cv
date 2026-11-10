# dawm-cv

Portafolio de identidad digital desarrollado para el curso DAWM (Proyecto 01). Presenta mi perfil académico, mis proyectos y las tecnologías que he aprendido, y está desplegado con GitHub Pages.

**Sitio:** https://marandradec.github.io/dawm-cv/

## Secciones

- **Inicio:** presentación y enlaces principales.
- **Sobre mí:** información académica y profesional organizada en pestañas.
- **Proyectos:** tarjetas con descripción, tecnologías y enlace al repositorio, con filtro por categoría.
- **Tecnologías:** herramientas, frameworks y librerías, explicando en qué proyecto se aplicó cada una, con filtro entre las vistas en el curso y las de otros proyectos.
- **Contacto:** correo institucional y perfiles de GitHub y LinkedIn.

## Proyectos destacados

| Proyecto | Qué resuelve | Tecnologías | Repositorio |
|----------|--------------|-------------|-------------|
| Dashboard | Panel de control interactivo por componentes | React, TypeScript, Vite, Material UI, Open-Meteo | [Ver](https://github.com/marandradec/dashboard) |
| Chancho Fest Landing | Sitio web de una sola página sobre un evento | HTML, CSS, JavaScript, jQuery | [Ver](https://github.com/marandradec/chancho-fest-landing) |
| EcoTrack | Gestión de residuos y reciclaje urbano | Java, Maven, JavaFX, MVC | [Ver](https://github.com/marandradec/EcoTrack) |
| Go PLY Analyzer | Análisis léxico y sintáctico de código Go (en desarrollo) | Python, PLY, Tkinter, unittest | [Ver](https://github.com/marandradec/go-ply-analyzer) |
| Furina Landing Page | Sitio web interactivo ambientado en un videojuego | HTML, CSS, JavaScript | [Ver](https://github.com/marandradec/furina-landing-page) |

## Tecnologías del portafolio

- HTML5 semántico y CSS3 (variables, grid con subgrid, diseño responsive).
- JavaScript sin frameworks para las pestañas, los filtros y el fondo animado en `canvas`.
- GSAP y ScrollTrigger para las animaciones al hacer scroll, cargados por CDN.
- Tipografías Sora e Inter desde Google Fonts.
- Git y GitHub para el control de versiones, y GitHub Pages para el despliegue.

## Accesibilidad

- Las pestañas y los filtros usan botones reales y `aria-selected`.
- Las animaciones y el fondo de partículas se desactivan si el usuario tiene activado `prefers-reduced-motion`.

## Estructura

```text
index.html   estructura y contenido
styles.css   estilos y diseño responsive
script.js    animaciones, pestañas, filtros y fondo
```

## Ejecutar localmente

Clona el repositorio y abre `index.html` en el navegador. No requiere instalar dependencias.

```bash
git clone https://github.com/marandradec/dawm-cv.git
```