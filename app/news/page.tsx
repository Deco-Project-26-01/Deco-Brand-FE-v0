"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ArrowUp, ChevronRight } from "lucide-react"

const newsItems = [
  { id: 1, title: "Dubai Show 2026", image: "/images/conference.jpg" },
  { id: 2, title: "LasVegas Jewellery Show 2026", image: "/images/conference.jpg" },
  { id: 3, title: "Jewellery & Gem WORLD Hong Kong 2026", image: "/images/conference.jpg" },
  { id: 4, title: "JCK Show Las Vegas 2026", image: "/images/conference.jpg" },
  { id: 5, title: "$5 million Export Tower ,2004", image: "/images/conference.jpg" },
  { id: 6, title: "This is News Title", image: "/images/conference.jpg" },
]

function NewsContent() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "news"

  const tabs = [
    { id: "news", label: "News" },
    { id: "notice", label: "Notice" },
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
              { label: "News", href: "/news" },
              { label: activeTab === "news" ? "News" : "Notice" },
            ]}
          />

          {/* Title & Total */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">NEWS</h1>
            <p className="text-xs text-[#7d7d7d]">TOTAL 10</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`/news?tab=${tab.id}`}
                className={`px-4 py-2 text-sm font-medium border transition-colors ${activeTab === tab.id
                  ? "bg-[#004127] text-[#ffffff] border-[#004127]"
                  : "bg-[#ffffff] text-[#4f4f4f] border-[#cfcfcf] hover:border-[#004127]"
                  }`}
              >
                {tab.label}
              </a>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {newsItems.map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="relative w-full h-[180px] overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    {...(item.id === 1 ? { priority: true } : { loading: "lazy" })}
                  />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#004127] transition-colors">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pb-12">
            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium bg-[#004127] text-[#ffffff] rounded cursor-pointer">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
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

export default function NewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#ffffff]" />}>
      <NewsContent />
    </Suspense>
  )
}
