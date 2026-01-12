import type { Metadata } from "next"
import Work from "@/components/work"

export const metadata: Metadata = {
  title: "Portfolio - Lokendra Jatav | Projects",
  description: "A selection of projects and case studies showcasing web and product work.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Work />
    </main>
  )
}
