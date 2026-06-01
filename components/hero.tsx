import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Users, Zap, Star, CheckCircle, ChevronDown, Mouse } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50 min-h-[100dvh] flex flex-col justify-center pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08)_0%,transparent_50%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.05)_0%,transparent_50%)] opacity-60" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 lg:mb-16">
          {/* Left Column (Main Content) */}
          <div className="text-center lg:text-left w-full mt-4 lg:mt-0">

            {/* Main Heading */}
            <h1 className="mb-4 sm:mb-6 animate-fade-in-up font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-foreground">
              I craft digital
              <span className="block text-primary">experiences</span>
              <span className="block">that drive results</span>
            </h1>

            {/* Description */}
            <div className="mb-6 sm:mb-8 animate-fade-in-up animate-delay-100 max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-muted-foreground mb-3">
                Full-stack developer specializing in modern web applications, e-commerce platforms, and custom software solutions.
              </p>
              <p className="text-xs sm:text-sm font-light leading-relaxed text-muted-foreground/80">
                From concept to deployment, I deliver scalable solutions that help businesses grow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 animate-fade-in-up animate-delay-200">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-primary px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-2 border-border px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/portfolio" className="flex items-center justify-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up animate-delay-300">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>Trusted by 10+ businesses</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                  <span>5.0 average rating</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>100% completion rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Element - Profile Photo) */}
          <div className="relative animate-fade-in-up animate-delay-200 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] mx-auto mb-10 lg:mb-0">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-primary/30 blur-[4rem] rounded-full scale-110" />
            
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] bg-zinc-900 group">
              <Image
                src="/lokendra_profile.png"
                alt="Lokendra Jatav"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Elegant Bottom Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Hi there! 👋
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats (Full Width Below) */}
        <div className="animate-fade-in-up animate-delay-300 border-t border-border/50 pt-8 lg:pt-12">
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <Mouse className="h-5 w-5 mb-1 text-muted-foreground" />
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </section>
  )
}
