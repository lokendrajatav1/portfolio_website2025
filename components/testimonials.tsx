import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Users } from "lucide-react"

const testimonials = [
  {
    quote:
      "Lokendra transformed our complex e-commerce requirements into a beautiful, high-performing platform. The attention to detail and technical expertise exceeded our expectations. Our sales increased by 40% within the first month!",
    author: "Sarah Chen",
    role: "CEO, TechStart Solutions",
    company: "E-commerce Startup",
    rating: 5,
    project: "E-commerce Platform",
    result: "40% sales increase",
  },
  {
    quote:
      "Working with Lokendra was a game-changer for our healthcare platform. His ability to integrate AI features seamlessly while maintaining HIPAA compliance was impressive. The booking system reduced no-shows by 65%.",
    author: "Dr. Michael Rodriguez",
    role: "CTO, HealthTech Innovations",
    company: "Healthcare Technology",
    rating: 5,
    project: "AI Healthcare Platform",
    result: "65% fewer no-shows",
  },
  {
    quote:
      "Exceptional developer who truly understands business needs. The marketing analytics dashboard he built saves us 20+ hours weekly and improved our campaign ROI by 35%. Highly recommended!",
    author: "Emily Thompson",
    role: "Marketing Director, GrowthCo",
    company: "Digital Marketing Agency",
    rating: 5,
    project: "Analytics Dashboard",
    result: "35% ROI improvement",
  },
  {
    quote:
      "Lokendra's full-stack expertise and project management skills are outstanding. He delivered our complex SaaS platform on time and within budget. The code quality and documentation are top-notch.",
    author: "James Wilson",
    role: "Founder, InnovateLab",
    company: "SaaS Startup",
    rating: 5,
    project: "SaaS Platform",
    result: "On-time delivery",
  },
  {
    quote:
      "Professional, reliable, and incredibly skilled. The custom CRM system he built has streamlined our operations and improved team productivity by 50%. Best investment we've made!",
    author: "Lisa Park",
    role: "Operations Manager, ScaleTech",
    company: "Technology Consulting",
    rating: 5,
    project: "Custom CRM System",
    result: "50% productivity boost",
  },
  {
    quote:
      "Lokendra's ability to translate complex requirements into elegant solutions is remarkable. The mobile-first design and performance optimizations he implemented resulted in 3x user engagement.",
    author: "David Kumar",
    role: "Product Owner, MobileFirst",
    company: "Mobile App Development",
    rating: 5,
    project: "Mobile Web App",
    result: "3x user engagement",
  },
]

export default function Testimonials() {
  return (
    <section className="scroll-mt-20 border-b border-border/50 py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-20 max-w-4xl text-center animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <Users className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium tracking-wider text-muted-foreground">Client Testimonials</p>
          </div>
          <h2 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-foreground text-balance">
            What clients
            <span className="block text-primary">say</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
          <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground">
            Real feedback from real clients who've experienced the impact of working together.
          </p>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="font-medium">5.0 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">10+ satisfied clients</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 600)}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="relative flex h-full flex-col justify-between p-8">
                <div>
                  {/* Quote Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="mb-6 text-base sm:text-lg font-light leading-relaxed text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Project Result */}
                  <div className="mb-6 rounded-xl bg-primary/5 border border-primary/20 p-4">
                    <div className="text-sm font-medium text-primary mb-1">{testimonial.project}</div>
                    <div className="text-sm font-semibold text-foreground">{testimonial.result}</div>
                  </div>
                </div>
                
                {/* Author Info */}
                <div className="border-t border-border/50 pt-6">
                  <div className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                    {testimonial.author}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{testimonial.role}</div>
                  <div className="text-xs font-light text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up animate-delay-700">
          <div className="mx-auto max-w-2xl">
            <p className="text-lg font-light text-muted-foreground mb-6">
              Ready to join these satisfied clients and transform your business with custom software solutions?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Currently accepting new projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>100% client satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
