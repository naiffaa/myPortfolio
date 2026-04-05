"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Pricing as PricingType } from "@/lib/types"

interface PricingProps {
  data: PricingType
}

export function Pricing({ data }: PricingProps) {
  if (!data.plans || data.plans.length === 0) return null

  const scrollToSection = () => {
    const element = document.getElementById("cta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {data.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                plan.popular
                  ? "border-primary/50 shadow-lg shadow-primary/10 lg:scale-105"
                  : "hover:border-primary/30"
              }`}
            >
              
              {plan.popular && (
                <div className="absolute right-4 top-4">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4 pt-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>

                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToSection}
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta_text}
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}