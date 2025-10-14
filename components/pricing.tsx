"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Zap, Star, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("pricing")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

const plans = [
  {
    name: "Oddiy Portfolio",
    price: "300.000",
    description: "Shaxsiy portfolio yoki ijodkorlar uchun mos sayt",
    icon: Star,
    features: [
      "1 sahifali sayt",
      "Rasm/mahsulot galereyasi",
      "Google xarita qo‘shish",
      "Ijtimoiy tarmoqlar havolalari",
      "Telefon va kompyuterga mos dizayn",
      "Kontakt bo‘limi",
    ],
    popular: false,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    name: "Vizitka Sayt",
    price: "500.000",
    description: "Kichik biznes yoki xizmat ko‘rsatuvchi jamoalar uchun",
    icon: Zap,
    features: [
      "1-4 sahifali sayt (asosiy, xizmatlar, portfolio, aloqa)",
      "Rasm/mahsulot galereyasi",
      "Google xarita qo‘shish",
      "Ijtimoiy tarmoqlar havolalari",
      "Telefon va kompyuterga mos dizayn",
      "Kontakt bo‘limi",
    ],
    popular: true,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
]



  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Maqbul <span className="gradient-text">Narxlar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Har xil ehtiyoj va byudjet uchun moslashtirilgan narx rejalari
          </p>
        </div>

    <div className="flex flex-col items-center justify-center w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
    {plans.map((plan, index) => (
      <Card
        key={index}
        className={`group relative hover-lift glass-effect border-border/50 transition-all duration-700 cursor-pointer overflow-hidden
          ${plan.popular ? "border-primary/50 scale-105 shadow-xl" : "hover:border-primary/50"}
          ${isVisible ? "animate-scale-in" : ""}`}
        style={{ animationDelay: `${index * 0.15}s` }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Mashhur belgisi */}
        {plan.popular && (
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-20">
            <div className="gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md">
              <Star className="h-3 w-3" />
              Mashhur
            </div>
          </div>
        )}

        {/* Hover gradient effekti */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        />

        {/* Sarlavha */}
        <CardHeader className="text-center pb-4 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors duration-500">
              <plan.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-500">
            {plan.name}
          </CardTitle>
          <div className="mt-4">
            <span className="text-3xl font-bold gradient-text">{plan.price}</span>
            <span className="text-muted-foreground ml-1">so'm</span>
          </div>
          <CardDescription className="mt-2 text-sm">{plan.description}</CardDescription>
        </CardHeader>

        {/* Tarkib */}
        <CardContent className="space-y-4 relative z-10">
          <ul className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="flex items-start text-sm group-hover:text-foreground transition-colors duration-500"
              >
                <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full mt-6 group/btn transition-all duration-500 ${
              plan.popular
                ? "gradient-primary hover:shadow-lg hover:shadow-primary/30"
                : "glass-effect hover:bg-primary hover:text-primary-foreground"
            }`}
            onClick={scrollToContact}
          >
            Tanlash
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Maxsus talablaringiz bormi?</h3>
            <p className="text-muted-foreground mb-6">
              Biz bilan bog'laning va individual taklif oling. Har qanday murakkablikdagi loyihalarni amalga oshiramiz.
            </p>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300 group bg-transparent"
            >
              Maxsus taklif so'rash
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
