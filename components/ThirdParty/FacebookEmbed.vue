<template>
  <div v-if="consent.facebook">
    <div class="fb-page"
         data-href="https://www.facebook.com/votrepage"
         data-tabs="timeline"
         data-width="500"
         data-height="600"
         data-small-header="false"
         data-adapt-container-width="true"
         data-hide-cover="false"
         data-show-facepile="true">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCookieConsent } from '~/composables/useCookieConsent'

const { consent } = useCookieConsent()

onMounted(() => {
  if (!consent.value.facebook) return

  // Évite de charger plusieurs fois
  if (document.getElementById('facebook-jssdk')) return

  // Crée le script SDK Facebook
  const script = document.createElement('script')
  script.id = 'facebook-jssdk'
  script.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0'
  script.async = true
  document.body.appendChild(script)

  // Crée la balise fb-root si nécessaire
  if (!document.getElementById('fb-root')) {
    const fbRoot = document.createElement('div')
    fbRoot.id = 'fb-root'
    document.body.prepend(fbRoot)
  }
})
</script>


