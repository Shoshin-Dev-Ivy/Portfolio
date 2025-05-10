// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const { data } = await useFetch('/api/maintenance', {
      server: true,
      key: 'maintenance-check',
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    if (data.value?.enabled && to.path !== '/maintenance') {
      return navigateTo('/maintenance', { replace: true });
    }

    if (!data.value?.enabled && to.path === '/maintenance') {
      return navigateTo('/');
    }
  } catch (e) {
    console.error('Erreur chargement /api/maintenance:', e);
  }
});



