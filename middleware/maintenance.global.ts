// middleware/maintenance.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return; // Ne pas exécuter ce code côté serveur

  const baseUrl = import.meta.env.VERCEL_URL || 'http://localhost:3000'; // Utilise VERCEL_URL en prod, localhost en dev

  try {
    const res = await fetch(`${baseUrl}/api/maintenance`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-store, max-age=0',
        'Pragma': 'no-cache',
      },
    });

    const data = await res.json();

    // Si la maintenance est activée et que l'utilisateur n'est pas déjà sur la page de maintenance, rediriger
    if (data.enabled && to.path !== '/maintenance') {
      return navigateTo('/maintenance', { replace: true });
    }

    // Si la maintenance est désactivée et que l'utilisateur est sur la page de maintenance, rediriger vers la page d'accueil
    if (!data.enabled && to.path === '/maintenance') {
      return navigateTo('/');
    }
  } catch (e) {
    console.error('Erreur chargement /api/maintenance:', e);
  }
});



