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
  plugins: [{ src: '~/plugins/vue-recaptcha-v3.js', ssr: false  }],
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    'nuxt-anchorscroll',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],
    i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    
    locales: [
      { code: 'fr', language: 'fr-FR' },
      { code: 'en', language: 'en-US' },
      { code: 'ja', language: 'ja-JA' },
    ],
    defaultLocale: 'fr',
  },
  colorMode: {
    preference: 'light',
  },
  site: { 
    url: 'https://localhost', 
    name: 'Portfolio Shoshin Web Services' 
    }, 
    runtimeConfig: {
      public: {
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        maintenanceMode: process.env.MAINTENANCE_MODE || 'false', // Place it under public
      },
    },
});