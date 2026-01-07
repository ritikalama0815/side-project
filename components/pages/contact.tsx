"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "Ready to start your project? We'd love to hear from you. Reach out and let's create something amazing together."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      Ward No. 10, Thapagaun, Baneshwor
                      <br />
                      वार्ड न. १०, थापागाउ, बानेश्वर 
                      <br />
                      Kathmandu, Nepal
                      <br />
                      काठमाडौं उपत्यका, नेपाल 
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+977 9848731873</p>
                    <p className="text-muted-foreground">+977 9813739873</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <p className="text-muted-foreground">rikelama100@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Sunday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this about?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={6} />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
