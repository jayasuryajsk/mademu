import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, X } from 'lucide-react'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Daily Rental',
      description: 'Perfect for short-term projects and one-off jobs',
      features: [
        'Competitive daily rates',
        'Same-day delivery available',
        'Basic insurance included',
        'Business hours support',
        'Online booking'
      ],
      notIncluded: [
        'Volume discounts',
        'Priority support',
        'Extended warranty'
      ],
      cta: 'Get Daily Quote'
    },
    {
      name: 'Weekly Rental',
      description: 'Ideal for ongoing projects and regular use',
      popular: true,
      features: [
        '15% discount on daily rate',
        'Flexible pickup/delivery',
        'Comprehensive insurance',
        'Extended support hours',
        'Equipment swaps allowed',
        'Volume discounts available'
      ],
      notIncluded: [
        'Dedicated account manager',
        'Custom billing terms'
      ],
      cta: 'Get Weekly Quote'
    },
    {
      name: 'Monthly Rental',
      description: 'Best value for long-term projects',
      features: [
        '30% discount on daily rate',
        'Priority delivery service',
        'Full insurance coverage',
        '24/7 priority support',
        'Unlimited equipment swaps',
        'Dedicated account manager',
        'Custom billing terms',
        'Maintenance included'
      ],
      notIncluded: [],
      cta: 'Get Monthly Quote'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lead">
              Flexible rental options to suit your project timeline and budget. All prices include delivery, setup, and basic insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-sm relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-medium mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 opacity-60">
                        <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-accent hover:bg-accent/90 text-white' 
                          : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Enhance your rental experience with our value-added services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Operator Services',
                description: 'Qualified operators for complex equipment',
                price: 'From $85/hour'
              },
              {
                title: 'Extended Warranty',
                description: 'Additional protection for peace of mind',
                price: '10% of rental'
              },
              {
                title: 'Emergency Support',
                description: '24/7 on-site assistance and repairs',
                price: 'Included in monthly'
              },
              {
                title: 'Training Courses',
                description: 'Equipment operation and safety training',
                price: 'From $350/person'
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <p className="text-accent font-medium">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">
              Need a Custom Quote?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us for special rates on large orders, long-term contracts, or unique requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 font-medium">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}