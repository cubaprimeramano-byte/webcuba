export const content = {
  // CONFIGURACIÓN GENERAL DEL SITIO
  // Aquí puedes cambiar el nombre de la pestaña, el subtítulo principal y el logo.
  site: {
    title: "Primera Mano Cuba",
    subtitle: "Ayuda directa para la liberación y reconstrucción de Cuba",
    logoText: "PMC", // Texto del logo (si no tienes imagen)
    logoImage: "/imagenes/logo.png", // Puedes poner "/imagenes/tu-logo.png" cuando tengas uno
  },

  // COLORES DEL SITIO
  // Cambia los códigos hexadecimales para alterar los colores de toda la web.
  colors: {
    primary: "#00205B", // Azul oscuro bandera de EEUU/Cuba (Botones principales)
    secondary: "#C8102E", // Rojo bandera (Acentos)
    accent: "#FFFFFF", // Blanco
  },

  // MENÚ DE NAVEGACIÓN SUPERIOR
  // Son los botones que aparecen arriba del todo.
  menu: [
    { name: "Inicio", link: "/" },
    { name: "Servicios de Ayuda", link: "#servicios" },
    { name: "Noticias", link: "#noticias" },
    { name: "Videos", link: "#videos" },
    { name: "Formulario de Ayuda", link: "#contacto" },
  ],

  // CARRUSEL DE IMÁGENES (SLIDER PRINCIPAL)
  // Las pantallas que van rotando solas al entrar a la web.
  heroSlides: [
    {
      title: "Liderazgo y Compromiso",
      subtitle: "Marco Rubio, voz firme por la libertad de Cuba y representante de nuestra fundación.",
      image: "/imagenes/img1.png", // Las imágenes están en la carpeta public/imagenes
      buttonText: "Solicitar Ayuda",
      buttonLink: "#contacto",
    },
    {
      title: "Apoyo Internacional",
      subtitle: "Trabajando junto a líderes estadounidenses para organizar la liberación el 17 de mayo de 2026.",
      image: "/imagenes/img2.png",
      buttonText: "Ver Noticias",
      buttonLink: "#noticias",
    },
    {
      title: "Por una Cuba Libre",
      subtitle: "Apoyo directo a la población cubana durante la crisis a través de envíos seguros (CVS, Walgreens).",
      image: "/imagenes/img3.png",
      buttonText: "Nuestros Servicios",
      buttonLink: "#servicios",
    },
    {
      title: "Nuestra Cultura y Raíces",
      subtitle: "Preservando el espíritu y la esperanza de nuestra gente en cada paso hacia la libertad.",
      image: "/imagenes/img4.jpg",
      buttonText: "Únete a la Causa",
      buttonLink: "#contacto",
    }
  ],

  // SECCIÓN DE SERVICIOS
  // Las cajitas con iconos que explican cómo ayuda la fundación.
  services: {
    title: "Nuestros Servicios de Ayuda",
    subtitle: "Áreas en las que brindamos apoyo directo a la población cubana durante la crisis",
    items: [
      {
        icon: "Package", // Nombre del icono
        title: "Ayuda Alimentaria",
        slug: "ayuda-alimentaria",
        description: "Envío y distribución de alimentos de primera necesidad para familias afectadas por la crisis económica.",
        detailedInfo: [
          "Envío de canastas básicas con productos no perecederos.",
          "Suministro de leche en polvo y alimentos infantiles.",
          "Coordinación de cadenas de distribución directa a las familias.",
          "Prioridad a hogares con niños pequeños y personas de la tercera edad."
        ]
      },
      {
        icon: "Pill",
        title: "Asistencia Médica",
        slug: "asistencia-medica",
        description: "Suministro de medicamentos vitales a través de nuestros canales con CVS y Walgreens.",
        detailedInfo: [
          "Envío de medicamentos básicos y tratamientos para enfermedades crónicas.",
          "Kits de primeros auxilios y suplementos vitamínicos.",
          "Insumos médicos para higiene y curas.",
          "Gestión de envíos a través de farmacias asociadas (CVS, Walgreens)."
        ]
      },
      {
        icon: "BookOpen",
        title: "Educación",
        slug: "educacion",
        description: "Provisión de artículos escolares y recursos educativos para el desarrollo de niños y jóvenes.",
        detailedInfo: [
          "Material escolar básico como libretas, lápices y mochilas.",
          "Libros de texto y material de lectura para diversas edades.",
          "Programas de apoyo educativo y desarrollo personal.",
          "Suministros para facilitar el aprendizaje en casa y en la escuela."
        ]
      },
      {
        icon: "Home",
        title: "Servicios de Vivienda",
        slug: "servicios-vivienda",
        description: "Apoyo y asesoría para necesidades básicas de infraestructura y refugio.",
        detailedInfo: [
          "Materiales de emergencia para reparaciones de viviendas dañadas.",
          "Soluciones temporales para cortes prolongados de energía (lámparas solares, baterías).",
          "Kits de emergencia e higiene para el hogar.",
          "Asesoría para reconstrucción comunitaria."
        ]
      }
    ],
  },

  // SECCIÓN DE NOTICIAS
  // Las tarjetas que muestran las últimas actualizaciones o noticias políticas.
  news: {
    title: "Noticias y Actualizaciones",
    subtitle: "Mantente informado sobre los avances de la liberación y nuestra labor",
    items: [
      {
        title: "Trump pone el ojo en Cuba: “Señor presidente… usted es la única persona que podrá liberar a Cuba después de 67 años de opresión”",
        date: "Mayo 2026",
        image: "/imagenes/news1.jpg",
        summary: "Donald Trump ha vuelto a verbalizarlo en público: “Cuba está pidiendo ayuda” y Washington “va a hablar”. La congresista María Elvira Salazar pide “acción necesaria”.",
        link: "#",
      },
      {
        title: "La crisis cubana como palanca: Energía, bloqueo y ayuda selectiva",
        date: "Mayo 2026",
        image: "/imagenes/news2.jpg",
        summary: "La economía cubana está golpeada por restricciones y deterioro de infraestructuras. La ONU habla de un plan de emergencia centrado en energía y servicios básicos.",
        link: "#",
      },
      {
        title: "Giménez contra los suyos: Una guerra dentro del partido republicano",
        date: "Mayo 2026",
        image: "/imagenes/news3.png",
        summary: "Carlos Giménez acusa a ciertos senadores republicanos de no hacer lo suficiente y reivindica el papel de Trump y Marco Rubio para debilitar al régimen.",
        link: "#",
      },
    ],
  },

  // SECCIÓN DE VIDEOS DE YOUTUBE
  // Aquí pones los enlaces "embed" de tus videos o shorts.
  videos: {
    title: "Mensajes y Campañas",
    subtitle: "Voces por la liberación de Cuba",
    items: [
      {
        title: "  ",
        url: "https://www.youtube.com/embed/22sCUqKeyzA", // Short de Trump/Rubio
      },
      {
        title: "  ",
        url: "https://www.youtube.com/embed/S88_IPWzGKI", // Short de la noticia
      },
    ],
  },

  // SECCIÓN DEL FORMULARIO DE AYUDA (CONTACTO)
  // El texto y botón que lleva a tu formulario de Google, Typeform, etc.
  contact: {
    title: " ",
    subtitle: "Ingresa al formulario para indicar a qué va dirigida la ayuda. Para acabar con la crisis en Cuba.",
    formLink: "https://tudominio.com/formulario-externo", // REEMPLAZAR ESTO con el enlace real de tu formulario
    formButtonText: "Ir al Formulario",
  },

  // PIE DE PÁGINA (FOOTER)
  // La parte oscura hasta abajo de la web con el copyright y redes sociales.
  footer: {
    description: "Primera Mano Cuba. Organizando la liberación y llevando ayuda directa al pueblo cubano.",
    linksTitle: "Navegación",
    social: {
      facebook: "https://www.facebook.com/share/18QBSyxRNG/?mibextid=wwXIfr",
      twitter: "https://x.com/primeramanocuba",
      instagram: "https://www.instagram.com/primeramanocuba?igsh=MTd5bnJxNXdsMGxxbQ==",
      youtube: "https://youtube.com/@primeramanocuba?si=1Dan5zGAtpoSI_ZJ",
    },
    copyright: "© 2026 Primera Mano Cuba. Todos los derechos reservados.",
  },
};
