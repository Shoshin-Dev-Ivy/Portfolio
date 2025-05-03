<template>
  <div v-if="consent.value.youtube">
    <iframe
      width="560"
      height="315"
      :src="videoUrl"
      title="YouTube video"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCookieConsent } from '~/composables/useCookieConsent'

const { consent } = useCookieConsent()
const videoUrl = 'https://www.youtube.com/embed/VIDEO_ID'

onMounted(() => {
  if (!consent.value.youtube) return
})
</script>