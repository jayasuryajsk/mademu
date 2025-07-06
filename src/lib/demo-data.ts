// Demo data for when Supabase is not configured

export const demoCategories = [
  { id: '1', name: 'Construction Equipment', description: 'Heavy machinery and tools for construction projects' },
  { id: '2', name: 'Power Tools', description: 'Electric and battery-powered tools' },
  { id: '3', name: 'Event Equipment', description: 'Equipment for events, parties, and gatherings' },
  { id: '4', name: 'Garden & Landscaping', description: 'Tools and machinery for gardening and landscaping' },
]

export const demoEquipment = [
  {
    id: '1',
    category_id: '1',
    name: 'Mini Excavator 3.5T',
    description: 'Compact excavator perfect for small to medium construction projects',
    daily_rate: null,
    weekly_rate: null,
    monthly_rate: null,
    total_quantity: 3,
    available_quantity: 3,
    specifications: { weight: '3500kg', bucket_capacity: '0.12m³', max_dig_depth: '3.5m' },
    images: null,
    status: 'active',
    categories: { name: 'Construction Equipment' }
  },
  {
    id: '2',
    category_id: '2',
    name: 'Concrete Mixer 120L',
    description: 'Portable concrete mixer with 120L drum capacity',
    daily_rate: null,
    weekly_rate: null,
    monthly_rate: null,
    total_quantity: 5,
    available_quantity: 5,
    specifications: { capacity: '120L', power: '550W', weight: '45kg' },
    images: null,
    status: 'active',
    categories: { name: 'Power Tools' }
  },
  {
    id: '3',
    category_id: '3',
    name: 'PA System 1000W',
    description: 'Professional PA system suitable for events up to 200 people',
    daily_rate: null,
    weekly_rate: null,
    monthly_rate: null,
    total_quantity: 4,
    available_quantity: 4,
    specifications: { power: '1000W', speakers: '2x 12-inch', wireless_mic: 'included' },
    images: null,
    status: 'active',
    categories: { name: 'Event Equipment' }
  },
  {
    id: '4',
    category_id: '4',
    name: 'Ride-on Mower',
    description: 'Commercial grade ride-on mower for large areas',
    daily_rate: null,
    weekly_rate: null,
    monthly_rate: null,
    total_quantity: 2,
    available_quantity: 2,
    specifications: { cutting_width: '42 inch', engine: '22HP', fuel_type: 'petrol' },
    images: null,
    status: 'active',
    categories: { name: 'Garden & Landscaping' }
  }
]