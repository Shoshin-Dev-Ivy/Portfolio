<template>
  <div class="h-screen flex items-center justify-center bg-sky-50 dark:bg-sky-900 text-center p-8">
    <div class="-mt-96">
      <h1 class="text-4xl font-bold mb-4 text-sky-700 dark:text-white">🚧 En maintenance</h1>
      <p class="text-lg text-sky-700 mb-2 dark:text-white">{{ maintenanceData.message }}</p>

      <!-- Affichage du compte à rebours si l'heure cible est définie -->
      <p v-if="timeRemaining" class="text-lg text-sky-700 dark:text-white">
        Retour prévu dans : {{ timeRemaining }}
      </p>
      <p v-else class="text-lg text-sky-700 dark:text-white">{{ maintenanceData.expectedReturn }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const maintenanceData = reactive({
  message: 'Le site est temporairement indisponible.',
  expectedReturn: 'Merci de revenir plus tard !'
});

const timeRemaining = ref(null); // pour le compte à rebours

onMounted(async () => {
  try {
    const res = await fetch('/maintenance.json', { cache: 'no-store' });
    const data = await res.json();

    maintenanceData.message = data.message || maintenanceData.message;
    maintenanceData.expectedReturn = data.expectedReturn || maintenanceData.expectedReturn;

    // Calcul du compte à rebours si l'heure cible est définie
    if (data.expectedReturn) {
      const targetDate = new Date(data.expectedReturn); // Parse l'heure cible en Date
      startCountdown(targetDate);
    }

    console.log('maintenance.json chargé :', data);
  } catch (error) {
    console.error('Erreur chargement maintenance.json :', error);
  }
});

// Fonction pour démarrer le compte à rebours
function startCountdown(targetDate) {
  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff > 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timeRemaining.value = `${hours}h ${minutes}m ${seconds}s`;
    } else {
      timeRemaining.value = 'Retour prévu';
      clearInterval(interval); // Arrêter le compte à rebours une fois l'heure passée
    }
  }, 1000); // Met à jour toutes les secondes
}
</script>



