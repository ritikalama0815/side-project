"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target } from "lucide-react"

export function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">About us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"We are a team of passionate designers and builders dedicated to transforming spaces into works of art."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {
                "Founded by Rike Lama, Western Builders and Suppliers has been at the forefront of interior and exterior design innovation. We believe that every space tells a story, and our mission is to help you tell yours beautifully."
              }
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {
                "Our team brings together decades of combined experience in architectural design, construction, and project management. From intricate stair railings to elegant false ceilings, we handle every detail with precision and care."
              }
            </p>
            <br/>
            <p className="text-s text-muted-foreground leading-relaxed">
              {
                "हाम्रो टिमले वास्तुकला डिजाइन, निर्माण, र परियोजना व्यवस्थापनमा दशकौंको संयुक्त अनुभवलाई एकसाथ ल्याउँछ। जटिल भर्‍याङको रेलिङदेखि सुरुचिपूर्ण बनावटी छतसम्म, हामी प्रत्येक विवरणलाई सटीकता र सावधानीपूर्वक ह्यान्डल गर्छौं।"
              }
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Quality Excellence</h3>
                  <p className="text-muted-foreground">
                    {"Committed to delivering exceptional craftsmanship even in low budget in every project we undertake."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Expert Team</h3>
                  <p className="text-muted-foreground">
                    {"Our skilled employees bring creativity and technical expertise to every design."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Client Focused</h3>
                  <p className="text-muted-foreground">
                    {"Your vision is our priority. We work closely with you at every step."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Owner and Manager</h2>
            <p className="text-xl text-primary font-semibold">Rike Lama</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {
                '"Our goal is not just to build structures, but to create environments where people feel home."'
              }
            </p>
            <p className="text-lg text-green-600 max-w-2xl mx-auto leading-relaxed">
              {
                '"हाम्रो लक्ष्य केवल संरचनाहरू निर्माण गर्नु मात्र होइन, तर मानिसहरूलाई घर जस्तो महसुस हुने वातावरण सिर्जना गर्नु हो। "'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
