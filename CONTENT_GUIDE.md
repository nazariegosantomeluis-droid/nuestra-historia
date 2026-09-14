# Guía de personalización — CONTENT_GUIDE.md

Esta guía explica, paso a paso, cómo personalizar **todo** el contenido de
la experiencia sin tocar ningún componente de React.

**Archivo clave:** casi todo lo que necesitas cambiar está en:

```
src/data/relationship.ts
```

Ábrelo con cualquier editor de texto (VS Code, por ejemplo). Es un archivo
con comentarios que explican cada campo. A continuación, el detalle de
cada sección.

---

## 1. Cómo cambiar tu nombre

**Archivo:** `src/data/relationship.ts`
**Variable:** `names.myName`

Antes:
```ts
names: {
  partnerName: "Laly",
  myName: "[TU NOMBRE]",
},
```

Después (ejemplo):
```ts
names: {
  partnerName: "Laly",
  myName: "Luis",
},
```

Este valor se usa como firma en la carta del Nivel 3
(`loveLetter.signature`, ver sección 9).

---

## 2. Cómo cambiar el nombre de tu novia

**Archivo:** `src/data/relationship.ts`
**Variable:** `names.partnerName`

Ya está puesto como `"Laly"`. Si quieres cambiarlo:

Antes:
```ts
partnerName: "Laly",
```

Después:
```ts
partnerName: "Valeria",
```

Nota: el nombre también aparece de forma independiente en dos lugares de
texto libre (para que puedas redactarlos exactamente como quieras):
- `diagnosis.doctor.value` (ej. `"Mi persona favorita (Laly)"`)
- `loveLetter.greeting` (ej. `"Para mi Laly,"`)

Edítalos igual, como texto plano.

---

## 3. Cómo cambiar la fecha de la relación

**Archivo:** `src/data/relationship.ts`
**Variable:** `relationshipStartDate`

Formato obligatorio: `"YYYY-MM-DDTHH:mm:00-06:00"` (el `-06:00` es la zona
horaria de Ciudad de México).

Antes:
```ts
relationshipStartDate: "2025-02-16T19:46:00-06:00",
```

Después (ejemplo, si la fecha fuera el 3 de marzo de 2025 a las 8:15 pm):
```ts
relationshipStartDate: "2025-03-03T20:15:00-06:00",
```

El contador (años/meses/días/horas/minutos/segundos) se recalcula solo, en
tiempo real, a partir de este valor — no hay que tocar nada más.

---

## 4. Cómo cambiar el texto de la pantalla inicial

**Archivo:** `src/data/relationship.ts`
**Objeto:** `intro`

```ts
intro: {
  eyebrow: "Para mi princesita preciosa",
  title: "1 año y 7 meses contigo, mi muñequita",
  tagline: "Una pequeña historia que hice para ti.",
  cta: "Comenzar ♡",
},
```

Cambia cualquiera de esos cuatro textos como quieras; se reflejan
automáticamente en la pantalla de bienvenida.

---

## 5. Cómo cambiar los textos del diagnóstico médico (Nivel 1)

**Archivo:** `src/data/relationship.ts`
**Objeto:** `diagnosis`

Cada campo controla una parte específica de la ficha médica:

| Variable | Dónde aparece |
|---|---|
| `diagnosis.levelTitle` | Título del nivel ("Doctora, tenemos un problema.") |
| `diagnosis.patient.value` | Campo "Paciente" |
| `diagnosis.doctor.value` | Campo "Médica" |
| `diagnosis.reason.value` | Campo "Motivo de consulta" |
| `diagnosis.vitals[n].value` / `.label` | Cada tarjeta de signos vitales |
| `diagnosis.diagnosisValue` | Texto del diagnóstico ("Amor crónico.") |
| `diagnosis.prognosisValue` | Texto del pronóstico |
| `diagnosis.continueLabel` | Texto del botón para avanzar |

Ejemplo — cambiar un signo vital:

Antes:
```ts
{ id: "heart-rate", label: "Frecuencia cardíaca", value: "120 BPM", icon: "heart" },
```

Después:
```ts
{ id: "heart-rate", label: "Frecuencia cardíaca", value: "180 BPM", icon: "heart" },
```

