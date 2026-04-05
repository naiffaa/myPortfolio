"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import siteData from "@/data/site-data.json"
import type { Hero as HeroType } from "@/lib/types"

interface HeroProps {
  data: HeroType
}

export function Hero({ data }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const linkedinUrl =
    siteData?.about?.social_links?.linkedin ||
    "https://www.linkedin.com/in/naifa-al-arifi-64602229b"

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      {data.background_type === "video" && data.background_url && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        >
          <source src={data.background_url} type="video/mp4" />
        </video>
      )}

      {/* 🔥 Background Image */}
      {data.background_type === "image" && data.background_url && (
        <img
          src={data.background_url}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* 🔥 Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* 🔥 Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-6">

          {/* Name */}
          <p className="text-sm font-medium tracking-wide text-white/60 sm:text-base">
            Naifa Al-arifi
          </p>

          {/* Title */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              AI Engineer & Developer
            </span>
          </h1>

          {/* Subtitle */}
          {data.subheadline && (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {data.subheadline}
            </p>
          )}

          {/* 🔥 Button */}
          <div className="pt-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-14 border border-white/10 bg-black/30 px-8 text-lg font-semibold text-white backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] active:scale-[0.98]"
              >
                LinkedIn
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}