"use client"

import { ArrowRight, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import siteData from "@/data/site-data.json"
import type { CTA as CTAType } from "@/lib/types"

interface CTASectionProps {
  data: CTAType
}

export function CTASection({ data }: CTASectionProps) {
  if (!data.headline) return null

  const linkedinUrl = siteData?.about?.social_links?.linkedin
  const email = siteData?.footer?.contact?.email
  const phone = siteData?.footer?.contact?.phone

  return (
    <section id="cta" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/25 px-6 py-12 text-center shadow-[0_0_50px_rgba(99,102,241,0.08)] backdrop-blur-xl sm:px-10 lg:px-16">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
              Contact
            </p>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {data.headline}
            </h2>

            {data.subheadline && (
              <p className="mx-auto max-w-3xl text-pretty text-lg leading-8 text-white/75">
                {data.subheadline}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/65">
              {email && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Mail className="h-4 w-4 text-purple-300" />
                  <span>{email}</span>
                </div>
              )}

              {phone && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Phone className="h-4 w-4 text-purple-300" />
                  <span>{phone}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              {data.primary_cta_text && email && (
                <a href={`mailto:${email}`}>
                  <Button
                    size="lg"
                    className="group h-14 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 px-8 text-lg font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.18)] transition-all duration-500 hover:-translate-y-0.5 hover:opacity-95"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {data.primary_cta_text}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                  </Button>
                </a>
              )}

              {data.secondary_cta_text && linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-xl border-white/10 bg-white/5 px-8 text-lg font-semibold text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-purple-400/30 hover:bg-white/10"
                  >
                    <Linkedin className="mr-2 h-5 w-5 text-purple-300" />
                    {data.secondary_cta_text}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}