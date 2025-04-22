<template>
  <div v-if="showBanner" class="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg z-50">
    <div>
      <p>Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous notre politique de cookies ?</p>
    </div>
    <div class="flex space-x-4">
      <button @click="acceptCookies" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
        Accepter
      </button>
      <button @click="refuseCookies" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
        Refuser
      </button>
    </div>
  </div>
</template>

<script setup defer>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

const checkCookiesConsent = () => {
  // Vérifie si la bannière a déjà été affichée et l'acceptation/refus a été stocké
  const cookieConsent = document.cookie.includes('cookieConsent=true') || document.cookie.includes('cookieConsent=false')
  
  if (!cookieConsent) {
    showBanner.value = true
  }
}

const acceptCookies = () => {
  document.cookie = "cookieConsent=true; path=/; max-age=7200" // valable 2 heures
  showBanner.value = false
}

const refuseCookies = () => {
  document.cookie = "cookieConsent=false; path=/; max-age=7200" // valable 2 heures
  showBanner.value = false
}

onMounted(() => {
  checkCookiesConsent()
})
</script>

<style scoped>
/* Vous pouvez ajouter un peu de personnalisation ici pour rendre la bannière plus jolie */
</style>