El campo `icon` acepta uno de estos cuatro valores: `"heart"`, `"brain"`,
`"butterfly"`, `"pulse"` (define qué ícono se dibuja, no lo cambies salvo
que quieras usar otro de los cuatro disponibles).

---

## 6. Cómo cambiar cada uno de los 7 recuerdos

**Archivo:** `src/data/relationship.ts`
**Arreglo:** `kittyHunt.memories`

Cada recuerdo tiene 4 campos: `id` (no lo cambies, define el orden del 1 al
7), `title`, `message` y `photo` (+ `photoAlt`, la descripción de la foto
para accesibilidad). El nivel no muestra fechas, solo título y mensaje.

Antes:
```ts
{
  id: 3,
  title: "[TÍTULO DEL RECUERDO 3]",
  message: "Uno de mis días favoritos contigo.",
  photo: "/memories/photo03.jpg",
  photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 3]",
},
```

Después (ejemplo):
```ts
{
  id: 3,
  title: "Nuestra primera cita",
  message: "Uno de mis días favoritos contigo. No dejé de sonreír en todo el camino a casa.",
  photo: "/memories/photo03.jpg",
  photoAlt: "Los dos sonriendo frente al lago",
},
```

Si un recuerdo no tiene fotografía, deja `photo: null,`.

---

## 7. Cómo cambiar las fotografías

1. **Dónde colocarla:** dentro de la carpeta `public/memories/`.
2. **Qué nombre darle:** el que quieras, por ejemplo `photoNuevo.jpg`
   (no hay una regla fija, solo debe coincidir con lo que escribas en el
   archivo de contenido).
3. **Cómo referenciarla:** en `src/data/relationship.ts`, dentro de cada
   recuerdo (`kittyHunt.memories`), cambia el campo `photo`:

   Antes:
   ```ts
   photo: "/memories/photo03.jpg",
   ```
   Después:
   ```ts
   photo: "/memories/photoNuevo.jpg",
   ```

   La ruta siempre empieza con `/memories/` seguido del nombre exacto del
   archivo que colocaste en esa carpeta.
4. **Formatos que funcionan:** JPG, PNG y WebP.
5. **Si la fotografía no aparece:**
   - Revisa que el nombre del archivo en `public/memories/` sea
     **exactamente** igual (mayúsculas/minúsculas incluidas) al que
     escribiste en `photo`.
   - Revisa que no falte la barra inicial `/` en la ruta.
   - Reinicia `npm run dev` si lo agregaste con el servidor ya corriendo.

---

## 8. Cómo cambiar las 7 Hello Kitty

1. **Dónde colocar cada imagen:** dentro de la carpeta `public/kitty/`.
2. **Cómo nombrarlas:** `kitty01.png`, `kitty02.png`, ... hasta
   `kitty07.png` (estos son los nombres que el proyecto ya busca).
3. **Cómo cambiarlas:** si prefieres otros nombres de archivo, edita el
   arreglo `kittyHunt.kittyImages` en `src/data/relationship.ts`:

   Antes:
   ```ts
   kittyImages: [
     "/kitty/kitty01.png",
     "/kitty/kitty02.png",
     // ...
   ],
   ```
   Después:
   ```ts
   kittyImages: [
     "/kitty/mi-kitty-favorita.png",
     "/kitty/kitty02.png",
     // ...
   ],
   ```
4. **Formatos permitidos:** PNG, JPG o WebP.
5. **Si la imagen tiene fondo/transparencia:**
   - PNG con fondo transparente se ve mejor porque se integra directamente
     sobre las tarjetas decorativas de colores.
   - Si tu imagen tiene fondo blanco o de color, no pasa nada: igual se ve
     bien, solo se notará un pequeño recuadro alrededor de la ilustración.
   - Mientras no coloques un archivo, la aplicación muestra automáticamente
     una silueta de marcador de posición — nunca se rompe ni se ve un
     ícono de imagen rota.

---

## 9. Cómo cambiar la carta

**Archivo:** `src/data/relationship.ts`
**Objeto:** `loveLetter`

