"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AnimatedFlorals } from "@/components/animated-florals"
import { HomePage } from "@/components/pages/home"
import { AboutPage } from "@/components/pages/about"
import { ServicesPage } from "@/components/pages/services"
import { WorksPage } from "@/components/pages/works"
import { ContactPage } from "@/components/pages/contact"
import { AnimatePresence, motion } from "framer-motion"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicesPage />
      case "works":
        return <WorksPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <main className="relative min-h-screen">
      <AnimatedFlorals />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
