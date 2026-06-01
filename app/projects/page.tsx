import type { Metadata } from "next"
import Work from "@/components/work"

export const metadata: Metadata = {
  title: "Portfolio - Lokendra Jatav | Projects",
  description: "A selection of projects and case studies showcasing web and product work.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Work className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-muted/20 to-background" />
    </main>
  )
}
