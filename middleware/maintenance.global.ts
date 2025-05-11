// middleware/maintenance.global.ts

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  try {
    const baseUrl = useRuntimeConfig().public.siteUrl || '';
    const res = await fetch(`${baseUrl}/api/maintenance`, {
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
    console.error('Erreur chargement /api/maintenance:', e);
  }
});
