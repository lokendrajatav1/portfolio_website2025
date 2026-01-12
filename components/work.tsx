import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
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
    featured: true,
  },
  {
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
    featured: false,
  },
  {
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
    featured: false,
  },
]

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-border/50 bg-gradient-to-b from-muted/20 to-background py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-20 max-w-4xl text-center animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-2 border border-border/50 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <TrendingUp className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium tracking-wider text-muted-foreground">Selected Work</p>
          </div>
          <h2 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-foreground text-balance">
            Recent
            <span className="block text-primary">projects</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            Real results for real businesses. Each project represents a unique challenge solved with innovative thinking and meticulous execution.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {projects.map((project, index) => {
            const slug = project.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")

            return (
              <Link key={index} href={`/projects/${slug}`} className="group block">
                <Card
                  className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 300)}`}
                >
              {project.featured && (
                <div className="absolute top-6 right-6 z-10">
                  <div className="flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Zap className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">Featured</span>
                  </div>
                </div>
              )}
              
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="relative aspect-[16/10] lg:col-span-2 lg:aspect-auto overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="flex flex-col justify-between p-8 sm:p-12 lg:col-span-3">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-sm font-medium tracking-wider text-primary uppercase">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="mb-6 font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="mb-6 text-lg font-light leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <div className="mb-8 p-6 rounded-xl bg-muted/50 border border-border/50">
                      <p className="text-base font-medium text-foreground mb-4">Key Results:</p>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {project.outcome}
                      </p>
                    </div>
                    
                    {/* Metrics */}
                    <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <div className="text-lg font-semibold text-primary break-words whitespace-normal">{project.metrics.performance}</div>
                        <div className="text-xs text-muted-foreground">Performance</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <div className="text-lg font-semibold text-primary break-words whitespace-normal">{project.metrics.users}</div>
                        <div className="text-xs text-muted-foreground">Users</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <div className="text-lg font-semibold text-primary break-words whitespace-normal">{project.metrics.growth}</div>
                        <div className="text-xs text-muted-foreground">Growth</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="border border-border/50 bg-muted/50 px-3 py-1 rounded-full text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
              </Link>
            )
          })}
        </div>

        <div className="mt-20 text-center animate-fade-in-up animate-delay-400">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-border bg-background px-12 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
