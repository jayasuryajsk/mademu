import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Truck, Wrench, GaugeCircle } from 'lucide-react'

const fleetCategories = [
  {
    title: 'Earthmoving & Civil Plant',
    summary:
      'Excavators, dozers, graders, loaders and compactors with wet and dry hire options, supported by accredited operators and maintenance programs.',
    inclusions: [
      'Trimble-enabled excavation',
      'Bulk haulage & tippers',
      'Site rehabilitation & remediation',
    ],
  },
  {
    title: 'Lifting, Access & Rigging Assets',
    summary:
      'Cranes, telehandlers, EWPs, rigging gear and engineered lifting systems aligned to our rigging service stream.',
    inclusions: [
      'Lift studies and configuration support',
      'Certified rigging equipment with inspection registers',
      'Shutdown tooling and heavy lift accessories',
    ],
  },
  {
    title: 'Vehicles & Logistics',
    summary:
      'Project-ready vehicles, 4x4s, tilt trays and logistics support with NHVR compliance and Chain of Responsibility controls.',
    inclusions: [
      'Linehaul, last-mile and remote mobilisation',
      'Fatigue management & telematics reporting',
      'Experienced drivers with VOC verification',
    ],
  },
  {
    title: 'Specialist Tooling & Site Infrastructure',
    summary:
      'Generators, lighting towers, dewatering systems, temporary facilities, tooling and safety infrastructure tailored to complex projects.',
    inclusions: [
      'Power & distribution planning',
      'Site safety systems (barriers, signage, monitoring)',
      'Consumables, PPE and emergency response kits',
    ],
  },
]

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <Truck className="h-4 w-4" />
              Plant &amp; Equipment Hire
            </span>
            <h1 className="heading-1 text-foreground">
              Project-Ready Fleet with Indigenous Ownership at the Core
            </h1>
            <p className="text-lead">
              Mad Emu supplies a disciplined fleet program across civil plant, lifting
              equipment, logistics and specialist tooling. Every mobilisation is backed
              by Tier 1 maintenance regimes, compliance documentation and Indigenous-led
              delivery oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@mad-emu.com.au?subject=Plant%20%26%20Equipment%20Hire%20Request"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-white transition hover:bg-accent/90"
              >
                Request Fleet List
              </a>
              <Link href="/services#plant">
                <Button variant="outline" className="px-6 py-3">
                  View Service Detail
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fleetCategories.map((category) => (
              <Card
                key={category.title}
                className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {category.summary}
                  </p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {category.inclusions.map((item) => (
                    <p key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1" />
                      <span>{item}</span>
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border shadow-sm">
            <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-accent" />
                <CardTitle className="text-lg">
                  Audit-Ready Maintenance &amp; Compliance
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p className="font-medium text-foreground">Maintenance Controls</p>
                <p>OEM-aligned servicing, inspection registers, digital prestarts and defect tracking.</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Compliance Pack</p>
                <p>Insurances, plant risk assessments, VOCs, load charts, SWMS and CoR documentation ready for mobilisation.</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Reporting</p>
                <p>Utilisation, fuel, emissions and Indigenous participation reporting aligned to client dashboards.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-accent to-amber-700">
        <div className="container mx-auto container-padding text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="heading-1 text-white">
              Need mobilisation within tight procurement windows?
            </h2>
            <p className="text-lg text-white/85">
              Call 1800 MADEMU or send us your scope. We’ll prepare a tailored fleet
              package, delivery schedule and compliance bundle within one business day.
            </p>
            <a
              href="tel:1800623368"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-white transition hover:bg-white hover:text-accent"
            >
              <GaugeCircle className="h-5 w-5" />
              Speak with Plant Hire Lead
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
