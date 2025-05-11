<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 text-center p-6">
    <div>
      <h1 class="text-4xl font-bold mb-4 text-sky-700 dark:text-white">🚧 Maintenance en cours</h1>
      <p class="text-lg mb-2 text-sky-700 dark:text-white">Notre site est actuellement en maintenance.</p>
      <p class="text-sky-700 dark:text-white">
        Merci de revenir plus tard.<br />
        Retour prévu : <strong>{{ expectedReturn }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/maintenance');
const expectedReturn = data.value?.expectedReturn || 'Indisponible';
</script>








