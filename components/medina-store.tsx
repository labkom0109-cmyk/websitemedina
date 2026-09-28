"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Search,
  Truck,
  X,
} from "lucide-react"
import {
  BUSINESS,
  catalogNotice,
  categoryDetails,
  categoryLabel,
  categoryProductMessage,
  formatPrice,
  generalWhatsAppMessage,
  products,
  projectWhatsAppMessage,
  promoProducts,
  promoWhatsAppMessage,
  type Product,
  type ProductCategory,
  whatsappLink,
} from "@/lib/products"

const navLinks = [
  ["Home", "#home"],
  ["Produk", "#produk"],
  ["Baja Ringan", "#baja-ringan"],
  ["Keramik", "#keramik"],
  ["Granit", "#granit"],
  ["Promo", "#promo"],
  ["Tentang Kami", "#tentang"],
  ["Lokasi", "#lokasi"],
] as const

function WhatsAppLink({
  message,
  children,
  className,
  productName,
}: {
  message: string
  children: React.ReactNode
  className: string
  productName?: string
}) {
  return (
    <a
      className={className}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={productName ? `Tanya ${productName} via WhatsApp` : undefined}
    >
      {children}
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="topline">
        <div className="topline-inner">
          <span><MapPin size={13} /> Tenggeles, Mejobo, Kudus</span>
          <span><Clock3 size={13} /> Mulai pukul 07.00 WIB</span>
        </div>
      </div>
      <div className="nav-shell">
        <a className="brand-lockup" href="#home" aria-label="Kencana TB. Medina, ke beranda">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-text"><strong>KENCANA</strong><small>TB. Medina · Toko Bangunan</small></span>
        </a>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navigasi utama">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <WhatsAppLink message={generalWhatsAppMessage} className="nav-mobile-cta">
            <MessageCircle size={17} /> Chat WhatsApp
          </WhatsAppLink>
        </nav>
        <WhatsAppLink message={generalWhatsAppMessage} className="button button-green nav-cta">
          <MessageCircle size={17} /> <span>Chat WhatsApp</span>
        </WhatsAppLink>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-photo" aria-hidden="true">
        <Image src="/images/material-store-hero.png" alt="" fill priority sizes="100vw" className="hero-image" />
      </div>
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> TOKO BANGUNAN <i /> TENGGELES <i /> KUDUS</div>
          <h1 id="hero-title">Material Bangunan Berkualitas <em>untuk Rumah &amp; Proyek Anda</em></h1>
          <p>Temukan baja ringan, keramik lantai, granit lantai, dan berbagai kebutuhan material bangunan di TB. Medina, Tenggeles, Kudus.</p>
          <div className="hero-actions">
            <WhatsAppLink message={generalWhatsAppMessage} className="button button-orange button-large">
              <MessageCircle size={18} /> Chat WhatsApp
            </WhatsAppLink>
            <a className="button button-ghost button-large" href="#produk">Lihat Produk <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-note"><span className="hero-note-mark"><PackageCheck size={22} /></span><span><strong>Material untuk kebutuhan Anda</strong><small>Rumah · Renovasi · Proyek</small></span></div>
      </div>
      <div className="hero-usps page-width">
        <div><Check size={17} /> Produk berkualitas</div>
        <div><Check size={17} /> Harga kompetitif</div>
        <div><Check size={17} /> Rumah &amp; kebutuhan proyek</div>
      </div>
    </section>
  )
}

function QuickContact() {
  return (
    <section className="quick-contact page-width" aria-label="Informasi toko">
      <div className="quick-item"><span className="quick-icon"><MapPin size={19} /></span><span><small>Lokasi</small><strong>Tenggeles, Mejobo, Kudus</strong></span></div>
      <a className="quick-item" href={whatsappLink(generalWhatsAppMessage)} target="_blank" rel="noopener noreferrer"><span className="quick-icon"><Phone size={18} /></span><span><small>WhatsApp</small><strong>0857-2980-7302</strong></span></a>
      <div className="quick-item"><span className="quick-icon"><Clock3 size={19} /></span><span><small>Jam buka</small><strong>Mulai 07.00 WIB</strong></span></div>
      <a className="button button-dark quick-map" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Buka Google Maps <ExternalLink size={15} /></a>
    </section>
  )
}

