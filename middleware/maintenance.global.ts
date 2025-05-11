export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const config = useRuntimeConfig().public;
    const res = await fetch(`${config.siteUrl}/api/maintenance`, {
      cache: 'no-store',
    });

    const data = await res.json();

    if (data.enabled && to.path !== '/maintenance') {
      return navigateTo('/maintenance', { replace: true });
    }

    if (!data.enabled && to.path === '/maintenance') {
      return navigateTo('/');
    }
  } catch (e) {
    console.error('Erreur lors du chargement de /api/maintenance :', e);
  }
});

