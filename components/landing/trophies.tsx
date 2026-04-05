"use client"

import { useState } from "react"
import type { Trophies as TrophiesType } from "@/lib/types"

interface TrophiesProps {
  data: TrophiesType
}

export function Trophies({ data }: TrophiesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!data.items || data.items.length === 0) return null

  return (
    <section id="trophies" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {data.headline}
          </h2>
        </div>

        <div className="space-y-16">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10"
            >
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setSelectedImage(item.images[0])}
                  className="block w-full overflow-hidden rounded-2xl bg-black/30"
                >
                  <img
                    src={item.images[0]}
                    alt={`${item.title} main image`}
                    className="max-h-[500px] w-full cursor-pointer object-contain transition-transform duration-300 hover:scale-[1.01]"
                  />
                </button>

                {item.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {item.images.slice(1).map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className="block w-full overflow-hidden rounded-xl bg-black/30"
                      >
                        <img
                          src={img}
                          alt={`${item.title} image ${i + 2}`}
                          className="max-h-[200px] w-full cursor-pointer object-contain transition-transform duration-300 hover:scale-[1.02]"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Selected trophy"
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}