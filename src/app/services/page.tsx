import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Leaf,
  HardHat,
  ClipboardCheck,
  GaugeCircle,
  ShieldCheck,
  Layers,
} from 'lucide-react'

const serviceSections = [
  {
    id: 'renewables',
    icon: Leaf,
    title: 'Renewables',
    subtitle:
      'Practical delivery support for renewable energy programs, from early works through mobilisation, civil packages and site close-out.',
    focus: [
      'Solar, battery, enabling works and balance-of-plant support.',
      'Access, haulage, plant, lifting and site safety coordination.',
      'Indigenous participation reporting and supplier portal documentation.',
    ],
    proofPoints: [
      'Regional and remote mobilisation capability',
      'Compliance packs for asset owners and Tier 1 contractors',
      'Partner network across civil, logistics and specialist trades',
    ],
    tabs: ['Solar & BESS', 'Civil Enabling Works', 'Site Logistics', 'Safety Supply'],
  },
  {
    id: 'infrastructure',
    icon: HardHat,
    title: 'Heavy Infrastructure',
    subtitle:
      'Heavy civil, resources, transport and utilities support delivered with accountable systems and a scalable supply chain.',
    focus: [
      'Bulk earthworks, haulage, remediation and site establishment.',
      'Lifting, rigging, plant hire and specialist equipment coordination.',
      'Chain of Responsibility, SWMS, VOC and maintenance documentation.',
    ],
    proofPoints: [
      'CoR and NHVR compliance embedded in delivery',
      'Tier 1 documentation standards',
      'Metro, regional and remote project capability',
    ],
    tabs: ['Civil & Haulage', 'Lifting & Rigging', 'Plant Hire', 'Site Establishment'],
  },
  {
    id: 'project-management',
    icon: ClipboardCheck,
    title: 'Project Management',
    subtitle:
      'Project controls, procurement readiness and delivery governance that keep complex scopes moving from tender to close-out.',
    focus: [
      'Project plans, mobilisation schedules, risk registers and reporting cadence.',
      'Supplier portal, capability statement, insurance and compliance pack alignment.',
      'Stakeholder coordination across clients, subcontractors and Indigenous partners.',
    ],
    proofPoints: [
      'Audit-ready governance and document control',
      'Indigenous engagement and participation dashboards',
      'Client-ready reporting for procurement and ESG teams',
    ],
    tabs: ['Tender Support', 'Mobilisation', 'Project Controls', 'Close-out Reporting'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop"
            alt="Mad Emu site teams delivering integrated services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Capability Statement Services
              </span>
              <h1 className="heading-hero">
                Renewables, Heavy Infrastructure and Project Management.
              </h1>
              <p className="text-lg text-white/85">
                We keep the foundations of the Mad Emu site, but align the
                service structure to the capability statement: three primary
                banners with practical service tabs beneath each one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding space-y-16">
          {serviceSections.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 !== 0

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`order-1 ${
                    isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative h-72 w-full rounded-2xl bg-gradient-to-br from-accent/15 via-muted to-white shadow-md flex items-center justify-center">
                    <Icon className="h-16 w-16 text-accent/70" aria-hidden="true" />
                  </div>
                </div>

                <div className={`space-y-6 order-2 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-3 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                    <Icon className="h-5 w-5" />
                    {service.title}
                  </div>
                  <h2 className="heading-2 text-foreground">{service.title}</h2>
                  <p className="text-lead">{service.subtitle}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.tabs.map((tab) => (
                      <span
                        key={tab}
                        className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base uppercase tracking-wide text-muted-foreground">
                        Delivery Focus
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      {service.focus.map((item) => (
                        <p key={item}>• {item}</p>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base uppercase tracking-wide text-muted-foreground">
                        Credentials &amp; Differentiators
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      {service.proofPoints.map((point) => (
                        <p key={point}>• {point}</p>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Delivery Framework */}
      <section className="section-padding bg-secondary border-t border-border/60">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Delivery Framework That De-Risks Procurement
            </h2>
            <p className="text-lead">
              Our operating model keeps safety, compliance and reporting at the
              forefront—so your project, ESG commitments and Indigenous KPIs stay
              on track.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Procurement Ready</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Supply Nation profile, NSW ICC, Yarpa, Buy NSW-ready content.</p>
                <p>Capability statements tailored to major contractor templates.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <GaugeCircle className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Measured Performance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  KPIs covering safety, quality, cost, utilisation, Indigenous participation.
                </p>
                <p>Dashboards and close-out reporting aligned to client requirements.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Safety First</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>ISO-aligned WHS systems, SWMS, toolbox talks and NCR management.</p>
                <p>Prequalification support for Tier 1 and government frameworks.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Layers className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Scalable Resourcing</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Partner network for aviation, RTO, labour hire and specialist trades.</p>
                <p>Mobilise additional capability once trust and performance are proven.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent to-amber-700">
        <div className="container mx-auto container-padding text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="heading-1 text-white">
              Let&apos;s scope your next project together.
            </h2>
            <p className="text-lg text-white/85">
              Book a discovery session to align deliverables, reporting and Indigenous
              KPIs across renewables, heavy infrastructure and project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-gray-100 px-8 py-3 font-medium"
                >
                  Book a Discovery Call
                </Button>
              </Link>
              <a
                href="tel:1800623368"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-white transition hover:bg-white hover:text-accent"
              >
                1800 MADEMU
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
