"use client"

import { Card, CardContent } from "@/components/ui/card"

export function WorksPage() {
  const projects = [
    {
      title: "Modern Door Design",
      category: "Exterior Doors",
      image: "/exterior-door.jpg",
    },
    {
      title: "Designed Roof",
      category: "Roof and Balcony Design",
      image: "/rooftops.jpg",
    },
    {
      title: "Modern Glass Exterior",
      category: "Exterior Design",
      image: "/modern-house-exterior-facade.jpg",
    },
    {
      title: "House Balcony Railing",
      category: "Railings",
      image: "/railing.jpg",
    },
    {
      title: "Glass Railing Staircase",
      category: "Stairs",
      image: "/glass stairs.jpg",
    },
    {
      title: "Living Room Transformation",
      category: "Interior Design",
      image: "/living-room-design.jpg",
    },
    {
      title: "In-Progress Gate Installation",
      category: "Exterior Gates",
      image: "/gate-installation.jpg",
    },
    {
      title: "Exterior Garden Design",
      category: "Exterior Design",
      image: "/garden-exterior-design.jpg",
    },
    {
      title: "Rooftop Design",
      category: "Roof and Balcony Design",
      image: "/roof design.jpg",
    },
    {
      title: "Custom Tank Stand",
      category: "Tank Stands",
      image: "/architectural-water-tank-stand.jpg",
    },
    
  ]

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Explore our collection of completed projects showing our interior and exterior design."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden aspect-3/2">
                <img
                  src={project.image || "/loading.svg"}
                  alt={project.title || "Loading..."}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-accent font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-lg text-muted-foreground">
            {
              "These are just a few examples of our work. Contact us to see more projects and discuss how we can bring your vision to life."
            }
          </p>
        </div>
      </div>
    </div>
  )
}
