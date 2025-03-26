<template>
    <div class="flex">
      <!-- Logo cliquable -->
      <img
        src="/assets/images/logo.svg"
        alt="Logo"
        @click="showDefinition"
        class="h-16 w-16 my-8 mx-2 ml-8 rounded-full border-2 dark:border-orange-400 cursor-pointer"
      />
  
      <!-- Définition qui apparaît pendant 10 secondes -->
      <div
        v-if="definitionVisible"
        class="flex flex-col justify-center mt-24 text-black dark:text-white">
        <p>{{ $t("ShoshinDefinition") }}</p> </br>
        <p>{{ $t("ShoshinDefinition2") }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Variable pour gérer l'état de la définition
  const definitionVisible = ref(false);
  
  // Fonction pour afficher la définition
  const showDefinition = () => {
    definitionVisible.value = true;
  
    // Masquer la définition après 10 secondes
    setTimeout(() => {
      definitionVisible.value = false;
    }, 10000); // 10 000 ms = 10 secondes
  };
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
  </style>
  