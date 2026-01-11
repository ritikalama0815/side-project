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
    "Interior and exterior design company specializing in stairs, railings, false ceilings, and tank stands.",
  icons: {
    icon: "/wbs.jpg",
    shortcut: "/wbs.jpg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Western Builders and Suppliers Pvt. Ltd.",
    description:
      "Interior and exterior design company specializing in stairs, railings, false ceilings, and tank stands.",
    url: "https://western-builders.vercel.app",
    siteName: "Western Builders and Suppliers",
    images: [
      {
        url: "https://western-builders.vercel.app/wbs.jpg",
        width: 1200,
        height: 630,
        alt: "Western Builders and Suppliers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Builders and Suppliers Pvt. Ltd.",
    description:
      "Interior and exterior design company specializing in stairs, railings, false ceilings, and tank stands.",
    images: ["https://western-builders.vercel.app/wbs.jpg"],
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
