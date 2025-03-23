<template>
  <div class="bg-sky-50 dark:bg-sky-900 mb-0 bg-cover box-shadow">
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner />
    <Footer class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import CookieBanner from '~/components/CookieBanner.vue'
</script>