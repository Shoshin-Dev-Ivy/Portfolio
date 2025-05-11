export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return;

  const url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/maintenance'
    : 'https://www.shoshin-web-services.com/api/maintenance';

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.enabled && to.path !== '/maintenance') {
      return navigateTo('/maintenance');
    }

    if (!data.enabled && to.path === '/maintenance') {
      return navigateTo('/');
    }
  } catch (error) {
    console.error('Erreur lors du chargement de /api/maintenance :', error);
  }
});
