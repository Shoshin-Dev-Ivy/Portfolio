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
        { name: 'description', content: 'Bienvenue sur mon portfolio professionnel. Découvrez mes projets et réalisations, les services proposés' },
        { property: 'og:title', content: 'Shoshin Web Services' },
        { property: 'og:description', content: 'Bienvenue sur mon portfolio professionnel. Découvrez mes projets et réalisations, les services proposés.' },
        { property: 'og:image', content: 'https://shoshin-web-services.com/image-de-preview.jpg' },
        { property: 'og:url', content: 'https://shoshin-web-services.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mon Portfolio - [Ton Nom]' },
        { name: 'twitter:description', content: 'Bienvenue sur mon portfolio professionnel. Découvrez mes projets et réalisations, les services proposés.' },
        { name: 'twitter:image', content: 'https://shoshin-web-services.com/image-de-preview.jpg' },
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