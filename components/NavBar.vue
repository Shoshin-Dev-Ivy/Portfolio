<template>
    <div class="w-auto">
        <nav class="md:grid grid-cols-2 md:row-span-4 md:items-center md:justify-items-center 2xl:grid-cols-2 2xl:gap-2">
            <div class="flex justify-center mx-auto md:flex md:items-start md:col-span-2 md:my-2 md:mt-10 md:w-auto md:justify-evenly 2xl:items-center 2xl:col-span-2 2xl:mt-0">
                <div class="flex justify-center 2xl:justify-center">
                    <img src="assets/images/logo.svg" alt="Logo" class="h-16 w-16 my-6 mx-2 rounded-full border-2 border-sky-700 dark:border-orange-400 cursor-pointer" @click="showDefinitions" />
                    <div class="flex text-2xl text-orange-400 mt-10 mb-10 -ml-1">
                        <p class="font-black text-orange-400">{</p> 
                        <p class="flex text-sky-700 mx-1 dark:text-white">{{ $t("Shoshin") }}</p>
                        <p class="flex text-2xl text-orange-400 font-black mx-1">{{ $t("Web") }}</p> 
                        <p class="flex text-sky-700 dark:text-white mx-1">{{ $t("Services") }}</p>  
                        <p class="font-black text-orange-400">}</p>
                    </div>
                </div>
            </div> 
            <div class="2xl:hidden">
                <button @click="toggleMenu" value="hamburger"  
                class ="flex flex-col justify-around justify-self-center h-8 w-8 p-1 my-4 ml-2 mb-16 rounded md:hidden" aria-label="Toggle menu"> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                <span class="h-0.5 rounded bg-sky-700 dark:bg-white w-full"></span> 
                </button> 
                <div v-if="isMenuOpen"  class="flex flex-col pt-8"> 
                    <NuxtLink class="flex justify-center -mt-10 text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 py-2" aria-label="Cliquez ici pour revenir sur la page d'accueil" 
                    :to="{ path: localePath('/'), hash:'' }">{{ $t("Accueil") }}
                    </NuxtLink> 
                    <NuxtLink class="flex justify-center text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie services" 
                    :to="{ path: localePath('/'), hash:'#item-1' }">{{ $t("Services") }}
                    </NuxtLink>
                    <NuxtLink class="flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie skills" 
                    :to="{ path: localePath('/'), hash:'#item-2' }">{{ $t("Skills") }}
                    </NuxtLink>
                    <NuxtLink class="flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie parcours" 
                    :to="{ path: localePath('/'), hash:'#item-3' }">{{ $t("Parcours") }}
                    </NuxtLink>
                    <NuxtLink class="flex justify-center text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2 md:flex-wrap" aria-label="Cliquez ici pour accéder à la partie portfolio" 
                    :to="{ path: localePath('/'), hash:'#item-4' }">{{ $t("Projets") }}
                    </NuxtLink>
                    <NuxtLink class="flex justify-center mb-10 text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 py-2" aria-label="Cliquez ici pour accéder à la partie contact" 
                    :to="{ path: localePath('/'), hash:'#item-5' }">{{ $t("Contact") }}
                    </NuxtLink> 
                </div>
            </div>        
            <div class="hidden md:block md:col-span-6 md:mx-auto md:justify-items-center md:items-center">
                <NuxtLink class="text-orange-400 font-black hover:underline dark:text-white text-2xl 
                hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour revenir sur la page d'accueil" 
                :to="{ path: localePath('/'), hash:'' }">{{ $t("Accueil") }}
                </NuxtLink>
                <NuxtLink class="text-orange-400 font-black dark:text-white text-2xl hover:underline 
                hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie services" 
                :to="{ path: localePath('/'), hash:'#item-1' }">{{ $t("Services") }}
                </NuxtLink>
                <NuxtLink class="text-orange-400 font-black dark:text-white text-2xl hover:underline 
                hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie skills" 
                :to="{ path: localePath('/'), hash:'#item-2' }">{{ $t("Skills") }}
                </NuxtLink>
                <NuxtLink class="text-orange-400 font-black dark:text-white text-2xl hover:underline 
                hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie parcours" 
                :to="{ path: localePath('/'), hash:'#item-3' }">{{ $t("Parcours") }}
                </NuxtLink>
                <NuxtLink class="text-orange-400 font-black dark:text-white text-2xl hover:underline 
                hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie projets" 
                :to="{ path: localePath('/'), hash:'#item-4' }">{{ $t("Projets") }}
                </NuxtLink>
                <NuxtLink class="text-orange-400 font-black dark:text-white text-2xl hover:underline 
                hover:underline-offset-8 mx-6 -mt-2" aria-label="Cliquez ici pour accéder à la partie contact" 
                :to="{ path: localePath('/'), hash:'#item-5' }">{{ $t("Contact") }}
                </NuxtLink>
            </div>
            <div class="flex justify-center md:mt-2">
                <a href="https://calendly.com/shoshinwebservices" aria-label="Cliquez ici pour prendre un rendez-vous sur l'agenda Calendly" role="button"  cta-button target="_blank">
                    <button class="justify-items-center text-sky-700 text-xl xl:text-lg dark:text-white hover:bg-gradient-to-r from-orange-400 -mt-4 px-8 py-6 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl animate-pulse focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2">
                        {{ $t("RDV") }}
                    </button>
                </a>
            </div>
            <div class="2xl:col-span-1">
                <div class="2xl:col-span-1 justify-items-center my-10 md:justify-items-center md:my-10">
                    <ModeSwitch />
                </div> 
                <div class="justify-self-center my-10">
                    <button @click="setLocale('fr')" role="button" class="dark:text-white text-2xl px-4"><img src="assets/images/flagFR.webp" alt="drapeau français" 
                        class="w-7 border-2 border-sky-700 dark:border-orange-400"/>
                    </button>
                    <button @click="setLocale('en')" role="button" class="dark:text-white text-2xl px-4"><img src="assets/images/flagEN.webp" alt="drapeau anglais" 
                        class="w-7 border-2 border-sky-700 dark:border-orange-400" />
                    </button>
                    <button @click="setLocale('ja')" role="button" class="dark:text-white text-2xl px-4"><img src="assets/images/flagJA.webp" alt="drapeau japonais" 
                        class="w-7 border-2 border-sky-700 dark:border-orange-400"/>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts" defer>

const localePath = useLocalePath()
const { setLocale } = useI18n()
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const showDefinitions = () => {
  const event = new CustomEvent('show-definitions');
  window.dispatchEvent(event);
};

useHead({
  meta: [
    {
      name: 'description',
      content: 'Barre de navigation avec le logo, et les raccourcis Accueil, Compétences, Projets, Contact et un CTA RDV.',
    },
  ],
});
</script>

<style scoped>
</style>

