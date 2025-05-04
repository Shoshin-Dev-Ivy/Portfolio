<template>
  <div class="relative group">
    <button
      @click="toggleTheme"
      class="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
      :aria-label="enabled ? $t('theme.toLight') : $t('theme.toDark')"
    >
      <SunIcon
        v-if="!enabled"
        class="w-7 h-7 text-yellow-500 hover:text-yellow-600 transition"
      />
      <MoonIcon
        v-else
        class="w-7 h-7 text-gray-300 hover:text-gray-200 transition"
      />
    </button>

    <!-- Infobulle traduite -->
    <div
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
    >
      {{ enabled ? $t('ToLight') : $t('ToDark') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
const { enabled, toggleTheme } = useTheme()
</script>
