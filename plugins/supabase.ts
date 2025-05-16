import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('❌ Supabase credentials missing.')
  }

  const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)
  nuxtApp.provide('supabase', supabase)
})
