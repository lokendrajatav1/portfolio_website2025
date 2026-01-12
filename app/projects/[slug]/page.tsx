import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Zap } from "lucide-react"
import type { Metadata } from "next"

const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Full-Stack Application",
    description:
      "Complete e-commerce solution with advanced inventory management, real-time analytics, and seamless payment processing. Built for scalability and performance.",
    outcome: "Increased sales by 40%, reduced order processing time by 60%, and improved customer satisfaction scores.",
    metrics: {
      performance: "99.9% uptime",
      users: "10K+ active users",
      growth: "40% sales increase"
    },
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS"],
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    slug: "ai-powered-healthcare-platform",
    title: "AI-Powered Healthcare Platform",
    category: "Healthcare Technology",
    description:
      "Intelligent appointment booking system with AI-driven scheduling optimization, automated reminders, and predictive analytics for better patient care.",
    outcome: "Reduced no-shows by 65%, streamlined operations, and improved patient engagement through smart automation.",
    metrics: {
      performance: "65% fewer no-shows",
      users: "5K+ patients",
      growth: "3x booking efficiency"
    },
    tech: ["React", "Node.js", "MongoDB", "OpenAI", "Twilio"],
    image: "/healthcare-appointment-booking-interface.jpg",
  },
  {
    slug: "marketing-analytics-suite",
    title: "Marketing Analytics Suite",
    category: "Data Analytics Platform",
    description:
      "Comprehensive marketing dashboard that aggregates data from multiple channels, provides actionable insights, and automates reporting for marketing teams.",
    outcome: "Saved 20+ hours weekly on reporting, improved campaign ROI by 35%, and enhanced decision-making speed.",
    metrics: {
      performance: "20h weekly saved",
      users: "500+ marketers",
      growth: "35% ROI improvement"
    },
    tech: ["Next.js", "Python", "Chart.js", "REST APIs", "Redis"],
    image: "/marketing-analytics-dashboard-charts.jpg",
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
    <main className="min-h-screen bg-gradient-to-b from-muted/20 to-background py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
          </div>

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
