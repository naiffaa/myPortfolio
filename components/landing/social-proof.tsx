"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { SocialProof as SocialProofType } from "@/lib/types"

interface SocialProofProps {
  data: SocialProofType
}

function AnimatedCounter({ target }: { target: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const numericValue = parseInt(target.replace(/\D/g, ""), 10)
    if (isNaN(numericValue)) return

    let current = 0
    const increment = numericValue / 60

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target])

  const suffix = target.replace(/[0-9]/g, "")

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function SocialProof({ data }: SocialProofProps) {
  const hasMetrics =
    data.metrics && data.metrics.length > 0 && data.metrics[0].label !== ""

  const hasTestimonials =
    data.testimonials &&
    data.testimonials.length > 0 &&
    data.testimonials[0].name !== ""

  if (!hasMetrics && !hasTestimonials) return null

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Metrics */}
        {hasMetrics && (
          <div className="mb-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {data.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                  <AnimatedCounter target={metric.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials */}
        {hasTestimonials && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
              >
                <CardContent className="p-6">

                  <Quote className="mb-4 h-8 w-8 text-primary/30" />

                  {testimonial.rating && (
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: parseInt(testimonial.rating) }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  )}

                  <blockquote className="mb-6 text-pretty text-base leading-relaxed text-foreground">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-border">
                      <AvatarImage src={testimonial.avatar_url} alt={testimonial.name} />
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.designation}
                        {testimonial.company && `, ${testimonial.company}`}
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        )} 

      </div>
    </section>
  )
}