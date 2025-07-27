'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function EquipmentFilters({ itemCount }: { itemCount: number }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    const params = new URLSearchParams(searchParams)
    
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    
    router.push(`/equipment?${params.toString()}`)
  }, [router, searchParams])
  
  const currentCategory = searchParams.get('category') || 'all'
  
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex flex-wrap gap-3">
          <select 
            className="px-4 py-2 bg-white border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent/50 transition-all"
            value={currentCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Categories</option>
            <option value="construction">Construction Equipment</option>
            <option value="power-tools">Power Tools</option>
            <option value="vehicles">Utes & Vehicles</option>
            <option value="landscaping">Garden & Landscaping</option>
          </select>
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          {itemCount} items found
        </div>
      </div>
    </div>
  )
}