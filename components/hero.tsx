import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Zap, Star, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50 py-16 sm:py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)] opacity-60" />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 animate-fade-in border border-border/50 bg-muted/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs sm:text-sm font-medium tracking-wider text-muted-foreground">
              Available for New Projects
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 sm:mb-8 animate-fade-in-up font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground">
            I craft digital
            <span className="block text-primary">experiences</span>
            <span className="block">that drive results</span>
          </h1>

          {/* Description */}
          <div className="mb-8 sm:mb-10 animate-fade-in-up animate-delay-100 max-w-3xl mx-auto lg:mx-0">
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground mb-4">
              Full-stack developer specializing in modern web applications, e-commerce platforms, and custom software solutions.
            </p>
            <p className="text-base sm:text-lg font-light leading-relaxed text-muted-foreground/80">
              From concept to deployment, I deliver scalable solutions that help businesses grow.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up animate-delay-200">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group rounded-full border-2 border-border px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/portfolio" className="flex items-center justify-center gap-2">
                View My Work
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up animate-delay-300">
            <div className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Trusted by 10+ businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>5.0 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% completion rate</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="border-t border-border/50 pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="group text-center">
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-300">2+</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
                </div>
                <div className="group text-center">
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-300">10+</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="group text-center">
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-300">100%</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="group text-center">
                  <div className="mb-3 flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-300">24h</div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
