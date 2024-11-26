// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    
  },
  alias: {
    assets: "/<rootDir>/assets",
    '@': resolve(__dirname, "/"),
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
  ],
})