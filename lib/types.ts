export interface Brand {
  name: string
  tagline: string
  logo_url: string
  primary_color: string
  secondary_color: string
}

export interface NavbarLink {
  label: string
  target_section: string
}

export interface Navbar {
  show: boolean
  links: NavbarLink[]
  cta_text: string
}

export interface Hero {
  headline: string
  subheadline: string
  background_type: "image" | "video" | "gradient"
  background_url: string
  primary_cta_text: string
  secondary_cta_text: string
  trust_badges: string[]
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
  deliverables: string[]
  starting_price?: string
}

export interface Services {
  headline: string
  items: ServiceItem[]
}

export interface PortfolioItem {
  type: "image" | "video" | "project"
  thumbnail_url?: string
  media_url?: string
  title: string
  description: string
  tags: string[]
  before_url?: string
  live_url?: string
  github_url?: string
  post_url?: string
}

export interface Portfolio {
  headline: string
  items: PortfolioItem[]
}

export interface CertificateItem {
  title: string
  issuer: string
  image: string
}

export interface Certificates {
  headline: string
  items: CertificateItem[]
}

/* 🔥 NEW: TROPHIES */
export interface TrophyItem {
  title: string
  description: string
  images: string[]
}

export interface Trophies {
  headline: string
  items: TrophyItem[]
}

export interface CV {
  headline: string
  description: string
  file_url: string
  button_text: string
}

export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudyItem {
  title: string
  client: string
  problem: string
  solution: string
  result: string
  metrics: CaseStudyMetric[]
  media_url: string
}

export interface CaseStudies {
  headline: string
  items: CaseStudyItem[]
}

export interface Testimonial {
  name: string
  designation: string
  company: string
  avatar_url: string
  quote: string
  rating: string
  video_url: string
}

export interface SocialProofMetric {
  label: string
  value: string
}

export interface SocialProof {
  logos: string[]
  metrics: SocialProofMetric[]
  testimonials: Testimonial[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Process {
  headline: string
  steps: ProcessStep[]
}

export interface USPItem {
  title: string
  description: string
  icon: string
}

export interface USP {
  headline: string
  items: USPItem[]
}

export interface SocialLinks {
  instagram?: string
  linkedin?: string
  twitter?: string
  youtube?: string
  github?: string
}

export interface About {
  headline: string
  name: string
  bio: string
  profile_image_url: string
  experience_years: string
  clients_served: string
  credentials: string[]
  social_links: SocialLinks
}

export interface Content {
  photos: string[]
  videos: string[]
  behind_the_scenes: string[]
}

export interface PricingPlan {
  name: string
  price: string
  features: string[]
  cta_text: string
  popular?: boolean
}

export interface Pricing {
  headline: string
  plans: PricingPlan[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQ {
  headline: string
  items: FAQItem[]
}

export interface CTA {
  headline: string
  subheadline: string
  primary_cta_text: string
  secondary_cta_text: string
}

export interface FooterLink {
  label: string
  url: string
}

export interface FooterContact {
  email: string
  phone: string
  location: string
}

export interface Footer {
  about_text: string
  links: FooterLink[]
  contact: FooterContact
  social_links: SocialLinks
}

export interface LandingPageData {
  brand: Brand
  navbar: Navbar
  hero: Hero
  services: Services
  portfolio: Portfolio
  certificates: Certificates
  trophies: Trophies  
  cv: CV
  case_studies: CaseStudies
  social_proof: SocialProof
  process: Process
  usp: USP
  about: About
  content: Content
  pricing: Pricing
  faq: FAQ
  cta: CTA
  footer: Footer
}