"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ArrowUp } from "lucide-react"

function AboutContent() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "about us"

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
              { label: "About", href: "/about" },
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
                href={`/about?tab=${tab.id}`}
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
                  <li>E-mail: <a href="mailto:decoindco@naver.com" className="text-[#004127] underline">decoindco@naver.com</a></li>
                  <li>E-mail: <a href="mailto:decoindco@gmail.com" className="text-[#004127] underline">decoindco@gmail.com</a></li>
                </ul>
                <hr className="my-6 border-[#cfcfcf]" />
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Tel: +82-2-747-0908~9 (Sales)</li>
                  <li>Tel: +82-63-833-8435 (Factory)</li>
                  <li>Phone: +82-10-8022-4255</li>
                </ul>
                <hr className="my-6 border-[#cfcfcf]" />
                <ul className="space-y-2 text-[#1a1a1a] text-sm leading-relaxed">
                  <li>Address: 215-8, Seonhwa-ro 63-gil, Iksan-city, Jeollabuk-do, Republic of Korea</li>
                </ul>
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
                  <p className="text-sm text-[#4f4f4f] leading-relaxed">UAE, Hong Kong (China), India, Japan, USA</p>
                </div>
              </div>
            ) : (
              <>
                {/* Placeholder image */}
                <div className="w-full max-w-[480px] mx-auto mb-8">
                  <div className="w-full h-4 bg-[#4f4f4f] rounded-full mb-2" />
                  <div className="w-[60%] h-4 bg-[#7d7d7d] rounded-full" />
                </div>

                {/* Headline */}
                <h2 className="text-xl font-semibold text-[#1a1a1a] text-center mb-6">
                  Headline goes here
                </h2>

                {/* Description placeholder */}
                <div className="max-w-[480px] mx-auto space-y-2 mb-8">
                  <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                  <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                  <div className="h-2.5 bg-[#cfcfcf] rounded-full w-[90%]" />
                  <div className="h-2.5 bg-[#eef1f4] rounded-full w-[80%]" />
                  <div className="h-2.5 bg-[#eef1f4] rounded-full w-[70%]" />
                </div>
              </>
            )}
          </div>
        </div>
        <hr></hr>


        {/* Scroll to top */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-[#1a1a1a] text-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#4f4f4f] transition-colors"
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
