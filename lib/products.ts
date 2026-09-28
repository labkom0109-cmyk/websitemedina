export const WHATSAPP_NUMBER = "6285729807302"

export const BUSINESS = {
  name: "TB. Medina",
  brand: "KENCANA",
  category: "Hardware Store / Toko Bangunan",
  address:
    "5VVX+WVR, Pikon, Tenggeles, Kec. Mejobo, Kabupaten Kudus, Jawa Tengah 59381",
  phoneDisplay: "0857-2980-7302",
  shortLocation: "Tenggeles, Mejobo, Kudus",
  opening: "Mulai pukul 07.00 WIB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=5VVX%2BWVR%2C%20Pikon%2C%20Tenggeles%2C%20Kec.%20Mejobo%2C%20Kabupaten%20Kudus%2C%20Jawa%20Tengah%2C%2059381",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=5VVX%2BWVR%2C%20Pikon%2C%20Tenggeles%2C%20Mejobo%2C%20Kudus%2C%20Jawa%20Tengah%2C%2059381&t=&z=15&ie=UTF8&iwloc=&output=embed",
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const generalWhatsAppMessage =
  "Hallo Kencana / TB. Medina, saya ingin bertanya mengenai produk dan harga material bangunan."

export type ProductCategory = "baja-ringan" | "keramik" | "granit"

export type Product = {
  id: string
  name: string
  category: ProductCategory
  image: string
  size?: string
  specification?: string
  description: string
  price?: number
  promoPrice?: number
  badge?: string
  whatsappMessage: string
}

function productMessage(name: string) {
  return `Hallo Kencana / TB. Medina, saya tertarik dengan produk ${name}. Mohon informasi harga dan stok.`
}

export const products: Product[] = [
  {
    id: "baja-c75-075",
    name: "Baja Ringan C75 × 0.75",
    category: "baja-ringan",
    image: "/images/baja-ringan.png",
    specification: "Profil C75 · ketebalan 0.75 mm",
    description: "Pilihan profil baja ringan untuk rangka konstruksi dan berbagai kebutuhan bangunan.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Baja Ringan C75 × 0.75"),
  },
  {
    id: "baja-c75-070",
    name: "Baja Ringan C75 × 0.70",
    category: "baja-ringan",
    image: "/images/baja-ringan.png",
    specification: "Profil C75 · ketebalan 0.70 mm",
    description: "Profil baja ringan untuk kebutuhan rangka yang praktis dan efisien.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Baja Ringan C75 × 0.70"),
  },
  {
    id: "baja-c75-060",
    name: "Baja Ringan C75 × 0.60",
    category: "baja-ringan",
    image: "/images/baja-ringan.png",
    specification: "Profil C75 · ketebalan 0.60 mm",
    description: "Profil baja ringan untuk pilihan kebutuhan konstruksi bangunan.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Baja Ringan C75 × 0.60"),
  },
  {
    id: "reng-baja-ringan",
    name: "Reng Baja Ringan",
    category: "baja-ringan",
    image: "/images/baja-ringan.png",
    specification: "Profil reng · spesifikasi dapat dikonfirmasi",
    description: "Komponen rangka atap baja ringan. Tanyakan pilihan ukuran dan ketersediaannya.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Reng Baja Ringan"),
  },
  {
    id: "aksesoris-baja-ringan",
    name: "Aksesori Baja Ringan",
    category: "baja-ringan",
    image: "/images/baja-ringan.png",
    specification: "Jenis dan spesifikasi dapat dikonfirmasi",
    description: "Aksesori pendukung pemasangan rangka baja ringan. Hubungi toko untuk detail pilihan.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Aksesori Baja Ringan"),
  },
  {
    id: "keramik-40",
    name: "Keramik Lantai 40 × 40",
    category: "keramik",
    image: "/images/keramik.png",
    size: "40 × 40 cm",
    specification: "Motif, warna, dan pilihan produk dapat dikonfirmasi",
    description: "Pilihan ukuran keramik lantai untuk kebutuhan rumah maupun bangunan.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Keramik Lantai 40 × 40"),
  },
  {
    id: "keramik-50",
    name: "Keramik Lantai 50 × 50",
    category: "keramik",
    image: "/images/keramik.png",
    size: "50 × 50 cm",
    specification: "Motif, warna, dan pilihan produk dapat dikonfirmasi",
    description: "Keramik lantai dengan pilihan motif yang dapat ditanyakan langsung ke toko.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Keramik Lantai 50 × 50"),
  },
  {
    id: "keramik-60",
    name: "Keramik Lantai 60 × 60",
    category: "keramik",
    image: "/images/keramik.png",
    size: "60 × 60 cm",
    specification: "Motif, warna, dan pilihan produk dapat dikonfirmasi",
    description: "Pilihan ukuran keramik untuk melengkapi kebutuhan lantai rumah dan proyek.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Keramik Lantai 60 × 60"),
  },
  {
    id: "granit-60",
    name: "Granit Lantai 60 × 60",
    category: "granit",
    image: "/images/granit.png",
    size: "60 × 60 cm",
    specification: "Motif, warna, dan pilihan produk dapat dikonfirmasi",
    description: "Granit lantai untuk tampilan ruang yang rapi dan berkarakter.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Granit Lantai 60 × 60"),
  },
  {
    id: "granit-80",
    name: "Granit Lantai 80 × 80",
    category: "granit",
    image: "/images/granit.png",
    size: "80 × 80 cm",
    specification: "Motif, warna, dan pilihan produk dapat dikonfirmasi",
    description: "Contoh ukuran granit lantai. Tanyakan motif, pilihan produk, dan ketersediaan.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Granit Lantai 80 × 80"),
  },
  {
    id: "granit-lainnya",
    name: "Pilihan Granit Lantai",
    category: "granit",
    image: "/images/granit.png",
    specification: "Ukuran dan motif dapat dikonfirmasi",
    description: "Hubungi TB. Medina untuk menanyakan pilihan granit yang sesuai kebutuhan.",
    badge: "Contoh katalog",
    whatsappMessage: productMessage("Pilihan Granit Lantai"),
  },
]

