import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { isDemoMode } from '@/lib/config'

export default async function DashboardPage() {
  // In demo mode, redirect to home
  if (isDemoMode()) {
    redirect('/')
  }

  const supabase = await createClient()
  
  if (!supabase) {
    // No auth configured - redirect to home
    redirect('/')
  }
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Active Rentals</h2>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Spent</h2>
          <p className="text-3xl font-bold text-primary">$0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Pending Returns</h2>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Rentals</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">No rentals yet</p>
        </div>
      </div>
    </div>
  )
}