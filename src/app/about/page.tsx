import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Award, Users, ShieldCheck, Layers, Globe, FileCheck2 } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Cultural Integrity',
    description:
      'Our decisions reflect who we are as an Indigenous-owned business—respecting Country, Community and the obligations that come with them.',
  },
  {
    icon: FileCheck2,
    title: 'Accountability',
    description:
      'We pair cultural values with Tier 1 project governance so clients receive transparent, audit-ready outcomes every time.',
  },
  {
    icon: Layers,
    title: 'Integrated Delivery',
    description:
      'Lifting, civil, plant and safety services operate as one capability stack, removing silos and duplication across programs.',
  },
  {
    icon: Award,
    title: 'Excellence in Execution',
    description:
      'Disciplined planning, competency pathways and supplier partnerships ensure quality and safety remain non-negotiable.',
  },
]

const pillars = [
  {
    title: 'Indigenous Leadership',
    description:
      '100% Indigenous ownership with hands-on leaders involved in every engagement—from mobilisation through to close-out.',
  },
  {
    title: 'Procurement Ready',
    description:
      'Reusable content for Supply Nation, NSW ICC, Yarpa, Buy NSW and national supplier portals keeps approvals moving quickly.',
  },
  {
    title: 'Scalable Network',
    description:
      'Civil, rigging, plant and safety delivery partners across metro, regional and remote locations—including aviation, RTO and labour hire alliances.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579791351081-d0f2df7d0cc5?q=80&w=2940&auto=format&fit=crop"
            alt="Mad Emu site leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-3xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Our Story
              </span>
              <h1 className="heading-hero">Cultural Strength. Proven Capability.</h1>
              <p className="text-lg text-white/80">
                Mad Emu exists to bring Indigenous-led strength to complex projects—integrating lifting &amp; rigging,
                civil &amp; haulage, plant &amp; equipment hire, and safety supply under one accountable partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground">
              <h2 className="heading-2 text-foreground">Where Mad Emu Comes From</h2>
              <p>
                Our name speaks to resilience and momentum. The emu only moves forward. The word “Mad” represents our
                determination to rewrite expectations of Indigenous businesses—bringing sharp commercial acumen alongside
                deep cultural accountability.
              </p>
              <p>
                We saw a gap: clients were investing heavily to meet Indigenous procurement targets, yet struggled to find
                partners with both cultural grounding and disciplined delivery. Mad Emu fills that gap with a core team that
                has delivered rigging, civil and plant programs for government, resources and infrastructure customers across
                Australia.
              </p>
              <p>
                Our approach is anchored in a consistent narrative so every supplier portal, tender pack and client touchpoint
                communicates the same message—Indigenous values, proven capability and measurable outcomes.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop"
                  alt="Mad Emu leadership team"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <Card className="border shadow-sm">
                <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Positioning Statement</strong>
                  </p>
                  <p>
                    As a proudly Indigenous-owned company, we deliver end-to-end solutions across lifting &amp; rigging,
                    civil &amp; haulage, plant &amp; equipment hire, and the provision of PPE, PPC &amp; site safety equipment.
                    Grounded in cultural integrity and committed to the highest standards of safety and compliance, we partner
                    with clients to deliver reliable, audit-ready outcomes on every project. Our strength lies in combining
                    Indigenous values with industry expertise to build lasting impact for communities and businesses alike.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-secondary border-y border-border/60">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              What Sets Our Delivery Apart
            </h2>
            <p className="text-lead">
              We intentionally focus on three pillars that give clients certainty while building Indigenous participation
              that lasts beyond a single contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="border-0 shadow-sm bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">Values We Stand On</h2>
            <p className="text-lead max-w-2xl mx-auto">
              These values inform how we hire, how we deliver, and how we show up for clients and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Snapshot */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="heading-2 text-foreground">Leadership &amp; People</h2>
              <p className="text-muted-foreground">
                Mad Emu is helmed by Indigenous directors and advisors who have delivered major infrastructure, resources and
                aviation programs. Our delivery leads work directly with client teams, while our extended network activates
                specialist capability—whether that’s advanced rigging, accredited trainers or aviation support.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Indigenous governance structure with decision-making authority retained by owners.</li>
                <li>• Workforce development pathways with mentoring, competency mapping and cross-skilling.</li>
                <li>• Access to a broader network: aviation services, RTO, labour hire and specialist trades.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-3 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Hands-on Directors</h3>
                  <p className="text-sm text-muted-foreground">
                    Leadership embedded in project reviews, client governance forums and community engagement.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-3 text-center">
                  <Globe className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">National Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Metro, regional and remote delivery footprint via vetted Indigenous and non-Indigenous partners.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-3 text-center">
                  <Award className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Best-Practice Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    ISO-aligned WHS, quality and environmental systems with digital reporting and audit trails.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-3 text-center">
                  <ShieldCheck className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Cultural Assurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Cultural onboarding, respect protocols and community engagement plans embedded in project start-up.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-accent to-amber-700">
        <div className="container mx-auto container-padding text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="heading-1 text-white">Partner with Mad Emu</h2>
            <p className="text-lg text-white/85">
              If you need Indigenous capability that stands up to Tier 1 requirements, let&apos;s co-design a pathway that
              delivers on compliance, ESG and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-gray-100 px-8 py-3 font-medium"
                >
                  Start the Conversation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3"
                >
                  View Our Capability
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
