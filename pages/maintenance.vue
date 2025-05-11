<template>
  <div class="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 class="text-4xl font-bold mb-4">🛠️ Maintenance en cours</h1>
    <p class="text-lg mb-2">{{ message }}</p>
    <p v-if="expectedReturn" class="text-sm text-gray-500">
      Retour prévu le : {{ new Date(expectedReturn).toLocaleString() }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/maintenance')

const message = data.value?.message || 'Site momentanément indisponible.'
const expectedReturn = data.value?.expectedReturn || ''
</script>





