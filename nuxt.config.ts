export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      title: 'Shoshin Web Services',
      meta: [
        { name: 'description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { property: 'og:title', content: 'Shoshin Web Services' },
        { property: 'og:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { property: 'og:image', content: 'https://www.shoshin-web-services.com/images/HomeSWS.webp' },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: 'og:url', content: 'https://www.shoshin-web-services.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Shoshin Web Services' },
        { property: 'og:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { name: 'twitter:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { name: 'twitter:image', content: 'https://shoshin-web-services.com/images/HomeSWS.webp' },
      ],
    }
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
    runtimeConfig: {
      public: {
        RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        maintenanceMode: process.env.MAINTENANCE_MODE || 'false', // Place it under public
      },
    },
})