import { createBrowserClient } from '@supabase/ssr'
import { isDemoMode } from '@/lib/config'
import type { SupabaseClient } from '@supabase/supabase-js'

export function createClient(): SupabaseClient | null {
  // In demo mode, return null - components should check for this
  if (isDemoMode()) {
    return null
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}