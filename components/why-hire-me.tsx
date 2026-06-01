import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MessageCircle, Rocket, Shield, Award, Zap, Target, Users } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description:
      "2+ years of experience with 10+ successful projects. I deliver on time, within budget, and exceed expectations consistently.",
    stats: "98% client satisfaction",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Zap,
    title: "Modern Technology Stack",
    description:
      "I use cutting-edge technologies and best practices to build scalable, secure, and high-performance applications that stand the test of time.",
    stats: "Latest tech stack",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and honest feedback. You'll always know the project status and have direct access to me throughout development.",
    stats: "24h response time",
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "I don't just code—I solve business problems. Every technical decision is made with your goals, users, and growth in mind.",
    stats: "ROI-driven approach",
    color: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Rocket,
    title: "End-to-End Service",
    description:
      "From initial concept to post-launch support, I handle every aspect of your project. Design, development, deployment, and maintenance—all covered.",
    stats: "Full-stack expertise",
    color: "from-indigo-500/10 to-blue-500/10",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous testing, code reviews, and quality checks ensure your application is bug-free, secure, and performs optimally across all devices.",
    stats: "Zero critical bugs",
    color: "from-teal-500/10 to-green-500/10",
  },
]

export default function WhyHireMe() {
  return (
    <section className="scroll-mt-20 border-b border-border/50 bg-gradient-to-b from-muted/10 to-background py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">

          <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground text-balance">
            Why work <span className="text-primary">with me</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 sm:w-24 bg-primary rounded-full" />
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground">
            Experience, expertise, and dedication to delivering exceptional results that drive your business forward.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 600)}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  
                  <CardTitle className="mb-3 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                    {benefit.title}
                  </CardTitle>
                  
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-primary">{benefit.stats}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="relative p-8 pt-0">
                  <CardDescription className="text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Additional Trust Indicators */}
        <div className="mt-20 text-center animate-fade-in-up animate-delay-700">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-border/50 pt-12">
              <div className="text-center">
                <div className="mb-2 font-serif text-3xl sm:text-4xl font-light text-primary">10+</div>
                <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-serif text-3xl sm:text-4xl font-light text-primary">10+</div>
                <div className="text-sm font-medium text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-serif text-3xl sm:text-4xl font-light text-primary">2+</div>
                <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-serif text-3xl sm:text-4xl font-light text-primary">24h</div>
                <div className="text-sm font-medium text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
