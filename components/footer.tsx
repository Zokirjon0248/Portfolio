import { Instagram, Mail, Phone } from "lucide-react"
import { FaTelegramPlane } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Birinchi bo'lim */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Frontend Dev</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend dasturlash xizmatlari. Zamonaviy web yechimlar bilan biznesingizni rivojlantiring.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mini.site.studio?igsh=MXp6dW10eHE4M2gy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/infosaytuzadmin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTelegramPlane className="h-4 w-4" />
              </a>

              {/* Email */}
              <a
                href="mailto:infosaytgoose@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Xizmatlar */}
          <div className="space-y-4">
            <h4 className="font-semibold">Xizmatlar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Portfolio saytlari
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Landing page
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Ma'lumot saytlari
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Korporativ saytlar
                </a>
              </li>
            </ul>
          </div>

          {/* Kompaniya */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kompaniya</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Narxlar
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Bog'lanish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa */}
          <div className="space-y-4">
            <h4 className="font-semibold">Aloqa</h4>
            <div className="text-sm text-muted-foreground">
              {/* Email va Telefon uchun alohida bo‘shliq */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:infosaytgoose@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>infosaytgoose@gmail.com</span>
                  </div>
                </a>

                {/* Telefon */}
                <a
                  href="tel:+998910106237"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+998 91 010 62 37</span>
                  </div>
                </a>
              </div>

              {/* Telegram */}
              <a
                href="https://t.me/infosaytuzadmin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block mt-2"
              >
                <div className="flex items-center space-x-2">
                  <FaTelegramPlane className="h-4 w-4" />
                  <span>@infosaytuzadmin</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Footer pasti */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Frontend Dev. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
