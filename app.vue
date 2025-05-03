<template>
  <div class="bg-sky-50 dark:bg-sky-900 mb-0 bg-cover box-shadow font-roboto">
    <ClientOnly>
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieConsent />
    <Footer class="mt-auto" />
    <ScrollToTop />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts"> 
import CookieConsent from '~/components/CookieConsent.vue'
import ScrollToTop from '~/components/ScrollToTop.vue'
import { useHead, useI18n } from '#imports'

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  }
})

const { consent } = useCookieConsent()

watch(() => consent.value.analytics, (enabled) => {
  if (enabled) {
    const ga = document.createElement('script')
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'
    ga.async = true
    document.head.appendChild(ga)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) { window.dataLayer.push(args) }
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXX')
  }
})
</script>

<style>
.grecaptcha-badge {
  visibility: hidden !important;
}
</style>