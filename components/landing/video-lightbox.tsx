"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface VideoLightboxProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title?: string
}

export function VideoLightbox({ isOpen, onClose, videoUrl, title }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked
      })
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-5xl border-none bg-transparent p-0 shadow-none"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{title || "Video Player"}</DialogTitle>
        <DialogDescription className="sr-only">
          Video playback modal for portfolio content
        </DialogDescription>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-background">
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            className="h-full w-full"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-colors hover:bg-muted"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
