<template>
  <div class="bg-sky-50 dark:bg-sky-900 mb-0 bg-cover box-shadow font-roboto">
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner />
    <Footer class="mt-auto" />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts" defer> 
import CookieBanner from '~/components/CookieBanner.vue'
import ScrollToTop from '~/components/ScrollToTop.vue'
import { useHead } from '@vueuse/head'

useHead({
  htmlAttrs: {
    lang: 'fr' // Remplace 'fr' par la langue de ton choix
  }
})
</script>