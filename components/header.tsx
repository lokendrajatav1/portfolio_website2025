"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-lg' 
        : 'border-b border-border/30 bg-background/80 backdrop-blur-xl'
    }`}>
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <Link 
          href="/" 
          className="group font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="relative">
            Lokendra Jatav
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:gap-12 md:flex">
          <Link
            href="/"
            className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            About
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/blog"
            className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/services"
            className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/projects"
            className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/skills"
            className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            Skills
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Button 
            asChild 
            className="group rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          <div className="relative h-6 w-6">
            <Menu className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
            <X className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto flex flex-col gap-1 px-4 sm:px-6 py-6">
            <Link
              href="/"
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            
            <Link
              href="/about"
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/blog"
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/skills"
              className="group flex items-center justify-between px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="mt-4 px-4">
              <Button 
                asChild 
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
