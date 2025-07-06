import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Truck, Wrench, Clock, Shield, CheckCircle2 } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: 'Equipment Delivery & Pickup',
      description: 'Professional delivery and pickup service to your job site. Our experienced drivers ensure safe transport and can assist with basic setup.',
      features: [
        'Same-day delivery available',
        'Flexible scheduling',
        'Site assessment included',
        'Basic setup assistance'
      ]
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Keep your equipment running smoothly with our comprehensive maintenance packages and 24/7 technical support.',
      features: [
        'Regular maintenance checks',
        '24/7 emergency support',
        'On-site repairs',
        'Replacement equipment'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance & Protection',
      description: 'Comprehensive insurance coverage included with every rental. Additional protection plans available for complete peace of mind.',
      features: [
        'Basic damage waiver included',
        'Theft protection',
        'Extended coverage options',
        'Simple claims process'
      ]
    },
    {
      icon: Clock,
      title: 'Long-Term Rentals',
      description: 'Special rates and dedicated support for extended projects. Custom packages available for contracts over 30 days.',
      features: [
        'Discounted monthly rates',
        'Dedicated account manager',
        'Priority equipment access',
        'Flexible contract terms'
      ]
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-2xl">
              <h1 className="heading-hero mb-4">
                Our Services
              </h1>
              <p className="text-lg text-white/90">
                Comprehensive equipment rental solutions tailored to your project needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-medium">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Simple, straightforward rental process designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Browse Equipment',
                description: 'Search our extensive catalog online or contact us for recommendations'
              },
              {
                step: '2',
                title: 'Request Quote',
                description: 'Get competitive pricing for daily, weekly, or monthly rentals'
              },
              {
                step: '3',
                title: 'Schedule Delivery',
                description: 'Choose your preferred delivery date and time slot'
              },
              {
                step: '4',
                title: 'Return or Extend',
                description: 'Easy returns or extend your rental as needed'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-lg font-medium mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our team to discuss your equipment needs and get a competitive quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 font-medium">
                  Get a Quote
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