```ts
loveLetter: {
  levelTitle: "Before the next chapter...",   // Título del nivel
  envelopeCta: "Abrir la carta",               // Texto bajo el sobre
  greeting: "Para mi Laly,",                    // Saludo
  paragraphs: [                                  // Párrafos, en orden
    "[MENSAJE DE LA CARTA]",
    "[RECUERDO ESPECIAL]",
    "[FRASE FINAL]",
  ],
  signaturePrefix: "Con todo mi amor,",         // Antes de la firma
  signature: "[TU NOMBRE]",                      // Firma
  continueLabel: "Continuar",
},
```

- **Saludo:** cambia `greeting`.
- **Párrafos:** el arreglo `paragraphs` acepta tantos elementos como
  quieras — cada elemento del arreglo es un párrafo independiente que se
  "escribe" uno después de otro. Puedes borrar, agregar o reordenar
  párrafos libremente.
- **Despedida y firma:** cambia `signaturePrefix` y `signature`.

Ejemplo completo:
```ts
paragraphs: [
  "Hoy se cumplen 1 año y 7 meses desde que decidimos escribir esta historia juntos.",
  "Sigo pensando en aquella tarde en el parque, cuando te reíste tan fuerte que se te cayeron los lentes.",
  "Gracias por elegirme cada día. Te amo.",
],
```

---

## 10. Cómo cambiar los colores

**Archivo:** `src/styles/global.css`
**Sección:** bloque `:root { ... }`, al inicio del archivo.

```css
:root {
  --color-blush: #fbe9ef;
  --color-pink-pastel: #f3d3e2;
  --color-pink-deep: #c96fa8;
  --color-lavender: #e6defc;
  --color-lavender-soft: #efe9fb;
  --color-purple: #7d5aa6;
  --color-purple-deep: #513a73;
  --color-ink: #372a44;
  --color-white: #fffcfb;
  /* ... */
}
```

Cambia cualquiera de estos valores hexadecimales por el color que
prefieras; toda la aplicación los usa como referencia, así que el cambio
se aplica en todas las pantallas automáticamente. Recomendación: mantén
tonos pastel similares en armonía (rosa/lavanda/morado) para conservar la
estética.

---

## 11. Cómo agregar más fotografías

Si quieres usar más fotos de las que ya vienen configuradas (por ejemplo,
dentro de un recuerdo, aunque el sistema solo admite una foto principal por
recuerdo):

1. Coloca el archivo adicional en `public/memories/` (por ejemplo,
   `photo08.jpg`).
2. Si es para un recuerdo nuevo, tendrías que duplicar un bloque dentro de
   `kittyHunt.memories` — pero recuerda que el Nivel 2 está diseñado para
   **exactamente 7 recuerdos** (uno por cada Hello Kitty / mes). Si solo
   quieres reemplazar una foto existente, sigue la sección 7.

---

## 12. Cómo ejecutar localmente

```bash
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (usualmente
`http://localhost:5173`). Los cambios que hagas en `src/data/relationship.ts`
o en cualquier archivo se reflejan al instante.

---

## 13. Cómo hacer build (construir para producción)

```bash
npm run build
```

Esto genera la carpeta `dist/` con la versión optimizada del sitio, lista
para subir a cualquier hosting estático (incluido GitHub Pages).

---

## 14. Cómo subir cambios a GitHub

```bash
git add .
git commit -m "Actualizo contenido"
git push
```

(La primera vez, antes de tener un repositorio remoto configurado, revisa
la sección "Conectar este proyecto a un repositorio de GitHub" en el
`README.md`.)

---

## 15. Cómo publicar con GitHub Pages

1. Sube el proyecto a GitHub (ver sección 14 y el `README.md`).
2. En GitHub, entra al repositorio → **Settings → Pages**.
3. En **Build and deployment → Source**, elige **GitHub Actions**.
4. Haz push a la rama `main` (o ve a la pestaña **Actions** del repositorio
   y ejecuta manualmente el workflow "Publicar en GitHub Pages").
5. Espera a que el workflow termine (ícono verde ✓ en la pestaña
   **Actions**). La URL pública aparecerá en **Settings → Pages**, con la
   forma:
   ```
   https://<tu-usuario>.github.io/<nombre-del-repositorio>/
   ```

No necesitas configurar nada más: el workflow ya incluido
(`.github/workflows/deploy.yml`) construye el proyecto y ajusta
automáticamente las rutas para que funcione en esa dirección.
