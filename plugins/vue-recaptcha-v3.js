import { defineNuxtPlugin } from '#app';
import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: process.env.RECAPTCHA_SITE_KEY, // Remplacez par la clé de votre site
    loaderOptions: {
      autoHideBadge: true, // Facultatif : masque automatiquement le badge
      explicitRenderParameters: {
        //badge: 'bottomleft', // au cas où vous ne voudriez pas le masquer
      },
    },
  });
});