'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ClipboardList,
  FileCheck2,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrate with CRM or form handler
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Talk to a Service Lead',
      details: ['1800 MADEMU', 'Rigging · Civil · Plant · Safety'],
      link: 'tel:1800623368',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@mad-emu.com.au'],
      link: 'mailto:hello@mad-emu.com.au',
    },
    {
      icon: MapPin,
      title: 'Office & Reach',
      details: ['Sydney, New South Wales', 'Projects delivered nationwide'],
      link: '#',
    },
    {
      icon: Clock,
      title: 'Response Times',
      details: ['Business hours: 7:00 AM – 6:00 PM AEDT', 'After-hours escalation available for live projects'],
      link: '#',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2940&auto=format&fit=crop"
            alt="Mad Emu team reviewing project plans"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Let’s Collaborate
              </span>
              <h1 className="heading-hero">Engage Mad Emu</h1>
              <p className="text-lg text-white/80">
                Share your project requirements and we’ll align the right Mad
                Emu service lead—lifting &amp; rigging, civil &amp; haulage,
                plant &amp; equipment hire, or PPE &amp; safety supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Contact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">
                    Tell us about your project
                  </CardTitle>
                  <CardDescription>
                    Provide as much detail as you can so we can allocate the
                    right discipline lead and prepare the relevant compliance
                    pack.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name*</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email*</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@organisation.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organisation</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company or project name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Scope / Requirements*</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Share the project scope, timelines, site location, compliance requirements or tender references..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Submit Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <Card className="border shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">
                    Immediate Procurement Needs?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain ready-to-go content for Supply Nation, NSW ICC,
                    Yarpa, Buy NSW and corporate supplier portals. Let us know
                    which portal you’re using and we’ll package the correct
                    profile.
                  </p>
                  <div className="flex items-center gap-3 rounded-lg border border-dashed border-accent/60 bg-accent/5 px-4 py-3 text-sm text-muted-foreground">
                    <ClipboardList className="h-5 w-5 text-accent flex-shrink-0" />
                    Supplier portal profile, capability statement, insurances,
                    certifications, organisational chart.
                  </div>
                </CardContent>
              </Card>

              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{item.title}</h4>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                          {item.link !== '#' && (
                            <a
                              href={item.link}
                              className="mt-2 inline-flex text-sm font-medium text-accent hover:text-accent/80"
                            >
                              {item.link.startsWith('tel')
                                ? 'Call now'
                                : 'Send email'}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}

              <Card className="border shadow-sm bg-secondary">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-base font-semibold text-foreground">
                    Capability Statement &amp; Collateral
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Need our capability statement, logo files or brand assets? Let us
                    know in your message and we’ll share the latest suite from our
                    design team.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <FileCheck2 className="h-4 w-4 text-accent" />
                    Supply Nation registered, insurance certificates, ISO-aligned WHS.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <div className="text-center space-y-3">
            <MapPin className="h-12 w-12 mx-auto" />
            <p>Interactive map or office locations coming soon.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent to-amber-700">
        <div className="container mx-auto container-padding text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="heading-1 text-white">
              Need a rapid mobilisation or proposal response?
            </h2>
            <p className="text-lg text-white/85">
              Call 1800 MADEMU and we’ll triage your request to the right Mad
              Emu service lead—ensuring documentation, compliance and delivery
              expectations are in place from day one.
            </p>
            <a
              href="tel:1800623368"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-white transition hover:bg-white hover:text-accent"
            >
              <Phone className="h-5 w-5" />
              1800 MADEMU
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
