<template>
  <div>
    <NuxtPage />
    <button v-show="showButton" @click="scrollToTop" class="fixed bottom-6 right-6 z-50 p-3 transition-all duration-900 opacity-0 translate-y-6" :class="{ 'opacity-100 translate-y-0': showButton }">
    <Icon name="material-symbols:arrow-circle-up-outline-rounded" class="size-16 bg-orange-400 p-3 rounded-full shadow-lg transition-all" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  // Détection si le footer est visible (ou tout en bas de la page)
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const bodyHeight = document.body.offsetHeight

  const scrollPosition = scrollY + windowHeight
  const nearBottom = scrollPosition >= bodyHeight - 100 // marge de 100px

  showButton.value = nearBottom
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

      <!-- <Icon name="material-symbols:arrow-circle-up-outline-rounded" class="size-16 bg-orange-400 p-3 rounded-full shadow-lg transition-all" /> -->
    

