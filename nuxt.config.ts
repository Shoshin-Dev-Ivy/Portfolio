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
  plugins: [{ src: '~/plugins/vue-recaptcha-v3.js', mode: 'client'  }],
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    'nuxt-anchorscroll',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: [
      { code: 'fr', language: 'fr-FR' },
      { code: 'en', language: 'en-US' },
      { code: 'jp', language: 'jp-JP' }
    ],
    defaultLocale: 'fr',
  },
  colorMode: {
    preference: 'light',
  },
});