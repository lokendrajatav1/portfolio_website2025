"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, Clock, Shield, Mail, Phone, MapPin, CheckCircle, Star } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL

      if (!googleSheetsUrl) {
        throw new Error("Google Sheets URL is not configured. Please check your environment variables.")
      }

      const response = await fetch(googleSheetsUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      setSubmitStatus({
        type: "success",
        message: "Thank you for reaching out! You'll receive a confirmation email shortly, and I'll get back to you within 24 hours.",
      })

      setFormData({ name: "", email: "", company: "", budget: "", timeline: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again or email me directly at lokendrajatav1503@gmail.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-gradient-to-b from-muted/20 via-background to-muted/10 py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03)_0%,transparent_70%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <MessageSquare className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium tracking-wider text-muted-foreground">Get In Touch</p>
            </div>
            <h2 className="mb-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground text-balance">
              Let's work
              <span className="block text-primary">together</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
            <p className="mx-auto max-w-3xl text-xl sm:text-2xl font-light leading-relaxed text-muted-foreground">
              Ready to transform your ideas into powerful digital solutions? Let's discuss your project and create something amazing together.
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24h response time</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up animate-delay-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                
                <CardHeader className="relative text-center p-8 sm:p-10">
                  <CardTitle className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                    Start Your Project
                  </CardTitle>
                  <CardDescription className="text-lg font-light text-muted-foreground">
                    Tell me about your vision and I'll provide a detailed proposal within 24 hours
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative p-8 sm:p-10">
                  {submitStatus.type && (
                    <div
                      className={`mb-6 p-4 rounded-xl border animate-fade-in-up ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400"
                          : "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        ) : (
                          <MessageSquare className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-foreground">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm font-medium text-foreground">Project Budget</Label>
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-3 py-2 text-sm"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-sm font-medium text-foreground">Project Timeline</Label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm px-3 py-2 text-sm"
                      >
                        <option value="">When do you need this completed?</option>
                        <option value="asap">ASAP (Rush project)</option>
                        <option value="1-2months">1-2 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6months+">6+ months</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your project, goals, target audience, and any specific requirements or features you need..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          Sending...
                          <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        </>
                      ) : (
                        <>
                          Send Project Details
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info & Guarantees */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up animate-delay-200">
                <CardHeader className="p-8">
                  <CardTitle className="font-serif text-2xl font-light tracking-tight text-foreground">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Email</div>
                      <a href="mailto:lokendrajatav1503@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        lokendrajatav1503@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Response Time</div>
                      <div className="text-sm text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">Available worldwide (Remote)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Guarantees */}
              <Card className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up animate-delay-300">
                <CardHeader className="p-8">
                  <CardTitle className="font-serif text-2xl font-light tracking-tight text-foreground">
                    What You Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Free Consultation</div>
                      <div className="text-sm text-muted-foreground">No obligations, just honest advice</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Detailed Proposal</div>
                      <div className="text-sm text-muted-foreground">Clear timeline, costs, and deliverables</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">100% Satisfaction</div>
                      <div className="text-sm text-muted-foreground">Your success is my priority</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Ongoing Support</div>
                      <div className="text-sm text-muted-foreground">Post-launch maintenance included</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
