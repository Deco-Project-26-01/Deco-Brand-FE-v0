"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowUp, Plus, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { useState } from "react"

const exhibitions = [
  {
    id: 1, title: "2026 March Hong Kong International Jewelry Show", date: "2026.03.04 - 2026.03.09", location: "HKCEC Hong Kong Convention and Exhibition Centre Hong Kong, wanchai", description: "Date:9.15.2026-9.19.2026, Location: Hong Kong AsiaWorld-Expo & Hong Kong Convention and Exhibition Center, Frequency: every year, Admittance type: traders only"
  },
  {
    id: 2, title: "2026 May, LasVegas JCK show", date: "   May 29 - June 1, 2026", location: "Las vegas, NV", description: "Location: the Venetian Expo"
  },
  {
    id: 3, title: "2026 Sep, JEWELLERY & GEM FAIR WORLD HONG KONG ", date: "15.09.2026 - 19.09.2026", location: "AsiaWorld-Expo & Hong Kong Convention and Exhibition Center"
  },


]

export default function ExhibitionPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItem, setOpenItem] = useState<number | null>(null)

  const filteredExhibitions = exhibitions.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        <div className="max-w-[960px] mx-auto px-6 py-12">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#1a1a1a] text-center mb-10">
            Upcoming Events
          </h1>

          {/* Total count + Search */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-lg text-[#1a1a1a]">
              Total <span className="text-[#9b7b4f] font-semibold">{filteredExhibitions.length}</span>
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[200px] border border-[#cfcfcf] rounded px-3 py-2 text-sm text-[#1a1a1a] pr-9 focus:outline-none focus:border-[#004127]"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7d7d7d]" />
            </div>
          </div>

          {/* Exhibition List */}
          <div className="border-t border-[#cfcfcf]">
            {filteredExhibitions.map((item) => (
              <div key={item.id} className="border-b border-[#cfcfcf]">
                <button
                  onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                  className="w-full flex items-start justify-between py-5 px-4 text-left cursor-pointer hover:bg-[#f9f9f9] transition-colors"
                >
                  <div>
                    <span className="text-xs font-bold text-[#9b7b4f] block mb-1">{item.id}</span>
                    <h3 className="text-sm font-medium text-[#4f4f4f] mb-1">{item.title}</h3>
                    <span className="text-xs text-[#7d7d7d]">{item.date}</span>
                  </div>
                  <Plus
                    className={`w-4 h-4 text-[#7d7d7d] mt-2 shrink-0 transition-transform duration-200 ${openItem === item.id ? "rotate-45" : ""}`}
                  />
                </button>
                {openItem === item.id && (
                  <div className="px-4 pb-5 text-sm text-[#4f4f4f] leading-relaxed">
                    {item.description}

                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer" aria-label="First page">
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer" aria-label="Previous page">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-sm font-semibold bg-[#004127] text-[#ffffff] rounded cursor-pointer">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer" aria-label="Next page">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors cursor-pointer" aria-label="Last page">
              <ChevronsRight className="w-4 h-4" />
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
