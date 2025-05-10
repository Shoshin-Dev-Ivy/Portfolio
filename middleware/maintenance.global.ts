export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const baseUrl = 'https://www.shoshin-web-services.com'; // Domaine personnalisé configuré sur Vercel
    const res = await fetch(`${baseUrl}/api/maintenance`, {
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

