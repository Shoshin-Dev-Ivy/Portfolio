export default defineNuxtRouteMiddleware(async () => {
  const route = useRoute()
  if (route.path === '/maintenance') return

  try {
    const res = await $fetch('/api/maintenance')
    if (res && res.enabled) {
      return navigateTo('/maintenance')
    }
  } catch (error) {
    console.error('Erreur middleware maintenance:', error)
  }
})
