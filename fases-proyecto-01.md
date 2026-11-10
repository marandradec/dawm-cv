# Proyecto 01: Portafolio de identidad digital

Documentación de las cinco fases del proyecto del curso DAWM: investigación, diseño, construcción, verificación y entrega. El entregable es el sitio publicado con GitHub Pages desde el repositorio `dawm-cv`.

Las observaciones sobre GitHub de la fase 1 se hicieron el 9 de noviembre de 2026, sin iniciar sesión, por lo que las cifras (estrellas, issues, pull requests) pueden cambiar.

## Fase 1: Investigación

Se estudia cómo otros desarrolladores presentan su identidad en GitHub y qué características tiene un repositorio bien documentado.

### 1.1 Perfiles de referencia

Se eligieron tres perfiles de la lista [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme), con enfoques distintos: uno cuidado y personal, uno automatizado y uno basado en estadísticas.

- [natemoo-re](https://github.com/natemoo-re) (categoría "Simple but Innovative Ones")
- [simonw](https://github.com/simonw) (categoría "GitHub Actions")
- [abhisheknaiidu](https://github.com/abhisheknaiidu), autor de la lista (categoría "GitHub Actions")

#### Tabla comparativa

| Criterio | natemoo-re | simonw | abhisheknaiidu |
|----------|------------|--------|----------------|
| **Presentación (primeros 10 segundos)** | Saludo y lema, y en el primer párrafo se entiende que organiza Bombshell (herramientas de línea de comandos), trabaja como Design Engineer en Sentry y cocreó Astro. | Una sola frase: trabaja en Datasette, LLM y proyectos asociados, con enlaces a su blog, newsletter, Mastodon y Bluesky. Se entiende en qué trabaja, no su formación. | La primera línea ofrece trabajo freelance con un enlace de correo. El rol no se explica en el README; solo en el perfil, donde se define como "generalist". |
| **Estructura** | Un título, un lema, una biografía en dos párrafos, un botón de patrocinio, un separador y dos tablas de música. Jerarquía simple, con un solo encabezado grande. | Párrafo introductorio y tres listas generadas automáticamente (versiones recientes, blog y TIL), con subtítulos, una insignia de estado y un enlace que explica cómo funciona. | Serie de líneas con emojis y sin títulos de sección: contacto, estadísticas de tiempo de trabajo, botón de café, estadísticas de Todoist y una tarjeta de estadísticas de GitHub. |
| **Habilidades** | No hay lista ni insignias. Se deducen de los repositorios fijados (casi todos en TypeScript y uno en Go). Son verificables por lenguaje y estrellas. | No hay lista. Se evidencian con las versiones recientes de sus herramientas y los repositorios fijados, todos en Python. Verificables mediante enlaces a cada versión publicada. | No hay lista. Depende de tarjetas de estadísticas de un servicio externo. El bloque de tiempo de trabajo mostraba "No activity tracked" al revisarlo. |
| **Proyectos** | Seis fijados, cada uno con descripción corta, lenguaje y estrellas: astro, clack, microsite (archivado), compiler, ultrahtml y micromorph. | Seis fijados, todos en Python y con una descripción de una línea: datasette, sqlite-utils, llm, shot-scraper, files-to-prompt y s3-credentials. | Seis fijados y variados: awesome-github-profile-readme, cccatalog-frontend (archivado), wagmifund, neopop-web (fork), todoist-readme y shortski. |
| **Contacto** | El README no trae correo. El perfil muestra sitio web, Bluesky, Mastodon y botón de patrocinio. | El README enlaza blog, newsletter, Mastodon y Bluesky. El perfil muestra además sitio web, X y patrocinio. | Correo en la primera línea del README. El perfil muestra Instagram, X y LinkedIn, y el README tiene un botón de "Buy Me A Coffee". |
| **Accesibilidad y lectura en móvil** | El texto es legible, pero las tablas de música son imágenes de un servicio externo con texto alternativo vacío. | Casi todo es texto y enlaces, así que es ligero y no depende de imágenes. Solo hay una insignia, con texto alternativo. | Depende de imágenes externas (tarjeta de estadísticas y botón de café), con texto alternativo mínimo. El contenido dinámico vacío resta claridad. |

#### Qué se toma de cada perfil

- De natemoo-re: una presentación que dice rol y logros en un párrafo, con pocos elementos y jerarquía clara.
- De simonw: priorizar texto y enlaces para que la lectura sea rápida y funcione bien en el teléfono.
- De abhisheknaiidu: dar un canal de contacto claro desde la primera línea, evitando bloques dinámicos que puedan quedar vacíos.

### 1.2 Repositorios fijados de referencia

Se revisaron dos repositorios fijados en los perfiles analizados:

- [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme), fijado en el perfil de abhisheknaiidu.
- [bombshell-dev/clack](https://github.com/bombshell-dev/clack), fijado en el perfil de natemoo-re.

| Característica | awesome-github-profile-readme | clack |
|----------------|-------------------------------|-------|
| Descripción corta | Sí | Sí |
| Topics | Sí (siete, entre ellos `awesome`, `github-profile-readme` y `portfolio`) | Sí (seis, entre ellos `cli`, `command-line` y `prompt`) |
| Enlace a demo o sitio | Sí, un enlace corto en el campo del sitio web | Sí, a su documentación |
| README con propósito | Sí, una lista curada de perfiles con índice y categorías | Sí, resume para qué sirve y presenta sus dos paquetes |
| Tecnologías, instalación y uso | No aplica por ser una lista. Incluye guía para contribuir | Remite a la documentación enlazada |
| Capturas | Sí, un GIF animado | Logotipo; no se vieron capturas en la parte revisada |
| Licencia | Sí (CC0-1.0) | Sí |
| `.gitignore` | No aparece en la raíz | Sí |
| Issues y pull requests | Muy activos (87 issues y 617 pull requests abiertos) | Activos (60 issues y 26 pull requests abiertos) |
| Discussions y Actions | Habilitados | Habilitados |
| Archivos de comunidad | `contributing.md` | `CONTRIBUTING.md`, código de conducta y política de seguridad |
| Estructura de carpetas | Ordenada: `.github`, `assets`, README, licencia y guía de contribución | Ordenada: `.changeset`, `.github`, `.vscode`, `examples`, `packages` y archivos de configuración |

Se tomó nota de la carpeta `.changeset` de clack, que indica un flujo organizado de versiones.

### 1.3 Requisitos del portafolio

#### Requisitos funcionales (qué debe mostrar)

- **RF1.** Presentar nombre, carrera y enfoque en la primera pantalla, con botones hacia proyectos y contacto.
- **RF2.** Incluir una sección "Sobre mí" con información académica y profesional organizada en pestañas.
- **RF3.** Mostrar al menos tres proyectos (hoy son cinco), cada uno con nombre, qué resuelve, descripción, tecnologías y enlace al repositorio. Agregar enlace a demo cuando exista.
- **RF4.** Permitir filtrar los proyectos por categoría.
- **RF5.** Describir cada tecnología, framework o librería indicando en qué proyecto se aplicó, con filtro entre lo visto en el curso y lo de otros proyectos.
- **RF6.** Ofrecer contacto por correo institucional, GitHub y LinkedIn.
- **RF7.** Navegar entre secciones desde un menú fijo.
- **RF8.** Estar publicado con GitHub Pages en un repositorio público.

#### Requisitos no funcionales

- **Legibilidad:** tema oscuro con texto claro, tipografías Sora e Inter con fuentes de respaldo, y tamaños en unidades relativas.
- **Accesibilidad:** `lang="es"`, foco visible para navegar con teclado, botones reales con `aria-selected`, fondo decorativo marcado con `aria-hidden`, animaciones desactivadas con `prefers-reduced-motion` y ausencia de imágenes sin texto alternativo.
- **Lectura en móvil:** diseño fluido con metaetiqueta `viewport`, menú y tarjetas adaptados a pantallas pequeñas y sin desplazamiento horizontal.
- **Mantenibilidad:** HTML, CSS y JavaScript en tres archivos separados, sin compilación ni dependencias que instalar, y un README que explica la estructura.
- **Dependencias externas mínimas:** solo GSAP, ScrollTrigger y Google Fonts, cargados por CDN.
- **Privacidad:** no exponer datos personales sensibles; solo el correo institucional.

### 1.4 Lista de verificación de mis repositorios destacados

Se aplicó la misma lista de la sección 1.2 a los repositorios que se destacan en el portafolio. Marca cada casilla después de comprobarla en GitHub; lo que quede sin marcar es lo que falta por añadir.

#### dawm-cv (este portafolio)

- [x] Descripción, tecnologías, instrucciones de uso y estructura en el README
- [ ] Descripción corta y sitio web en el campo "About"
- [ ] Topics
- [ ] Capturas en el README
- [ ] Licencia
- [ ] `.gitignore`

#### Dashboard

- [ ] Descripción corta, topics y enlace a demo
- [ ] README con propósito, tecnologías, instalación, uso y capturas
- [ ] Licencia y `.gitignore`

#### Chancho Fest Landing

- [ ] Descripción corta, topics y enlace al sitio publicado
- [ ] README con propósito, tecnologías, uso y capturas
- [ ] Licencia y `.gitignore`

#### EcoTrack

- [ ] Descripción corta y topics
- [ ] README con propósito, tecnologías, instalación con Maven, uso y capturas
- [ ] Licencia y `.gitignore`

#### Go PLY Analyzer

- [ ] Descripción corta y topics
- [ ] README con propósito, tecnologías, instalación, uso, capturas y estado en desarrollo
- [ ] Licencia y `.gitignore`

#### Furina Landing Page

- [ ] Descripción corta, topics y enlace a demo
- [ ] README con propósito, tecnologías, uso y capturas
- [ ] Licencia y `.gitignore`

## Fase 2: Diseño

Se define cómo se organiza la información antes de construir la versión final.

### 2.1 Estructura

**README del perfil** (`marandradec/marandradec`), en este orden:

1. Presentación.
2. Sobre mí.
3. Habilidades y tecnologías.
4. Proyectos destacados.
5. Contacto.

No se usan "Áreas de interés" ni "Actividad o experiencia" como secciones propias: el enfoque en backend y análisis de datos se explica en "Sobre mí", y la actividad se ve en los proyectos.

**Sitio del portafolio** (`dawm-cv`), con un menú fijo:

1. Inicio.
2. Sobre mí (en pestañas).
3. Proyectos (con filtro).
4. Tecnologías (con filtro).
5. Contacto.

### 2.2 Diseño del contenido

| Sección | Se incluye | Se evita | Formato | Enlaces externos | Lectura rápida |
|---------|------------|----------|---------|------------------|----------------|
| Presentación | Nombre, carrera, universidad, enfoque y enlace al portafolio | Datos personales sensibles y frases genéricas | Título y una frase | Portafolio en GitHub Pages | Una sola frase al inicio |
| Sobre mí | Formación y enfoque en dos o tres líneas | Biografía larga, teléfono, dirección y documentos de identidad | Texto breve | Ninguno | Párrafo corto |
| Habilidades y tecnologías | Herramientas agrupadas por área | Barras de nivel e insignias de servicios externos | Lista con la categoría en negrita | Ninguno | Categorías visibles de un vistazo |
| Proyectos destacados | Los cinco proyectos con qué resuelven y con qué tecnologías | Proyectos sin repositorio y descripciones largas | Tabla | Repositorios y, si existen, demos | Una fila por proyecto |
| Contacto | Correo institucional, LinkedIn y GitHub | Teléfono y dirección | Lista | LinkedIn y GitHub | Tres líneas |

Decisiones generales: el README del perfil usa solo Markdown, sin HTML ni imágenes externas, para que cargue rápido y se lea bien en el teléfono. En el sitio, los textos son el contenido principal y el fondo animado es solo decorativo.

### 2.3 Fichas de proyectos destacados

#### Dashboard

- **Problema:** necesidad de un panel de control interactivo organizado por componentes.
- **Tecnologías:** React, TypeScript, Vite, Material UI y la API de Open-Meteo.
- **Funcionalidades:** componentes reutilizables de cabecera, alerta e indicadores, y datos del clima consumidos con `fetch`.
- **Repositorio:** [marandradec/dashboard](https://github.com/marandradec/dashboard)
- **Demo:** por agregar si el sitio está publicado.

#### Chancho Fest Landing

- **Problema:** presentar en un sitio de una sola página los resultados de una encuesta del Chancho Fest 2026.
- **Tecnologías:** HTML, CSS, JavaScript, jQuery y la plantilla Directive de HTML5 UP.
- **Funcionalidades:** resultados de la encuesta, galería interactiva, video y mapa.
- **Repositorio:** [marandradec/chancho-fest-landing](https://github.com/marandradec/chancho-fest-landing)
- **Demo:** por agregar si el sitio está publicado.

#### EcoTrack

- **Problema:** gestión de residuos y reciclaje urbano.
- **Tecnologías:** Java, Maven, JavaFX y patrón MVC.
- **Funcionalidades:** cola de prioridad, pila, lista circular y mapa hash implementados desde cero, y una interfaz con tablas, formularios y gráficos.
- **Repositorio:** [marandradec/EcoTrack](https://github.com/marandradec/EcoTrack)
- **Demo:** no aplica (aplicación de escritorio).

#### Go PLY Analyzer

- **Problema:** analizar código Go mediante un analizador léxico y sintáctico. Sigue en desarrollo, con la meta de agregar el análisis semántico.
- **Tecnologías:** Python, PLY, Tkinter, ttkbootstrap y unittest.
- **Funcionalidades:** definición de tokens y gramática, editor de código con botones para analizar, simular la ejecución y generar logs, y pruebas automáticas.
- **Repositorio:** [marandradec/go-ply-analyzer](https://github.com/marandradec/go-ply-analyzer)
- **Demo:** no aplica (aplicación de escritorio).

#### Furina Landing Page

- **Problema:** crear un sitio web interactivo ambientado en un videojuego.
- **Tecnologías:** HTML, CSS y JavaScript.
- **Funcionalidades:** menú adaptable y animaciones.
- **Repositorio:** [marandradec/furina-landing-page](https://github.com/marandradec/furina-landing-page)
- **Demo:** por agregar si el sitio está publicado.

## Fase 3: Construcción

Se convierte el diseño en un perfil funcional.

### 3.1 Repositorios

- **`dawm-cv`:** contiene el sitio del portafolio (`index.html`, `styles.css`, `script.js`), el README y esta documentación en `docs/`. Se publica con GitHub Pages.
- **`marandradec/marandradec`:** repositorio especial cuyo único archivo es el `README.md` que se muestra en el perfil de GitHub.

### 3.2 Marcado y formato

El README del perfil usa solo Markdown: títulos, listas, una tabla y enlaces. No usa HTML ni CSS. El sitio está hecho con HTML5 semántico, CSS3 y JavaScript sin frameworks, con GSAP y ScrollTrigger para las animaciones.

### 3.3 Contenido del README del perfil

```markdown
# María Cristina Andrade Echeverría

Estudiante de Ingeniería en Ciencias de la Computación en la ESPOL, con enfoque en desarrollo backend y análisis de datos.

**Portafolio:** https://marandradec.github.io/dawm-cv/

## Sobre mí

Me apasiona el desarrollo backend y la ingeniería de datos. Me interesa construir sistemas que relacionen datos para tomar mejores decisiones.

## Habilidades y tecnologías

- **Web:** HTML, CSS, JavaScript, jQuery, GSAP, React, TypeScript, Vite, Material UI
- **Backend y escritorio:** Java, Maven, JavaFX, Python, Tkinter
- **Herramientas:** Git, GitHub, unittest

## Proyectos destacados

| Proyecto | Qué resuelve | Tecnologías | Repositorio |
|----------|--------------|-------------|-------------|
| Dashboard | Panel de control interactivo por componentes | React, TypeScript, Vite, Material UI, Open-Meteo | [Ver](https://github.com/marandradec/dashboard) |
| Chancho Fest Landing | Sitio de una página sobre un evento | HTML, CSS, JavaScript, jQuery | [Ver](https://github.com/marandradec/chancho-fest-landing) |
| EcoTrack | Gestión de residuos y reciclaje urbano | Java, Maven, JavaFX, MVC | [Ver](https://github.com/marandradec/EcoTrack) |
| Go PLY Analyzer | Análisis léxico y sintáctico de código Go (en desarrollo) | Python, PLY, Tkinter, unittest | [Ver](https://github.com/marandradec/go-ply-analyzer) |
| Furina Landing Page | Sitio interactivo ambientado en un videojuego | HTML, CSS, JavaScript | [Ver](https://github.com/marandradec/furina-landing-page) |

## Contacto

- Correo: marcrand@espol.edu.ec
- [LinkedIn](https://www.linkedin.com/in/mar%C3%ADa-andrade)
```

### 3.4 Secciones del sitio

| Sección | Qué contiene | Archivos que intervienen |
|---------|--------------|--------------------------|
| Estructura base | Navegación fija, bloque de inicio y pie de página | `index.html`, `styles.css` |
| Sobre mí | Tres pestañas: enfoque profesional, metodología de trabajo y participación | `index.html`, `styles.css`, `script.js` |
| Proyectos | Cinco tarjetas con filtro "Todos", "Proyectos del curso" y "Otros proyectos" | `index.html`, `styles.css`, `script.js` |
| Tecnologías | Una fila por herramienta y su aplicación, con el mismo filtro | `index.html`, `styles.css`, `script.js` |
| Contacto | Correo, GitHub y LinkedIn | `index.html`, `styles.css` |
| Animaciones | Efectos al hacer scroll con GSAP y ScrollTrigger | `index.html`, `script.js` |
| Fondo | Partículas en `canvas`, desactivadas con `prefers-reduced-motion` | `index.html`, `styles.css`, `script.js` |
| Adaptación a móvil | Menú, tarjetas y tipografía responsive | `styles.css` |

## Fase 4: Verificación y publicación

El perfil debe estar completo y listo para compartirse.

### 4.1 Comprobado en el código del sitio

- Los cinco enlaces del menú y de los botones apuntan a secciones que existen (`#inicio`, `#sobre-mi`, `#proyectos`, `#tecnologias` y `#contacto`).
- No hay identificadores repetidos, y las pestañas y los filtros apuntan a paneles y listas que existen.
- Hay un solo `h1`, el documento declara `lang="es"` y tiene la metaetiqueta `viewport`.
- Los siete enlaces externos abren en otra pestaña con `rel="noopener"`.
- No hay imágenes sin texto alternativo, porque el sitio no usa imágenes.
- El fondo animado está marcado como decorativo y las animaciones respetan `prefers-reduced-motion`.

### 4.2 Por comprobar en GitHub

- [ ] El repositorio `dawm-cv` es público y GitHub Pages está activo (Settings, Pages).
- [ ] La URL del sitio abre y carga estilos, tipografías y animaciones.
- [ ] Los cinco enlaces a repositorios abren sin pedir inicio de sesión.
- [ ] El repositorio `marandradec/marandradec` es público y su README aparece en el perfil.
- [ ] El sitio se ve bien en un teléfono real.

## Fase 5: Entrega

Se entrega la evidencia del trabajo, con los archivos organizados y la documentación completa.

### 5.1 Organización de archivos

```text
dawm-cv/
├── index.html
├── styles.css
├── script.js
├── README.md
└── docs/
    └── fases-proyecto-01.md
```

### 5.2 Entregable

- **URL del sitio desplegado con GitHub Pages:** https://marandradec.github.io/dawm-cv/
- **Documentación:** `README.md` (propósito, secciones, proyectos, tecnologías y uso) y este documento con las cinco fases.