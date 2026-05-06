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
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/Imagine.jpg"
              alt="HKTDC Hong Kong International Jewellery Show 2026"
              fill
              className="object-cover"
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
              <Link href="#" className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                We are a manufacturer of the 10k,14k,18k mounting for "tennis bracelets,necklace,
                earrings" for diamonds color stones.
                <p> We work exclusively with high-quality gold materials. We supply it in a stone-ready setting form suitable for setting diamonds or colored stones.

                  Custom designs, sizes, and gold tones can be produced according to customer requests.</p>

              </Link>
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
              <Link href="#" className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                <p> Main Markets : UAE, Hong Kong, India,Japan,USA </p>
                <p>
                  Lead Time3 ~ 5days<br></br>

                  Our products are manufactured in our own factory in South Korea, ensuring full control over quality and precision. </p>
                <p>
                  We do not engage in mass production. Even our more accessible pieces are not anonymous stock items - each one is carefully crafted and assembled by skilled artisans.
                </p>


              </Link>
            </div>
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="relative w-full h-[160px] overflow-hidden">
                <Image
                  src="/images/decoindcoltd_factory.JPG"
                  alt="Leather Goods"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
