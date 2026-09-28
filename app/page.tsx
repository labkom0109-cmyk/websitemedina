import { MedinaStore } from "@/components/medina-store"
import { localBusinessSchema, socialKeywords } from "@/lib/products"

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <MedinaStore />
    </>
  )
}

export const revalidate = 3600

export const metadata = {
  title: "Toko Bangunan Kudus | Baja Ringan, Keramik & Granit - Kencana",
  description:
    "Kencana / TB. Medina adalah toko bangunan di Tenggeles, Mejobo, Kudus yang menyediakan baja ringan, keramik lantai, granit lantai dan berbagai kebutuhan material bangunan.",
  keywords: socialKeywords,
  openGraph: {
    title: "KENCANA | TB. Medina — Toko Bangunan Kudus",
    description:
      "Solusi material bangunan berkualitas di Kudus. Temukan baja ringan, keramik lantai, dan granit di TB. Medina, Tenggeles.",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/material-store-hero.png",
        width: 1536,
        height: 1024,
        alt: "Material bangunan di KENCANA TB. Medina, Kudus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KENCANA | TB. Medina — Toko Bangunan Kudus",
    description:
      "Baja ringan, keramik lantai, dan granit. Hubungi TB. Medina di Tenggeles, Kudus.",
    images: ["/images/material-store-hero.png"],
  },
}

export const viewport = { themeColor: "#f8f7f4", width: "device-width", initialScale: 1 }
