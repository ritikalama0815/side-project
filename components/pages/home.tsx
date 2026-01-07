"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HomeProps {
  onNavigate: (page: string) => void
}

export function HomePage({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight">
          <span className="block">Crafts</span>
          <span className="block mt-2">that feel like home</span>
        </h1>

        <p className="text-xlg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {
            "Transform your vision into reality with Western Builders and Suppliers. Excellence in interior and exterior design for more than a decade."
          }
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" onClick={() => onNavigate("works")} className="text-lg px-8 py-6 group">
            View Our Works
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => onNavigate("contact")} className="text-lg px-8 py-6">
            Get In Touch
          </Button>
        </div>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">10+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">200+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">100%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  )
}
