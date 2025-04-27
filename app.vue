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

<script setup lang="ts"> 
import CookieBanner from '~/components/CookieBanner.vue'
import ScrollToTop from '~/components/ScrollToTop.vue'
import { useHead, useI18n } from '#imports'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  }
})
</script>