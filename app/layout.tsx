import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mini Site Studio – Shaxsiy saytlar va portfolio yaratish xizmati",
  description:
    "Mini Site Studio – shaxslar va ijodkorlar uchun portfolio va shaxsiy saytlarni byudjetga mos holatda tayyorlab beruvchi freelancerlar jamoasi.",
  generator: "Mini Site Studio",
  keywords: [
    "portfolio sayt",
    "shaxsiy sayt",
    "freelancer jamoasi",
    "mini site studio",
    "byudjetga mos sayt",
    "ijodkorlar uchun sayt",
    "portfolio yaratish",
  ],
  openGraph: {
    title: "Mini Site Studio – Shaxsiy saytlar va portfolio yaratish xizmati",
    description:
      "Mini Site Studio – shaxslar va ijodkorlar uchun portfolio va shaxsiy saytlarni byudjetga mos holatda tayyorlab beruvchi freelancerlar jamoasi.",
    url: "https://minisitestudio.uz",
    siteName: "Mini Site Studio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
