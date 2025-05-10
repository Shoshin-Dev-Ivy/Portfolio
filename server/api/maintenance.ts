// server/api/maintenance.ts
export default defineEventHandler(() => {
    console.log('Requête reçue pour /api/maintenance');  // Log pour confirmer la requête
  return {
    enabled: false,
    message: 'Nous effectuons une mise à jour importante.',
    expectedReturn: '2025-05-10T15:00:00',
  };
});
