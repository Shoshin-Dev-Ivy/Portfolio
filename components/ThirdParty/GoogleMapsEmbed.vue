<template>
  <div v-if="consent.googlemaps">
    <iframe
      width="100%"
      height="450"
      :src="mapUrl"
      style="border:0;"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
  <div v-else>
    <p>Google Maps est désactivé. Veuillez accepter les cookies pour voir la carte.</p>
  </div>
</template>

<script setup lang="ts">
import { useCookieConsent } from '~/composables/useCookieConsent'

const { consent } = useCookieConsent()

const mapUrl = 'https://www.google.com/maps/embed?pb=...'
</script>
