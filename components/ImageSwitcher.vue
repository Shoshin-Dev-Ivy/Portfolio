<template>
    <div>
      <img :src="imageSrc" alt="Image dynamique" />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

// Déclarez une variable pour gérer l'image à afficher
const imageSrc = ref('/assets/images/bibi.jpg');

// Remplacez l'image après 10 secondes
onMounted(() => {
  setTimeout(() => {
    imageSrc.value = '/assets/images/aikido.jpg';
  }, 10000); // 10 secondes = 10000 ms
});
</script>
  
<style scoped>
  img {
    width: 100%;
    height: auto;
  }
</style>
  