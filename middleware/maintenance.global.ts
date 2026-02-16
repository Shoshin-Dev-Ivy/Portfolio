/* middleware/maintenance.global.ts */
import { useMaintenanceStore } from '~/stores/maintenance'
import { useAdminStore } from '~/stores/useAdminStore'

export default defineNuxtRouteMiddleware(async (to) => {

  const maintenanceStore = useMaintenanceStore()
  const adminStore = useAdminStore()

  // Charge l'état de maintenance si pas encore fait
  if (!maintenanceStore._loaded) {
    try {
      await maintenanceStore.fetch()
    } catch (error) {
      console.error('[maintenance.middleware] Erreur fetch:', error)
      maintenanceStore.enabled = false
      maintenanceStore._loaded = true
    }
  }

  const enabled = maintenanceStore.enabled
  const isAdmin = adminStore.isAdmin

  // Les admins peuvent toujours naviguer
  if (isAdmin) {
    return
  }

  // Si maintenance activée et pas sur /maintenance
  if (enabled && !to.path.includes('/maintenance')) {
    return navigateTo('/maintenance')
  }

  // Si maintenance désactivée et sur /maintenance
  if (!enabled && to.path.includes('/maintenance')) {
    return navigateTo('/')
  }
})













