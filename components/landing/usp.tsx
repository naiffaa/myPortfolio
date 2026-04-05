"use client"

import { Clock, RefreshCw, Smartphone, User } from "lucide-react"
import type { USP as USPType } from "@/lib/types"

interface USPProps {
  data: USPType
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  RefreshCw,
  Smartphone,
  User,
}

export function USP({ data }: USPProps) {
  if (!data.items || data.items.length === 0) return null

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => {
            const Icon = iconMap[item.icon] || Clock

            return (
              <div key={item.title} className="group text-center">
                
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}