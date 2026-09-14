/**
 * ============================================================================
 *  CONTENIDO EDITABLE — "Nuestra historia"
 * ============================================================================
 * Este es el ÚNICO archivo que necesitas tocar para personalizar los textos,
 * fechas, fotografías e imágenes de la experiencia. Ningún componente de
 * React contiene texto "quemado" en el código: todos leen desde aquí.
 *
 * Guía paso a paso de cada campo: ver CONTENT_GUIDE.md en la raíz del
 * proyecto (carpeta anniversary/).
 *
 * Convención de placeholders: cualquier texto entre corchetes, por ejemplo
 * "[NOMBRE]" o "[FECHA]", es un marcador de posición que debes reemplazar
 * con tu propia información real.
 * ============================================================================
 */

export interface KittyMemory {
  /** Número de recuerdo, del 1 al 7. No lo cambies: define el orden. */
  id: number;
  /** Título corto del recuerdo. */
  title: string;
  /** Fecha del recuerdo, en el formato que prefieras mostrar (texto libre). */
  date: string;
  /** Mensaje personal para este recuerdo. */
  message: string;
  /**
   * Fotografía opcional para este recuerdo.
   * Coloca el archivo en `public/memories/` y referencia aquí la ruta
   * comenzando con "/memories/...". Déjalo como null si no quieres foto.
   */
  photo: string | null;
  /** Texto alternativo (accesibilidad) para la fotografía, si existe. */
  photoAlt: string;
}

export interface VitalSign {
  id: string;
  label: string;
  value: string;
  icon: "heart" | "brain" | "butterfly" | "pulse";
}