function SectionHeading({ kicker, title, description, dark = false }: { kicker: string; title: string; description: string; dark?: boolean }) {
  return <div className={`section-heading${dark ? " section-heading-light" : ""}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2><p>{description}</p></div>
}

function CategoryFeature() {
  return (
    <section className="section categories-section" id="produk">
      <div className="page-width">
        <SectionHeading kicker="PILIH KEBUTUHAN ANDA" title="Produk Unggulan" description="Material pilihan untuk berbagai kebutuhan pembangunan dan renovasi." />
        <div className="category-grid">
          {categoryDetails.map((category, index) => (
            <a className="category-card" href={`#${category.id}`} key={category.id}>
              <div className="category-image-wrap"><Image src={category.image} alt={category.title} fill sizes="(max-width: 700px) 90vw, 33vw" className="category-image" /><span className="category-index">0{index + 1}</span></div>
              <div className="category-card-content"><div><h3>{category.title}</h3><p>{category.description}</p><small>{category.count} · Tanya harga &amp; ketersediaan</small></div><span className="round-arrow"><ArrowRight size={18} /></span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <article className="product-card" id={product.id === "baja-c75-075" ? "baja-ringan" : product.id === "keramik-40" ? "keramik" : product.id === "granit-60" ? "granit" : undefined}>
      <button className="product-image-button" onClick={() => onSelect(product)} aria-label={`Lihat detail ${product.name}`}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 46vw, (max-width: 1000px) 30vw, 22vw" className="product-image" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </button>
      <div className="product-content">
        <span className="product-category">{categoryLabel(product.category)}</span>
        <button className="product-title-button" onClick={() => onSelect(product)}><h3>{product.name}</h3></button>
        <p>{product.size ?? product.specification}</p>
        <div className="product-bottom"><strong className="product-price">{formatPrice(product.promoPrice ?? product.price)}</strong><button className="detail-link" onClick={() => onSelect(product)} aria-label={`Detail ${product.name}`}><ArrowRight size={18} /></button></div>
        <WhatsAppLink message={product.whatsappMessage} className="product-whatsapp" productName={product.name}><MessageCircle size={15} /> Tanya via WhatsApp</WhatsAppLink>
      </div>
    </article>
  )
}

function ProductCatalog({ onSelect }: { onSelect: (product: Product) => void }) {
  const [category, setCategory] = useState<ProductCategory | "semua">("semua")
  const [size, setSize] = useState("semua")
  const [query, setQuery] = useState("")
  const filteredProducts = useMemo(() => products.filter((product) => {
    const categoryMatch = category === "semua" || product.category === category
    const searchMatch = `${product.name} ${product.size ?? ""} ${product.specification ?? ""}`.toLowerCase().includes(query.toLowerCase().trim())
    const sizeMatch = size === "semua" || product.size?.replaceAll(" ", "") === size.replaceAll(" ", "")
    return categoryMatch && searchMatch && sizeMatch
  }), [category, query, size])
  const filters: { id: ProductCategory | "semua"; label: string }[] = [
    { id: "semua", label: "Semua produk" },
    { id: "baja-ringan", label: "Baja ringan" },
    { id: "keramik", label: "Keramik" },
    { id: "granit", label: "Granit" },
  ]
  const sizes = category === "keramik" ? ["semua", "40 × 40 cm", "50 × 50 cm", "60 × 60 cm"] : category === "granit" ? ["semua", "60 × 60 cm", "80 × 80 cm"] : []

  return (
    <section className="section catalog-section" aria-labelledby="catalog-title">
      <div className="page-width">
        <SectionHeading kicker="KATALOG MATERIAL" title="Temukan Material yang Tepat" description="Lihat pilihan katalog kami. Harga, motif, ukuran, dan stok dapat ditanyakan langsung ke toko." />
        <div className="catalog-toolbar">
          <div className="catalog-filters" role="group" aria-label="Filter kategori produk">
            {filters.map((filter) => <button key={filter.id} className={`filter-chip${category === filter.id ? " active" : ""}`} onClick={() => { setCategory(filter.id); setSize("semua") }}>{filter.label}</button>)}
          </div>
          <label className="catalog-search"><Search size={17} /><span className="sr-only">Cari produk</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari produk..." /></label>
        </div>
        {sizes.length > 0 && <div className="size-filters" role="group" aria-label="Filter ukuran">{sizes.map((item) => <button key={item} className={`size-chip${size === item ? " active" : ""}`} onClick={() => setSize(item)}>{item === "semua" ? "Semua ukuran" : item}</button>)}</div>}
        <p className="catalog-notice"><BadgeCheck size={16} /> {catalogNotice}</p>
        {filteredProducts.length ? <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onSelect={onSelect} />)}</div> : <div className="empty-catalog"><Search size={24} /><p>Produk tidak ditemukan. Coba kata kunci lain.</p></div>}
      </div>
    </section>
  )
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title" tabIndex={-1} onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape") onClose() }}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup detail"><X size={20} /></button>
        <div className="modal-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 90vw, 48vw" /></div>
        <div className="modal-content"><span className="product-category">{categoryLabel(product.category)}</span><h2 id="detail-title">{product.name}</h2><p className="modal-description">{product.description}</p><dl className="detail-list"><div><dt>Ukuran</dt><dd>{product.size ?? "Tanyakan pilihan ukuran"}</dd></div><div><dt>Spesifikasi</dt><dd>{product.specification ?? "Detail dapat dikonfirmasi ke toko"}</dd></div><div><dt>Harga</dt><dd className="product-price">{formatPrice(product.promoPrice ?? product.price)}</dd></div><div><dt>Ketersediaan</dt><dd>Tanyakan stok terbaru melalui WhatsApp</dd></div></dl><WhatsAppLink message={product.whatsappMessage} className="button button-green modal-cta" productName={product.name}><MessageCircle size={18} /> Tanya Harga &amp; Stok via WhatsApp</WhatsAppLink></div>
      </section>
    </div>
  )
}

