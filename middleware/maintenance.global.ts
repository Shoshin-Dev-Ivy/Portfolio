export default defineNuxtRouteMiddleware(async (to) => {
  const url = useRequestURL();
  const baseUrl = url.origin || 'http://localhost:3000';
  const maintenanceUrl = `${baseUrl}/maintenance.json`;

  try {
    const res = await fetch(maintenanceUrl, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-store, max-age=0',
        'Pragma': 'no-cache'
      }
    });
    const data = await res.json();

    if (data.enabled && to.path !== '/maintenance') {
      return navigateTo('/maintenance', { replace: true });
    }

    if (!data.enabled && to.path === '/maintenance') {
      return navigateTo('/');
    }
  } catch (e) {
    console.error('Erreur chargement maintenance.json:', e);
  }
});


