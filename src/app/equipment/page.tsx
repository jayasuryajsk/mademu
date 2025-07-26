import { createClient } from '@/lib/supabase/server'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { demoEquipment } from '@/lib/demo-data'
import { Package } from 'lucide-react'
import { EquipmentFilters } from '@/components/equipment-filters'
import { EquipmentSearch } from '@/components/equipment-search'

export default async function EquipmentPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string; sort?: string; search?: string }>
}) {
  const params = await searchParams
  let equipment = demoEquipment
  let error = null
  
  // Filter by category if specified
  if (params.category) {
    const categoryMap: { [key: string]: string } = {
      'construction': 'Construction Equipment',
      'power-tools': 'Power Tools',
      'vehicles': 'Utes & Vehicles',
      'landscaping': 'Garden & Landscaping'
    }
    const categoryName = categoryMap[params.category]
    if (categoryName) {
      equipment = equipment.filter(item => item.categories?.name === categoryName)
    }
  }
  
  // Filter by search term if specified
  if (params.search) {
    const searchTerm = params.search.toLowerCase()
    equipment = equipment.filter(item => 
      item.name.toLowerCase().includes(searchTerm) ||
      item.description?.toLowerCase().includes(searchTerm)
    )
  }
  
  // Sort equipment
  if (params.sort) {
    switch (params.sort) {
      case 'name':
        equipment = [...equipment].sort((a, b) => a.name.localeCompare(b.name))
        break
      // Add more sort options as needed
    }
  }

  const supabase = await createClient()
  
  // Only try to fetch from Supabase if client exists (not in demo mode)
  if (supabase) {
    let query = supabase
      .from('equipment')
      .select(`
        *,
        categories (
          name
        )
      `)
      .eq('status', 'active')
    
    // Apply category filter for Supabase
    if (params.category) {
      // This would need to be adjusted based on your actual database schema
      // For now, we'll use the demo data filtering above
    }
    
    // Apply sort
    if (params.sort === 'name') {
      query = query.order('name', { ascending: true })
    } else {
      query = query.order('created_at', { ascending: false })
    }
    
    const result = await query
    
    if (!result.error && result.data) {
      equipment = result.data
      
      // Apply client-side filtering for categories if using Supabase
      if (params.category) {
        const categoryMap: { [key: string]: string } = {
          'construction': 'Construction Equipment',
          'power-tools': 'Power Tools',
          'vehicles': 'Utes & Vehicles'
        }
        const categoryName = categoryMap[params.category]
        if (categoryName) {
          equipment = equipment.filter(item => item.categories?.name === categoryName)
        }
      }
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
            <EquipmentSearch />
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Bar */}
        <EquipmentFilters itemCount={equipment.length} />
        
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