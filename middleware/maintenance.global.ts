// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/maintenance') return;

  try {
    const res = await fetch('/api/maintenance');
    const data = await res.json();

    if (data.enabled) {
      return navigateTo('/maintenance');
    }
  } catch (err) {
    console.error('Erreur middleware maintenance:', err);
  }
});


