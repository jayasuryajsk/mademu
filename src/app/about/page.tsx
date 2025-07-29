import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Award, Users, Shield, Truck } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain our equipment to the highest standards, ensuring reliability and safety on every job.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority. We provide personalized service and expert advice for every project.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Fully licensed and insured, we operate with complete transparency and accountability.'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'On-time delivery, flexible scheduling, and dedicated support ensure your project stays on track.'
    }
  ]

  const team = [
    {
      name: 'Team Member 1',
      role: 'Position 1',
      image: null
    },
    {
      name: 'Team Member 2',
      role: 'Position 2',
      image: null
    },
    {
      name: 'Team Member 3',
      role: 'Position 3',
      image: null
    },
    {
      name: 'Team Member 4',
      role: 'Position 4',
      image: null
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden animate-fade-in">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2787&auto=format&fit=crop"
            alt="About 18fifty3 Hire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-2xl">
              <h1 className="heading-hero mb-4">
                About 18fifty3
              </h1>
              <p className="text-lg text-white/90">
                Your trusted partner in professional equipment hire solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white animate-fade-in animate-delay-200">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  18fifty3 Hire is launching with a clear vision: to revolutionize the equipment rental industry through exceptional service, cutting-edge technology, and unwavering commitment to our customers&apos; success.
                </p>
                <p>
                  We&apos;re bringing together industry-leading equipment, experienced professionals, and innovative solutions to create a rental experience that sets new standards. Our modern fleet features the latest models from trusted manufacturers, all maintained to the highest safety and performance standards.
                </p>
                <p>
                  As we embark on this journey, we&apos;re focused on building lasting partnerships with our customers. Whether you&apos;re managing a construction site, planning an event, or tackling a landscaping project, we&apos;re here to provide the tools and support you need to succeed.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1664906225771-ad3c3c585c4a?q=80&w=2940&auto=format&fit=crop"
                alt="Our facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-muted to-secondary animate-fade-in animate-delay-300">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional service every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 text-center animate-scale-in animate-delay-400 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white animate-fade-in animate-delay-500">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-scale-in animate-delay-600 group">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gray-200 flex items-center justify-center">
                  <Users className="h-20 w-20 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-accent to-orange-600 animate-fade-in animate-delay-700">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of satisfied customers who trust 18fifty3 Hire for their equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 font-medium">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/equipment">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  Browse Equipment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}