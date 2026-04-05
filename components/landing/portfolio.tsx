"use client"

import { ExternalLink, Github, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Portfolio as PortfolioType } from "@/lib/types"

interface PortfolioProps {
  data: PortfolioType
}

export function Portfolio({ data }: PortfolioProps) {
  if (!data.items || data.items.length === 0) return null

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Projects
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black/25 shadow-[0_0_40px_rgba(99,102,241,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/20 hover:shadow-[0_0_45px_rgba(99,102,241,0.14)]"
            >
              {item.thumbnail_url && (
                <a
                  href={(item as any).post_url || item.live_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
                    <img
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                      <Linkedin className="h-3.5 w-3.5" />
                      View Post
                    </div>
                  </div>
                </a>
              )}

              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {item.tags && item.tags.length > 0 && (
                    <div className="hidden flex-wrap gap-2 sm:flex">
                      {item.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border border-white/10 bg-white/5 text-white/80"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <p className="mb-5 text-sm leading-7 text-white/70">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2 sm:hidden">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border border-white/10 bg-white/5 text-white/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {item.tags && item.tags.length > 2 && (
                  <div className="mb-5 hidden flex-wrap gap-2 sm:flex">
                    {item.tags.slice(2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border border-white/10 bg-white/5 text-white/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {(item as any).post_url && (
                    <a
                      href={(item as any).post_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/30 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.22)]"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn Post
                    </a>
                  )}

                  {item.live_url && (
                    <a
                      href={item.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}

                  {item.github_url && (
                    <a
                      href={item.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/30 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.22)]"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}