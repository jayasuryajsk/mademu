import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  HardHat,
  Truck,
  Building2,
  PackageCheck,
  ClipboardCheck,
  GaugeCircle,
  ShieldCheck,
  Layers,
} from 'lucide-react'

const serviceSections = [
  {
    id: 'lifting',
    icon: HardHat,
    title: 'Lifting & Rigging',
    subtitle:
      'Certified riggers, doggers and lift engineers delivering complex lifting programs across shutdowns and brownfield upgrades.',
    focus: [
      'Engineered lift studies, SWMS, NCR tracking and daily reporting.',
      'Shutdown and outage specialists with 24/7 response capability.',
      'Mobile crane coordination and critical lift supervision.',
    ],
    proofPoints: [
      'Advanced rigging and dogging tickets',
      'Confined space and EWP certified crews',
      'Cross-industry experience (resources, defence, energy, transport)',
    ],
  },
  {
    id: 'civil',
    icon: Truck,
    title: 'Civil & Haulage',
    subtitle:
      'Bulk earthworks, haulage logistics and site establishment managed under strict Chain of Responsibility requirements.',
    focus: [
      'Bulk haulage and material movement with NHVR-compliant fleet partners.',
      'Earthworks, drainage, remediation and reinstatement packages.',
      'Site setup, temporary works and reinstatement in metro and remote locations.',
    ],
    proofPoints: [
      'CoR & NHVR compliance embedded in delivery',
      'Tier 1 documentation standards',
      'Regional and remote mobilisation capability',
    ],
  },
  {
    id: 'plant',
    icon: Building2,
    title: 'Plant & Equipment Hire',
    subtitle:
      'Wet and dry hire fleet spanning earthmoving, access, vehicles, cranage and specialised tooling to keep projects on schedule.',
    focus: [
      'Project-matched fleet packages with accredited operators.',
      'Maintenance regimes aligned to OEM specs and ISO standards.',
      'Telematics, utilisation reporting and fuel management on request.',
    ],
    proofPoints: [
      'Rapid mobilisation through national partner network',
      'Verified prestart, logbook and inspection processes',
      'Integration with client asset management systems',
    ],
  },
  {
    id: 'safety',
    icon: PackageCheck,
    title: 'PPE, PPC & Safety Supply',
    subtitle:
      'Mad Emu branded PPE, uniforms, site safety equipment and consumables supplied to specification and delivered where you need them.',
    focus: [
      'High-visibility and task-specific PPE with Indigenous-branded options.',
      'Safety stations, spill response, gas detection and emergency kits.',
      'Consumable replenishment schedules aligned to shutdown and project cadence.',
    ],
    proofPoints: [
      'Supplier portal-ready catalogues',
      'Alignment to ESG and Indigenous participation targets',
      'Flexible call-off, consignment and VMI options',
    ],
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
                Integrated Service Streams
              </span>
              <h1 className="heading-hero">
                One Indigenous-Owned Partner. Four Complementary Capabilities.
              </h1>
              <p className="text-lg text-white/85">
                We focus on the service streams where we deliver consistent,
                audit-ready results—so you can activate Indigenous participation
                targets without compromising project risk or performance.
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
              KPIs with a partner who brings certified capability and cultural integrity.
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
