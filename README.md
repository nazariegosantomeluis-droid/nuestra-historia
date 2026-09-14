# Nuestra historia ♡

Una pequeña experiencia web romántica e interactiva, hecha a medida para un
aniversario. Combina una estética *kawaii + elegante + premium*: Hello
Kitty, mariposas, ajedrez, medicina y rosa/lavanda, sin caer en una página
genérica ni infantil.

La experiencia tiene 5 partes:

0. **Pantalla inicial** — portada con el contador de la relación.
1. **Nivel 1 — Diagnóstico** — una ficha médica romántica con un ECG que se
   transforma en un corazón.
2. **Nivel 2 — Las 7 Hello Kitty** — una búsqueda de 7 Hello Kitty
   escondidas, cada una revela un recuerdo.
3. **Nivel 3 — La carta final** — un sobre que se abre y una carta que se
   escribe progresivamente.
4. **Pantalla de cierre** — "Checkmate", el contador y una pregunta final.

## Tecnologías

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como build tool
- [Framer Motion](https://www.framer.com/motion/) para las animaciones
- CSS puro con variables de diseño (sin frameworks de UI)

## Estructura del proyecto

```
nuestra-historia/
├── src/
│   ├── components/       # Un componente por pantalla/nivel + piezas reutilizables
│   ├── data/
│   │   └── relationship.ts   # ⭐ TODO el contenido editable vive aquí
│   ├── hooks/             # useElapsedTime, useTypewriter, useReducedMotion
│   ├── styles/
│   │   └── global.css     # Tokens de color, tipografía, resets
│   ├── App.tsx            # Orquesta las 5 pantallas
│   └── main.tsx
├── public/
│   ├── kitty/              # Coloca aquí tu imagen de Hello Kitty (kitty.png)
│   └── memories/           # Coloca aquí las fotografías de la relación
├── .github/workflows/deploy.yml   # Publicación automática en GitHub Pages
├── CONTENT_GUIDE.md        # Guía paso a paso de personalización
└── README.md
```

**Ningún componente de React contiene texto personal "quemado" en el
código.** Todo el contenido (nombres, fechas, textos, recuerdos, rutas de
imágenes) vive en `src/data/relationship.ts`. Para personalizar la
experiencia solo necesitas editar ese archivo y colocar tus recursos en
`public/`. Ver **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** para el paso a
paso completo.

## Instalación y ejecución local

Requiere [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm run dev
```

Abre la URL que aparece en la terminal (normalmente `http://localhost:5173`).

## Construir para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para publicarse en cualquier hosting
estático. Puedes previsualizar ese build localmente con:

```bash
npm run preview
```

## Personalización

Toda la guía detallada (cómo cambiar nombres, fechas, textos, fotografías,
las 7 Hello Kitty, la carta y los colores) está en
**[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**.

## Conectar este proyecto a un repositorio de GitHub

Si aún no lo has hecho, conecta esta carpeta con un repositorio vacío en
GitHub:

```bash
git init                                   # si aún no es un repositorio git
git add .
git commit -m "Primera versión de nuestra historia"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

Después de la primera vez, para subir cambios nuevos:

```bash
git add .
git commit -m "Actualizo contenido"
git push
```

## Publicar con GitHub Pages

Este proyecto ya incluye un workflow de GitHub Actions
(`.github/workflows/deploy.yml`) que construye y publica el sitio
automáticamente cada vez que subes cambios a la rama `main`.

Pasos para activarlo (solo una vez):

1. Sube el proyecto a GitHub (ver sección anterior).
2. En GitHub, entra a **Settings → Pages** del repositorio.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Haz cualquier push a `main` (o entra a la pestaña **Actions** y ejecuta
   manualmente el workflow "Publicar en GitHub Pages").
5. Cuando el workflow termine, la URL pública aparecerá en
   **Settings → Pages** y en el resumen del workflow. Normalmente tiene la
   forma:

   ```
   https://<tu-usuario>.github.io/<nombre-del-repositorio>/
   ```

El workflow ajusta automáticamente la ruta base de la aplicación según el
nombre de tu repositorio, así que no necesitas tocar ninguna configuración
adicional.

### Publicar manualmente (alternativa)

También puedes publicar manualmente con el paquete `gh-pages` incluido:

```bash
VITE_BASE=/<nombre-del-repositorio>/ npm run build
npm run deploy
```

Esto publica la carpeta `dist/` en la rama `gh-pages`. Si usas esta opción,
en **Settings → Pages** selecciona como fuente la rama `gh-pages` en lugar
de "GitHub Actions".

## Accesibilidad

- Textos alternativos en imágenes.
- Botones con áreas de toque de al menos 48×48px.
- Soporte para `prefers-reduced-motion` (desactiva animaciones decorativas).
- Contraste de color cuidado sobre los fondos pastel.

## Licencia

Proyecto personal, hecho con cariño. Úsalo y adáptalo libremente para tu
propia historia.
