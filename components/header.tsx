"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"

const navItems = [
  {
    label: "Company",
    href: "/company",
    submenu: [
      { label: "About us", href: "/company?tab=about-us" },
      { label: "How we work", href: "/company?tab=how-we-work" },
      { label: "History", href: "/company?tab=history" },
      { label: "Contact", href: "/company?tab=contact" },
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
  { label: "Exhibition", href: "/exhibition" },
]

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-[#004127] text-[#ffffff] relative z-50" ref={menuRef}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo_white.png"
            alt="DECO"
            width={80}
            height={28}
            priority
          />
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
                  <Link href={item.href}>{item.label}</Link>
                </button>
              </div>
            )
          })}
        </nav>

        {/* Full-width mega dropdown - 드롭다운 메뉴 전체 영역 */}
        {navItems.map((item) =>
          item.submenu && openMenu === item.label ? (
            <div
              key={item.label}
              className="absolute top-full left-0 w-full bg-[#ffffff] text-[#1a1a1a] shadow-xl border-t border-[#eef1f4] z-50"
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* 드롭다운 메뉴 내부 영역 */}
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
          {/* Language indicator */}
          <span className="text-sm text-[#ffffff] invisible">
            EN
          </span>

          <a
            href="https://deco-store-fe-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffffff] text-[#004127] text-xs font-semibold px-4 py-2 rounded hover:bg-[#eef1f4] transition-colors"
          >
            B2B Store
          </a>
        </div>
      </div>
    </header>
  )
}
