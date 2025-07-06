// Configuration for demo mode and feature flags

export const config = {
  isDemoMode: !process.env.NEXT_PUBLIC_SUPABASE_URL || 
              !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
              process.env.NEXT_PUBLIC_SUPABASE_URL === 'your_supabase_project_url',
  
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  }
}

export const isDemoMode = () => {
  return config.isDemoMode
}