<template>
    <div class="flex items-center justify-center gap-3 h mb-10 bg-sky-50 dark:bg-sky-900 sticky top-0 z-20 box-shadow-xl box-shadow-green-400">
        <div class="flex"> 
            <img src="assets/images/logo.svg" alt="logo" class="h-16 w-16 my-8 mx-6 rounded-full border-2 border-sky-700 dark:border-orange-400"/>
            <h1 class="flex text-2xl text-orange-400 mt-11 mr-28">{ <p class="text-sky-700 dark:text-white mx-1">{{ $t("Shoshin") }}</p >
                <p class="text-orange-400 font-black mx-1">{{ $t("Web") }} </p> <p class="text-2xl text-sky-700 dark:text-white mx-1">{{ $t("Services") }}</p> }
            </h1>
            <nav class="flex justify-around">
                <div  class = "flex flex-col mt-11"> 
                    <button @click = "toggleMenu"  value = "hamburger"  class ="flex flex-col justify-around h-8 w-8 p-1 rounded hidden"> 
                    <!-- Icône Hamburger (3 lignes) --> 
                    <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                    <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                    <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                    </button> 
                    <template  v-if = "isMenuOpen"  class = "flex flex-col pt-8"> 
                    <!-- Éléments de menu --> 
                    <a class="flex text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 py-2" aria-label="Cliquez ici pour revenir suur la page d'accueil"><NuxtLink to="/">Accueil</NuxtLink>
                    </a > 
                    <a class="flex text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie skills"><NuxtLink to="#1">Skills</NuxtLink>
                    </a > 
                    <a class="flex text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie portfolio"><NuxtLink to="#2">Portfolio</NuxtLink>
                    </a > 
                    <a class="flex text-orange-400 font-black dark:text-white text-2xl h hover:underline hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie contact"><NuxtLink to="#3">Contact</NuxtLink>
                    </a > 
                    </template > 
                </div > 
                <button class="text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour revenir suur la page d'accueil">
                    <NuxtLink :to="{ path: localePath('/'), hash:'' }">{{ $t("Accueil") }}</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie skills">
                    <NuxtLink :to="{ path: localePath('/'), hash:'#1' }">{{ $t("Skills") }}</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie projets">
                    <NuxtLink :to="{ path: localePath('/'), hash:'#2' }">{{ $t("Projets") }}</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl h hover:underline hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie contact">
                    <NuxtLink :to="{ path: localePath('/'), hash:'#3' }">{{ $t("Contact") }}</NuxtLink>
                </button>
                <a href="https://calendly.com/shoshinwebservices" cta-button target="_blank">
                    <button class="text-sky-700 text-2xl dark:text-white hover:bg-gradient-to-r from-orange-400 my-6 mx-6 px-2 py-4 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl  animate-pulse">
                     {{ $t("RDV") }}
                    </button>
                </a> 
            </naV>
            <div>
                <ModeSwitch class="my-6 mx-8"/>
                <div class="my-4">
                    <button @click="setLocale('fr')" class="dark:text-white text-2xl px-2"><img src="assets/images/FlagFR.png" alt="drapeau français" class="h-6 w-7 border-2 border-sky-700 dark:border-orange-400"/></button>
                    <button @click="setLocale('en')" class="dark:text-white text-2xl px-2"><img src="assets/images/FlagEN.png" alt="drapeau anglais" class="h-6 w-7 border-2 border-sky-700 dark:border-orange-400" /></button>
                    <button @click="setLocale('ja')" class="dark:text-white text-2xl px-2"><img src="assets/images/FlagJP.png" alt="drapeau japonais" class="h-6 w-7 border-2 border-sky-700 dark:border-orange-400"/></button>
                </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { setLocale } = useI18n()
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
</style>

