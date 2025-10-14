"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Orqa fon effektlari */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Asosiy kontent */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chap tomon (matn qismi) */}
          <div className={`space-y-8 text-center lg:text-left ${isVisible ? "animate-slide-in-left" : ""}`}>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                <span className="text-primary font-medium">Freelancerlar jamoasi</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-none">
                Arzon narxda <span className="gradient-text">zamonaviy</span> web saytlar
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Biz — yosh freelancerlar jamoasimiz. Portfolio va shaxsiy saytlar yaratishda
                tajriba orttirish bilan birga mijozlarimizga foydali, sifatli va byudjetga mos
                saytlar tayyorlaymiz. Har bir loyiha biz uchun muhim — bizda samimiyat va sifat birinchi o‘rinda.
              </p>
            </div>

            {/* Tugmalar */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-effect"
              >
                Ishlarimizni ko‘rish
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="glass-effect hover:bg-white/10 transition-all duration-300"
              >
                Bepul maslahat
              </Button>
            </div>

            {/* Statistikalar */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "1+", label: "Tugallangan loyiha" },
                { number: "100%", label: "Mijozlar mamnuniyati" },
                { number: "Byudjetga", label: "Mos narxlar" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center ${isVisible ? "animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* O‘ng tomon (ikonkalar qismi) */}
          <div className={`relative ${isVisible ? "animate-slide-in-right" : ""}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-effect rounded-xl p-6 hover-lift group cursor-pointer">
                  <Code className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Toza Kod</h3>
                  <p className="text-sm text-muted-foreground">
                    Jamoamiz kodlarni zamonaviy standartlarga mos, tushunarli va optimallashtirilgan holatda yozadi.
                  </p>
                </div>
                <div
                  className="glass-effect rounded-xl p-6 hover-lift group cursor-pointer"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Zap className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Tez Yuklash</h3>
                  <p className="text-sm text-muted-foreground">
                    Saytlar tez ishlashi va foydalanuvchi tajribasi yuqori bo‘lishiga alohida e’tibor beramiz.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-effect rounded-xl p-6 hover-lift group cursor-pointer"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Palette className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Oddiy & Chiroyli Dizayn</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimalizm va zamonaviy dizayn uslubi bilan foydalanuvchilar uchun qulay interfeyslar yaratamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
