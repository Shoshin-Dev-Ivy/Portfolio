<template>
  <!-- Bannière de consentement -->
  <div
    v-if="showBanner"
    class="fixed bottom-0 left-0 w-full bg-sky-700 text-white p-4 flex justify-between items-center shadow-lg z-50"
  >
    <div>
      <p>{{ $t('MessageCookie') }}</p>
      <NuxtLink to="/section/confidentialite" class="underline ml-2">
        {{ $t('Confidentialite') }}
      </NuxtLink>
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

  <!-- Modale de personnalisation -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 text-black flex justify-center items-center z-50"
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
          <button type="submit" class="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded">
            {{ $t('Save') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const showModal = ref(false)

const consent = ref({
  necessary: true,
  analytics: false,
  marketing: false,
  youtube: false,
  facebook: false,
  maps: false,
})

const CONSENT_KEY = 'userConsent'
const EXPIRATION_DAYS = 180 // 6 mois

function saveConsent() {
  const payload = {
    consent: consent.value,
    timestamp: new Date().getTime(),
  }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload))
}

function loadConsent() {
  const raw = localStorage.getItem(CONSENT_KEY)
  if (!raw) {
    showBanner.value = true
    return
  }

  try {
    const parsed = JSON.parse(raw)
    const now = new Date().getTime()
    if (now - parsed.timestamp > EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(CONSENT_KEY)
      showBanner.value = true
    } else {
      consent.value = parsed.consent
      loadConsentBasedScripts(parsed.consent)
    }
  } catch {
    localStorage.removeItem(CONSENT_KEY)
    showBanner.value = true
  }
}

function acceptCookies() {
  consent.value = {
    necessary: true,
    analytics: true,
    marketing: true,
    youtube: true,
    facebook: true,
    maps: true,
  }
  saveConsent()
  loadConsentBasedScripts(consent.value)
  showBanner.value = false
}

function refuseCookies() {
  consent.value = {
    necessary: true,
    analytics: false,
    marketing: false,
    youtube: false,
    facebook: false,
    maps: false,
  }
  saveConsent()
  showBanner.value = false
}

function saveCustomConsent() {
  saveConsent()
  loadConsentBasedScripts(consent.value)
  showModal.value = false
  showBanner.value = false
}

function loadScript(src: string, id?: string) {
  if (id && document.getElementById(id)) return
  const script = document.createElement('script')
  script.src = src
  script.async = true
  if (id) script.id = id
  document.head.appendChild(script)
}

function loadConsentBasedScripts(consent: typeof consent.value) {
  if (consent.analytics) {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX', 'gtag-js')
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXX')
  }

  if (consent.marketing) {
    loadScript('https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX', 'ads-js')
    // Ajouter ici votre balise marketing personnalisée si besoin
  }

  if (consent.youtube) {
    // Les iframes YouTube devront être conditionnelles dans le template également
    // Exemple : v-if="consent.youtube"
  }

  if (consent.facebook) {
    loadScript('https://connect.facebook.net/en_US/fbevents.js', 'fb-pixel')
    // Ajouter ici votre pixel config si nécessaire
  }

  if (consent.maps) {
    loadScript('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY', 'google-maps')
  }
}

onMounted(() => {
  loadConsent()
})
</script>

