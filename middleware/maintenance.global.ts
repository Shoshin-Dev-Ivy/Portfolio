export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/maintenance') return;

  try {
    const url = useRequestURL();
    const base = `${url.protocol}//${url.host}`;

    const res = await $fetch('/api/maintenance', { baseURL: base });

    if (res?.enabled) {
      return navigateTo('/maintenance');
    }
  } catch (err) {
    console.error('Erreur middleware maintenance:', err);
  }
});

