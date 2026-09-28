import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Toko Bangunan Kudus | Baja Ringan, Keramik & Granit - Kencana',
    template: '%s | KENCANA TB. Medina',
  },
  description:
    'Kencana / TB. Medina adalah toko bangunan di Tenggeles, Mejobo, Kudus yang menyediakan baja ringan, keramik lantai, granit lantai dan berbagai kebutuhan material bangunan.',
  applicationName: 'KENCANA | TB. Medina',
  generator: 'Next.js',
  category: 'shopping',
  openGraph: {
    title: 'KENCANA | TB. Medina — Toko Bangunan Kudus',
    description:
      'Solusi material bangunan berkualitas di Kudus. Temukan baja ringan, keramik lantai, dan granit di TB. Medina, Tenggeles.',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: '/images/material-store-hero.png', width: 1536, height: 1024, alt: 'Material bangunan di KENCANA TB. Medina, Kudus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KENCANA | TB. Medina — Toko Bangunan Kudus',
    description: 'Baja ringan, keramik lantai, dan granit. Hubungi TB. Medina di Tenggeles, Kudus.',
    images: ['/images/material-store-hero.png'],
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f7f4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
