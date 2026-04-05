"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingCTAProps {
  ctaText?: string
}

export function FloatingCTA({ ctaText = "Contact Me" }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 500

      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        if (footerRect.top < window.innerHeight) {
          setIsVisible(false)
          return
        }
      }

      setIsVisible(shouldShow)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToCTA = () => {
    const element = document.getElementById("cta")
    if (element) {
      const headerOffset = 110
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    setIsExpanded(false)
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {isExpanded && (
        <div className="w-72 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_0_30px_rgba(139,92,246,0.2)] backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-semibold text-white">
              Let’s Connect
            </span>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="text-white/60 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mb-4 text-sm leading-6 text-white/70">
            Open the contact section to reach me for internships, collaborations, or opportunities.
          </p>

          <Button
            type="button"
            onClick={scrollToCTA}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white hover:opacity-90"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-[0_0_20px_rgba(139,92,246,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-400/30 hover:bg-black/80 active:scale-95"
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}