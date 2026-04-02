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
    date: "7 de noviembre 2026",
    placeTime: "Buenos Aires, Argentina, Lugar y horario: a confirmar",
    dressCode: "Etiqueta rigurosa",
  },
  /** Link a lista de hoteles, Maps o PDF */
  hospedajesUrl: "https://maps.google.com",
  /** Tres imágenes para la galería inferior (archivos en /public) */
  gallery: [
    { src: "/1.jpg", alt: "Juan y Kere" },
    { src: "/2.jpg", alt: "Juan y Kere" },
    { src: "/3.jpg", alt: "Juan y Kere" },
  ] as const,
  gifts: {
    bankName: "Banco Ejemplo",
    holder: "Juan Pérez",
    cbu: "0000000000000000000000",
    alias: "boda.juan.kere",
    note: "Enviá el comprobante por WhatsApp si querés.",
  },
  rsvpFormUrl: "https://forms.google.com",
} as const;
