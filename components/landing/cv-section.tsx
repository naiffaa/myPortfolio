import { Download, Eye } from "lucide-react"
import type { CV as CVType } from "@/lib/types"

interface CVSectionProps {
  data: CVType
}

export function CVSection({ data }: CVSectionProps) {
  if (!data?.headline) return null

  return (
    <section id="cv" className="relative overflow-hidden py-24 lg:py-32">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 text-center shadow-[0_0_60px_rgba(99,102,241,0.12)] backdrop-blur-xl sm:p-10 lg:p-12">
          
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Resume
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>

          {data.description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              {data.description}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">

            {/* View Resume */}
            <a
              href={data.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-white/10 bg-black/40 px-6 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:border-purple-400/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] sm:w-auto"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href={data.file_url}
              download
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 px-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)] sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}