import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, Code, Eye, HeadphonesIcon, Clock, CheckCircle, Lightbulb } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description:
      "We start with an in-depth consultation to understand your business goals, target audience, and technical requirements. I analyze your needs and propose the best solution approach.",
    duration: "1-2 days",
    deliverables: ["Project scope document", "Technical requirements", "Timeline estimate"]
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design & Planning",
    description:
      "I create detailed wireframes, system architecture, and project roadmap. You'll receive a comprehensive proposal with clear milestones, costs, and deliverables.",
    duration: "3-5 days",
    deliverables: ["System architecture", "UI/UX wireframes", "Detailed proposal"]
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Using modern technologies and best practices, I build your solution with clean, scalable code. Regular updates and demos keep you informed throughout the process.",
    duration: "2-8 weeks",
    deliverables: ["Working application", "Weekly progress reports", "Code documentation"]
  },
  {
    number: "04",
    icon: Eye,
    title: "Testing & Refinement",
    description:
      "Comprehensive testing ensures everything works perfectly. You'll have time to review, test, and request adjustments before the final launch.",
    duration: "3-7 days",
    deliverables: ["Quality assurance report", "User testing results", "Final adjustments"]
  },
  {
    number: "05",
    icon: HeadphonesIcon,
    title: "Launch & Support",
    description:
      "Smooth deployment to production with monitoring and ongoing support. I provide training, documentation, and continued maintenance to ensure long-term success.",
    duration: "Ongoing",
    deliverables: ["Live deployment", "User documentation", "Support & maintenance"]
  },
]

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-b border-border/50 py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
          <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground text-balance">
            How we'll work <span className="text-primary">together</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 sm:w-24 bg-primary rounded-full" />
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground">
            A transparent, collaborative process designed to deliver exceptional results while keeping you informed every step of the way.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 top-16 hidden h-[calc(100%-128px)] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 lg:block" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 500)}`}
                >
                  <Card className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-start">
                      <div className="flex items-center gap-6 lg:w-64 lg:flex-col lg:items-start">
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                          <Icon className="h-8 w-8 text-primary" />
                          <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="lg:mt-4 lg:text-center">
                          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <CardHeader className="p-0">
                          <CardTitle className="mb-4 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="mb-6 text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                          
                          <div className="rounded-xl bg-muted/50 border border-border/50 p-6">
                            <h4 className="mb-3 text-sm font-semibold text-foreground uppercase tracking-wider">Key Deliverables</h4>
                            <ul className="space-y-2">
                              {step.deliverables.map((deliverable, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
