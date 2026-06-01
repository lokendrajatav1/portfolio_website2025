import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Lokendra Jatav",
  description: "Terms of service and usage terms for Lokendra Jatav's website and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-foreground mb-6">
              Terms of Service
            </h1>

            <p className="text-lg text-muted-foreground mb-6">These terms govern your use of this website and the services provided. Please read them carefully.</p>
          </div>

          <div className="space-y-10 text-muted-foreground">
            <section>
              <h2 className="font-semibold text-2xl text-foreground mb-3">Acceptance of Terms</h2>
              <p>By accessing or using this website, you agree to be bound by these Terms of Service.</p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-foreground mb-3">Services</h2>
              <p>The developer provides web development and consultancy services. Project scope and deliverables are defined in separate contracts.</p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-foreground mb-3">Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, the developer is not liable for any indirect, incidental, or consequential damages arising from use of the site or services.</p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-foreground mb-3">Governing Law</h2>
              <p>These terms are governed by the laws of the applicable jurisdiction in which the developer operates.</p>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
