import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  let supabase: SupabaseClient | null = null

  if (!supabaseUrl || !supabaseKey) {
    console.warn('⚠️ Supabase désactivé : credentials manquants.')
    // Mock vide pour éviter les erreurs
    supabase = {
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: null }),
      }),
    } as unknown as SupabaseClient
  } else {
    supabase = createClient(supabaseUrl, supabaseKey)
  }

  nuxtApp.provide('supabase', supabase)
})

