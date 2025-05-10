<template>
  <div v-if="maintenanceData.enabled" class="h-screen flex items-center justify-center bg-sky-50 dark:bg-sky-900 text-center p-8">
    <div class="-mt-96">
      <h1 class="text-4xl font-bold mb-4 text-sky-700 dark:text-white">🚧 En maintenance</h1>
      <p class="text-lg text-sky-700 mb-2 dark:text-white">{{ maintenanceData.message }}</p>
      <p class="text-lg text-sky-700 dark:text-white">{{ maintenanceData.expectedReturn }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const maintenanceData = ref({
  enabled: false,
  message: '',
  expectedReturn: ''
});

const loadMaintenanceData = async () => {
  try {
    const res = await fetch('/api/maintenance', { cache: 'no-store' });
    const data = await res.json();
    maintenanceData.value = {
      enabled: data.enabled || false,
      message: data.message || 'Le site est temporairement indisponible.',
      expectedReturn: data.expectedReturn || 'Merci de revenir plus tard !',
    };
  } catch (error) {
    console.error('Erreur chargement /api/maintenance:', error);
  }
};

onMounted(() => {
  loadMaintenanceData();
});

// Vérifie régulièrement si la maintenance est terminée
setInterval(async () => {
  await loadMaintenanceData();
  if (!maintenanceData.value.enabled) {
    window.location.href = '/';
  }
}, 5000);
</script>

