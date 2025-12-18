import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Code, Users, Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Lokendra Jatav - Full Stack Developer & Digital Craftsman",
  description:
    "Learn about my journey as a full-stack developer, my approach to building digital solutions, and the values that drive my work. Over 8 years of experience delivering exceptional results for ambitious businesses.",
  openGraph: {
    title: "About | Lokendra Jatav - Full Stack Developer",
    description:
      "Discover my story, expertise, and commitment to excellence in web development. Transforming ideas into powerful digital solutions.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 xl:py-40">
          <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[1fr_400px]">
            <div className="w-full max-w-5xl">
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-fade-in">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium tracking-wider text-muted-foreground">ABOUT ME</span>
              </div>

              <h1 className="mb-6 sm:mb-8 lg:mb-10 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight tracking-tight text-foreground animate-fade-in-up animate-delay-100">
                Building Digital
                <span className="block text-primary">Excellence</span>
              </h1>

              <div className="space-y-4 sm:space-y-6 animate-fade-in-up animate-delay-200">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
                  I'm a full-stack developer who transforms complex business challenges into elegant, scalable digital solutions.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground/80">
                  With over 2 years of experience, I combine technical expertise with business acumen to deliver results that matter.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
                <div className="flex items-center justify-center sm:justify-start gap-2 bg-muted/50 px-3 sm:px-4 py-2 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium">Available for projects</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 bg-muted/50 px-3 sm:px-4 py-2 rounded-full">
                  <span className="text-xs sm:text-sm font-medium">2+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up animate-delay-200 order-first lg:order-last">
              <div className="relative aspect-[4/5] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-2xl">
                <Image
                  src="/lokendra_photo.png"
                  alt="Lokendra Jatav - Full Stack Developer"
                  fill
                  className="object-cover  hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 h-full w-full rounded-2xl border border-border/30 bg-muted/20 -z-10" />
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full bg-primary/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative border-t border-border/50 bg-gradient-to-b from-muted/20 to-background py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
              <h2 className="mb-4 sm:mb-6 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-foreground animate-fade-in-up">
                My Journey
              </h2>
              <div className="mx-auto h-1 w-16 sm:w-24 bg-primary rounded-full" />
            </div>

            <div className="grid gap-12 sm:gap-16 lg:gap-20">
              <div className="group relative animate-fade-in-up animate-delay-100">
                <div className="absolute -left-3 sm:-left-4 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b from-primary to-primary/20 rounded-full" />
                <div className="pl-8 sm:pl-12">
                  <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary" />
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-foreground">How It All Started</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-muted-foreground">
                    My journey into web development began in 2022 when I built my first website for a local business. What
                    started as a curiosity about how things work on the internet quickly evolved into a passion for
                    creating digital experiences that genuinely help businesses thrive. That first project taught me
                    something crucial: technology is only valuable when it solves real problems.
                  </p>
                </div>
              </div>

              <div className="group relative animate-fade-in-up animate-delay-200">
                <div className="absolute -left-3 sm:-left-4 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b from-primary to-primary/20 rounded-full" />
                <div className="pl-8 sm:pl-12">
                  <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary" />
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-foreground">Evolution Through Experience</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-muted-foreground">
                    Over the years, I've had the privilege of working with startups finding their footing, established
                    businesses undergoing digital transformation, and ambitious entrepreneurs launching groundbreaking
                    ideas. Each project has taught me valuable lessons about what works, what doesn't, and most
                    importantly, how to align technology decisions with business outcomes.
                  </p>
                </div>
              </div>

              <div className="group relative animate-fade-in-up animate-delay-300">
                <div className="absolute -left-3 sm:-left-4 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b from-primary to-primary/20 rounded-full" />
                <div className="pl-8 sm:pl-12">
                  <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary" />
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-foreground">Today's Focus</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-muted-foreground">
                    Today, I specialize in building high-performance web applications, e-commerce platforms, and custom
                    software solutions. I work with modern technologies like React, Next.js, Node.js, and cloud
                    infrastructure, always choosing the right tool for your specific needs rather than following trends.
                    My goal is simple: deliver solutions that not only meet your current requirements but scale with your
                    future ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground animate-fade-in-up">
                What Drives My Work
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
              <p className="mx-auto max-w-3xl text-xl font-light text-muted-foreground animate-fade-in-up animate-delay-100">
                These core values guide every decision I make and every line of code I write.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Target className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Business-First Thinking</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    Every technical decision is made with your business goals in mind. Technology should serve your
                    objectives, not the other way around.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Code className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Quality Craftsmanship</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    I write clean, maintainable code that stands the test of time. No shortcuts, no technical debt, just
                    solid engineering that you can build upon.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Users className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Transparent Communication</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    You'll always know where your project stands. Regular updates, honest timelines, and clear
                    explanations—no technical jargon unless you want it.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-400">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Award className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Commitment to Excellence</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    Good enough is never good enough. I'm committed to delivering work that exceeds expectations and sets
                    new standards for what's possible.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <Lightbulb className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Continuous Innovation</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    The tech landscape evolves rapidly. I stay ahead of the curve, bringing you the latest innovations
                    that actually matter for your business.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-600">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <TrendingUp className="h-8 w-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Long-Term Partnership</h3>
                  <p className="font-light leading-relaxed text-muted-foreground">
                    I don't just build and disappear. I'm invested in your long-term success and available for ongoing
                    support as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative border-t border-border/50 bg-gradient-to-b from-muted/10 to-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-16 sm:mb-20 text-center">
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground animate-fade-in-up">
                Areas of Expertise
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
              <p className="mx-auto max-w-3xl text-lg sm:text-xl font-light text-muted-foreground animate-fade-in-up animate-delay-100">
                With years of hands-on experience, I've developed deep expertise across the full stack of modern web development.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in-up animate-delay-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="mb-6 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Frontend Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">React, Next.js, and modern JavaScript frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Responsive design and mobile-first development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Performance optimization and SEO</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Accessibility and web standards compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in-up animate-delay-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="mb-6 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Backend Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Node.js, Express, and serverless architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">RESTful APIs and GraphQL design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Database design (SQL and NoSQL solutions)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Authentication and security best practices</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in-up animate-delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="mb-6 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Cloud & DevOps</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">AWS, Vercel, and cloud infrastructure setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">CI/CD pipelines and automated deployment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Scalability and load balancing strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Monitoring and performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in-up animate-delay-400">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="mb-6 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">AI & Machine Learning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">AI integration and chatbot development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">OpenAI and LLM API integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">AI-powered features and automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Machine learning model integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in-up animate-delay-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="mb-6 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Business Solutions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">E-commerce platforms and payment integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">CMS implementation and custom dashboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Third-party API integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Analytics and conversion optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in-up animate-delay-600 md:col-span-2 xl:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="mb-6 font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">Testing & Quality</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Unit testing and integration testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">End-to-end testing with Playwright</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Code quality and best practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm sm:text-base font-light text-muted-foreground">Performance and security audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (responsive) */}
      <section className="relative border-t border-border/50 bg-gradient-to-r from-muted/20 via-background to-muted/20 py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/30 border border-border/30 animate-fade-in-up animate-delay-100">
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-full bg-primary/8 blur-lg scale-125 transition-transform duration-700" />
                  <div className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-foreground">2+</div>
                </div>
                <div className="mt-2 text-sm sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">Years Experience</div>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/30 border border-border/30 animate-fade-in-up animate-delay-200">
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-full bg-primary/8 blur-lg scale-125 transition-transform duration-700" />
                  <div className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-foreground">10+</div>
                </div>
                <div className="mt-2 text-sm sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">Projects Delivered</div>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/30 border border-border/30 animate-fade-in-up animate-delay-300">
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-full bg-primary/8 blur-lg scale-125 transition-transform duration-700" />
                  <div className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-foreground">10+</div>
                </div>
                <div className="mt-2 text-sm sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">Happy Clients</div>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/30 border border-border/30 animate-fade-in-up animate-delay-400">
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-full bg-primary/8 blur-lg scale-125 transition-transform duration-700" />
                  <div className="relative font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-foreground">100%</div>
                </div>
                <div className="mt-2 text-sm sm:text-sm font-medium uppercase tracking-wider text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-border/50 bg-gradient-to-br from-primary/5 via-background to-primary/10 py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.1)_0%,transparent_50%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary),0.05)_0%,transparent_50%)] opacity-40" />
        <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-12 text-center">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground animate-fade-in-up">
              Let's Build Something
              <span className="block text-primary">Exceptional</span>
            </h2>
            <div className="mx-auto mb-8 h-1 w-24 bg-primary rounded-full" />
            <p className="mb-8 sm:mb-12 text-lg sm:text-xl lg:text-2xl font-light text-muted-foreground animate-fade-in-up animate-delay-100">
              Ready to transform your ideas into powerful digital solutions? Let's discuss your project and explore how
              we can achieve your goals together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row animate-fade-in-up animate-delay-200">
              <Button asChild size="lg" className="group relative overflow-hidden rounded-full bg-primary px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Start Your Project
                  <div className="h-2 w-2 rounded-full bg-current animate-pulse" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-2 border-border px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
