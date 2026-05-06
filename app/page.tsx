import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/Nano2.png"
              alt="HKTDC Hong Kong International Jewellery Show 2026"
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
            <div className="w-full md:w-[200px] flex-shrink-0">
              <div className="relative w-full h-[140px] overflow-hidden">
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
                We are a manufacturer of the 10k,14k,18k mounting for "tennis bracelets,necklace,
                earrings" for diamonds color stones.
                <p> We work exclusively with high-quality gold materials. We supply it in a stone-ready setting form suitable for setting diamonds or colored stones.

                  Custom designs, sizes, and gold tones can be produced according to customer requests.</p>

              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1280px] mx-auto px-6">
          <hr className="border-[#eef1f4]" />
        </div>

        {/* Content Section 2 */}
        <section className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">

              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">Since 1986, we manufacture and export to 20+ countries.</h2>
              <p className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                <p> Main Markets : UAE, Hong Kong, India,Japan,USA </p>
                <p>
                  Lead Time3 ~ 5days<br></br>

                  Our products are manufactured in our own factory in South Korea, ensuring full control over quality and precision. </p>
                <p>
                  We do not engage in mass production. Each one is carefully crafted and assembled by skilled artisans.
                </p>


              </p>
            </div>
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="relative w-full h-[160px] overflow-hidden">
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
      </main>

      <Footer />
    </div>
  )
}
