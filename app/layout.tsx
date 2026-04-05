import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Naifa Al-arifi | AI Engineer & Developer',
  description:
    'Portfolio of Naifa Al-arifi, an AI Engineer & Developer specializing in intelligent systems, web development, and innovative tech solutions.',

  keywords: [
    'Naifa Al-arifi',
    'AI Engineer',
    'Developer',
    'Artificial Intelligence',
    'Portfolio',
    'Web Development',
    'Machine Learning',
  ],

  authors: [{ name: 'Naifa Al-arifi' }],

  openGraph: {
    title: 'Naifa Al-arifi | AI Engineer & Developer',
    description:
      'Explore projects, achievements, and skills in AI, development, and innovation.',
    url: 'https://your-domain.com', // 🔥 غيريه اذا عندك دومين
    siteName: 'Naifa Portfolio',
    images: [
      {
        url: '/og-image.jpg', // 🔥 حطي صورتك هنا
        width: 1200,
        height: 630,
        alt: 'Naifa Al-arifi Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Naifa Al-arifi | AI Engineer & Developer',
    description:
      'AI Engineer & Developer portfolio showcasing projects, skills, and achievements.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico', // 🔥 حطي ايقونتك هنا
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}