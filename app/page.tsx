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
              src="/images/HKDTC2026.jpg"
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
                  src="/images/jewelry-store.jpg"
                  alt="Jewelry Store"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">Decoindco — Custom Jewellery Manufacturer in South Korea</h2>
              <div className="space-y-2">
                <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                <div className="h-2.5 bg-[#cfcfcf] rounded-full w-[90%]" />
                <div className="h-2.5 bg-[#eef1f4] rounded-full w-[80%]" />
              </div>
              <Link href="#" className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                Since 1986, we export to 20+ countries like UAE,Hong Kong(China),India,Japan,USA
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
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-4">We are a manufacturer of the 10k,14k,18k mounting for "tennis bracelets,necklace,
                earrings" for diamonds color stones. </h2>
              <div className="space-y-2">
                <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                <div className="h-2.5 bg-[#cfcfcf] rounded-full w-full" />
                <div className="h-2.5 bg-[#cfcfcf] rounded-full w-[90%]" />
                <div className="h-2.5 bg-[#eef1f4] rounded-full w-[70%]" />
              </div>
              <Link href="#" className="inline-block mt-4 text-xs text-[#7d7d7d] hover:text-[#1a1a1a] transition-colors">
                OEM & ODM • 20+ countries
              </Link>
            </div>
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="relative w-full h-[160px] overflow-hidden">
                <Image
                  src="/images/jewelry-store.jpg"
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
