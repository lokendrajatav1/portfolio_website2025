import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight, Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="mb-4 font-serif text-3xl sm:text-4xl font-light text-foreground">
                Lokendra Jatav
              </h3>
              <div className="h-1 w-16 bg-primary rounded-full" />
            </div>
            
            <p className="mb-8 max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
              Full-stack developer crafting exceptional digital experiences. Transforming ideas into scalable, 
              high-performance applications that drive business growth and user engagement.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="mailto:lokendrajatav1503@gmail.com" 
                  className="hover:text-primary transition-colors duration-300"
                >
                  lokendrajatav1503@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <nav className="space-y-4">
              <Link
                href="/about"
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                About
              </Link>
              <Link
                href="/services"
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Services
              </Link>
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Projects
              </Link>
              <Link
                href="/blog"
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Blog
              </Link>
              <Link
                href="/#process"
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Process
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            
            <div className="mb-6 flex gap-4">
              <a
                href="https://github.com/lokendrajatav1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/lokendra-jatav"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-medium">Let's work together!</p>
              <p>Available for freelance projects and long-term collaborations worldwide.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-20 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© {currentYear} Lokendra Jatav. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-border">•</span>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and</span>
                <Code className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-amber-500" />
                <span>Lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
