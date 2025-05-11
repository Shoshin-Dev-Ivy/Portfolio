export default defineNuxtRouteMiddleware(async () => {
  // Ne pas exécuter côté serveur (évite erreurs dans SSR)
  if (import.meta.server) return

  try {
    const res = await fetch('/api/maintenance')
    const data = await res.json()

    if (data.enabled) {
      return navigateTo('/maintenance')
    }
  } catch (err) {
    console.error('Erreur middleware maintenance:', err)
  }
})