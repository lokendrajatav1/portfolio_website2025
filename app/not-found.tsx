import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-serif text-8xl sm:text-9xl lg:text-[12rem] font-light text-primary/20 leading-none">
            404
          </h1>
          <div className="relative -mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-3xl" />
            <h2 className="relative font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 space-y-4">
          <p className="text-xl sm:text-2xl font-light text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-lg font-light text-muted-foreground/80">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            asChild 
            size="lg" 
            className="group rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="group rounded-full border-2 border-border px-8 py-3 text-lg font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            <Link href="/#contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Me
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Or try one of these pages:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              href="/#services" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              href="/#work" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link 
              href="/#process" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Process
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}