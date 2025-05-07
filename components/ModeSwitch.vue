<template>
  <ClientOnly>
    <div class="relative group">
      <button
        @click="toggleTheme"
        class="flex items-center justify-center w-16 h-16 rounded-full transition-colors duration-300"
        :aria-label="enabled ? $t('theme.toLight') : $t('theme.toDark')"
      >
        <!-- Icônes affichées seulement après que le thème est bien initialisé -->
        <SunIcon
          v-if="isMounted && !enabled"
          class="w-7 h-7 text-yellow-500 hover:text-yellow-600 transition"
        />
        <MoonIcon
          v-else-if="isMounted && enabled"
          class="w-7 h-7 text-gray-300 hover:text-gray-200 transition"
        />
      </button>

      <!-- Infobulle traduite avec durée augmentée -->
      <div
        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none whitespace-nowrap z-10"
      >
        {{ isMounted ? (enabled ? $t('ToLight') : $t('ToDark')) : '' }}
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const { enabled, toggleTheme } = useTheme()

const isMounted = ref(false)

// Déterminer l'initialisation complète du composant
onMounted(() => {
  // Appliquer le thème correctement après le montage
  isMounted.value = true
})

watch(() => enabled, (newVal) => {
  // Appliquer ou retirer la classe "dark" dynamiquement
  if (newVal) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>




