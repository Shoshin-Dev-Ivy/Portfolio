// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: '~/plugins/vue-recaptcha-v3.js', mode: 'client' }],
  modules: ['@nuxt/icon', '@nuxtjs/color-mode', 'nuxt-headlessui', 'nuxt-anchorscroll', '@nuxt/content'],
  colorMode: {
    preference: 'light',
  },
});
