import { createClient } from '@/lib/supabase/server'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { demoEquipment } from '@/lib/demo-data'
import { Package, Search } from 'lucide-react'

export default async function EquipmentPage() {
  let equipment = demoEquipment
  let error = null

  const supabase = await createClient()
  
  // Only try to fetch from Supabase if client exists (not in demo mode)
  if (supabase) {
    const result = await supabase
      .from('equipment')
      .select(`
        *,
        categories (
          name
        )
      `)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
    
    if (!result.error && result.data) {
      equipment = result.data
    }
    error = result.error
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Select Plant Style */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="heading-1 text-foreground mb-4">Equipment Hire</h1>
              <p className="text-lead">Browse our extensive range of quality equipment for your projects</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="search"
                placeholder="Search equipment..."
                className="w-full pl-12 pr-32 py-3 text-base bg-white border border-input rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all"
              />
              <Button size="default" className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white">
                Search
              </Button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Bar */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex flex-wrap gap-3">
              <select className="px-4 py-2 bg-white border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/50 transition-all">
                <option>All Categories</option>
                <option>Construction Equipment</option>
                <option>Power Tools</option>
                <option>Event & Party</option>
                <option>Landscaping</option>
                <option>Material Handling</option>
              </select>
              <select className="px-4 py-2 bg-white border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/50 transition-all">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A-Z</option>
              </select>
            </div>
            <div className="text-sm text-muted-foreground flex items-center">
              {equipment.length} items found
            </div>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6 border border-red-200">
            Error loading equipment: {error.message}
          </div>
        )}
        
        {!equipment || equipment.length === 0 ? (
          <div className="text-center py-20 bg-muted rounded">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground text-lg mb-2">No equipment available</p>
            <p className="text-muted-foreground">Please check back later</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipment.map((item) => (
              <Card key={item.id} className="group border-0 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  {item.images && item.images[0] ? (
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Package className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    {item.available_quantity > 0 ? (
                      <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">
                        Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                      {item.categories?.name || 'Equipment'}
                    </p>
                    <h3 className="text-lg font-medium text-foreground line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Daily, weekly & monthly rates available
                      </p>
                    </div>
                  </div>
                  
                  
                  <Link href={`/equipment/${item.id}`}>
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-white" 
                      disabled={item.available_quantity === 0}
                    >
                      {item.available_quantity > 0 ? 'View Details' : 'Unavailable'}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}