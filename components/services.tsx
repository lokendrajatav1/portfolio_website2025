import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Layout, Plug, Server, Database, Smartphone, Brain, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Custom Web Applications",
    description:
      "Modern, scalable web applications built with cutting-edge technologies. From concept to deployment, I create solutions that drive business growth and user engagement.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Code2,
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with secure payment processing, inventory management, and analytics. Built to convert visitors into customers and scale with your business.",
    features: ["Stripe Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Brain,
    title: "AI-Powered Features",
    description:
      "Integrate artificial intelligence into your applications. From chatbots to recommendation systems, I help you leverage AI to enhance user experience and automate processes.",
    features: ["OpenAI Integration", "Chatbot Development", "ML Model Integration", "Automation Tools"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust backend systems and RESTful APIs that power your applications. Scalable architecture with proper authentication, data validation, and security measures.",
    features: ["Node.js & Express", "Database Design", "API Development", "Authentication"],
    color: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Server,
    title: "Cloud Deployment",
    description:
      "Professional hosting and deployment on modern cloud platforms. Automated CI/CD pipelines, monitoring, and scaling to ensure your application runs smoothly 24/7.",
    features: ["AWS & Vercel", "CI/CD Pipelines", "Performance Monitoring", "Auto-scaling"],
    color: "from-indigo-500/10 to-blue-500/10",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your applications secure, updated, and performing optimally. Regular updates, security patches, and feature enhancements.",
    features: ["Security Updates", "Performance Optimization", "Bug Fixes", "Feature Updates"],
    color: "from-teal-500/10 to-green-500/10",
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-border/50 py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-20 max-w-4xl text-center animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <Zap className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium tracking-wider text-muted-foreground">Services</p>
          </div>
          <h2 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-foreground text-balance">
            What I can do
            <span className="block text-primary">for you</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            Full-stack development services designed to transform your ideas into powerful digital solutions that drive growth and success.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 600)}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardHeader className="relative p-8 sm:p-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <CardTitle className="mb-4 font-serif text-2xl sm:text-3xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </CardTitle>
                  <p className="mb-6 text-base sm:text-lg font-light leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
