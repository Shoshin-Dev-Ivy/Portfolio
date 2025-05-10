export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const runtimeConfig = useRuntimeConfig();
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? `https://${runtimeConfig.public.siteUrl}`
        : window.location.origin;

    const res = await fetch(`${baseUrl}/api/maintenance`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-store',
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






