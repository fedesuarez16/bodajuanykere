/** Editá estos datos con la información de la boda */

export const weddingConfig = {
  coupleNames: "Juan & Kere",
  verse: {
    text: "Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre.",
    reference: "Mateo 19, 6",
  },
  story: {
    image: "/historia.jpg",
    alt: "Juan y Kere",
    paragraphs: [
      "Después de años amando a Jesús y de hacerlo nuestra prioridad, hoy nos encontramos en Él. Creciendo en tierras diferentes, Dios unió nuestras vidas con un propósito eterno, guiando cada paso hasta este momento.",
      "Con alegría y gratitud en el corazón, queremos celebrar este día tan especial junto a las personas que más amamos. Por eso deseamos que seas testigo del pacto que haremos delante de Dios de amarnos, cuidarnos, y respetarnos para siempre.",
    ],
  },
  heroImage: "/portadafinal.jpg",
  info: {
    date: "Sábado 15 de noviembre de 2025",
    placeTime: "Salón Los Jazmines — Av. Ejemplo 1234, CABA. Ceremonia 18:00 hs",
    dressCode: "Etiqueta rigurosa",
  },
  gifts: {
    bankName: "Banco Ejemplo",
    holder: "Juan Pérez",
    cbu: "0000000000000000000000",
    alias: "boda.juan.kere",
    note: "Enviá el comprobante por WhatsApp si querés.",
  },
  rsvpFormUrl: "https://forms.google.com",
} as const;
