"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FAQ as FAQType } from "@/lib/types"

interface FAQProps {
  data: FAQType
}

export function FAQ({ data }: FAQProps) {
  if (!data.items || data.items.length === 0) return null

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {data.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/50 px-6 backdrop-blur-sm transition-colors data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="pb-5 text-pretty leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}