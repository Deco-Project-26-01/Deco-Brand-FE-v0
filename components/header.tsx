"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Search, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  {
    label: "Company",
    href: "/about",
    submenu: [
      { label: "How we work", href: "/about?tab=how we work" },
      { label: "History", href: "/about?tab=history" },
      { label: "Contact", href: "/about?tab=contact" },
    ],
  },
  {
    label: "Brand",
    href: "/brand",
    submenu: [

      { label: "Bracelets", href: "/brand?category=bracelets" },
      { label: "Necklaces", href: "/brand?category=necklaces" },

    ],
  },
  { label: "News", href: "/news" },
  { label: "IR", href: "/ir" },
]

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-[#004127] text-[#ffffff] relative z-50" ref={menuRef}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="text-[#ffffff] font-bold text-xl tracking-widest">
          DECO
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href.split("?")[0])
            return (
              <div key={item.label} className="relative">
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#f1bc69] cursor-pointer ${isActive ? "text-[#f1bc69]" : "text-[#ffffff]"
                    }`}
                  onClick={() => {
                    if (item.submenu) {
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                  }}
                  onMouseEnter={() => {
                    if (item.submenu) setOpenMenu(item.label)
                  }}
                >
                  {!item.submenu ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                  {item.submenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`} />
                  )}
                </button>
              </div>
            )
          })}
        </nav>

        {/* Full-width mega dropdown */}
        {navItems.map((item) =>
          item.submenu && openMenu === item.label ? (
            <div
              key={item.label}
              className="absolute top-full left-0 w-full bg-[#ffffff] text-[#1a1a1a] shadow-xl border-t border-[#eef1f4] z-50"
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="max-w-[1280px] mx-auto px-6 py-8">
                <div className="flex gap-16">
                  {/* Left: Section title */}
                  <div className="min-w-[140px]">
                    <h3 className="text-xs font-semibold text-[#7d7d7d] uppercase tracking-wider mb-4">
                      {item.label}
                    </h3>
                    <Link
                      href={item.href}
                      className="text-sm text-[#004127] font-medium hover:underline"
                      onClick={() => setOpenMenu(null)}
                    >
                      View All
                    </Link>
                  </div>

                  {/* Right: Submenu items */}
                  <div className="flex gap-10">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="group flex flex-col items-start"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="text-base font-medium text-[#1a1a1a] group-hover:text-[#004127] transition-colors">
                          {sub.label}
                        </span>
                        <span className="mt-1 h-0.5 w-0 bg-[#004127] group-hover:w-full transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-[#ffffff] hover:text-[#f1bc69] transition-colors cursor-pointer" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>

          {/* Language selector */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm text-[#ffffff] hover:text-[#f1bc69] transition-colors cursor-pointer"
              onClick={() => setLangOpen(!langOpen)}
            >
              EN
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#ffffff] text-[#1a1a1a] rounded shadow-lg min-w-[80px] py-1 z-50">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-[#eef1f4] cursor-pointer">
                  EN
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-[#eef1f4] cursor-pointer">
                  KR
                </button>
              </div>
            )}
          </div>

          <Link
            href="/online-store"
            className="bg-[#ffffff] text-[#004127] text-xs font-semibold px-4 py-2 rounded hover:bg-[#eef1f4] transition-colors"
          >
            Online Store
          </Link>
        </div>
      </div>
    </header>
  )
}
