import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  HardHat,
  Building2,
  ShieldCheck,
  ClipboardList,
  FileCheck2,
  PhoneCall,
  Truck,
  PackageCheck,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mad Emu | Indigenous-Owned Rigging, Civil & Plant Solutions',
  description:
    'Mad Emu delivers integrated lifting & rigging, civil & haulage, plant & equipment hire, and safety supply services with Indigenous ownership, cultural integrity, and audit-ready compliance.',
  openGraph: {
    title: 'Mad Emu | Indigenous-Owned Rigging, Civil & Plant Solutions',
    description:
      'Trusted capability partner delivering lifting & rigging, civil & haulage, plant hire, and safety supply backed by Indigenous ownership and verified compliance.',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop"
            alt="Mad Emu crew coordinating civil and lifting operations on site"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-3xl space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Indigenous Owned & Operated
              </span>
              <h1 className="heading-hero">
                Integrated Rigging, Civil &amp; Plant Capability. Grounded in
                Culture. Delivery-ready.
              </h1>
              <p className="text-lg md:text-xl text-white/85">
                Mad Emu partners with asset owners, Tier 1 contractors, and
                government agencies to deliver lifting &amp; rigging, civil &amp;
                haulage, plant &amp; equipment hire, and safety supply services
                with verified compliance and cultural integrity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services#lifting">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-accent"
                  >
                    Request a Capability Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Focused Services. Proven Delivery.
            </h2>
            <p className="text-lead">
              Four complementary service streams, delivered with disciplined
              project controls, audited safety processes, and a supply chain that
              scales with your program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <HardHat className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Lifting &amp; Rigging</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Certified crews, engineered lifts, shutdown support.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Dogging, rigging, crane coordination, lift planning.</p>
                <p>• Confined-space and shutdown specialists.</p>
                <p>• Audit-ready documentation with SWMS, lift studies &amp; NCR management.</p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">Civil &amp; Haulage</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Bulk haulage, earthworks, site remediation, civil packages.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Project-ready plant with accredited operators.</p>
                <p>• Road, rail, utilities and resources experience.</p>
                <p>• Chain of responsibility &amp; NHVR compliance embedded.</p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    Plant &amp; Equipment Hire
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Wet &amp; dry hire fleet covering plant, access, vehicles and specialist tooling.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Tier 1 compliant maintenance regimes.</p>
                <p>• Telematics and utilisation reporting available on request.</p>
                <p>• Rapid mobilisation through national partner network.</p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <PackageCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    PPE, PPC &amp; Safety Supply
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Branded PPE, site safety equipment, and consumables delivered on-call.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Mad Emu branded uniforms and site signage.</p>
                <p>• Hazard-specific kits, spill control, and emergency response gear.</p>
                <p>• Procurement aligned to ESG and Indigenous participation targets.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Mad Emu */}
      <section className="section-padding bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Why Projects Choose Mad Emu
            </h2>
            <p className="text-lead">
              We combine Indigenous values with rigorous project governance to
              deliver accountable, audit-ready outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">
                  Safety &amp; Compliance Embedded
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  ISO-aligned systems, SWMS, lift studies, and NCR tracking built
                  into every service line.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">
                  Procurement &amp; Reporting Ready
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Supply Nation registered with reusable supplier profile content
                  for NSW ICC, Yarpa, Buy NSW and other Indigenous portals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                  <FileCheck2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">
                  Transparent Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Clear reporting pack, ESG alignment, and cultural engagement
                  commitments captured in every engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Snapshot */}
      <section
        id="capability"
        className="section-padding bg-white border-t border-border/60"
      >
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-none shadow-sm bg-secondary">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-accent">
                  100%
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Indigenous-owned with leadership embedded in every project.
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-sm bg-secondary">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-accent">
                  4
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Complementary service streams delivered with a single accountable
                partner.
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-sm bg-secondary">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-accent">
                  Nat&apos;l
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Supply chain reach across metro, regional and remote projects via
                vetted partners.
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-sm bg-secondary">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-accent flex items-center justify-center gap-2">
                  <PhoneCall className="h-6 w-6" />
                  1800 MADEMU
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Direct access to service leads with overflow to our dedicated
                response team.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-accent to-amber-700">
        <div className="container mx-auto container-padding text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="heading-1 text-white">
              Ready to mobilise Indigenous capability on your next project?
            </h2>
            <p className="text-lg text-white/85">
              Let’s align your procurement, compliance and delivery targets with a
              single Indigenous-owned partner across rigging, civil, plant and
              safety supply.
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
                <PhoneCall className="h-5 w-5" />
                1800 MADEMU
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
