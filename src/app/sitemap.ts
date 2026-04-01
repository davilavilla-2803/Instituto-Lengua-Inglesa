import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://institutolenguainglesa.vercel.app';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
  { path: '/cursos', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/cursos/ninos', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cursos/adolescentes', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cursos/adultos', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cursos/business-english', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cursos/speaking', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cursos/coaching', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/cursos/personalizadas', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/certificacion', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/experiencias', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/viajes', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/quienes-somos', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/contacto', priority: 0.9, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
