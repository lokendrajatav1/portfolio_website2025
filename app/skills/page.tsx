import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Zap,
  Star,
  TrendingUp,
  Award,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "Skills & Technologies - Lokendra Jatav | Full Stack Developer",
  description: "Explore my technical skills, programming languages, frameworks, and tools. 2+ years of experience in modern web development.",
  keywords: ["skills", "technologies", "programming", "web development", "full stack", "React", "Next.js", "Node.js"],
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    skills: [
      { name: "React.js", level: 90, experience: "2+ years" },
      { name: "Next.js", level: 85, experience: "1.5+ years" },
      { name: "TypeScript", level: 80, experience: "1+ year" },
      { name: "JavaScript", level: 95, experience: "2+ years" },
      { name: "HTML5/CSS3", level: 95, experience: "2+ years" },
      { name: "Tailwind CSS", level: 90, experience: "1.5+ years" }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-500/20 to-emerald-500/20",
    skills: [
      { name: "Node.js", level: 85, experience: "2+ years" },
      { name: "Express.js", level: 80, experience: "1.5+ years" },
      { name: "MongoDB", level: 75, experience: "1+ year" },
      { name: "PostgreSQL", level: 70, experience: "1+ year" },
      { name: "REST APIs", level: 90, experience: "2+ years" },
      { name: "GraphQL", level: 65, experience: "6+ months" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-purple-500/20 to-pink-500/20",
    skills: [
      { name: "AWS", level: 70, experience: "1+ year" },
      { name: "Vercel", level: 85, experience: "1.5+ years" },
      { name: "Docker", level: 65, experience: "8+ months" },
      { name: "Git/GitHub", level: 90, experience: "2+ years" },
      { name: "CI/CD", level: 70, experience: "1+ year" },
      { name: "Netlify", level: 80, experience: "1+ year" }
    ]
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    color: "from-orange-500/20 to-red-500/20",
    skills: [
      { name: "React Native", level: 75, experience: "1+ year" },
      { name: "VS Code", level: 95, experience: "2+ years" },
      { name: "Figma", level: 80, experience: "1.5+ years" },
      { name: "Postman", level: 85, experience: "2+ years" },
      { name: "Chrome DevTools", level: 90, experience: "2+ years" },
      { name: "Webpack", level: 70, experience: "1+ year" }
    ]
  }
]

const achievements = [
  {
    icon: Target,
    title: "10+ Projects Completed",
    description: "Successfully delivered diverse web applications"
  },
  {
    icon: TrendingUp,
    title: "2+ Years Experience",
    description: "Continuous learning and professional growth"
  },
  {
    icon: Award,
    title: "Modern Tech Stack",
    description: "Always working with latest technologies"
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "100% project completion rate"
  }
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">

          <h1 className="mb-8 font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground">
            Skills & <span className="text-primary">Technologies</span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 bg-primary rounded-full" />
          <p className="mx-auto max-w-3xl text-xl sm:text-2xl font-light leading-relaxed text-muted-foreground">
            A comprehensive overview of my technical skills, tools, and technologies I use to build modern web applications.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={index} className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
              <CardContent className="relative p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50`} />
              
              <CardHeader className="relative p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                      {category.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-2">
                      {category.skills.length} technologies mastered
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative p-8 sm:p-10 pt-0">
                <div className="grid gap-6 sm:grid-cols-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.experience}</p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <Card className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <CardContent className="relative p-12 sm:p-16">
              <Palette className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-6 font-serif text-3xl sm:text-4xl font-light tracking-tight text-foreground">
                Ready to Build Something Amazing?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Let's discuss how my skills can help bring your project to life. I'm always excited to work with new technologies and tackle challenging problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                  <Target className="h-5 w-5" />
                </a>
                <a 
                  href="/projects" 
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-8 py-4 text-lg font-medium text-foreground hover:bg-muted/50 transition-all duration-300"
                >
                  View My Work
                  <Star className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}