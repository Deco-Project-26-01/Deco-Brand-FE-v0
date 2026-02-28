import Link from "next/link"
import { Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#ffffff] font-bold text-lg tracking-widest">
              DECO
            </Link>
          </div>
          <Link
            href="/about?tab=contact"
            className="bg-[#004127] text-[#ffffff] text-xs font-semibold px-5 py-2 rounded hover:bg-[#004127]/90 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Info row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[#4f4f4f] pt-6">
          <div className="text-xs text-[#7d7d7d] leading-relaxed">
            <p>Deco Indco Ltd &middot; Jongno 3-ga, Seoul, Korea &middot; CEO: Kim & Lee</p>
            <p className="mt-1">COPYRIGHT &copy; Deco indco ltd All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://www.linkedin.com/in/sangho-k-36204b242/" className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors flex items-center gap-1 text-xs">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            <Link href="#" className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors flex items-center gap-1 text-xs">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </Link>
            <Link href="#" className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors flex items-center gap-1 text-xs">
              <Youtube className="w-4 h-4" />
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
