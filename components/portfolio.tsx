"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, TrendingUp } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { useState, useEffect } from "react"

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Arxitektura Portfolio (Real Project)",
      description: "Zamonaviy va estetik arxitektura loyihalarini namoyish etadigan portfolio. Dizayn va loyiha tafsilotlarini vizual tarzda ko‘rsatadi.",
      image: "/logoarx.png", 
      link: "https://arx-dexiumportfolio.netlify.app/", 
      instagram: "https://www.instagram.com/arx_dexium?igsh=NzRrcWpnMHhndnU0", 
      tech: ["Figma", "Adobe Photoshop", "Adobe Illustrator"], 
      price: "300,000 so'm",
      gradient: "from-green-500/20 via-teal-500/20 to-blue-500/20",
      featured: true,
      type: "real",
    },
    {
      title: "Hozircha bo'sh",
      description: "Bu joyga tez orada yangi loyiha qo'shiladi.",
      image: "/placeholder.svg?height=200&width=400&query=coming+soon",
      tech: [],
      price: "Coming soon",
      gradient: "from-gray-500/20 via-gray-400/20 to-gray-300/20",
      featured: false,
      type: "empty",
    },
    {
      title: "Hozircha bo'sh",
      description: "Yangi loyiha ustida ishlanyapti.",
      image: "/placeholder.svg?height=200&width=400&query=empty+slot",
      tech: [],
      price: "Coming soon",
      gradient: "from-gray-500/20 via-gray-400/20 to-gray-300/20",
      featured: false,
      type: "empty",
    },
  ]

  return (
    <section id="portfolio" className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Bizning <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bizning yaratgan saytlarimiz va loyihalarimiz. Har biri o'ziga xos dizayn va funksionallik bilan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift glass-effect border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer relative ${isVisible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-black/60 transition-all duration-300 flex items-center justify-center space-x-4 z-20
  opacity-100 md:opacity-0 group-hover:md:opacity-100`}
                >
                  {/* Ko‘rish tugmasi */}
                  <Button
                    size="sm"
                    className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transform translate-y-0 transition-all duration-300"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ko'rish
                    </a>
                  </Button>

                  {/* Instagram tugmasi */}
                  {project.instagram && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-pink-500/20 hover:text-pink-500 transition-all duration-200 flex items-center gap-1"
                      asChild
                    >
                      <a href={project.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="h-4 w-4" />
                        Insta
                      </a>
                    </Button>
                  )}
                </div>

              </div>

              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md hover:bg-primary/20 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium gradient-text">{project.price}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
