"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import type { Navbar as NavbarType, Brand } from "@/lib/types"

interface NavbarProps {
  data: NavbarType
  brand: Brand
}

export function Navbar({ data, brand }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!data.show) return null

  const scrollToSection = (targetSection: string) => {
    const element = document.getElementById(targetSection)

    if (!element) {
      console.warn(`Section with id "${targetSection}" was not found`)
      return
    }

    const headerOffset = 110
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset

    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-black/45 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={scrollToTop}
          className="text-xl font-bold text-white transition-opacity hover:opacity-80"
        >
          {brand.name}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {data.links.map((link) => (
            <button
              key={link.target_section}
              type="button"
              onClick={() => scrollToSection(link.target_section)}
              className="cursor-pointer text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}

          {data.cta_text && (
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 px-8 text-lg font-semibold text-white backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
            >
              {data.cta_text}
            </button>
          )}
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-xl p-2 text-white md:hidden"
          style={{
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
        >
          {isMobileMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </nav>

      <div
        className={`mx-4 mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-5">
          {data.links.map((link) => (
            <button
              key={link.target_section}
              type="button"
              onClick={() => scrollToSection(link.target_section)}
              className="text-left text-base font-medium text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}

          {data.cta_text && (
            <button
              type="button"
              onClick={() => scrollToSection("cta")}
              className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white backdrop-blur-md transition-all duration-500 ease-out hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500"
            >
              {data.cta_text}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}