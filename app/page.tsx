import Hero from "@/components/hero"
import Services from "@/components/services"
import Work from "@/components/work"
import Process from "@/components/process"
import WhyHireMe from "@/components/why-hire-me"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Process />
      <WhyHireMe />
      <Testimonials />
      <Contact />
    </main>
  )
}
