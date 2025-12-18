import type { Metadata } from "next"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact - Lokendra Jatav | Full Stack Developer",
  description: "Get in touch to discuss your next web development project. Free consultation, 24h response time, and 100% satisfaction guarantee.",
  keywords: ["contact", "web development", "full stack developer", "project consultation", "hire developer"],
}

export default function ContactPage() {
  return <Contact />
}