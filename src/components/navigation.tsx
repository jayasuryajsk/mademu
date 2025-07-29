'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { isDemoMode } from '@/lib/config'
import { Wrench } from 'lucide-react'

export function Navigation() {
  const isDemo = isDemoMode()

  return (
    <>
      {isDemo && (
        <div className="bg-yellow-50 text-yellow-800 text-sm py-2 px-4 text-center">
          Demo Mode: Running without Supabase. Set up your Supabase credentials to enable full functionality.
        </div>
      )}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-900 rounded flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">18fifty3 Hire</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/equipment" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Equipment
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          
          <div className="flex items-center space-x-4">
            {isDemo ? (
              <div className="text-sm text-gray-500">
                Authentication disabled in demo mode
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}