export const categoryDetails = [
  {
    id: "baja-ringan",
    title: "Baja Ringan",
    description: "Rangka konstruksi ringan, kuat, dan praktis untuk berbagai kebutuhan bangunan.",
    image: "/images/baja-ringan.png",
    count: "5 contoh produk",
  },
  {
    id: "keramik",
    title: "Keramik Lantai",
    description: "Beragam pilihan motif dan ukuran untuk mempercantik rumah dan bangunan.",
    image: "/images/keramik.png",
    count: "3 contoh produk",
  },
  {
    id: "granit",
    title: "Granit Lantai",
    description: "Pilihan granit untuk menghadirkan kesan elegan dan berkarakter.",
    image: "/images/granit.png",
    count: "3 contoh produk",
  },
] as const

export function formatPrice(value?: number) {
  if (value == null) return "Tanya harga"
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function categoryLabel(category: ProductCategory) {
  return {
    "baja-ringan": "Baja Ringan",
    keramik: "Keramik Lantai",
    granit: "Granit Lantai",
  }[category]
}

export function categoryHref(category: ProductCategory) {
  return `#${category}`
}

export function categoryProductMessage(category: ProductCategory) {
  return `Hallo Kencana / TB. Medina, saya ingin bertanya mengenai ${categoryLabel(category)}. Mohon informasi produk, harga, dan stok.`
}

export function hasPromo(product: Product) {
  return product.price != null && product.promoPrice != null && product.promoPrice < product.price
}

export const promoProducts = products.filter(hasPromo)
export const promoWhatsAppMessage =
  "Hallo Kencana / TB. Medina, saya ingin bertanya mengenai promo dan harga spesial material bangunan."
export const projectWhatsAppMessage =
  "Hallo Kencana / TB. Medina, saya ingin konsultasi kebutuhan material untuk proyek. Mohon informasi produk, harga, dan stok."
export const catalogNotice =
  "Katalog contoh — tanyakan harga, motif, ukuran, dan ketersediaan terbaru langsung ke toko."

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: BUSINESS.name,
  alternateName: BUSINESS.brand,
  description:
    "Kencana / TB. Medina adalah toko bangunan di Tenggeles, Mejobo, Kudus yang menyediakan baja ringan, keramik lantai, granit lantai dan berbagai kebutuhan material bangunan.",
  telephone: "+62 857-2980-7302",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: "Kudus",
    addressRegion: "Jawa Tengah",
    postalCode: "59381",
    addressCountry: "ID",
  },
}

export const socialKeywords = [
  "toko bangunan Kudus",
  "toko bangunan di Kudus",
  "toko material bangunan Kudus",
  "toko bangunan Mejobo",
  "toko bangunan Tenggeles",
  "toko bangunan Pikon",
  "baja ringan Kudus",
  "jual baja ringan Kudus",
  "harga baja ringan Kudus",
  "keramik lantai Kudus",
  "jual keramik Kudus",
  "granit lantai Kudus",
  "jual granit Kudus",
  "material bangunan Kudus",
  "supplier bahan bangunan Kudus",
]
export const keywordText = socialKeywords.join(", ")
