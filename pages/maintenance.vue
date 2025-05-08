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

// Fonction pour récupérer les données du fichier maintenance.json
const loadMaintenanceData = async () => {
  try {
    const res = await fetch('/maintenance.json', { cache: 'no-store' });
    const data = await res.json();
    maintenanceData.value = {
      enabled: data.enabled || false,
      message: data.message || 'Le site est temporairement indisponible.',
      expectedReturn: data.expectedReturn || 'Merci de revenir plus tard !',
    };
  } catch (error) {
    console.error('Erreur chargement maintenance.json:', error);
  }
};

onMounted(() => {
  loadMaintenanceData();
});

// Rechargement manuel de la page si `enabled` est à `false`
const checkMaintenanceStatus = () => {
  loadMaintenanceData();
  if (!maintenanceData.value.enabled) {
    window.location.href = '/'; // Redirige vers la page d'accueil si maintenance désactivée
  }
};

// Vérification périodique (si besoin)
setInterval(checkMaintenanceStatus, 5000);  // Vérifier toutes les 5 secondes si nécessaire
</script>
