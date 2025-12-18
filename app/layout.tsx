import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Lokendra Jatav - Full-Stack Developer | Web Applications & DevOps",
    template: "%s | Lokendra Jatav - Full-Stack Developer",
  },
  description:
    "Full-stack developer specializing in web applications, dashboards, and API integrations. 8+ years experience building quality solutions for businesses worldwide.",
  keywords: [
    "full-stack developer",
    "web development",
    "freelance developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "custom web applications",
    "dashboard development",
    "API integration",
    "premium web solutions",
  ],
  authors: [{ name: "Lokendra Jatav" }],
  creator: "Lokendra Jatav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lokendrajatav.in",
    title: "Lokendra Jatav - Full-Stack Developer",
    description:
      "Full-stack developer building quality web applications and digital solutions for businesses worldwide.",
    siteName: "Lokendra Jatav - Full-Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lokendra Jatav - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokendra Jatav - Full-Stack Developer",
    description:
      "Full-stack developer building quality web applications and digital solutions for businesses worldwide.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_geist.className} ${_geistMono.className} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lokendra Jatav",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-stack developer specializing in web applications, dashboards, and digital solutions",
              url: "https://lokendrajatav.in",
              sameAs: [
                "https://github.com/lokendrajatav1",
                "https://www.linkedin.com/in/lokendra-jatav",
                
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Web Development",
                "Full-Stack Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full-Stack Developer",
                occupationalCategory: "15-1254.00",
                skills: "React, Next.js, TypeScript, Node.js, PostgreSQL, API Development",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
