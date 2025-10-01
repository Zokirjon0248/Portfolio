import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
export const metadata: Metadata = {
  title: "Frontend Developer - Portfolio va Xizmatlar",
  description:
    "Professional frontend dasturlash xizmatlari - Portfolio saytlari, Landing page va ma'lumot beruvchi saytlar",
  generator: "v0.app",
  openGraph: {
    title: "Frontend Developer - Portfolio va Xizmatlar",
    description:
      "Professional frontend dasturlash xizmatlari - Portfolio saytlari, Landing page va ma'lumot beruvchi saytlar",
    url: "https://portfoliogoose.netlify.app/",
    siteName: "PortfolioGoose",
    images: [
      {
        url: "https://portfoliogoose.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PortfolioGoose Frontend Developer"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer - Portfolio va Xizmatlar",
    description:
      "Professional frontend dasturlash xizmatlari - Portfolio saytlari, Landing page va ma'lumot beruvchi saytlar",
    images: ["https://portfoliogoose.netlify.app/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
