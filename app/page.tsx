"use client"

import dynamic from "next/dynamic"
import { useRef, useState, useEffect } from "react"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
  loading: () => null,
})

function useLazyVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function HomePage() {
  const section2 = useLazyVisible()
  const footerSection = useLazyVisible()

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/Nano2.png"
              alt="Logo"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-[400px] flex-shrink-0">
              <div className="relative w-full h-[280px] overflow-hidden">
                <Image
                  src="/images/kora_pavilion2012.jpg"
                  alt="KORA pavilion at a jewelry trade show"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">DECO IND CO., LTD. </h2>
              <p className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                We are a manufacturer of the 10k,14k,18k mounting for &quot;tennis bracelets,necklace,
                earrings&quot; for diamonds color stones.
                <p> We work exclusively with high-quality gold materials. </p> 
                <p>We supply it in a stone-ready setting form suitable for setting diamonds or colored stones.

                  Custom designs, sizes, and gold tones can be produced according to customer requests.</p>

              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-6">
          <hr className="border-[#eef1f4]" />
        </div>

        {/* Content Section 2 - lazy loaded on scroll */}
        <div ref={section2.ref}>
          {section2.isVisible && (
            <section className="max-w-[1280px] mx-auto px-6 py-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">Since 1986, we manufacture and export to 20+ countries.</h2>
                  <p className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                    <p> Main Markets : UAE, Hong Kong, India,Japan,USA </p>
                    <p>
                      Lead Time : 3 ~ 5days<br></br>

                      Our products are manufactured in our own factory in South Korea, ensuring full control over quality and precision. </p>
                    <p>
                      We do not engage in mass production. Each one is carefully crafted and assembled by skilled artisans.
                    </p>
                  </p>
                </div>
                <div className="w-full md:w-[300px] flex-shrink-0">
                  <div className="relative w-full h-[500px] overflow-hidden">
                    <Image
                      src="/images/decoindcoltd_factory.JPG"
                      alt="ceo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-right mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors"> CEO : KIM KISEONG, LEE KWANYOUNG</p>
            </section>
          )}
        </div>
      </main>

      {/* Footer - lazy loaded on scroll */}
      <div ref={footerSection.ref}>
        {footerSection.isVisible && <Footer />}
      </div>
    </div>
  )
}