export const siteConfig = {
  name: 'Instituto Lengua Inglesa',
  tagline: 'Prof. Sofi Davila Villa',
  whatsappNumber: '541159521125',
  instagramHandle: 'lenguainglesasm',
  instagramUrl: 'https://www.instagram.com/lenguainglesasm',
  email: 'lenguainglesasm@gmail.com',
  location: 'San Miguel, Buenos Aires',
  whatsappMessage: 'Hola Sofi! Quiero consultarte por los cursos de inglés.',
} as const;

export const courses = [
  {
    slug: 'ninos',
    title: 'Inglés para Niños',
    shortTitle: 'Niños',
    description: 'Aprendizaje lúdico y dinámico para los más pequeños. Metodología basada en el juego, canciones y actividades creativas.',
    ages: '7 a 12 años',
    icon: 'Baby',
  },
  {
    slug: 'adolescentes',
    title: 'Inglés para Adolescentes',
    shortTitle: 'Adolescentes',
    description: 'Clases diseñadas para teenagers con contenido relevante, tecnología y preparación para exámenes internacionales.',
    ages: 'A partir de 12 años',
    icon: 'Backpack',
  },
  {
    slug: 'adultos',
    title: 'Inglés para Adultos',
    shortTitle: 'Adultos',
    description: 'Cursos flexibles y enfocados en tus objetivos reales. Desarrollá fluidez en comunicación oral y escrita.',
    ages: 'A partir de 18 años',
    icon: 'User',
  },
  {
    slug: 'business-english',
    title: 'Business English',
    shortTitle: 'Business English',
    description: 'Inglés profesional para el mundo corporativo. Reuniones, presentaciones, emails y negociaciones en inglés.',
    ages: 'Profesionales y ejecutivos',
    icon: 'Briefcase',
  },
  {
    slug: 'speaking',
    title: 'Speaking Courses',
    shortTitle: 'Speaking',
    description: 'Cursos intensivos de conversación para ganar confianza y fluidez oral. Grupos reducidos con dinámica participativa.',
    ages: 'Nivel preintermedio en adelante',
    icon: 'MessageSquare',
  },
  {
    slug: 'coaching',
    title: 'Coaching para Profesorado',
    shortTitle: 'Coaching Docente',
    description: 'Formación y acompañamiento para profesores de inglés. Metodología, recursos y práctica reflexiva.',
    ages: 'Docentes y estudiantes de profesorado',
    icon: 'GraduationCap',
  },
  {
    slug: 'personalizadas',
    title: 'Clases Personalizadas',
    shortTitle: 'Clases Personalizadas',
    description: 'Clases individuales adaptadas 100% a tus necesidades, ritmo y objetivos específicos.',
    ages: 'Todas las edades',
    icon: 'Sparkles',
  },
] as const;

export type CourseSlug = (typeof courses)[number]['slug'];
