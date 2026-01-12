import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, ArrowRight, Zap, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Lokendra Jatav | Web Development Insights",
  description: "Articles and insights about web development, architecture, scaling, and best practices from a full-stack developer.",
}

const posts = [
  {
    slug: "how-to-scale-web-apps",
    title: "How to Scale Web Apps Without Losing Your Mind",
    excerpt: "Practical strategies for scaling Next.js applications, database considerations, and deployment tips.",
    date: "Dec 2024",
    readTime: "5 min read",
    category: "Architecture"
  },
  {
    slug: "ai-integration-for-products",
    title: "AI Integration for Product Teams: Where to Start",
    excerpt: "A pragmatic guide to adding AI features to your product without overengineering.",
    date: "Nov 2024",
    readTime: "4 min read",
    category: "AI/ML"
  },
  {
    slug: "modern-react-patterns",
    title: "Modern React Patterns for 2024",
    excerpt: "Explore the latest React patterns including Server Components, Suspense, and advanced hooks for building better applications.",
    date: "Oct 2024",
    readTime: "6 min read",
    category: "Frontend"
  },
  {
    slug: "database-optimization-tips",
    title: "Database Optimization: From Slow to Lightning Fast",
    excerpt: "Essential techniques for optimizing database performance, indexing strategies, and query optimization.",
    date: "Sep 2024",
    readTime: "7 min read",
    category: "Backend"
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns Every Developer Should Know",
    excerpt: "Master advanced TypeScript features like conditional types, mapped types, and utility types for better code.",
    date: "Aug 2024",
    readTime: "5 min read",
    category: "TypeScript"
  },
  {
    slug: "api-design-best-practices",
    title: "RESTful API Design: Best Practices for 2024",
    excerpt: "Learn how to design clean, maintainable, and scalable REST APIs with modern best practices.",
    date: "Jul 2024",
    readTime: "6 min read",
    category: "Backend"
  }
]

export default function BlogPage() {
  const categories = ["All", "Frontend", "Backend", "Architecture", "TypeScript", "AI/ML"]
  const stats = [
    { label: "Articles", value: posts.length },
    { label: "Categories", value: 6 },
    { label: "Read Time", value: "5-7 min" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <p className="text-xs sm:text-sm font-medium tracking-wider text-muted-foreground">Knowledge Sharing</p>
            </div>
            <h1 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-foreground">
              Blog &
              <span className="block text-primary">Insights</span>
            </h1>
            <div className="mx-auto mb-4 sm:mb-6 h-1 w-16 sm:w-24 bg-primary rounded-full" />
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground px-4">
              Practical guides, deep dives, and insights from building modern web applications. Learn from real-world experience.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                <CardContent className="relative p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="cursor-pointer px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12 sm:mb-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="mb-6 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <h2 className="text-xl sm:text-2xl font-serif font-light text-foreground">Featured Article</h2>
            </div>
            <Card className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 sm:p-10 lg:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 w-fit">
                    {posts[0].category}
                  </Badge>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{posts[0].date}</span>
                    </div>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                  <Link href={`/blog/${posts[0].slug}`} className="block">
                    {posts[0].title}
                  </Link>
                </h3>
                
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                
                <Link 
                  href={`/blog/${posts[0].slug}`} 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  Read Featured Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-foreground mb-8">Recent Articles</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {posts.slice(1).map((post, index) => (
                <Card key={post.slug} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${(index + 5) * 100}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative p-6 sm:p-8">
                    <div className="flex flex-col gap-3 mb-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="font-serif text-xl sm:text-2xl font-light tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                      <Link href={`/blog/${post.slug}`} className="block">
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative p-6 sm:p-8 pt-0">
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 text-sm"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 sm:mt-20 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
            <Card className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card/50 to-card/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              <CardContent className="relative p-8 sm:p-12 lg:p-16">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mb-4 sm:mb-6 font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-foreground">
                    Stay Updated with Latest Insights
                  </h2>
                  <p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground">
                    Get notified when I publish new articles about web development, architecture patterns, and modern technologies. No spam, just quality content.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                      Get in Touch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link 
                      href="/projects" 
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-foreground hover:bg-muted/50 transition-all duration-300 w-full sm:w-auto"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
