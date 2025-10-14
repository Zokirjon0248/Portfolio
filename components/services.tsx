"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Layout, Smartphone, Users, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Layout,
      title: "Portfolio Saytlari",
      description: "Shaxsiy yoki biznesingiz uchun oddiy va chiroyli portfolio saytlar.",
      features: ["Responsive dizayn", "SEO optimizatsiya", "Tez yuklash"],
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Globe,
      title: "Landing Page",
      description: "Mahsulot yoki xizmat uchun sodda va samarali landing page.",
      features: ["CTA optimizatsiya", "Oddiy analitika (statik)", "Lead forma"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Smartphone,
      title: "Ma'lumot Saytlari",
      description: "1-4 sahifali ma'lumot beruvchi saytlar. Biznesingiz haqida to'liq ma'lumot joylash mumkin.",
      features: ["Oddiy sahifalar struktura", "Contact forma", "Xarita qo‘shish", "Blog qo‘shish (statik)"],
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      icon: Users,
      title: "Korporativ Saytlar",
      description: "Kompaniya va jamoangizni tanishtiruvchi korporativ saytlar.",
      features: ["Team sahifasi", "Xizmatlar bo‘limi", "Yangiliklar", "Mijozlar fikri"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <section id="services" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Biznig <span className="gradient-text">Xizmatlarim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sizga foydasi tegadigan  landing pagelar, ma’lumot saytlari yoki kichik biznesingiz uchun online sahifa yaratib beramamiz.
            Shu orqali biz tajriba to‘playmiz, siz esa o‘zingizning ehtiyojingizga mos professional yechimga ega bo‘lasiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover-lift glass-effect border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden ${isVisible ? "animate-scale-in" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-10 w-10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
