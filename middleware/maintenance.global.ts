// middleware/maintenance.global.ts

export default defineNuxtRouteMiddleware(async (to) => {
  // Ignore le middleware pendant le rendu serveur
  if (import.meta.server) return;

  try {
    const res = await fetch('/api/maintenance', {
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


