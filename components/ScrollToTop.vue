// components/ScrollToTop.vue
<template>
  <button v-if="isVisible" class="scroll-to-top" @click="scrollToTop">
    <Icon name="material-symbols:arrow-circle-up-outline-rounded" class="size-16 bg-orange-400" />
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

// Function to check scroll position
const handleScroll = () => {
  isVisible.value = window.scrollY > 200; // Show button after scrolling down 200px
};

// Function to scroll to the top smoothly
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
