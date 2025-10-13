'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X, PhoneCall } from 'lucide-react'

const servicesNav = [
  { name: 'Lifting & Rigging', href: '/services#lifting' },
  { name: 'Civil & Haulage', href: '/services#civil' },
  { name: 'Plant & Equipment Hire', href: '/services#plant' },
  { name: 'PPE, PPC & Safety', href: '/services#safety' },
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
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo-transparent.png"
                  alt="Mad Emu"
                  width={150}
                  height={110}
                  priority
                  className="h-12 w-auto object-contain"
                />
                <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground hidden lg:inline">
                  Trusted Capability · Cultural Integrity
                </span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6">
                <div className="relative">
                  <button
                    onMouseEnter={() => setIsEquipmentOpen(true)}
                    onMouseLeave={() => setIsEquipmentOpen(false)}
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-all duration-200 py-6"
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform ${isEquipmentOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isEquipmentOpen && (
                    <div
                      onMouseEnter={() => setIsEquipmentOpen(true)}
                      onMouseLeave={() => setIsEquipmentOpen(false)}
                      className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-sm border shadow-xl rounded-b-lg animate-fade-in"
                    >
                      <div className="py-2">
                        {servicesNav.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-200"
                            onClick={() => setIsEquipmentOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link href="/#capability" className="text-muted-foreground hover:text-foreground font-medium transition-all duration-200">
                  Capability
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
              <div className="hidden lg:flex items-center gap-3">
                <Button variant="outline" className="gap-2" asChild>
                  <a href="tel:1800623368">
                    <PhoneCall className="h-4 w-4" />
                    1800 MADEMU
                  </a>
                </Button>
                <Link href="/contact">
                  <Button size="default">Discuss a Project</Button>
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
                {servicesNav.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block py-2 text-muted-foreground hover:text-foreground font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link href="/#capability" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Capability
                </Link>
                <Link href="/about" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="block py-2 text-muted-foreground hover:text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                
                <div className="border-t pt-4 space-y-3">
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href="tel:1800623368">
                      <PhoneCall className="h-4 w-4" />
                      1800 MADEMU
                    </a>
                  </Button>
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-accent text-white hover:bg-accent/90">
                      Discuss a Project
                    </Button>
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
