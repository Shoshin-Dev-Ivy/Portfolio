export default defineEventHandler((event) => {
  // Headers CORS pour autoriser les appels cross-domain
  setHeader(event, 'Access-Control-Allow-Origin', '*');
  setHeader(event, 'Access-Control-Allow-Methods', 'GET');
  setHeader(event, 'Access-Control-Allow-Headers', '*');

  return {
    enabled: false,
    message: 'Maintenance en cours.',
    expectedReturn: '2025-05-10T15:00:00',
  };
});

