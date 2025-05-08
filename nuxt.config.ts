export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      script: [
        {
          src: `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`,
          async: true,
          defer: true
        }
      ],
      plugins: ['~/plugins/disableRouterWarnings.js'],
      title: 'Shoshin Web Services',
      meta: [
        // Ne pas définir de meta description ici
        { property: 'og:title', content: 'Shoshin Web Services' },
        { property: 'og:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { property: 'og:image', content: 'https://www.shoshin-web-services.com/images/HomeSWS.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://www.shoshin-web-services.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Shoshin Web Services' },

        // Twitter meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Shoshin Web Services' },
        { name: 'twitter:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { name: 'twitter:image', content: 'https://www.shoshin-web-services.com/images/HomeSWS.webp' },
        { name: 'twitter:url', content: 'https://www.shoshin-web-services.com' },
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
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,// Assure-toi d'avoir cette variable d'environnement
    },
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    MAIL_USER: process.env.MAIL_USER,  // Côté serveur uniquement
    MAIL_PASS: process.env.MAIL_PASS,  // Côté serveur uniquement

    MAIL_TO: process.env.MAIL_TO      // Côté serveur uniquement
  }
})