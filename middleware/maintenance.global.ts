export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const runtimeConfig = useRuntimeConfig();
    const baseUrl = runtimeConfig.public.baseUrl || '';

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
      return navigateTo('/', { replace: true });
    }
  } catch (e) {
    console.error('Erreur chargement /api/maintenance:', e);
  }
});





