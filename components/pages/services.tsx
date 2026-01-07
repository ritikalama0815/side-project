"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stars as Stairs, Home, Building2, Droplets, Hammer, Palette } from "lucide-react"

export function ServicesPage() {
  const services = [
    {
      icon: Stairs,
      title: "Staircase Design",
      description:
        "Custom staircases that blend functionality with stunning aesthetics. From modern floating stairs to classic spiral designs.",
    },
    {
      icon: Home,
      title: "Railing Systems",
      description:
        "Beautiful and safe railing solutions for both interior and exterior spaces. Glass, metal, and wood options available.",
    },
    {
      icon: Building2,
      title: "False Ceiling",
      description:
        "Transform your ceiling into a design statement. POP, gypsum, and modern grid ceiling installations.",
    },
    {
      icon: Droplets,
      title: "Tank Stands",
      description: "Sturdy tank stand designs that complement your building architecture.",
    },
    {
      icon: Hammer,
      title: "Exterior Design",
      description:
        "Complete exterior renovation and design services including facades, landscaping, and outdoor spaces.",
    },
    {
      icon: Palette,
      title: "Interior Design",
      description:
        "Interior design solutions from concept to completion. Residential and commercial projects.",
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Comprehensive design and construction services tailored to bring your vision to life."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{"Need a Custom Solution?"}</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {
              "Every project is unique. We solve your problems in budget friendly way."
            }
          </p>
          <p className="text-accent font-semibold text-lg">{"Contact us today to discuss your project"}</p>
        </div>
      </div>
    </div>
  )
}
