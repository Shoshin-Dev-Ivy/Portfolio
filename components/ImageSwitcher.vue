<template>
  <div class="flex object-cover w-full h-full">
    <img
      :src="currentImage"
      alt="Image"
      class="transition-all duration-500"
      :class="{
        'opacity-100': isChanging,
        'opacity-100': !isChanging
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Définir les images à afficher
const images = [
  '/bibi.jpg', // Image initiale
  '/aikido.jpg', // Image après 10 secondes
];

// Gestion de l'état de l'image affichée
const currentImage = ref(images[0]);
const isChanging = ref(false);

// Fonction pour changer d'image après 10 secondes
const changeImage = () => {
  isChanging.value = true;

  // Attendre 10 secondes puis changer l'image
  setTimeout(() => {
    currentImage.value = images[1];

    // Attendre encore 10 secondes puis revenir à l'image initiale
    setTimeout(() => {
      currentImage.value = images[0];
      isChanging.value = false;
    }, 10000);
  }, 10000);
};

onMounted(() => {
  // Lancer la fonction au montage du composant
  changeImage();
});
</script>

<style scoped>
/* Appliquer des transitions pour adoucir le changement d'image */
img {
  transition: opacity 1s ease;
}
</style>
