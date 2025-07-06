import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Truck, Shield, Clock, Star, Award, Users } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section - Select Plant Style */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden animate-fade-in">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2940&auto=format&fit=crop"
            alt="Equipment hire services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            {/* Content */}
            <div className="text-white max-w-2xl">
              <h1 className="heading-hero mb-4">
                Professional Equipment Hire Solutions
              </h1>
              
              <p className="text-lg mb-8 text-white/90">
                Quality equipment and reliable service for construction, events, and industrial projects across Australia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/equipment">
                  <Button size="lg">
                    View Equipment
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-accent backdrop-blur-sm">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Latest News Section - Select Plant Style */}
      <section className="section-padding bg-white animate-fade-in animate-delay-200">
        <div className="container mx-auto container-padding">
          <div className="mb-8">
            <h2 className="heading-2 text-foreground">
              Latest News
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <Card className="overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-300 group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2832&auto=format&fit=crop" 
                  alt="New excavator fleet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">New Excavator Fleet Arrives</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We&apos;ve expanded our excavator fleet with 10 new state-of-the-art machines, featuring the latest safety and efficiency technologies.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">Industry Update</span>
                  <span className="text-muted-foreground">2 days ago</span>
                </div>
              </CardContent>
            </Card>

            {/* News Card 2 */}
            <Card className="overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-400 group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop" 
                  alt="Safety training program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Free Safety Training This Month</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Join our complimentary equipment safety training sessions throughout February. Certified instructors, hands-on experience included.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">Company News</span>
                  <span className="text-muted-foreground">5 days ago</span>
                </div>
              </CardContent>
            </Card>

            {/* News Card 3 */}
            <Card className="overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-500 group">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2940&auto=format&fit=crop" 
                  alt="Brisbane expansion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Brisbane North Depot Opening</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our new Brisbane North location is now open, providing faster delivery times and expanded inventory for the northern suburbs.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">Expansion News</span>
                  <span className="text-muted-foreground">1 week ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-br from-muted to-secondary py-12 border-b animate-fade-in animate-delay-600">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 group">
              <Award className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Industry</div>
                <div className="font-semibold text-foreground">Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-2 group">
              <Users className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Professional</div>
                <div className="font-semibold text-foreground">Service</div>
              </div>
            </div>
            <div className="flex items-center gap-2 group">
              <Star className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Customer</div>
                <div className="font-semibold text-foreground">Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center gap-2 group">
              <Shield className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Fully Licensed</div>
                <div className="font-semibold text-foreground">& Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Select Plant Style */}
      <section className="section-padding bg-white animate-fade-in animate-delay-700">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-foreground">
              Why Choose Preferred
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-800 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg font-semibold">Quality Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Well-maintained, professional-grade equipment from trusted manufacturers
                </p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-800 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg font-semibold">Reliable Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  On-time delivery to your location with professional setup assistance
                </p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-800 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg font-semibold">Fully Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Comprehensive insurance coverage included with every rental
                </p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 animate-scale-in animate-delay-800 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg font-semibold">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Expert assistance available whenever you need it
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Categories - Select Plant Style */}
      <section className="section-padding bg-gradient-to-b from-white to-muted animate-fade-in animate-delay-900">
        <div className="container mx-auto container-padding">
          <div className="mb-8">
            <h2 className="heading-2 text-foreground text-center">
              Our Equipment
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/equipment?category=construction" className="group">
              <Card className="h-full overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in animate-delay-1000">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2832&auto=format&fit=crop"
                    alt="Construction Equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-medium mb-2">Construction Equipment</h3>
                    <p className="text-sm text-white/80">Excavators, loaders, compactors and more</p>
                  </div>
                </div>
              </Card>
            </Link>
            
            <Link href="/equipment?category=events" className="group">
              <Card className="h-full overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in animate-delay-1000">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop"
                    alt="Event Equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-medium mb-2">Event Equipment</h3>
                    <p className="text-sm text-white/80">Marquees, furniture, audio and lighting</p>
                  </div>
                </div>
              </Card>
            </Link>
            
            <Link href="/equipment?category=landscaping" className="group">
              <Card className="h-full overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in animate-delay-1000">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2940&auto=format&fit=crop"
                    alt="Landscaping Tools"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-medium mb-2">Landscaping Tools</h3>
                    <p className="text-sm text-white/80">Mowers, trimmers, chainsaws and garden tools</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section - Select Plant Style */}
      <section className="py-16 bg-gradient-to-br from-accent to-orange-600 animate-fade-in animate-delay-1100">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">
              Need Equipment for Your Project?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our team for competitive rates and reliable service.
            </p>
            <Link href="/contact">
              <Button size="xl" variant="secondary" className="bg-white text-accent hover:bg-gray-50 shadow-lg hover:shadow-xl">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}