"use client"

import React, { useRef, useState, MouseEvent, ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "NovaSathi",
    category: "Astrology Platform",
    description:
      "A comprehensive astrology platform offering personalized daily horoscopes, live consultations, and detailed birth chart analysis. Built with a modern tech stack for a seamless user experience.",
    outcome: "Successfully launched with integrated secure payment gateways and interactive user features.",
    metrics: {
      performance: "Optimized Load Times",
      users: "Growing Community",
      growth: "Steady Engagement"
    },
    tech: ["React", "Node.js", "Express","Redis","PostgreSQL", "PhonePe API", "whatsapp API", "webRTC", "socket.io"],
    image: "/novasathi.png",
    link: "https://novasathi.com",
    featured: true,
  },
  {
    title: "Labelzaitech",
    category: "Technology Platform",
    description:
      "An innovative technology platform delivering cutting-edge solutions. (Details pending - website currently unreachable to gather data).",
    outcome: "Successfully developed and launched.",
    metrics: {
      performance: "Optimized Performance",
      users: "Active User Base",
      growth: "Continuous Scaling"
    },
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    image: "/labelzai.png",
    link: "https://labelzaitech.com",
  },
  {
    title: "The Comfort Journey",
    category: "Car Rental Platform",
    description:
      "A seamless self-drive car rental platform based in Indore. It offers users the freedom to book affordable cars online with real-time tracking and instant confirmations.",
    outcome: "Successfully launched with a growing fleet and satisfied customer base.",
    metrics: {
      performance: "Optimized Booking Flow",
      users: "Growing Customer Base",
      growth: "Expanding Fleet"
    },
    tech: ["React", "Redux", "Socket.io", "React Query"],
    image: "/thecomfortjourney.png",
    link: "https://thecomfortjourney.com",
  },
  {
    title: "Billistry",
    category: "Inventory & Billing Platform",
    description:
      "A comprehensive inventory management and billing solution for businesses. Features include real-time stock tracking, automated alerts, WhatsApp billing with QR payments, and AI-driven optimization.",
    outcome: "Streamlined warehouse operations and enhanced professional billing.",
    metrics: {
      performance: "99.98% System Uptime",
      users: "120+ Active Warehouses",
      growth: "45,000+ Products Tracked"
    },
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    image: "/billistry.png",
    link: "https://billistry.com",
  },

]

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = ((mouseX / width) - 0.5) * 15; // Max 7.5 deg
    const rotateX = ((mouseY / height) - 0.5) * -15; // Max -7.5 deg

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`will-change-transform ${className}`}
    >
      <div 
        className="absolute inset-0 z-50 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at ${((rotation.y / 15) + 0.5) * 100}% ${((rotation.x / -15) + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)` 
            : 'transparent'
        }}
      />
      {children}
    </div>
  )
}

export default function Work({ className }: { className?: string }) {
  return (
    <section id="work" className={className || "scroll-mt-20 border-b border-border/50 bg-gradient-to-b from-muted/20 to-background py-10 sm:py-16 lg:py-20"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center animate-fade-in-up">
          <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground text-balance">
            Recent <span className="text-primary">projects</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 sm:w-24 bg-primary rounded-full" />
          <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground">
            A selection of recent projects showcasing my expertise in building scalable, performance-optimized digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 w-full max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const slug = project.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")

            const href = (project as any).link || `/projects/${slug}`
            const isExternal = !!(project as any).link

            return (
              <Link key={index} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
                <TiltCard
                  className={`relative aspect-[4/3] w-full flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-muted/30 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 300)}`}
                >

              {/* Full background image */}
              <div className="absolute inset-0 z-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Always-on bottom gradient for title readability */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                {/* Full dark gradient that fades in on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content overlay */}
              <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                <div className="flex flex-col">
                  {/* Always Visible Section */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="mb-2.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/40 backdrop-blur-md border border-primary/50 text-[9px] font-bold tracking-widest text-white uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-medium tracking-tight text-white line-clamp-1 drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Expandable Hover Section */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden min-h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      <div className="pt-3">
                        <p className="mb-4 text-xs font-light leading-relaxed text-gray-300 line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="pt-3 border-t border-white/20 flex flex-col gap-3">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="border border-white/20 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-md text-[10px] font-medium text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-xs font-semibold text-primary mt-1">
                            <span>View Project</span>
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
              </Link>
            )
          })}
        </div>

        <div className="mt-20 text-center animate-fade-in-up animate-delay-400">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-border bg-background px-12 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
