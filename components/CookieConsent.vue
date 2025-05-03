<template>
  <!-- Bannière de consentement -->
  <div
    v-if="showBanner"
    class="fixed bottom-0 left-0 w-full bg-sky-700 text-white p-4 flex justify-between items-center shadow-lg z-50"
  >
    <div>
      <p>{{ $t('MessageCookie') }}
        <NuxtLink to="/section/confidentialite" class="underline text-white hover:text-gray-200 ml-1">
          {{ $t('Confidentialite') }}
        </NuxtLink>
      </p>
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

  <!-- Modale de personnalisation -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-6 rounded shadow-lg w-96">
      <h2 class="text-xl font-bold mb-4">{{ $t('CustomizeTitle') }}</h2>
      <form @submit.prevent="saveCustomConsent">
        <div class="space-y-4">
          <label class="flex justify-between items-center">
            <span>{{ $t('Necessary') }}</span>
            <input type="checkbox" v-model="consent.necessary" disabled class="h-5 w-5 text-blue-600" />
          </label>
          <label class="flex justify-between items-center">
            <span>{{ $t('Analytics') }}</span>
            <input type="checkbox" v-model="consent.analytics" class="h-5 w-5 text-blue-600" />
          </label>
          <label class="flex justify-between items-center">
            <span>{{ $t('Marketing') }}</span>
            <input type="checkbox" v-model="consent.marketing" class="h-5 w-5 text-blue-600" />
          </label>
          <label class="flex justify-between items-center">
            <span>{{ $t('Youtube') }}</span>
            <input type="checkbox" v-model="consent.youtube" class="h-5 w-5 text-blue-600" />
          </label>
          <label class="flex justify-between items-center">
            <span>{{ $t('Facebook') }}</span>
            <input type="checkbox" v-model="consent.facebook" class="h-5 w-5 text-blue-600" />
          </label>
          <label class="flex justify-between items-center">
            <span>{{ $t('Maps') }}</span>
            <input type="checkbox" v-model="consent.maps" class="h-5 w-5 text-blue-600" />
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
import { useRouter } from 'vue-router'

const showBanner = ref(true)
const showModal = ref(false)

const consent = ref({
  necessary: true,
  analytics: false,
  marketing: false,
  youtube: false,
  facebook: false,
  maps: false
})

const CONSENT_KEY = 'userConsent'
const EXPIRATION_DAYS = 180

const saveConsent = () => {
  const data = {
    consent: consent.value,
    timestamp: new Date().getTime()
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
}

const loadConsent = () => {
  const raw = localStorage.getItem(CONSENT_KEY)
  if (!raw) return false
  try {
    const data = JSON.parse(raw)
    const now = new Date().getTime()
    const elapsedDays = (now - data.timestamp) / (1000 * 60 * 60 * 24)
    if (elapsedDays > EXPIRATION_DAYS) {
      localStorage.removeItem(CONSENT_KEY)
      return false
    }
    consent.value = data.consent
    return true
  } catch (err) {
    console.error('Consent parsing error:', err)
    return false
  }
}

const acceptCookies = () => {
  consent.value = {
    necessary: true,
    analytics: true,
    marketing: true,
    youtube: true,
    facebook: true,
    maps: true
  }
  saveConsent()
  showBanner.value = false
}

const refuseCookies = () => {
  consent.value = {
    necessary: true,
    analytics: false,
    marketing: false,
    youtube: false,
    facebook: false,
    maps: false
  }
  saveConsent()
  showBanner.value = false
}

const saveCustomConsent = () => {
  saveConsent()
  showModal.value = false
  showBanner.value = false
}

onMounted(() => {
  const valid = loadConsent()
  showBanner.value = !valid
})
</script>

<style scoped>
/* Aucun style additionnel pour l’instant */
</style>
