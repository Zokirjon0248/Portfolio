"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("top")}
            className="text-xl font-bold text-foreground cursor-pointer"
          >
            Mini Site Studio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Xizmatlar
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Narxlar
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Aloqa
            </button>
          </nav>

          <Button onClick={() => scrollToSection("contact")} className="hidden md:inline-flex">
            Bog'lanish
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Xizmatlar
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Narxlar
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Aloqa
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full mt-4">
                Bog'lanish
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
