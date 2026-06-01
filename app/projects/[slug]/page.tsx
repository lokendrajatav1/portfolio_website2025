import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Zap } from "lucide-react"
import type { Metadata } from "next"

const projects = [
  {
    slug: "novasathi-com",
    title: "NovaSathi.com",
    category: "Astrology Platform",
    description:
      "A comprehensive astrology platform offering personalized daily horoscopes, live consultations, and detailed birth chart analysis. Built with a modern tech stack for a seamless user experience.",
    outcome: "Successfully launched with integrated secure payment gateways and interactive user features.",
    metrics: {
      performance: "Optimized Load Times",
      users: "Growing Community",
      growth: "Steady Engagement"
    },
    tech: ["React", "Node.js", "Express", "Redis", "PostgreSQL", "PhonePe API", "whatsapp API", "webRTC", "socket.io"],
    image: "/novasathi.png",
  },
  {
    slug: "labelaizaitech-com",
    title: "Labelaizaitech.com",
    category: "Technology Platform",
    description:
      "An innovative technology platform delivering cutting-edge solutions. (Details pending - website currently unreachable to gather data).",
    outcome: "Successfully developed and launched.",
    metrics: {
      performance: "Optimized Performance",
      users: "Active User Base",
      growth: "Continuous Scaling"
    },
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    image: "/labelzai.png",
  },
  {
    slug: "the-comfort-journey",
    title: "The Comfort Journey",
    category: "Car Rental Platform",
    description:
      "A seamless self-drive car rental platform based in Indore. It offers users the freedom to book affordable cars online with real-time tracking and instant confirmations.",
    outcome: "Successfully launched with a growing fleet and satisfied customer base.",
    metrics: {
      performance: "Optimized Booking Flow",
      users: "Growing Customer Base",
      growth: "Expanding Fleet"
    },
    tech: ["React", "Redux", "Socket.io", "React Query"],
    image: "/thecomfortjourney.png",
  },
  {
    slug: "billistry",
    title: "Billistry",
    category: "Inventory & Billing Platform",
    description:
      "A comprehensive inventory management and billing solution for businesses. Features include real-time stock tracking, automated alerts, WhatsApp billing with QR payments, and AI-driven optimization.",
    outcome: "Streamlined warehouse operations and enhanced professional billing.",
    metrics: {
      performance: "99.98% System Uptime",
      users: "120+ Active Warehouses",
      growth: "45,000+ Products Tracked"
    },
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    image: "/billistry.png",
  },

]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  return {
    title: project ? `${project.title} — Portfolio | Lokendra Jatav` : "Project — Portfolio | Lokendra Jatav",
    description: project ? project.description : "Project details",
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <main className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-12 py-24">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-4">Sorry, we couldn't find that project.</p>
        <Link href="/portfolio" className="mt-6 inline-block text-primary">Back to portfolio</Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-6">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{project.description}</p>

          <div className="mb-8 rounded-xl overflow-hidden border border-border/50">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} width={1200} height={700} className="object-cover w-full h-auto" />
          </div>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl text-foreground font-semibold mb-3">Key Results</h2>
              <p>{project.outcome}</p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground font-semibold mb-3">Metrics</h2>
              <ul className="space-y-2">
                <li><strong>Performance:</strong> {project.metrics.performance}</li>
                <li><strong>Users:</strong> {project.metrics.users}</li>
                <li><strong>Growth:</strong> {project.metrics.growth}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-foreground font-semibold mb-3">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-border/50 bg-muted/50 text-sm">{t}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
