// ÚNICA FUENTE DE CONTENIDO VISIBLE — todo el texto mostrado por la landing
// vive aquí. Los componentes NO deben tener strings hardcodeados (excepto iconos
// UI neutros). Cualquier cambio de copy se hace en este archivo.
export const copy = {
  metadata: {
    title: "500 Pasteles Saludables — La Abuela Teresa",
    description:
      "500 recetas de pasteles suaves, esponjosos y sabrosos, completamente libres de gluten, lácteos y azúcar.",
    productName: "Libro 500 Pasteles de la Abuela Teresa",
  },

  hero: {
    urgencyBar: "OFERTA VENCE HOY · 90% OFF solo por hoy",
    badge: "Nuevo recetario · +3.200 estudiantes",
    headline: {
      before: "NUNCA VOLVERÁS A VER LOS ",
      accent: "PASTELES SALUDABLES",
      after: " DE LA MISMA MANERA DESPUÉS DE VER ESTO.",
    },
    subheadline:
      "Descubre 500 recetas de pasteles suaves, esponjosos y sabrosos, completamente libres de gluten, lácteos y azúcar, para que puedas disfrutar de cada bocado sin dolor, culpa ni restricciones.",
    ctaLabel: "SÍ, QUERO EL LIBRO",
    starsAriaLabel: "Calificación 5 de 5 estrellas",
    starsRating: "5.0",
    socialProof: "+3.200 estudiantes certificados",
    trustChips: [
      { icon: "🌾", text: "Sin gluten" },
      { icon: "🥛", text: "Sin lácteos" },
      { icon: "🍬", text: "Sin azúcar" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Libro 500 Pasteles Saludables de La Abuela Teresa",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Listo en", bottom: "20 min" },
      discount: { icon: "🔥", top: "Hoy", bottom: "90% OFF" },
    },
  },

  preview: {
    kicker: "Sneak peek",
    headline: "MIRA LAS DELICIAS QUE VAS A APRENDER",
    items: [
      { src: "/preview/3-6.webp", alt: "Pastel saludable 1" },
      { src: "/preview/2-7.webp", alt: "Pastel saludable 2" },
      { src: "/preview/4-3.webp", alt: "Pastel saludable 3" },
      { src: "/preview/3-5-1.webp", alt: "Pastel saludable 4" },
      { src: "/preview/1-7.webp", alt: "Pastel saludable 5" },
      { src: "/preview/4-2.webp", alt: "Pastel saludable 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Pastel saludable 7" },
      { src: "/preview/1-5-1.webp", alt: "Pastel saludable 8" },
      { src: "/preview/3-3.webp", alt: "Pastel saludable 9" },
      { src: "/preview/2-4.webp", alt: "Pastel saludable 10" },
      { src: "/preview/1-4.webp", alt: "Pastel saludable 11" },
      { src: "/preview/1-6-1.webp", alt: "Pastel saludable 12" },
      { src: "/preview/2-3.webp", alt: "Pastel saludable 13" },
      { src: "/preview/chocolate.webp", alt: "Pastel saludable de chocolate" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Pastel saludable 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Pastel saludable 16" },
      { src: "/preview/12-1-2.webp", alt: "Pastel saludable 17" },
      { src: "/preview/2-6.webp", alt: "Pastel saludable 18" },
      { src: "/preview/1-8.webp", alt: "Pastel saludable 19" },
    ],
  },

  benefits: {
    kicker: "Por qué te va a encantar",
    headline: "Pasteles saludables sin renunciar al sabor",
    items: [
      { icon: "🎂", title: "500 sabores para no aburrirse nunca" },
      { icon: "✨", title: "Textura perfecta incluso sin gluten" },
      { icon: "🌾", title: "No necesitas harinas especiales" },
      { icon: "⚡", title: "Pasteles exprés de 20 minutos" },
      { icon: "💚", title: "Sin leche y sin azúcar" },
      { icon: "📖", title: "Paso a paso de la preparación" },
    ],
  },

  samples: {
    kicker: "Pruébalos primero",
    headline: "PASTELES DELICIOSOS (VERSIÓN CERO):",
    badge: "Sin azúcar, gluten y lactosa",
    items: [
      {
        name: "PASTEL DE CHOCOLATE",
        variant: "(FIT Y ESPONJOSO)",
        kcal: "88",
        time: "20 minutos",
        src: "/samples/pastel-chocolate.gif",
        alt: "Pastel de chocolate fit",
      },
      {
        name: "PASTEL DE ZANAHORIA",
        variant: "(CON COBERTURA DE CHOCOLATE FIT)",
        kcal: "120",
        time: "20 minutos",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Pastel de zanahoria con chocolate",
      },
      {
        name: "PASTEL DE PLÁTANO",
        variant: "(FIT)",
        kcal: "90",
        time: "20 minutos",
        src: "/samples/pastel-platano.gif",
        alt: "Pastel de plátano fit",
      },
      {
        name: "PASTEL DE TRES LECHES",
        variant: "(SIN LACTOSA)",
        kcal: "100",
        time: "20 minutos",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Pastel de tres leches sin lactosa",
      },
      {
        name: "CHOCOTORTA",
        variant: "(5 INGREDIENTES)",
        kcal: "108",
        time: "20 minutos",
        src: "/samples/chocotorta.gif",
        alt: "Chocotorta saludable",
      },
      {
        name: "PASTEL DE LIMÓN",
        variant: "(HECHO EN LICUADORA)",
        kcal: "100",
        time: "20 minutos",
        src: "/samples/pastel-limon.gif",
        alt: "Pastel de limón",
      },
      {
        name: "PASTEL RED VELT",
        variant: "(FIT)",
        kcal: "105",
        time: "19 minutos",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Pastel red velvet fit",
      },
    ],
    caloriesLabel: "Calorías",
    timeLabel: "Tiempo",
  },

  moreRecipesCta: {
    pretitle: "Y más de",
    big: "493",
    post: "RECETAS DE PASTELES...",
    ctaLabel: "DESCARGAR MI CÓPIA",
  },

  testimonials: {
    kicker: "Pruebas reales",
    headline: "VEA LO QUE DICEN LOS QUE LO COMPRARON",
    subheadline: "Lo que dicen nuestras estudiantes",
    studentsBadge: "+ 3200 estudiantes certificados",
    items: [
      {
        text: "Hice el pastel de chocolate ayer y no sobró ni un pedazo 😍 Mi familia ya me pidió que lo repita este finde. Sin azúcar y sin gluten... ¡increíble!!",
        time: "10:23",
      },
      {
        text: "No entendía cómo podía ser tan rico sin leche ni azúcar. El de tres leches sin lactosa me dejó sin palabras 🤯 Llevo 3 días horneando sin parar",
        time: "11:47",
      },
      {
        text: "Soy celíaca desde hace 10 años y nunca había podido comer pastel de verdad. Con este libro por fin puedo disfrutar igual que todos 😭❤️",
        time: "14:02",
      },
      {
        text: "El pastel de zanahoria con cobertura de chocolate quedó IGUAL al de la pastelería pero sin harinas ni azúcar. Lo llevé a la oficina y nadie creyó que era saludable jajaja",
        time: "09:15",
      },
      {
        text: "Llevo un mes con el libro y ya hice más de 15 recetas. El red velvet fit queda esponjoso y con ese color precioso 🎂 100% recomendado a todas!!",
        time: "16:38",
      },
      {
        text: "Al principio tenía dudas... pero el primer pastel me convenció al instante. El de plátano fit en 20 minutos es una maravilla ⭐⭐⭐⭐⭐ Gracias por existir",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Recetario en celular, computadora y tablet",
    },
  },

  categories: {
    kicker: "Sin aburrirte",
    headline: "RECETAS DIVIDIDAS EN CATEGORÍAS",
    groups: [
      {
        title: "100 Pasteles Relleno",
        items: [
          { src: "/preview/1-4.webp", alt: "Pastel relleno 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Pastel relleno 2" },
          { src: "/preview/12-1-2.webp", alt: "Pastel relleno 3" },
          { src: "/preview/2-3.webp", alt: "Pastel relleno 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Pastel relleno 5" },
        ],
      },
      {
        title: "100 Pasteles de Frutas",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Pastel de fruta 1" },
          { src: "/preview/2-4.webp", alt: "Pastel de fruta 2" },
          { src: "/preview/3-3.webp", alt: "Pastel de fruta 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Pastel de fruta 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Pastel de fruta 5" },
        ],
      },
      {
        title: "100 Pasteles Clásicos",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Pastel clásico 1" },
          { src: "/preview/2-5-1.webp", alt: "Pastel clásico 2" },
          { src: "/preview/4-2.webp", alt: "Pastel clásico 3" },
        ],
      },
      {
        title: "100 Pasteles Famosos de TikTok",
        items: [
          { src: "/preview/1-7.webp", alt: "Pastel de TikTok 1" },
          { src: "/preview/2-6.webp", alt: "Pastel de TikTok 2" },
          { src: "/preview/3-5-1.webp", alt: "Pastel de TikTok 3" },
          { src: "/preview/4-3.webp", alt: "Pastel de TikTok 4" },
        ],
      },
      {
        title: "100 Pasteles Helados",
        items: [
          { src: "/preview/1-8.webp", alt: "Pastel helado 1" },
          { src: "/preview/2-7.webp", alt: "Pastel helado 2" },
          { src: "/preview/3-6.webp", alt: "Pastel helado 3" },
          { src: "/preview/4-4.webp", alt: "Pastel helado 4" },
        ],
      },
    ],
    ctaLabel: "QUERO LAS RECETAS",
  },

  story: {
    kicker: "La historia detrás del libro",
    headline: "¿CÓMO SURGIÓ EL RECETARIO?",
    paragraphs: [
      "La Abuela Teresa siempre llenó nuestra casa con el aroma de pasteles que unían a la familia. Pero cuando mi hija Talia descubrió que no podía consumir gluten, todo cambió.",
      "Como nutricionista, decidí junto a mi madre transformar esas recetas en versiones seguras: sin azúcar, sin gluten y sin lactosa. Tras muchas pruebas, logramos resultados que sorprendieron hasta a la propia Abuela Teresa.",
      "Así nació este cuaderno: un legado familiar lleno de sabor y amor, que ahora también puede formar parte de tu historia.",
    ],
    image: {
      src: "/story.webp",
      alt: "La Abuela Teresa y su nieta en la cocina",
    },
  },

  bonuses: {
    kicker: "Regalos incluidos",
    headline: "RECIBE +3 BONUS GRATIS",
    items: [
      {
        label: "LIBRO BONUS 1",
        name: "GALLETAS Y BIZCOCHOS",
        desc: "20 recetas irresistibles de galletas crujientes y pasteles esponjosos, deliciosos y saludables.",
        price: "$ 19,90",
        freeLabel: "HOY ES GRATIS",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Galletas y Bizcochos" },
      },
      {
        label: "LIBRO BONUS 2",
        name: "RECETAS PROTEICAS EN FREIDORA DE AIRE",
        desc: "20 Recetas de comidas rápidas, saludables y llenas de proteína usando solo tu freidora de aire.",
        price: "$ 19,90",
        freeLabel: "HOY ES GRATIS",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Freidora de Aire" },
      },
      {
        label: "LIBRO BONUS 3",
        name: "RECETAS DE BUÑUELOS SALUDABLES",
        desc: "Bocaditos de pastel frito crujientes, sin remordimientos, saludables y rebosantes de sabor en cada bocado.",
        price: "$ 19,90",
        freeLabel: "HOY ES GRATIS",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Buñuelos Saludables" },
      },
      {
        label: "LIBRO BONUS 4",
        name: "RECETAS DE ENSALADAS DELICIOSAS",
        desc: "Ensaladas frescas, fáciles y saludables para disfrutar cada día con sabor y equilibrio.",
        price: "$ 19,90",
        freeLabel: "HOY ES GRATIS",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Ensaladas" },
      },
      {
        label: "LIBRO BONUS 5",
        name: "67 SUCOS DETOX",
        desc: "Renueva tu energía con 67 recetas de jugos detox naturales, refrescantes y nutritivos.",
        price: "$ 19,90",
        freeLabel: "HOY ES GRATIS",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 Sucos Detox" },
      },
    ],
    secretBonus: {
      label: "+3 BONUS SECRETOS",
      name: "Sorpresas exclusivas para quienes se llevan el recetario hoy",
      price: "$ 59,90",
      freeLabel: "HOY ES GRATIS",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Caja de bonus secretos" },
    },
    ctaLabel: "QUERO LAS RECETAS",
  },

  audience: {
    kicker: "¿Es para ti?",
    headline: "PARA PERSONAS QUE ENFRENTAN:",
    items: [
      "Búsqueda de recetas más saludables",
      "Reeducación alimentaria",
      "Intolerantes a la lactosa",
      "Celíacos",
      "Diabéticos",
    ],
  },

  finalCta: {
    flagline: "Los primeros 100 clientes reciben 20 lecciones en vídeo gratuitas",
    headline: "LIBRO DE 500 PASTELES DE LA CHEF TERESA ®",
    subheadline: "Todo lo que necesitas para hornear sin culpa",
    includesTitle: "+5 FREE BOOKS:",
    includes: [
      "+ DELICIOSAS RECETAS DE ENSALADAS + ADEREZOS",
      "+ RECETA DE BUÑUELOS FRITAS SALUDABLES",
      "+ RECETAS DE GALLETAS Y BIZCOCHOS",
      "+ RECETAS DE PROTEÍCAS EN AIR FEIDORA",
      "+ 67 RECETAS DE SUCOS DETOX",
    ],
    secretTitle: "+3 BONUS SECRETOS:",
    discountLabel: "90% OFF",
    regularPriceLabel: "DE",
    regularPrice: "$ 59,90",
    regularPriceSuffix: "...",
    offerPriceLabel: "Por solo",
    offerCurrency: "$",
    offerPrice: "14,90",
    button: "SI, LO QUIERO",
    urgencyNote: "**OFERTA VENCE HOY**",
    paymentLabel: "MÉTODOS DE PAGO",
    paymentImage: { src: "/payment-methods.webp", alt: "Métodos de pago" },
    secureLabel: "100% SECURE SITE",
    secureImage: { src: "/secure-site.webp", alt: "Sitio 100% seguro" },
    image: { src: "/final-mockup.webp", alt: "Recetarios en todas las plataformas" },
    bonusesBadge: "+8 bonos gratis",
    discountStickerLabel: "Descuento",
    discountStickerValue: "90% OFF",
  },

  delivery: {
    kicker: "Entrega",
    headline: "¿CÓMO RECIBIRÉ LAS RECETAS?",
    items: [
      { icon: "🖨️", text: "Se puede imprimir en papel." },
      { icon: "📱", text: "Puedes verlo en tu celular" },
      { icon: "💻", text: "Puedes verlo en la computadora." },
      { icon: "🚫", text: "Sin tableta" },
      { icon: "♾️", text: "Acceso de por vida: Con nuevas recetas" },
      { icon: "📩", text: "¿Perdiste tu receta? Te la reenviaremos." },
      { icon: "📚", text: "Obtenga nuevos libros cada mes" },
    ],
  },

  guarantee: {
    kicker: "Sin riesgo",
    headline: "PRUÉBALO SIN RIESGO — Garantía incondicional de 60 días.",
    body: "Tienes 60 días para probarlas. Si las recetas no te convencen, te reembolsaré hasta el último centavo. Sin complicaciones. Sin estrés.",
    alt: "Sello de garantía incondicional de 60 días",
    image: { src: "/guarantee-badge.webp", alt: "Garantía 60 días" },
  },

  faq: {
    kicker: "Preguntas y respuestas",
    headline: "FAQ — lo que todo el mundo pregunta",
    items: [
      {
        q: "¿Son caros los ingredientes?",
        a: "¡No! Usamos ingredientes sencillos que ya tienes en casa: nada de ingredientes complicados ni caros.",
      },
      {
        q: "¿Es realmente bueno un pastel sin trigo, leche, lactosa y azúcar?",
        a: "Sí, y lo mejor de todo: ¡es facilísimo de preparar! Las recetas se crearon para conservar el sabor que te encanta, con ingredientes ligeros y fáciles de encontrar.",
      },
      {
        q: "¿Las recetas son fáciles para principiantes (que nunca han hecho un pastel)?",
        a: "¡Son ideales para principiantes! Todo está explicado paso a paso, con ingredientes comunes e instrucciones de preparación sencillas. Si sabes encender el horno, ya puedes prepararlos.",
      },
      {
        q: "¿Cómo se endulzan los pasteles?",
        a: "Puedes elegir lo que prefieras: con fruta (plátano o dátil), con miel o con edulcorantes como stevia y eritritol. Cada receta indicará la cantidad de cada opción.",
      },
      {
        q: "¿Puedo sustituir el azúcar por fruta (plátano, dátiles)? ¿Cómo funciona?",
        a: "¡Sí, se puede! Y es más fácil de lo que parece: la receta te dice qué fruta usar, cuánta añadir y cómo hacer un pastel perfecto, jugoso y dulce.",
      },
      {
        q: "¿Qué harinas utilizas?",
        a: "Utilizamos una mezcla de harinas como la de arroz, avena o almendras, que puedes encontrar en cualquier mercado, incluso más baratas que la de trigo.",
      },
      {
        q: "¿Cuantos minutos tarda en estar listo el pastel?",
        a: "La mayoría en 20 o 30 minutos. Mientras preparas el café, el pastel ya huele en la cocina.",
      },
    ],
  },

  footer: {
    brand: "Abuela Teresas",
    links: [
      { label: "Política de privacidad", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Condiciones de uso", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Política de devoluciones", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2025 / Abuela Teresas – Todos los derechos reservados.",
  },

  stickyCta: {
    priceLabel: "Hoy",
    offerPrice: "$14,90",
    strikePrice: "$59,90",
    ctaLabel: "LO QUIERO",
  },
};
