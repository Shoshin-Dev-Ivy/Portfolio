export default defineNuxtRouteMiddleware((to) => {
    const config = useRuntimeConfig()
  
    const isInMaintenance = config.public.maintenanceMode === 'true'
    const isOnMaintenancePage = to.path === '/maintenance'
  
    if (isInMaintenance && !isOnMaintenancePage) {
      return navigateTo('/maintenance')
    }
  })