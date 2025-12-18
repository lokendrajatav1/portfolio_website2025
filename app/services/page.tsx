import type { Metadata } from "next"
import Services from "@/components/services"

export const metadata: Metadata = {
  title: "Services - Lokendra Jatav | Full Stack Developer",
  description: "Detailed list of services offered: web apps, APIs, integrations, and consulting.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Services />
    </main>
  )
}
