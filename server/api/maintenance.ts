export default defineEventHandler((event) => {
  // Autoriser les requêtes cross-origin depuis le domaine prod
  setHeader(event, 'Access-Control-Allow-Origin', 'https://www.shoshin-web-services.com');
  setHeader(event, 'Access-Control-Allow-Methods', 'GET');
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type');

  // Répondre immédiatement aux pré-requêtes OPTIONS
  if (getMethod(event) === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  return {
    enabled: false,
    message: 'Nous effectuons une mise à jour importante.',
    expectedReturn: '2025-05-10T15:00:00',
  };
});