export const relationshipData = {
  /** ------------------------------------------------------------------ *
   *  IDENTIDAD
   * ------------------------------------------------------------------ */
  names: {
    /** El nombre de tu pareja. Aparece en la carta y en el expediente médico. */
    partnerName: "Laly",
    /** Tu nombre. Aparece como firma de la carta. */
    myName: "[TU NOMBRE]",
  },

  /**
   * Fecha y hora exactas de inicio de la relación, en formato ISO 8601
   * con la zona horaria de Ciudad de México (UTC-06:00, sin horario de
   * verano). El contador calcula todo en tiempo real a partir de este
   * valor — no necesitas tocar ningún otro archivo.
   *
   * Formato: "YYYY-MM-DDTHH:mm:00-06:00"
   */
  relationshipStartDate: "2025-02-16T19:46:00-06:00",

  /** ------------------------------------------------------------------ *
   *  PANTALLA INICIAL
   * ------------------------------------------------------------------ */
  intro: {
    eyebrow: "Para mi princesita preciosa",
    title: "1 año y 7 meses contigo, mi muñequita",
    tagline: "Una pequeña historia que hice para ti.",
    cta: "Comenzar ♡",
  },

  /** ------------------------------------------------------------------ *
   *  CONTADOR (visible durante toda la experiencia)
   * ------------------------------------------------------------------ */
  counter: {
    labels: {
      years: "Años",
      months: "Meses",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    },
    caption: "Y seguimos contando...",
  },

  /** ------------------------------------------------------------------ *
   *  NIVEL 1 — DIAGNÓSTICO MÉDICO
   * ------------------------------------------------------------------ */
  diagnosis: {
    levelTitle: "Doctora, tenemos un problema.",
    chartLabel: "Expediente sentimental",
    patient: {
      label: "Paciente",
      value: "Mi corazón",
    },
    doctor: {
      label: "Médica",
      value: "Mi persona favorita (Laly)",
    },
    reason: {
      label: "Motivo de consulta",
      value: "No dejo de pensar en ti.",
    },
    vitalsTitle: "Signos vitales",
    vitals: [
      { id: "heart-rate", label: "Frecuencia cardíaca", value: "120 BPM", icon: "heart" },
      { id: "thoughts", label: "Pensamientos sobre ti", value: "99.9%", icon: "brain" },
      { id: "butterflies", label: "Mariposas", value: "∞", icon: "butterfly" },
      { id: "love-level", label: "Nivel de amor", value: "Irreversible", icon: "pulse" },
    ] as VitalSign[],
    ecgCaption: "Trazado cardíaco",
    diagnosisTitle: "Diagnóstico",
    diagnosisValue: "Amor crónico.",
    prognosisTitle: "Pronóstico",
    prognosisValue: "Seguir eligiéndote todos los días.",
    continueLabel: "Continuar",
  },

  /** ------------------------------------------------------------------ *
   *  NIVEL 2 — LAS 7 HELLO KITTY
   * ------------------------------------------------------------------ */
  kittyHunt: {
    levelTitle: "7 meses, 7 recuerdos.",
    subtitle: "Encuentra a las 7 Hello Kitty escondidas en la escena.",
    progressLabelPrefix: "Encontradas",
    completeMessage: "Encontraste las 7. Cada una guarda un recuerdo nuestro.",
    continueLabel: "Continuar",
    /**
     * Los 7 recuerdos. NO se inventó ningún recuerdo real: reemplaza cada
     * título, fecha, mensaje y fotografía con tu propia información.
     * Ver CONTENT_GUIDE.md, sección 6.
     */
    memories: [
      {
        id: 1,
        title: "[TÍTULO DEL RECUERDO 1]",
        date: "[FECHA]",
        message: "[MENSAJE PERSONAL]",
        photo: "/memories/photo01.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 1]",
      },
      {
        id: 2,
        title: "[TÍTULO DEL RECUERDO 2]",
        date: "[FECHA]",
        message: "[MENSAJE PERSONAL]",
        photo: "/memories/photo02.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 2]",
      },
      {
        id: 3,
        title: "[TÍTULO DEL RECUERDO 3]",
        date: "[FECHA]",
        message: "Uno de mis días favoritos contigo.",
        photo: "/memories/photo03.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 3]",
      },
      {
        id: 4,
        title: "[TÍTULO DEL RECUERDO 4]",
        date: "[FECHA]",
        message: "[MENSAJE PERSONAL]",
        photo: "/memories/photo04.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 4]",
      },
      {
        id: 5,
        title: "[TÍTULO DEL RECUERDO 5]",
        date: "[FECHA]",
        message: "[MENSAJE PERSONAL]",
        photo: "/memories/photo05.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 5]",
      },
      {
        id: 6,
        title: "[TÍTULO DEL RECUERDO 6]",
        date: "[FECHA]",
        message: "[MENSAJE PERSONAL]",
        photo: "/memories/photo06.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 6]",
      },
      {
        id: 7,
        title: "[TÍTULO DEL RECUERDO 7]",
        date: "[FECHA]",
        message: "[MENSAJE PERSONAL]",
        photo: "/memories/photo07.jpg",
        photoAlt: "[DESCRIPCIÓN DE LA FOTOGRAFÍA 7]",
      },
    ] as KittyMemory[],
    /**
     * Rutas de las 7 imágenes de Hello Kitty. Coloca tus archivos en
     * `public/kitty/` con estos nombres exactos (o cambia la ruta aquí si
     * prefieres otros nombres). Acepta PNG, JPG o WebP.
     */
    kittyImages: [
      "/kitty/kitty01.png",
      "/kitty/kitty02.png",
      "/kitty/kitty03.png",
      "/kitty/kitty04.png",
      "/kitty/kitty05.png",
      "/kitty/kitty06.png",
      "/kitty/kitty07.png",
    ],
  },

  /** ------------------------------------------------------------------ *
   *  NIVEL 3 — LA CARTA FINAL
   * ------------------------------------------------------------------ */
  loveLetter: {
    levelTitle: "Before the next chapter...",
    envelopeCta: "Abrir la carta",
    greeting: "Para mi Laly,",
    paragraphs: [
      "[MENSAJE DE LA CARTA]",
      "[RECUERDO ESPECIAL]",
      "[FRASE FINAL]",
    ],
    signaturePrefix: "Con todo mi amor,",
    signature: "[TU NOMBRE]",
    continueLabel: "Continuar",
  },

  /** ------------------------------------------------------------------ *
   *  PANTALLA DE CIERRE
   * ------------------------------------------------------------------ */
  finalScreen: {
    checkmateLabel: "CHECKMATE",
    line1: "Pero nunca quise ganarte.",
    line2: "Quería construir contigo una partida que dure toda la vida.",
    durationLabel: "1 año y 7 meses.",
    counterCaption: "Y seguimos contando.",
    question: "¿Jugamos otra partida?",
    yesLabel: "Sí ♡",
    obviouslyYesLabel: "Obviamente sí ♡",
    finalLine: "Te elegiría otra vez.",
  },

  /** ------------------------------------------------------------------ *
   *  MÚSICA (opcional)
   * ------------------------------------------------------------------ */
  music: {
    /** Coloca tu archivo en public/audio/music.mp3. No se reproduce sola. */
    src: "/audio/music.mp3",
    label: "Música",
  },
};

export type RelationshipData = typeof relationshipData;
