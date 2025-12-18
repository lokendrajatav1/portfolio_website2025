import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Modern React Patterns for 2024 — Blog | Lokendra Jatav",
  description: "Explore the latest React patterns including Server Components, Suspense, and advanced hooks for building better applications.",
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
                Frontend
              </Badge>
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Oct 2024</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
            
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight text-foreground mb-4 sm:mb-6">
              Modern React Patterns for 2024
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Explore the latest React patterns including Server Components, Suspense, and advanced hooks for building better applications.
            </p>
          </div>

          <Card className="rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
                <p className="text-lg font-medium text-foreground mb-8">React continues to evolve rapidly, introducing patterns that fundamentally change how we build applications. Here are the most important patterns every React developer should master in 2024.</p>

                <h2>1. Server Components Revolution</h2>
                <p>React Server Components represent the biggest shift in React since hooks. They enable us to run components on the server, dramatically reducing bundle sizes and improving performance.</p>
                
                <h3>Key Benefits</h3>
                <ul>
                  <li><strong>Zero Bundle Impact:</strong> Server components don't add to your JavaScript bundle</li>
                  <li><strong>Direct Database Access:</strong> Fetch data directly without API layers</li>
                  <li><strong>Improved SEO:</strong> Content is rendered on the server</li>
                  <li><strong>Better Performance:</strong> Reduced client-side JavaScript execution</li>
                </ul>

                <h3>When to Use Server Components</h3>
                <ul>
                  <li>Static content rendering</li>
                  <li>Data fetching and display</li>
                  <li>SEO-critical pages</li>
                  <li>Heavy computational tasks</li>
                </ul>

                <h2>2. Suspense for Everything</h2>
                <p>Suspense has evolved beyond lazy loading. It's now the foundation for handling asynchronous operations in React applications.</p>
                
                <h3>Modern Suspense Patterns</h3>
                <ul>
                  <li><strong>Data Fetching:</strong> Wrap components that fetch data</li>
                  <li><strong>Code Splitting:</strong> Lazy load components and routes</li>
                  <li><strong>Image Loading:</strong> Handle image loading states</li>
                  <li><strong>Nested Loading:</strong> Create sophisticated loading hierarchies</li>
                </ul>

                <h3>Best Practices</h3>
                <ul>
                  <li>Use multiple Suspense boundaries for better UX</li>
                  <li>Provide meaningful fallback components</li>
                  <li>Consider loading skeleton patterns</li>
                  <li>Handle error boundaries alongside Suspense</li>
                </ul>

                <h2>3. Advanced Hook Patterns</h2>
                <p>Custom hooks have become the primary way to share logic between components. Here are the most powerful patterns:</p>
                
                <h3>Compound Hooks</h3>
                <p>Combine multiple hooks to create powerful abstractions:</p>
                <ul>
                  <li>useLocalStorage + useState for persistent state</li>
                  <li>useEffect + useCallback for optimized side effects</li>
                  <li>useReducer + useContext for complex state management</li>
                </ul>

                <h3>New React 18+ Hooks</h3>
                <ul>
                  <li><strong>useOptimistic:</strong> Optimistic updates for better UX</li>
                  <li><strong>useFormStatus:</strong> Handle form submission states</li>
                  <li><strong>useFormState:</strong> Manage form state and validation</li>
                  <li><strong>use:</strong> Unwrap promises and context in components</li>
                </ul>

                <h2>4. Concurrent Features</h2>
                <p>React's concurrent features help keep your UI responsive during heavy operations.</p>
                
                <h3>startTransition</h3>
                <p>Mark updates as non-urgent to prevent blocking the UI:</p>
                <ul>
                  <li>Search filtering and sorting</li>
                  <li>Route transitions</li>
                  <li>Heavy list rendering</li>
                  <li>Complex calculations</li>
                </ul>

                <h3>useDeferredValue</h3>
                <p>Defer expensive computations until the UI is idle:</p>
                <ul>
                  <li>Search suggestions</li>
                  <li>Real-time filtering</li>
                  <li>Chart and graph updates</li>
                  <li>Live data visualization</li>
                </ul>

                <h2>5. Error Boundaries & Error Handling</h2>
                <p>Modern React applications need robust error handling strategies:</p>
                
                <h3>Error Boundary Patterns</h3>
                <ul>
                  <li>Page-level error boundaries</li>
                  <li>Component-level error boundaries</li>
                  <li>Fallback UI strategies</li>
                  <li>Error reporting and logging</li>
                </ul>

                <h2>6. Performance Optimization Patterns</h2>
                <p>New patterns for optimizing React applications:</p>
                
                <h3>Smart Memoization</h3>
                <ul>
                  <li>Use React.memo for expensive components</li>
                  <li>useMemo for expensive calculations</li>
                  <li>useCallback for stable function references</li>
                  <li>Avoid premature optimization</li>
                </ul>

                <h3>Bundle Optimization</h3>
                <ul>
                  <li>Dynamic imports for code splitting</li>
                  <li>Tree shaking for unused code</li>
                  <li>Lazy loading for non-critical components</li>
                  <li>Preloading for critical resources</li>
                </ul>

                <h2>Conclusion</h2>
                <p>These patterns represent the future of React development. Start incorporating them gradually into your projects, focusing on the ones that solve your specific problems. Remember, the goal is to build better user experiences, not just to use the latest features.</p>
              </article>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <CardContent className="relative p-6 sm:p-8 lg:p-12 text-center">
              <Code className="mx-auto mb-4 sm:mb-6 h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <h3 className="mb-3 sm:mb-4 font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-foreground">
                Want to Master Modern React?
              </h3>
              <p className="mx-auto mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base text-muted-foreground">
                Let's discuss how these patterns can improve your React applications and development workflow.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Get React Consultation
                <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}