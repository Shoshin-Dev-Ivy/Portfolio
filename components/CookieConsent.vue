<template>
  <div>
    <div v-if="showBanner" class="fixed bottom-0 left-0 w-full bg-sky-700 text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p class="text-md">{{ $t('MessageCookie') }}</p>
        <NuxtLink to="/section/confidentialite" class="hover:underline decoration-white underline-offset-4 ml-2">
        {{ $t('Confidentialite') }}
      </NuxtLink>
      <div>
        <NuxtLink to="/section/confidentialite" class="">
          {{ $t('reCAPTCHAFormulaire') }}
        </NuxtLink>
      </div>
      </div>
      <div class="flex gap-2">
        <button @click="acceptAll" class="bg-green-600 hover:bg-green-700 text-black px-4 py-2 rounded">
          {{ $t('Accept') }}
        </button>
        <button @click="rejectAll" class="bg-red-600 hover:bg-red-700 text-black px-4 py-2 rounded">
          {{ $t('Reject') }}
        </button>
        <button @click="showModal = true" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
          {{ $t('Customize') }}
        </button>
      </div>
    </div>

    <!-- Modal de personnalisation -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 class="text-xl font-semibold mb-4">{{ $t('CustomizeTitle') }}</h2>

        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <label>{{ $t('Necessary') }}</label>
            <input type="checkbox" checked disabled />
          </div>
          <div class="flex justify-between items-center" v-for="category in optionalCategories" :key="category.key">
            <label>{{ $t(category.label) }}</label>
            <input type="checkbox" v-model="consent[category.key]" />
          </div>
        </div>

        <div class="mt-6 flex justify-end gap-2">
          <button @click="savePreferences" class="bg-green-600 hover:bg-green-700 text-black px-4 py-2 rounded">
            {{ $t('Save') }}
          </button>
          <button @click="cancel" class="bg-blue-300 hover:bg-blue-400 text-black px-4 py-2 rounded">
            {{ $t('Cancel') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const showModal = ref(false)

const consent = ref({
  analytics: false,
  marketing: false,
  youtube: false,
  facebook: false,
  recaptcha: false
})

const optionalCategories = [
  { key: 'analytics', label: 'Analytics' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'youtube', label: 'Youtube' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'recaptcha', label: 'Maps' } // ← Tu peux ajuster le label si besoin
]

onMounted(() => {
  const stored = localStorage.getItem('cookieConsent')
  if (stored) {
    const parsed = JSON.parse(stored)
    consent.value = parsed
    activateServices()
  } else {
    showBanner.value = true
  }
})

const savePreferences = () => {
  localStorage.setItem('cookieConsent', JSON.stringify(consent.value))
  showModal.value = false
  showBanner.value = false
  activateServices()
}

const cancel = () => {
  showModal.value = false
}

const acceptAll = () => {
  for (const key in consent.value) {
    consent.value[key] = true
  }
  savePreferences()
}

const rejectAll = () => {
  for (const key in consent.value) {
    consent.value[key] = false
  }
  savePreferences()
}

// Activation conditionnelle des services
const activateServices = () => {
  const c = consent.value

  

  // Tu peux ajouter les autres scripts ici selon les catégories (YouTube, Facebook, etc.)
}
</script>
