<template>
    <!-- Bannière de consentement des cookies -->
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 w-full bg-sky-700 text-white p-4 flex justify-between items-center shadow-lg z-50"
    >
      <div>
        <p>{{ $t('MessageCookie') }}</p>
        <NuxtLink to="/privacy" class="underline text-white hover:text-gray-200 ml-2">
          {{ $t('PrivacyPolicy') }}
        </NuxtLink>
      </div>
      <div class="flex space-x-4">
        <button @click="acceptCookies" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
          {{ $t('Accept') }}
        </button>
        <button @click="refuseCookies" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
          {{ $t('Reject') }}
        </button>
        <button @click="showModal = true" class="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded">
          {{ $t('Customize') }}
        </button>
      </div>
    </div>
  
    <!-- Modale de personnalisation des cookies -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">{{ $t('CustomizeCookies') }}</h2>
        <form @submit.prevent="saveCustomConsent">
          <div class="space-y-4">
            <label class="flex justify-between items-center">
              <span>{{ $t('Necessary') }}</span>
              <input
                type="checkbox"
                v-model="consent.necessary"
                disabled
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
            <label class="flex justify-between items-center">
              <span>{{ $t('Analytics') }}</span>
              <input
                type="checkbox"
                v-model="consent.analytics"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
            <label class="flex justify-between items-center">
              <span>{{ $t('Marketing') }}</span>
              <input
                type="checkbox"
                v-model="consent.marketing"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
            <label class="flex justify-between items-center">
              <span>{{ $t('Youtube') }}</span>
              <input
                type="checkbox"
                v-model="consent.youtube"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
            <label class="flex justify-between items-center">
              <span>{{ $t('Facebook') }}</span>
              <input
                type="checkbox"
                v-model="consent.facebook"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
            </label>
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
  import { ref, onMounted } from 'vue'
  
  const showBanner = ref(true)
  const showModal = ref(false)
  
  type Consent = {
    necessary: boolean
    analytics: boolean
    marketing: boolean
    youtube: boolean
    facebook: boolean
    maps: boolean
  }
  
  const consent = ref<Consent>({
    necessary: true,
    analytics: false,
    marketing: false,
    youtube: false,
    facebook: false,
    maps: false,
  })
  
  const saveConsentToLocalStorage = () => {
    localStorage.setItem('userConsent', JSON.stringify(consent.value))
    localStorage.setItem('consentDate', new Date().toISOString())
  }
  
  const loadConsentFromLocalStorage = () => {
    const storedConsent = localStorage.getItem('userConsent')
    if (storedConsent) {
      consent.value = JSON.parse(storedConsent)
      showBanner.value = false
    }
  }
  
  onMounted(() => {
    loadConsentFromLocalStorage()
  })
  
  const acceptCookies = () => {
    consent.value = {
      necessary: true,
      analytics: true,
      marketing: true,
      youtube: true,
      facebook: true,
      maps: true,
    }
    saveConsentToLocalStorage()
    showBanner.value = false
  }
  
  const refuseCookies = () => {
    consent.value = {
      necessary: true,
      analytics: false,
      marketing: false,
      youtube: false,
      facebook: false,
      maps: false,
    }
    saveConsentToLocalStorage()
    showBanner.value = false
  }
  
  const saveCustomConsent = () => {
    saveConsentToLocalStorage()
    showModal.value = false
  }
  </script>
  