function PromotionSection() {
  if (promoProducts.length === 0) {
    return <section className="promo-section" id="promo"><div className="page-width promo-inner"><div className="promo-copy"><span className="eyebrow eyebrow-light">INFO HARGA &amp; PROMO</span><h2>Promo &amp; Harga Spesial</h2><p>Belum ada harga promo yang dipublikasikan. Hubungi toko untuk menanyakan penawaran terbaru dan harga sesuai kebutuhan Anda.</p><WhatsAppLink message={promoWhatsAppMessage} className="button button-orange"><MessageCircle size={17} /> Tanyakan Promo</WhatsAppLink></div><div className="promo-art" aria-hidden="true"><div className="promo-stamp">HARGA<br />TERBARU</div><div className="promo-lines" /></div></div></section>
  }
  return <section className="promo-section" id="promo"><div className="page-width"><SectionHeading kicker="PENAWARAN PILIHAN" title="Promo & Harga Spesial" description="Harga promo tertera sesuai katalog terbaru." dark /><div className="promo-products">{promoProducts.map((product) => <article className="promo-product" key={product.id}><Image src={product.image} alt={product.name} fill sizes="25vw" /><div><span>PROMO</span><h3>{product.name}</h3><del>{formatPrice(product.price)}</del><strong>{formatPrice(product.promoPrice)}</strong><WhatsAppLink message={product.whatsappMessage} className="button button-orange">Tanya promo <ArrowRight size={16} /></WhatsAppLink></div></article>)}</div></div></section>
}

function WhyKencana() {
  const reasons = [
    { icon: <PackageCheck />, title: "Produk Berkualitas", copy: "Material untuk berbagai kebutuhan pembangunan." },
    { icon: <BadgeCheck />, title: "Harga Kompetitif", copy: "Harga bersaing untuk pembelian retail maupun kebutuhan proyek." },
    { icon: <Truck />, title: "Melayani Kebutuhan Proyek", copy: "Cocok untuk kebutuhan material dalam jumlah besar." },
    { icon: <MessageCircle />, title: "Konsultasi via WhatsApp", copy: "Tanyakan produk, harga, stok, dan kebutuhan material dengan mudah." },
  ]
  return <section className="section why-section" id="tentang"><div className="page-width why-layout"><div className="why-intro"><span className="eyebrow">MITRA MATERIAL LOKAL</span><h2>Kenapa Belanja di <em>Kencana?</em></h2><p>Kami hadir sebagai toko bangunan lokal di Tenggeles, Kudus untuk membantu Anda mencari material yang dibutuhkan.</p><a className="text-link" href="#lokasi">Temukan toko kami <ArrowRight size={17} /></a></div><div className="reason-grid">{reasons.map((reason, index) => <article className="reason-item" key={reason.title}><span className="reason-number">0{index + 1}</span><span className="reason-icon">{reason.icon}</span><h3>{reason.title}</h3><p>{reason.copy}</p></article>)}</div></div></section>
}

