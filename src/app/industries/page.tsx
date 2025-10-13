import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, HardHat, Trees, Warehouse, Home } from 'lucide-react'

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'Complete equipment solutions for construction projects of all sizes. From excavators to concrete mixers, we have the tools you need.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop',
      equipment: ['Excavators', 'Loaders', 'Compactors', 'Concrete Equipment', 'Scaffolding', 'Power Tools']
    },
    {
      icon: HardHat,
      title: 'Infrastructure',
      description: 'Heavy machinery and specialized equipment for infrastructure development, road construction, and civil engineering projects.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2938&auto=format&fit=crop',
      equipment: ['Road Rollers', 'Pavers', 'Graders', 'Dump Trucks', 'Traffic Management', 'Survey Equipment']
    },
    {
      icon: Trees,
      title: 'Landscaping',
      description: 'Professional landscaping and gardening equipment for maintaining outdoor spaces and creating beautiful environments.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2832&auto=format&fit=crop',
      equipment: ['Mowers', 'Trimmers', 'Chainsaws', 'Wood Chippers', 'Tillers', 'Pressure Washers']
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Logistics',
      description: 'Material handling equipment to optimize your warehouse operations and improve logistics efficiency.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop',
      equipment: ['Forklifts', 'Pallet Jacks', 'Scissor Lifts', 'Conveyors', 'Racking Systems', 'Loading Ramps']
    },
    {
      icon: Home,
      title: 'Residential & DIY',
      description: 'Quality tools and equipment for home improvement projects, renovations, and DIY enthusiasts.',
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2940&auto=format&fit=crop',
      equipment: ['Power Tools', 'Ladders', 'Paint Sprayers', 'Floor Sanders', 'Tile Cutters', 'Generators']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2876&auto=format&fit=crop"
            alt="Industries We Serve"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex items-center h-full">
            <div className="text-white max-w-2xl">
              <h1 className="heading-hero mb-4">
                Industries We Serve
              </h1>
              <p className="text-lg text-white/90">
                Specialized equipment solutions for every industry. We understand your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Tailored Solutions for Every Sector
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              With decades of experience, we provide industry-specific equipment and expert advice to help your projects succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-6 w-6" />
                        <h3 className="text-xl font-medium">{industry.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Popular Equipment
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {industry.equipment.slice(0, 4).map((item, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/equipment?industry=${industry.title.toLowerCase()}`}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                        View Equipment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-medium text-foreground mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Equipment Available</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-foreground mb-2">4</p>
              <p className="text-sm text-muted-foreground">Equipment Categories</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-foreground mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-foreground mb-2">7</p>
              <p className="text-sm text-muted-foreground">Days a Week Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">
              Need Industry-Specific Advice?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our experts understand your industry&apos;s unique requirements. Let us help you find the right equipment.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 font-medium">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
