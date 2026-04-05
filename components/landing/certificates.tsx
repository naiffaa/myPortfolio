interface CertificateItem {
  title: string
  issuer: string
  image: string
}

interface CertificatesProps {
  data: {
    headline: string
    items: CertificateItem[]
  }
}

export function Certificates({ data }: CertificatesProps) {
  if (!data.items || data.items.length === 0) return null

  return (
    <section id="certificates" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Learning Journey
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={`${item.title}-${item.issuer}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/25 shadow-[0_0_40px_rgba(99,102,241,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/25 hover:shadow-[0_0_40px_rgba(139,92,246,0.14)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {item.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}