function ProjectSection() {
  const needs = ["Kebutuhan rumah", "Renovasi", "Proyek", "Pembelian jumlah besar", "Cek harga", "Cek stok"]
  return <section className="project-section"><div className="page-width project-inner"><div><span className="eyebrow eyebrow-light">UNTUK RUMAH &amp; PROYEK</span><h2>Butuh Material<br />untuk Proyek?</h2><p>Konsultasikan kebutuhan material bangunan Anda dengan TB. Medina / Kencana.</p><div className="project-tags">{needs.map((need) => <span key={need}><Check size={14} />{need}</span>)}</div></div><WhatsAppLink message={projectWhatsAppMessage} className="button button-orange button-large"> <MessageCircle size={18} /> Konsultasi via WhatsApp <ArrowRight size={17} /></WhatsAppLink></div></section>
}

function BuyingSteps() {
  const steps = ["Pilih Produk", "Tanya Harga & Stok", "Konfirmasi Pesanan", "Atur Pengambilan / Pengiriman"]
  return <section className="section steps-section"><div className="page-width"><SectionHeading kicker="PRAKTIS & LANGSUNG" title="Belanja Mudah via WhatsApp" description="Mulai dari memilih material hingga mengatur pesanan, semuanya bisa ditanyakan langsung." /><div className="steps-grid">{steps.map((step, index) => <article className="step-card" key={step}><span className="step-number">0{index + 1}</span><div className="step-line" /><h3>{step}</h3></article>)}</div></div></section>
}

function LocationSection() {
  return <section className="location-section" id="lokasi"><div className="page-width location-layout"><div className="location-copy"><span className="eyebrow">DATANG LANGSUNG</span><h2>Kunjungi<br /><em>TB. Medina</em></h2><p className="location-address">{BUSINESS.address}</p><div className="location-meta"><span><MapPin size={17} /> Plus Code: 5VVX+WVR</span><span><Clock3 size={17} /> Mulai pukul 07.00 WIB</span><a href={whatsappLink(generalWhatsAppMessage)} target="_blank" rel="noopener noreferrer"><Phone size={17} /> 0857-2980-7302</a></div><div className="location-actions"><a className="button button-dark" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Buka Google Maps <ExternalLink size={16} /></a><WhatsAppLink message={generalWhatsAppMessage} className="button button-outline"><MessageCircle size={16} /> Hubungi toko</WhatsAppLink></div></div><div className="map-frame"><iframe title="Peta lokasi TB. Medina, Pikon Tenggeles, Kudus" src={BUSINESS.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="map-label"><span className="map-pin"><MapPin size={18} /></span><span><strong>TB. Medina</strong><small>Pikon, Tenggeles · Kudus</small></span><ExternalLink size={16} /></a></div></div></section>
}

function Footer() {
  const footerLinks = [["Home", "#home"], ["Produk", "#produk"], ["Baja Ringan", "#baja-ringan"], ["Keramik", "#keramik"], ["Granit", "#granit"], ["Promo", "#promo"], ["Lokasi", "#lokasi"], ["Kontak", "#lokasi"]]
  return <footer className="site-footer"><div className="page-width"><div className="footer-main"><div className="footer-brand"><a className="brand-lockup brand-lockup-light" href="#home"><span className="brand-mark" aria-hidden="true">K</span><span className="brand-text"><strong>KENCANA</strong><small>TB. Medina · Toko Bangunan</small></span></a><p>Solusi Material Bangunan Berkualitas di Kudus.</p><a className="footer-address" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} />{BUSINESS.address}</a></div><div className="footer-nav-wrap"><h3>Jelajahi</h3><nav className="footer-nav" aria-label="Navigasi footer">{footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav></div><div className="footer-contact"><h3>Hubungi kami</h3><p>Mulai pukul 07.00 WIB</p><WhatsAppLink message={generalWhatsAppMessage} className="button button-green"><MessageCircle size={17} /> Chat WhatsApp</WhatsAppLink><a href={whatsappLink(generalWhatsAppMessage)} target="_blank" rel="noopener noreferrer">0857-2980-7302</a></div></div><div className="footer-bottom"><span>© 2026 KENCANA / TB. Medina. All Rights Reserved.</span><span>Kudus, Jawa Tengah</span></div></div></footer>
}

function FloatingWhatsApp() {
  return <WhatsAppLink message={generalWhatsAppMessage} className="floating-whatsapp"><MessageCircle size={22} /><span>Chat WhatsApp</span></WhatsAppLink>
}

export function MedinaStore() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  return <><Header /><main><Hero /><QuickContact /><CategoryFeature /><ProductCatalog onSelect={setSelectedProduct} /><PromotionSection /><WhyKencana /><ProjectSection /><BuyingSteps /><LocationSection /></main><Footer /><FloatingWhatsApp />{selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}</>
}
