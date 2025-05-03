<template>
    <!-- Bannière de consentement des cookies -->
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 w-full bg-sky-700 text-white p-4 flex justify-between items-center shadow-lg z-50"
    >
      <div>
        <p>{{ $t('MessageCookie') }}
            <NuxtLink to="/section/confidentialite" class="underline mx-16">
                {{ $t('Confidentialite') }}
            </NuxtLink>
        </p>
      </div>
      
      <div class="flex space-x-4">
        <button @click="acceptCookies" class="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded">
          {{ $t('Accept') }}
        </button>
        <button @click="refuseCookies" class="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded">
          {{ $t('Reject') }}
        </button>
        <button @click="showModal = true" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
          {{ $t('Customize') }}
        </button>
      </div>
    </div>
  
    <!-- Modale de personnalisation des cookies -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-6 text-black rounded shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">{{ $t('CustomizeCookies') }}</h2>
        <form @submit.prevent="saveCustomConsent">
          <div class="space-y-4">
            <!-- Nécessaires -->
            <label class="flex justify-between items-center">
              <span>{{ $t('Necessary') }}</span>
              <input
                type="checkbox"
                v-model="consent.necessary"
                disabled
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
  
            <!-- Analyse -->
            <label class="flex justify-between items-center">
              <span>{{ $t('Analytics') }}</span>
              <input
                type="checkbox"
                v-model="consent.analytics"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
  
            <!-- Marketing -->
            <label class="flex justify-between items-center">
              <span>{{ $t('Marketing') }}</span>
              <input
                type="checkbox"
                v-model="consent.marketing"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
  
            <!-- YouTube -->
            <label class="flex justify-between items-center">
              <span>{{ $t('Youtube') }}</span>
              <input
                type="checkbox"
                v-model="consent.youtube"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
  
            <!-- Facebook -->
            <label class="flex justify-between items-center">
              <span>{{ $t('Facebook') }}</span>
              <input
                type="checkbox"
                v-model="consent.facebook"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
  
            <!-- Maps -->
            <label class="flex justify-between items-center">
              <span>{{ $t('Maps') }}</span>
              <input
                type="checkbox"
                v-model="consent.maps"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
          </div>
          <div class="mt-4 flex justify-between">
            <button @click="showModal = false" class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded">
              {{ $t('Cancel') }}
            </button>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
              {{ $t('Save') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Gestion des cookies
  const showBanner = ref(true)
  const showModal = ref(false)
  
  const consent = ref({
    necessary: true,  // Par défaut, les cookies nécessaires sont activés
    analytics: false,
    marketing: false,
    youtube: false,
    facebook: false,
    maps: false,
  })
  
  const acceptCookies = () => {
    consent.value.analytics = true
    consent.value.marketing = true
    consent.value.youtube = true
    consent.value.facebook = true
    consent.value.maps = true
    showBanner.value = false
  }
  
  const refuseCookies = () => {
    consent.value.analytics = false
    consent.value.marketing = false
    consent.value.youtube = false
    consent.value.facebook = false
    consent.value.maps = false
    showBanner.value = false
  }
  
  const saveCustomConsent = () => {
    showModal.value = false
    // Logic to save consent in localStorage or backend
  }
  </script>
  
  <style scoped>
  /* Styles personnalisés pour la bannière et la modale */
  </style>
  