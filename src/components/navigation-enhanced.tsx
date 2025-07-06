'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { HardHat, ChevronDown, Menu, X, Search } from 'lucide-react'

const categories = [
  {
    title: 'Construction',
    items: [
      { name: 'Excavators', href: '/equipment?category=excavators' },
      { name: 'Loaders', href: '/equipment?category=loaders' },
      { name: 'Compactors', href: '/equipment?category=compactors' },
      { name: 'Concrete Equipment', href: '/equipment?category=concrete' },
    ]
  },
  {
    title: 'Power Tools',
    items: [
      { name: 'Drills & Hammers', href: '/equipment?category=drills' },
      { name: 'Saws', href: '/equipment?category=saws' },
      { name: 'Generators', href: '/equipment?category=generators' },
      { name: 'Air Compressors', href: '/equipment?category=compressors' },
    ]
  },
  {
    title: 'Events & Party',
    items: [
      { name: 'Tents & Canopies', href: '/equipment?category=tents' },
      { name: 'Tables & Chairs', href: '/equipment?category=furniture' },
      { name: 'Audio & Lighting', href: '/equipment?category=av' },
      { name: 'Catering Equipment', href: '/equipment?category=catering' },
    ]
  },
]

export function NavigationEnhanced() {
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Main Navigation */}
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                  <HardHat className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-normal text-foreground">Preferred</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsEquipmentOpen(true)}
                    onMouseLeave={() => setIsEquipmentOpen(false)}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-all duration-200 py-6"
                  >
                    Equipment
                    <ChevronDown className={`h-4 w-4 transition-transform ${isEquipmentOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isEquipmentOpen && (
                    <div
                      onMouseEnter={() => setIsEquipmentOpen(true)}
                      onMouseLeave={() => setIsEquipmentOpen(false)}
                      className="absolute top-full left-0 w-screen max-w-3xl bg-white/95 backdrop-blur-sm border shadow-xl rounded-b-lg animate-fade-in"
                    >
                      <div className="grid grid-cols-3 gap-8 p-8">
                        {categories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-semibold text-foreground mb-3">{category.title}</h3>
                            <ul className="space-y-2">
                              {category.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-foreground hover:bg-muted px-2 py-1 rounded block transition-all duration-200"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-accent/5 to-orange-50/50 px-8 py-4 border-t">
                        <Link href="/equipment" className="text-accent font-medium hover:text-accent/80 transition-colors">
                          View All Equipment →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link href="/services" className="text-muted-foreground hover:text-foreground font-medium transition-all duration-200">
                  Services
                </Link>
                <Link href="/industries" className="text-muted-foreground hover:text-foreground font-medium transition-all duration-200">
                  Industries
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground font-medium transition-all duration-200">
                  About
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground font-medium transition-all duration-200">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-all duration-200 lg:block hidden">
                <Search className="h-5 w-5 text-muted-foreground" />
              </button>
              
              <div className="hidden lg:flex items-center gap-3">
                <Link href="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link href="/register">
                  <Button size="default">Get Started</Button>
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                <Link href="/equipment" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Equipment
                </Link>
                <Link href="/services" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/industries" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Industries
                </Link>
                <Link href="/about" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                
                <div className="border-t pt-4 space-y-3">
                  <Link href="/login" className="block">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link href="/register" className="block">
                    <Button className="w-full bg-accent text-white hover:bg-accent/90">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}