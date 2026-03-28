"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"
import { ArrowUp, ChevronRight, Plus, X, Search } from "lucide-react"

const newsItems = [
  { id: 1, title: "Dubai Show 2026", image: "/images/conference.jpg" },
  { id: 2, title: "LasVegas Jewellery Show 2026", image: "/images/conference.jpg" },
  { id: 3, title: "Jewellery & Gem WORLD Hong Kong 2026", image: "/images/conference.jpg" },
  { id: 4, title: "JCK Show Las Vegas 2026", image: "/images/conference.jpg" },
  { id: 5, title: "$5 million Export Tower ,2004", image: "/images/conference.jpg" },
  { id: 6, title: "$30 million Export Tower, 2022", image: "/images/Deco_export_tower_3.jpg" },
]

const noticeItems = [
  { id: 3, title: "2026 March Hong Kong International Jewelry Show", date: "2026.03.04", details: "Details for 2026 March Hong Kong International Jewelry Show will be displayed here." },
  { id: 2, title: "Company Website Renewal", date: "2025.04.03", details: "Details for Company Website Renewal will be displayed here." }, { id: 1, title: "Deco 공식 홈페이지 OPEN!", date: "2026.03.30", badge: "Deco", details: "* Seoul Office hour AM 10:00 ~ PM 17:00 (Closed on weekends and Korean public holidays" }

]

function NewsContent() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab") || "news"
  const [openItem, setOpenItem] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const tabs = [
    { id: "news", label: "News" },
    { id: "notice", label: "Notice" },
  ]

  const filteredNotices = noticeItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
            <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
              {activeTab === "notice" ? "NOTICE" : "NEWS"}
            </h1>
            <p className="text-xs text-[#7d7d7d]">
              TOTAL {activeTab === "notice" ? filteredNotices.length : newsItems.length}
            </p>
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

          {activeTab === "notice" ? (
            <>
              {/* Search bar for Notice */}
              <div className="flex items-center justify-end mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[220px] border border-[#cfcfcf] rounded px-3 py-2 text-sm text-[#1a1a1a] pr-9 focus:outline-none focus:border-[#004127]"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7d7d7d]" />
                </div>
              </div>

              {/* Notice Table Header */}
              <div className="border-t-2 border-b border-[#1a1a1a] bg-[#f9f9f9]">
                <div className="grid grid-cols-[80px_1fr_120px] py-3 px-4 text-sm font-semibold text-[#1a1a1a]">
                  <span className="text-center">NO</span>
                  <span className="text-center">제목</span>
                  <span className="text-center">등록일자</span>
                </div>
              </div>

              {/* Notice List */}
              <div className="border-b border-[#cfcfcf]">
                {filteredNotices.map((item) => (
                  <div key={item.id} className="border-b border-[#eef1f4]">
                    <button
                      onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                      className="w-full grid grid-cols-[80px_1fr_120px] items-center py-4 px-4 text-left cursor-pointer hover:bg-[#f9f9f9] transition-colors"
                    >
                      <span className="text-sm text-[#7d7d7d] text-center">{item.id}</span>
                      <span className="text-sm text-[#1a1a1a] flex items-center gap-2">
                        {item.badge && (
                          <span className="bg-[#7d7d7d] text-[#ffffff] text-xs px-2 py-0.5 rounded">
                            {item.badge}
                          </span>
                        )}
                        {item.title}
                      </span>
                      <span className="text-sm text-[#7d7d7d] text-center">{item.date}</span>
                    </button>
                    {openItem === item.id && (
                      <div className="bg-[#f9f9f9] px-6 py-5 border-t border-[#eef1f4]">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-sm font-bold text-[#9b7b4f] block mb-1">{item.id}</span>
                            <h3 className="text-base font-medium text-[#1a1a1a] mb-1">{item.title}</h3>
                            <span className="text-xs text-[#7d7d7d] block mb-4">{item.date}</span>
                            <p className="text-sm text-[#4f4f4f] leading-relaxed">{item.details}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenItem(null)
                            }}
                            className="text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                            aria-label="Close"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination for Notice */}
              <div className="flex items-center justify-center gap-2 py-8">
                <span className="text-sm text-[#1a1a1a] font-medium">1</span>
              </div>
            </>
          ) : (
            <>
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

              {/* Pagination for News */}
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
            </>
          )}
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
