<template>
    <div class="md:w-full">
        <nav class="md:grid grid-cols-4 md:items-center md:justify-items-center md:gap-2 md:w-auto">
                <div class="md:flex items-start md:col-span-2 md:my-2 md:mt-10 md:w-auto md:justify-evenly">
                    <LogoWithDefinition class="text-black dark:text-white"/> 
                    <div>
                        <h1 class="md:flex justify-start md:mt-10 text-2xl text-orange-400 px-2 md:mx-auto">{ <p class="text-sky-700 dark:text-white px-1">{{ $t("Shoshin") }}</p>
                        <p class="text-orange-400 font-black px-1">{{ $t("Web") }} </p> 
                        <p class="text-2xl text-sky-700 dark:text-white px-1">{{ $t("Services") }}</p> }
                    </h1>
                    </div>
                </div>                
            <div class="md:mt-10">
                <a href="https://calendly.com/shoshinwebservices" cta-button target="_blank">
                    <button class="text-sky-700 text-2xl dark:text-white hover:bg-gradient-to-r from-orange-400 -mt-4 px-2 py-4 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl animate-pulse">
                        {{ $t("RDV") }}
                    </button>
                </a>
            </div>
            <div>
                <div class="md:justify-items-center md:my-4">
                    <ModeSwitch />
                </div> 
                <div>
                <button @click="setLocale('fr')" class="dark:text-white text-2xl px-4"><img src="assets/images/FlagFR.png" alt="drapeau français" class="h-6 w-7 border-2 border-sky-700 dark:border-orange-400"/></button>
                <button @click="setLocale('en')" class="dark:text-white text-2xl px-4"><img src="assets/images/FlagEN.png" alt="drapeau anglais" class="h-6 w-7 border-2 border-sky-700 dark:border-orange-400" /></button>
                <button @click="setLocale('ja')" class="dark:text-white text-2xl px-4"><img src="assets/images/FlagJP.png" alt="drapeau japonais" class="h-6 w-7 border-2 border-sky-700 dark:border-orange-400"/></button>
                </div>
            </div>
            <div class ="">
                <button @click = "toggleMenu"  value = "hamburger"  class ="flex flex-col justify-around h-8 w-8 p-1 mb-8 ml-2 rounded md:hidden"> 
                <!-- Icône Hamburger (3 lignes) --> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                </button> 
                <template  v-if = "isMenuOpen"  class="flex flex-col pt-8"> 
                <!-- Éléments de menu --> 
                <a class="flex text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 py-2" 
                aria-label="Cliquez ici pour revenir suur la page d'accueil"><NuxtLink :to="{ path: localePath('/'), hash:'' }">{{ $t("Accueil") }}</NuxtLink>
                </a> 
                <a class="flex text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2" 
                aria-label="Cliquez ici pour accéder à la partie skills"><NuxtLink :to="{ path: localePath('/'), hash:'#1' }">{{ $t("Skills") }}</NuxtLink>
                </a> 
                <a class="flex text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 md:flex-wrap" 
                aria-label="Cliquez ici pour accéder à la partie portfolio"><NuxtLink :to="{ path: localePath('/'), hash:'#2' }">{{ $t("Projets") }}</NuxtLink>
                </a> 
                <a class="flex text-orange-400 font-black dark:text-white text-2xl h hover:underline hover:underline-offset-8 py-2" 
                aria-label="Cliquez ici pour accéder à la partie contact"><NuxtLink :to="{ path: localePath('/'), hash:'#3' }">{{ $t("Contact") }}</NuxtLink>
                </a> 
                </template> 
            </div> 
            <div class="hidden md:block md:col-span-full md:justify-items-center md:items-center md:mt-24">
                <button class="text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 mx-6 -mt-2" 
                aria-label="Cliquez ici pour revenir suur la page d'accueil">
                <NuxtLink :to="{ path: localePath('/'), hash:'' }">{{ $t("Accueil") }}</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-2"                 
                aria-label="Cliquez ici pour accéder à la partie skills">
                    <NuxtLink :to="{ path: localePath('/'), hash:'#1' }">{{ $t("Skills") }}</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-2" 
                aria-label="Cliquez ici pour accéder à la partie projets">
                    <NuxtLink :to="{ path: localePath('/'), hash:'#2' }">{{ $t("Projets") }}</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl h hover:underline hover:underline-offset-8 mx-6 -mt-2" 
                aria-label="Cliquez ici pour accéder à la partie contact">
                    <NuxtLink :to="{ path: localePath('/'), hash:'#3' }">{{ $t("Contact") }}</NuxtLink>
                </button>
            </div>
    </naV>
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

