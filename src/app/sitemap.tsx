import { type MetadataRoute } from 'next'

import { loadBrands } from '@/lib/mdx'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/brands',
    '/jobs',
    '/contact',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))

  const brands = await loadBrands()
  const brandRoutes = brands.map((brand) => ({
    url: `${baseUrl}${brand.href}`,
    lastModified,
  }))

  return [...staticRoutes, ...brandRoutes]
}
