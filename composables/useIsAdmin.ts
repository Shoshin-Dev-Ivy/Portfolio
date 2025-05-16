export default function useIsAdmin() {
  const isAdmin = useState<boolean>('is_admin', () => false)
  const adminKey = useCookie<string | null>('admin_key', {
    path: '/',
    maxAge: 60 * 60 * 24 * 30
  })

  const { $supabase } = useNuxtApp()

  if (import.meta.client && adminKey.value && !isAdmin.value) {
    // safe call dans le client uniquement
    void checkAdminStatus()
  }

  async function checkAdminStatus(): Promise<void> {
    try {
      const { data, error } = await $supabase
        .from('admin_config')
        .select('id')
        .eq('secret', adminKey.value)
        .maybeSingle()

      isAdmin.value = !!data && !error
    } catch (err) {
      console.error('[useIsAdmin] Supabase error:', err)
      isAdmin.value = false
    }
  }

  return isAdmin
}

