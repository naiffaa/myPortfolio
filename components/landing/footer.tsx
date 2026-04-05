"use client"

import { Linkedin, Mail, Phone, MapPin, Github } from "lucide-react"
import type { Footer as FooterType, Brand } from "@/lib/types"

interface FooterProps {
  data: FooterType
  brand: Brand
}

export function Footer({ data, brand }: FooterProps) {
  const socialLinks = [
    { key: "linkedin", icon: Linkedin, url: data.social_links?.linkedin },
    { key: "github", icon: Github, url: (data.social_links as any)?.github }
  ].filter((link) => link.url)

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-xl font-bold text-foreground">
              {brand.name}
            </div>

            {brand.tagline && (
              <p className="mt-2 text-sm text-muted-foreground">
                {brand.tagline}
              </p>
            )}

            {data.about_text && (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {data.about_text}
              </p>
            )}

            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-4">
                {socialLinks.map(({ key, icon: Icon, url }) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {data.links && (
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Links
              </h4>

              <ul className="space-y-3">
                {data.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-sm text-muted-foreground transition-all hover:translate-x-1 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.contact && (
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </h4>

              <ul className="space-y-3">
                {data.contact.email && (
                  <li>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Mail className="h-4 w-4" />
                      {data.contact.email}
                    </a>
                  </li>
                )}

                {data.contact.phone && (
                  <li>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Phone className="h-4 w-4" />
                      {data.contact.phone}
                    </a>
                  </li>
                )}

                {data.contact.location && (
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {data.contact.location}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}