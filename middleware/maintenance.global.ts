export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/maintenance') return;

  try {
    const res = await fetch('/api/maintenance');
    if (!res.ok) throw new Error('Réponse API invalide');

    const data = await res.json();

    if (data.enabled) {
    return navigateTo('/maintenance');
    }
  } catch (err) {
    console.error('Erreur dans middleware maintenance:', err);
  }
});
