import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Top row */}
        <div className="flex flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo_white.png"
                alt="DECO"
                width={80}
                height={28}
                priority
              />
            </Link>
          </div>
          <Link
            href="/company?tab=contact"
            className="bg-[#004127] text-[#ffffff] text-xs font-semibold px-5 py-2 rounded hover:bg-[#004127]/90 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Info row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[#4f4f4f] pt-6">
          <div className="text-xs text-[#7d7d7d] leading-relaxed">
            <p>Deco Indco Ltd &middot; Jongno 3-ga, Seoul, Korea &middot; CEO: Kim & Lee</p>
            <p className="mt-1">COPYRIGHT &copy; Deco Indco Ltd All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/decoindco" target="_blank" rel="noopener noreferrer" className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors flex items-center gap-1 text-xs">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://buykorea.org/ec/prd/selectSvcDetail.do?goodsSn=3602010" target="_blank" rel="noopener noreferrer" className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors flex items-center gap-1 text-xs">
              <Instagram className="w-4 h-4" />
              <span>buyKOREA</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#7d7d7d] hover:text-[#ffffff] transition-colors flex items-center gap-1 text-xs">
              <FaWhatsapp className="w-4 h-4" />
              <span>Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
