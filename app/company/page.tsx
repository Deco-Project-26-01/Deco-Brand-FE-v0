"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ArrowUp } from "lucide-react"
import Image from "next/image"

function AboutContent() {
  const searchParams = useSearchParams()
  // Normalize tab parameter: convert hyphens to spaces for matching
  const rawTab = searchParams.get("tab") || "about us"
  const activeTab = rawTab.replace(/-/g, " ")

  const tabs = [
    { id: "about us", label: "About us" },
    { id: "how we work", label: "How we work" },
    { id: "history", label: "History" },
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
          <div className="flex w-full mb-10">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`/company?tab=${tab.id}`}
                className={`flex-1 text-center px-3 py-2 text-sm font-medium border transition-colors ${activeTab === tab.id
                  ? "bg-[#004127] text-[#ffffff] border-[#004127] rounded"
                  : "bg-[#ffffff] text-[#4f4f4f] border-[#cfcfcf] hover:border-[#004127] rounded"
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
                  <li>WhatsApp: +821027284255 <a href="" className="text-[#004127] underline"></a></li>
                  <li>Business E-mail: </li>
                </ul>
                <hr className="my-6 border-[#cfcfcf]" />
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Tel: +82-2-747-0908(Sales)</li>
                  <li>Tel: +82-63-833-8435 (Factory)</li>
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
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="DECO Industry Factory Location"
                  />
                </div>
              </div>
            ) : activeTab === "about us" ? (
              <div className="max-w-[700px] mx-auto space-y-8">
                <div>
                  <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2">Nature of Business</h2>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">Exporter, Manufacturer</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2">Product / Service Range</h2>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">Gold Jewellery Set, White Gold Jewellery, Diamond Jewellery</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2">Exhibit / Brand / Service Description</h2>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">18K gold mounting jewellery of tennis bracelet, necklace & earring for diamonds.</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1a1a1a] mb-2">Main Markets</h2>
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">UAE, Hong Kong, India, Japan, USA, Australia, Thailand ...</p>
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
                    Our jewelry is manufactured in our own factory in South Korea, ensuring full control over quality and precision. We work with long-standing, carefully vetted international partners for distribution.
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
                    You can contact us by mail and whatsapp <a href="/company?tab=contact" className="text-[#004127] hover:underline">Contacts</a> <br></br> We deliver quickly and securely via trusted carriers, worldwide. Modes of Transport : CIF,FOB
                  </p>

                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Factory</h3>
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
