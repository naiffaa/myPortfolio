"use client"

import { useState, useRef, useCallback } from "react"
import { GripVertical } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeUrl: string
  afterUrl: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    setSliderPosition(percentage)
  }, [])

  const startDrag = () => {
    isDragging.current = true
  }

  const stopDrag = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      handleMove(e.touches[0].clientX)
    }
  }

  // 🔥 حماية من القسمة على صفر
  const safePosition = Math.max(sliderPosition, 0.1)

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchMove={handleTouchMove}
      onTouchStart={startDrag}
      onTouchEnd={stopDrag}
    >
      {/* After */}
      <video
        src={afterUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Before */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <video
          src={beforeUrl}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ width: `${100 / (safePosition / 100)}%` }}
        />
      </div>

      {/* Line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-[2px] bg-white"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      />

      {/* Handle */}
      <div
        className="absolute z-20 flex h-full items-center"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="flex h-12 w-8 items-center justify-center rounded-lg bg-white shadow-lg">
          <GripVertical className="h-5 w-5 text-black" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <span className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground">
          {afterLabel}
        </span>
      </div>
    </div>
  )
}