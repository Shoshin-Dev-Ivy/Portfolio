export default defineNuxtRouteMiddleware(async (to) => {
  const enabled = useState<boolean>('maintenance_enabled').value
  const isAdmin = useState<boolean>('is_admin').value

  if (!enabled || isAdmin) return

  // Si on est déjà sur /maintenance dans une langue → pas de redirection
  if (to.name?.toString().includes('maintenance')) return

  const locale = to.params?.locale || 'fr'
  return navigateTo(`/${locale}/maintenance`)
})












