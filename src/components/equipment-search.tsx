'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'

export function EquipmentSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    
    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }
    
    const timer = setTimeout(() => {
      router.push(`/equipment?${params.toString()}`)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, searchParams, router])

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search equipment..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg bg-gray-100 py-3 pl-10 pr-4 text-sm placeholder:text-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  )
}