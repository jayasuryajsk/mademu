'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NewEquipmentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category_id: '',
    daily_rate: '',
    weekly_rate: '',
    monthly_rate: '',
    total_quantity: '1',
    available_quantity: '1',
    status: 'active'
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const supabase = createClient()
    if (!supabase) {
      // In demo mode or no auth configured
      return
    }
    
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')
    
    if (!error && data) {
      setCategories(data)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    
    if (!supabase) {
      setError('Database connection not configured')
      setLoading(false)
      return
    }

    const { error: insertError } = await supabase
      .from('equipment')
      .insert([{
        name: formData.name,
        description: formData.description,
        category_id: formData.category_id,
        daily_rate: parseFloat(formData.daily_rate),
        weekly_rate: parseFloat(formData.weekly_rate),
        monthly_rate: parseFloat(formData.monthly_rate),
        total_quantity: parseInt(formData.total_quantity),
        available_quantity: parseInt(formData.available_quantity),
        status: formData.status
      }])

    if (insertError) {
      setError(insertError.message)
      setLoading(false)
      return
    }

    router.push('/admin/equipment')
    router.refresh()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add New Equipment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name">Equipment Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category_id">Category</Label>
              <select
                id="category_id"
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="daily_rate">Daily Rate ($)</Label>
                <Input
                  id="daily_rate"
                  name="daily_rate"
                  type="number"
                  step="0.01"
                  value={formData.daily_rate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weekly_rate">Weekly Rate ($)</Label>
                <Input
                  id="weekly_rate"
                  name="weekly_rate"
                  type="number"
                  step="0.01"
                  value={formData.weekly_rate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthly_rate">Monthly Rate ($)</Label>
                <Input
                  id="monthly_rate"
                  name="monthly_rate"
                  type="number"
                  step="0.01"
                  value={formData.monthly_rate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="total_quantity">Total Quantity</Label>
                <Input
                  id="total_quantity"
                  name="total_quantity"
                  type="number"
                  min="1"
                  value={formData.total_quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="available_quantity">Available Quantity</Label>
                <Input
                  id="available_quantity"
                  name="available_quantity"
                  type="number"
                  min="0"
                  value={formData.available_quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Equipment'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/admin/equipment')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}