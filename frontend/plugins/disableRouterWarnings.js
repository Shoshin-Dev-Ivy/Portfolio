export default defineNuxtPlugin(() => {
    // Sauvegarde de la méthode d'origine de console.warn
    const originalWarn = console.warn
    console.warn = (message) => {
      if (typeof message === 'string' && message.includes('No match found for location')) {
        // Ignore les warnings liés à "No match found for location"
        return
      }
      // Appelle la méthode d'origine pour les autres warnings
      originalWarn.apply(console, [message])
    }
  })
  