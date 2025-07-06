import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Package, Users, ClipboardList, Home } from 'lucide-react'
import { isDemoMode } from '@/lib/config'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In demo mode, redirect to home
  if (isDemoMode()) {
    redirect('/')
  }

  const supabase = await createClient()
  
  if (!supabase) {
    // In demo mode - redirect to home
    redirect('/')
  }
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  // In a real app, you'd check if the user is an admin here
  // For now, we'll allow any authenticated user

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
        </div>
        <nav className="space-y-2 px-4">
          <Link href="/admin">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/equipment">
            <Button variant="ghost" className="w-full justify-start">
              <Package className="mr-2 h-4 w-4" />
              Equipment
            </Button>
          </Link>
          <Link href="/admin/rentals">
            <Button variant="ghost" className="w-full justify-start">
              <ClipboardList className="mr-2 h-4 w-4" />
              Rentals
            </Button>
          </Link>
          <Link href="/admin/users">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}