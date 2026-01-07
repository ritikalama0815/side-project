import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Western Builders and Suppliers Pvt. Ltd.",
  description:
    "Interior and exterior design company specializing in stairs, railings, false ceilings, and tank stands. Transform your space with us.",
    icons: {
      icon: "/wbs.jpg",
      shortcut: "/wbs.jpg",
      apple: "/apple-icon.png",
      },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
