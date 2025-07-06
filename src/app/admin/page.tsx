import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  let equipmentCount = 0
  let activeRentals = 0
  let totalUsers = 0
  
  // Get statistics
  if (supabase) {
    const results = await Promise.all([
      supabase.from('equipment').select('id', { count: 'exact', head: true }),
      supabase.from('rentals').select('id', { count: 'exact', head: true }).eq('status', 'active'),
      supabase.from('rentals').select('user_id', { count: 'exact', head: true })
    ])
    
    equipmentCount = results[0].count || 0
    activeRentals = results[1].count || 0
    totalUsers = results[2].count || 0
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Equipment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{equipmentCount}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Active Rentals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{activeRentals}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalUsers}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No recent activity to display</p>
        </CardContent>
      </Card>
    </div>
  )
}