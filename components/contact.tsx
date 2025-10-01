"use client"
import { FaRegSmileWink } from "react-icons/fa";
import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageCircle } from "lucide-react"

// Telefon validatsiyasi funksiyasi
function validatePhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, "") 
  const pattern1 = /^\+998\d{9}$/      
  const pattern2 = /^9\d{8}$/           
  const pattern3 = /^\(?9\d\)?\d{2}\d{2}\d{2}$/ 
  return pattern1.test(cleaned) || pattern2.test(cleaned) || pattern3.test(cleaned)
}


export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Telefon tekshiruvi
    if (!validatePhoneNumber(formData.phone)) {
      alert("❌ Telefon raqam noto‘g‘ri! Iltimos +998XXXXXXXXX yoki 9XXXXXXXX formatida kiriting.")
      return
    }

    setLoading(true)
    const botToken = "8256742514:AAEXHefWReLpn0ElfGuDCvFEzzxC3QZMCWA"
    const chatId = "6420246424"

    const text =
      `📩 Yangi xabar
👤 Ism: ${formData.name || "-"}
📧 Email: ${formData.email || "-"}
📱 Telefon: ${formData.phone || "-"}
🛠 Xizmat turi: ${formData.service || "-"}
💬 Xabar: ${formData.message || "-"}`

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      })

      const data = await res.json()
      console.log("Telegram javobi:", data)

      if (data.ok) {
        alert("✅ Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        alert("❌ Yuborishda xatolik: " + data.description)
      }
    } catch (error) {
      alert("❌ Serverga ulanishda muammo!")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Fon effektlar */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Keling <span className="gradient-text">Bog'lanaylik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Loyihangizni muhokama qilish uchun bog'laning. Bepul maslahat va taklif olishingiz mumkin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chap tomondagi aloqa ma'lumotlari */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : ""}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Aloqa ma'lumotlari
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">Email</p>
                    <p className="text-muted-foreground">infosaytgoose@gmail.com</p>
                  </div>
                </div>
                {/* Telefon */}
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    
                    <p className="font-medium group-hover:text-primary transition-colors duration-300 flex items-center gap-2">Telefon  <FaRegSmileWink /></p>
                    <p className="text-muted-foreground">
                      <a
                        href={`tel:${formData.phone.replace(/\s+/g, "")}`}
                        aria-label="Telefonga qo'ng'iroq qilish"
                        className="hover:text-primary transition-colors"
                      >
                        
                        {formData.phone || "+998 91 010 62 37"}
                      </a>
                     
                    </p>
                  </div>
                </div>
                {/* Manzil */}
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">Manzil</p>
                    <p className="text-muted-foreground">Toshkent, O'zbekiston</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* O'ng tomondagi forma */}
          <Card className={`glass-effect border-border/50 hover:border-primary/50 transition-all duration-500 ${isVisible ? "animate-slide-in-right" : ""}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Loyiha haqida gapirishaylik
              </CardTitle>
              <CardDescription>Formani to'ldiring va men siz bilan bog'lanaman</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Ism *</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Ismingizni kiriting" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefon</label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+998 90 123 45 67" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Xizmat turi</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 border border-border/50 bg-background/50 backdrop-blur-sm rounded-md text-sm focus:border-primary transition-colors duration-300 text-foreground">
                      <option value="">Tanlang</option>
                      <option value="portfolio">Portfolio sayt</option>
                      <option value="landing">Landing page</option>
                      <option value="business">Biznes sayt</option>
                      <option value="custom">Maxsus loyiha</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Xabar *</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Loyihangiz haqida batafsil yozing..." />
                </div>

                <Button type="submit" disabled={loading} className="w-full gradient-primary">
                  {loading ? "⏳ Yuborilmoqda..." : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Xabar yuborish
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
