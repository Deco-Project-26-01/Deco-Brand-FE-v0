"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import { useSearchParams } from "next/navigation"
import { Suspense, useState, useEffect, useCallback } from "react"
import { ArrowUp, ChevronRight } from "lucide-react"
import Image from "next/image"

const certificateItems = [
  { id: 1, title: "Certificate", image: "/images/conference.jpg" },
  { id: 2, title: "Certificate", image: "/images/conference.jpg" },
  { id: 3, title: "Certificate", image: "/images/conference.jpg" },
]

function AboutContent() {
  const searchParams = useSearchParams()
  // Normalize tab parameter: convert hyphens to spaces for matching
  const rawTab = searchParams.get("tab") || "how we work"
  const activeTab = rawTab.replace(/-/g, " ")

  const [certPage, setCertPage] = useState(1)
  const certItemsPerPage = 3
  const certTotalPages = Math.ceil(certificateItems.length / certItemsPerPage)
  const paginatedCerts = certificateItems.slice(
    (certPage - 1) * certItemsPerPage,
    certPage * certItemsPerPage
  )

  // Synchronized image loading for certificates
  const [loadedCertImages, setLoadedCertImages] = useState<Set<number>>(new Set())
  const [allCertImagesReady, setAllCertImagesReady] = useState(false)

  useEffect(() => {
    setLoadedCertImages(new Set())
    setAllCertImagesReady(false)
  }, [certPage])

  useEffect(() => {
    if (loadedCertImages.size === paginatedCerts.length && paginatedCerts.length > 0) {
      setAllCertImagesReady(true)
    }
  }, [loadedCertImages, paginatedCerts.length])

  const handleCertImageLoad = useCallback((id: number) => {
    setLoadedCertImages(prev => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const tabs = [
    { id: "how we work", label: "How we work" },
    { id: "history", label: "History" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "Company", href: "/company" },
              { label: tabs.find(t => t.id === activeTab)?.label || "About us" },
            ]}
          />

          {/* Title */}
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">
            {tabs.find(t => t.id === activeTab)?.label || "About us"}
          </h1>

          {/* Tabs */}
          <div className="flex gap-2 mb-10">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`/company?tab=${tab.id}`}
                className={`px-4 py-2 text-sm font-medium border transition-colors ${activeTab === tab.id
                  ? "bg-[#004127] text-[#ffffff] border-[#004127]"
                  : "bg-[#ffffff] text-[#4f4f4f] border-[#cfcfcf] hover:border-[#004127]"
                  }`}
              >
                {tab.label}
              </a>
            ))}
          </div>

          {/* Content Area */}
          <div className="py-8">
            {activeTab === "contact" ? (
              <div className="max-w-[600px] mx-auto">
                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-8">
                  Contact
                </h2>
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>WhatsApp: +82-10-2728-4255</li>
                  <li>Business E-mail: </li>
                </ul>
                <br />
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Tel: </li>
                  <li>Sales: +82-2-747-0908</li>
                  <li>Factory: +82-63-833-8435</li>
                </ul>

                <hr className="my-6 border-[#cfcfcf]" />

                <h2 className="text-xl font-semibold text-[#1a1a1a] mb-8">
                  Factory
                </h2>
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Address: 215-8, Seonhwa-ro 63-gil, Iksan-city, Jeollabuk-do, Republic of Korea</li>
                </ul>

                {/* Google Map */}
                <div className="mt-8 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.8548474076584!2d126.95476347574978!3d35.94850997250124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f41a0b9f6c05d%3A0x4b5b7b7b7b7b7b7b!2s215-8%20Seonhwa-ro%2063-gil%2C%20Iksan-si%2C%20Jeollabuk-do%2C%20South%20Korea!5e0!3m2!1sen!2skr!4v1710000000000!5m2!1sen!2skr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="DECO Industry Factory Location"
                  />
                </div>
              </div>
            ) : activeTab === "history" ? (
              <div className="w-full max-w-[900px] mx-auto">
                <Image
                  src="/images/deco_history.png"
                  alt="DECO Industry History Timeline - 1986 to 2026"
                  width={1400}
                  height={780}
                  className="w-full h-auto rounded"
                  priority
                />
              </div>
            ) : activeTab === "how we work" ? (
              <div className="max-w-[800px] mx-auto">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#1a1a1a] text-center mb-2">(주) 데코산업 DECO IND CO., LTD.</h2>
                <hr className="border-[#cfcfcf] mb-8" />

                {/* About Deco Ind Co Ltd */}
                <section className="mb-8">

                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Deco Ind Co Ltd is a B2B jewelry brand based in South Korea since in 1986. We specialize in 10k, 14k, 18k mounting for tennis bracelets, necklaces, and earrings for diamonds and color stones since 1986.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Every piece is personally selected, inspected and completed with a strong focus on quality, origin and craftsmanship. We take personal responsibility for each item we offer.
                  </p>
                </section>

                {/* Expertise and experience */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Expertise and experience</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    For four decades, we have focused exclusively on fine gold jewelry manufacturing. Thanks to this long-term specialization, we have deep expertise in gold mounting quality, precision, and craftsmanship.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    You can purchase our jewelry by contacting us directly for business inquiries. If you can&apos;t find a specific piece in the current selection, we will be happy to arrange a <a href="/company?tab=contact" className="text-[#004127] hover:underline"> custom order by email or WhatsApp or an individual adjustment. </a>.
                  </p>
                </section>

                {/* How our jewelry is created */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">How our jewelry is created</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    We work exclusively with high-quality gold materials, including 10k gold, 14k gold, and 18k gold. All materials are carefully selected and sourced from trusted suppliers.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Our jewelry is manufactured in our own factory in South Korea, ensuring full control over quality and precision. We work with long-standing, carefully vetted international partners .
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    We do not engage in mass production. Even our more accessible pieces are not anonymous stock items - each one is carefully crafted and assembled by skilled artisans.
                  </p>
                </section>

                {/* Certificate of authenticity */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Certificate</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    Each jewelry piece comes with a certificate of authenticity, confirming the gold purity and the materials used.
                  </p>
                </section>

                {/* Our selection */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Our selection</h3>
                  <ul className="space-y-1">
                    <li><a href="/brand?category=bracelets" className="text-[#004127] hover:underline text-sm">Tennis bracelets</a></li>
                    <li><a href="/brand?category=necklace" className="text-[#004127] hover:underline text-sm">Tennis necklaces</a></li>
                    <li><a href="/brand?category=earrings" className="text-[#004127] hover:underline text-sm">Tennis earrings</a></li>

                    <li className="text-sm text-[#1a1a1a]">Custom jewelry designs</li>
                  </ul>
                </section>

                {/* Personal approach */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Personal approach</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    Every customer matters to us. We&apos;ll gladly help you choose and take your preferences into account - whether you&apos;re looking for a specific design, a custom mounting, or an exceptional piece that isn&apos;t usually in stock.
                  </p>
                </section>

                {/* Trust and responsibility */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Trust and responsibility</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    Our work follows ethical principles. Deco Ind Co Ltd is founded by owner MR. Kim Eung Yeol, who is origin and presentation of Deco indco Ltd jewelry.
                  </p>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">
                    For business enquiries or specific requests, you can reach the Seoul Office via the email decoindco@naver.com
                  </p>
                </section>

                {/* Where to find us */}
                <section className="mb-8">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Where to find us</h3>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed mb-4">
                    You can contact us by mail and whatsapp <a href="/company?tab=contact" className="text-[#004127] hover:underline">Contacts</a> <br /> We deliver quickly and securely via trusted carriers, worldwide. Modes of Transport : CIF,FOB
                  </p>


                  <div className="text-sm text-[#1a1a1a] leading-relaxed">
                    <p className="font-semibold">📍Location</p>
                    <p>215-8, Seonhwa-ro 63-gil</p>
                    <p>Iksan-city, Jeollabuk-do</p>
                    <p>Republic of Korea</p>
                  </div>

                  <div className="flex justify-center">
                    <Image
                      src="/images/factory.png"
                      alt="Deco Ind Co Ltd Factory - Jewelry Manufacturing Workshop"
                      width={700}
                      height={525}
                      className="rounded"
                    />
                  </div>

                </section>
              </div>
            ) : activeTab === "certificates" ? (
              <>
                {/* Certificates Grid - 3 items per row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                  {paginatedCerts.map((item) => (
                    <article key={item.id} className="group cursor-pointer">
                      <div className="relative w-full h-[450px] overflow-hidden mb-3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className={`object-cover group-hover:scale-105 transition-all duration-300 ${allCertImagesReady ? "opacity-100" : "opacity-0"
                            }`}
                          onLoad={() => handleCertImageLoad(item.id)}
                          {...(item.id === 1 ? { priority: true } : { loading: "lazy" })}
                        />
                        {!allCertImagesReady && (
                          <div className="absolute inset-0 bg-[#f0f0f0] animate-pulse" />
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#004127] transition-colors">
                        {item.title}
                      </h3>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 pb-12">
                  {Array.from({ length: certTotalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCertPage(page)}
                      className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded cursor-pointer transition-colors ${certPage === page
                        ? "bg-[#004127] text-[#ffffff]"
                        : "text-[#7d7d7d] hover:text-[#1a1a1a]"
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                  {certPage < certTotalPages && (
                    <button
                      onClick={() => setCertPage((p) => Math.min(p + 1, certTotalPages))}
                      className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] cursor-pointer transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={3} />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Placeholder content for other tabs */}
                <div className="w-full max-w-[480px] mx-auto mb-8">
                  <div className="w-full h-4 bg-[#4f4f4f] rounded-full mb-2" />
                  <div className="w-[60%] h-4 bg-[#7d7d7d] rounded-full" />
                </div>
              </>
            )}
          </div>
        </div>
        {/* Scroll to top */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-[#F1BC69] text-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#e0a94f] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#ffffff]" />}>
      <AboutContent />
    </Suspense>
  )
}
