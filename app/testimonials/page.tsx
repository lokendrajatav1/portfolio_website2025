import type { Metadata } from "next"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Testimonials - Lokendra Jatav | Client Reviews",
  description: "Read what clients say about working with me. Real feedback from 10+ successful projects.",
  keywords: ["testimonials", "client reviews", "feedback", "web development", "full stack developer"],
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Testimonials />
    </main>
  )
}