// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const baseURL =
      process.env.NODE_ENV === 'production'
        ? `https://${window.location.host}`
        : 'http://localhost:3000';

    const res = await fetch(`${baseURL}/api/maintenance`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-store, max-age=0',
        'Pragma': 'no-cache',
      },
    });

    const data = await res.json();

    if (data.enabled && to.path !== '/maintenance') {
      return navigateTo('/maintenance', { replace: true });
    }

    if (!data.enabled && to.path === '/maintenance') {
      return navigateTo('/');
    }
  } catch (e) {
    console.error('Erreur chargement /api/maintenance:', e);
  }
});




