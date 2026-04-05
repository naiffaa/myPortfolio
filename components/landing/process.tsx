"use client"

import type { Process as ProcessType } from "@/lib/types"

interface ProcessProps {
  data: ProcessType
}

export function Process({ data }: ProcessProps) {
  if (!data.steps || data.steps.length === 0) return null

  return (
    <section id="process" className="relative overflow-hidden py-24 lg:py-32">
      
      {/* Background */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          
          {/* Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step, index) => (
              
              <div key={step.title} className="group relative">
                
                {/* Number */}
                <div className="relative z-10 mb-6 flex items-center justify-center lg:justify-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}