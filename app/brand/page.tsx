"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ArrowUp } from "lucide-react"

function BrandContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || "necklace"

  const categories = [
    { id: "necklace", label: "Necklace" },
    { id: "bracelets", label: "Bracelets" },
    { id: "earrings", label: "Earrings" },
  ]

  const heroImages: Record<string, string> = {
    necklace: "/images/necklace-hero.jpg",
    bracelets: "/images/bracelets-hero.jpg",
    earrings: "/images/earrings-hero.jpg",
  }

  const currentHeroImage = heroImages[category] || "/images/necklace-hero.jpg"

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main>
        {/* Sub-navigation */}
        <div className="bg-[#f5f5f5] border-b border-[#cfcfcf]">
          <div className="max-w-[1280px] mx-auto px-6 flex gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/brand?category=${cat.id}`}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${category === cat.id
                  ? "border-[#004127] text-[#004127]"
                  : "border-transparent text-[#7d7d7d] hover:text-[#1a1a1a]"
                  }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <section className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src={currentHeroImage}
            alt="Brand Collection"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-[#1a1a1a]/30 flex flex-col justify-end p-8 md:p-16 box-border">
            <div className="w-full max-w-[1280px] mx-auto">
              {/* Showroom label */}
              <div className="mb-4">
                <span className="text-sm text-[#ffffff]/80 uppercase tracking-widest">showroom</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#ffffff] mb-6">
                Discover Our Designs
              </h2>

              <a
                href="https://buykorea.org/ec/prd/selectSvcDetail.do?goodsSn=3602010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#004127] text-[#ffffff] text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#004127]/90 transition-colors w-fit"
              >
                Online Inquiry
              </a>


              <a
                href="https://lasvegas.jckonline.com/en-us/about/product-directory/product-details.exh-f4860ddf-a464-4242-80d8-2b93e48f90c7.18k%20gold%20mounting%20jewellery.pro-21dd184b-81e8-47c6-ab10-6cc229c4edd0.html#/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#7d7d7d] text-[#ffffff] text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#004127]/90 transition-colors w-fit"
              >
                JCK Las Vegas catalog
              </a>

            </div>


          </div>
        </section>

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

export default function BrandPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#ffffff]" />}>
      <BrandContent />
    </Suspense>
  )
}
