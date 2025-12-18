import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, FileCode } from "lucide-react"

export const metadata: Metadata = {
  title: "Advanced TypeScript Patterns — Blog | Lokendra Jatav",
  description: "Master advanced TypeScript features like conditional types, mapped types, and utility types for better code.",
}

export default function Post() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                TypeScript
              </Badge>
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Aug 2024</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight text-foreground mb-4 sm:mb-6">
              Advanced TypeScript Patterns Every Developer Should Know
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Master advanced TypeScript features like conditional types, mapped types, and utility types for better code.
            </p>
          </div>

          <Card className="rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
                <h2>Conditional Types</h2>
                <p>Learn how to create types that change based on conditions. Conditional types enable powerful type-level programming and help create more flexible APIs.</p>

                <h2>Mapped Types</h2>
                <p>Transform existing types by mapping over their properties. Create utility types like Partial, Required, and custom transformations for your specific needs.</p>

                <h2>Template Literal Types</h2>
                <p>Build types from string templates. Perfect for creating type-safe APIs, CSS-in-JS solutions, and domain-specific languages within TypeScript.</p>

                <h2>Advanced Utility Types</h2>
                <p>Master built-in utility types and create your own. Learn when to use Pick, Omit, Exclude, Extract, and how to combine them for complex type manipulations.</p>
              </article>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <CardContent className="relative p-6 sm:p-8 lg:p-12 text-center">
              <FileCode className="mx-auto mb-4 sm:mb-6 h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <h3 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-foreground">
                Level Up Your TypeScript Skills?
              </h3>
              <p className="mx-auto mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Let's discuss how advanced TypeScript patterns can improve your codebase and development experience.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Get TypeScript Help
                <FileCode className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}