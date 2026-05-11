"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

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
      { label: "Earrings", href: "/brand?category=earrings" },
    ],
  },
  {
    label: "News",
    href: "/news",
    submenu: [
      { label: "News", href: "/news?tab=news" },
      { label: "Notice", href: "/news?tab=notice" },
    ],
  },
  { label: "Exhibition", href: "/exhibition" ,
    submenu:[
      {label: "Exhibition", href: "/exhibition"}
    ]
  },
]

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null)
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleMobileMenuToggle = (label: string) => {
    setExpandedMobileMenu(expandedMobileMenu === label ? null : label)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setExpandedMobileMenu(null)
  }

  return (
    <>
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

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href.split("?")[0])
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.submenu) setOpenMenu(item.label)
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#f1bc69] cursor-pointer ${isActive ? "text-[#f1bc69]" : "text-[#ffffff]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* Full-width mega dropdown - Desktop */}
          {navItems.map((item) =>
            item.submenu && openMenu === item.label ? (
              <div
                key={item.label}
                className="absolute top-full left-0 w-full bg-[#ffffff] text-[#1a1a1a] shadow-xl border-t border-[#eef1f4] z-50 hidden md:block"
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="max-w-[1280px] mx-auto px-6 py-8">
                  <div className="flex justify-center gap-16">
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

          {/* Right side - Desktop  coming soon https://deco-store-fe-production.up.railway.app/*/}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-[#ffffff] invisible">
              EN
            </span>
            <a
              href="https://deco-store-fe-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffffff] text-[#004127] text-xs font-semibold px-4 py-2 rounded hover:bg-[#eef1f4] transition-colors"
            >
              B2B catalog
            </a>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#ffffff]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#ffffff] z-[100] md:hidden transform transition-transform ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ transitionDuration: '400ms' }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f5f5f5]">
          <a
            href="https://deco-store-fe-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#cfcfcf] text-[#7d7d7d] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#eef1f4] transition-colors flex items-center gap-2"
          >
            B2B STORE
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </a>
          <button
            onClick={closeMobileMenu}
            className="w-10 h-10 flex items-center justify-center text-[#1a1a1a]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="px-6 py-8">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-[#eef1f4]">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => handleMobileMenuToggle(item.label)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="text-xl font-semibold text-[#1a1a1a] uppercase tracking-wide">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7d7d7d] transition-transform duration-300 ${expandedMobileMenu === item.label ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {/* Submenu */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${expandedMobileMenu === item.label ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={closeMobileMenu}
                        className="block py-3 pl-4 text-base text-[#4f4f4f] hover:text-[#004127] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-6"
                >
                  <span className="text-xl font-semibold text-[#1a1a1a] uppercase tracking-wide">
                    {item.label}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#7d7d7d]" />
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
