import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Lokendra Jatav - Full Stack Developer",
  description: "Privacy policy and data protection information for Lokendra Jatav's portfolio website and services.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="mb-8 inline-flex items-center gap-2 border border-border/50 bg-muted/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Privacy Policy</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl font-light text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When you contact me through this website, I may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address (when you fill out contact forms)</li>
                  <li>Project details and requirements you share</li>
                  <li>Communication preferences</li>
                  <li>Basic analytics data (page views, time spent, general location)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>I use the information collected to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and project requests</li>
                  <li>Provide quotes and project proposals</li>
                  <li>Communicate about ongoing projects</li>
                  <li>Improve the website experience</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>If you have any questions about this privacy policy, please contact me:</p>
                <div className="flex items-center gap-2 mt-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:lokendrajatav1503@gmail.com" className="text-primary hover:underline">
                    lokendrajatav1503@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}