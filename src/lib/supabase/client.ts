import { createBrowserClient } from '@supabase/ssr'
import { isDemoMode } from '@/lib/config'
import type { SupabaseClient } from '@supabase/supabase-js'

export function createClient(): SupabaseClient | null {
  // In demo mode, return null - components should check for this
  if (isDemoMode()) {
    return null
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // No Supabase configured - return null
    return null
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey
  )
}