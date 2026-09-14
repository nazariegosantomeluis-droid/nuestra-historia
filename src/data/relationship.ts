/**
 * ============================================================================
 *  CONTENIDO EDITABLE — "Nuestra historia"
 * ============================================================================
 * Este es el ÚNICO archivo que necesitas tocar para personalizar los textos,
 * fechas, fotografías e imágenes de la experiencia. Ningún componente de
 * React contiene texto "quemado" en el código: todos leen desde aquí.
 *
 * Guía paso a paso de cada campo: ver CONTENT_GUIDE.md en la raíz del
 * proyecto.
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
    myName: "Luisito",
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
     * título, mensaje y fotografía con tu propia información.
     * Ver CONTENT_GUIDE.md, sección 6.
     */
    memories: [
      {
        id: 1,
        title: "Nuestro primer hijo",
        message: "De mis recuerdos favoritos porque formar una familia contigo seria de lo mejor que me pasara (no importa donden o cuando)",
        photo: "/memories/photo01.jpg",
        photoAlt: "Fotografía del recuerdo: Nuestro primer hijo",
      },
      {
        id: 2,
        title: "En tu pumpe",
        message: "Fue todo un cuento llegar ese dia JAJAJAJA, porque habia un paro y tuve que irme en taxi y ay no, casi se me estropean las flores. Pero me encanto pasar ese dia contigo, no lo cambiaria por nada en el mundo.",
        photo: "/memories/photo02.jpg",
        photoAlt: "Fotografía del recuerdo: En tu pumpe",
      },
      {
        id: 3,
        title: "Regada",
        message: "Mi mama se burlo de mi por haber ido a la regada, pero adore hacerlo porque iria a cualquier plan en el que estuvieras tu, eres mi lugar seguro :3",
        photo: "/memories/photo03.jpg",
        photoAlt: "Fotografía del recuerdo: Regada",
      },
      {
        id: 4,
        title: "Sube cerros",
        message: "Ese dia me rei como no tienes una idea JAJAJAJA, adoro tu risa, amor mio. De hecho a veces me gustaria ser mas gracioso solo para escucharte reir mas seguido",
        photo: "/memories/photo04.jpg",
        photoAlt: "Fotografía del recuerdo: Sube cerros",
      },
      {
        id: 5,
        title: "Mi doctora favorita",
        message: "Lo estas haciendo increible, amorcito. Estoy super mega orgulloso de ti, mi vida (algun dia tendre consultas gratis :D, no es cierto, amor, te adoro <3)",
        photo: "/memories/photo05.jpg",
        photoAlt: "Fotografía del recuerdo: Mi doctora favorita",
      },
      {
        id: 6,
        title: "Cuidando chamaquitos",
        message: "Simplemente uno de los mejores dias de mi vida, me encanta que formes parte de ella",
        photo: "/memories/photo06.jpg",
        photoAlt: "Fotografía del recuerdo: Cuidando chamaquitos",
      },
      {
        id: 7,
        title: "Presa",
        message: "Ese dia fue WOOOOWWW, top planes que me gustaria repetir como el del rio, en serio te adoro tanto y no te cambiaria por nada del mundo, eres el amor de mi eternidad (vales cada kilometro de distancia y cada segundo de la espera), te amo cada oscilacion de cesio-133",
        photo: "/memories/photo07.jpg",
        photoAlt: "Fotografía del recuerdo: Presa",
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
    levelTitle: "Antes del final...",
    envelopeCta: "Abrir la carta",
    greeting: "Para mi Laly,",
    paragraphs: [
      "Ya un año y siete meses, parece mucho, pero realmente no es nada a comparacion de todo el tiempo que quiero pasar contigo, eres lo mas bonito que tengo en toda mi vida, perdon si soy muy nub a veces, pero no te imaginas lo mucho que te adoro y amo, quiero que mi vida sea a tu lado sin importar que, para mi eres la mas bonita de todo el universo, la mas increible, brillante, capaz, fuerte, eres el amor de mi eternidad",
      "Aun recuerdo cuando estaba nervioso por pedirte que fueras mi novia, me sudaban hasta la manos. Y ahora ya hemos pasado tantas cosas y aun asi me sigo enamorando mas de ti todos los dias, y lo seguire haciendo por lo que dure la eternidad.",
      "Tu eres lo que quiero para toda mi vida, mi Laly",
    ],
    signaturePrefix: "Con todo mi amor,",
    signature: "TU Luisito",
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
};

export type RelationshipData = typeof relationshipData;
