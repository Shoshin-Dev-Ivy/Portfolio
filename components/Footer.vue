<template>
        <footer>
                <div class="flex justify-center mx-auto">
                        <img src="assets/images/logo.svg"alt="logo" class="flex h-16 w-16 my-6 mx-2 rounded-full border-2 border-sky-700 dark:border-orange-400"/>
                        <div class="flex text-2xl text-orange-400 mt-10 mb-10 -ml-1">
                                <p class="font-black text-orange-400">{</p> 
                                <p class="flex text-sky-700 mx-1 dark:text-white">{{ $t("Shoshin") }}</p>
                                <p class="flex text-2xl text-orange-400 font-black mx-1">{{ $t("Web") }}</p> 
                                <p class="flex text-sky-700 dark:text-white mx-1">{{ $t("Services") }}</p>
                                <p class="font-black text-orange-400">}</p>
                        </div>
                </div>
                <div class="flex justify-center mx-auto -mt-12">
                        <h2 class="text-2xl text-sky-700 font-black dark:text-white my-10 mr-4">{{ $t("Developpeur") }}</h2>
                        <h2 class="text-3xl text-orange-400 font-black my-9">{{ $t("Web") }}</h2>
                </div>

                <ul class="flex justify-center mx-auto -mt-1">
                        <li>
                                <a href="https://www.linkedin.com/in/pierre-tinard-867200207/" aria-label="Cliquez ici pour accéder mon profil LinkedIn" target="_blank">
                                <Icon name="entypo-social:linkedin" class="size-8 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"/>
                                </a>
                        </li>
                        <li>
                                <a href="https://github.com/Shoshin-Dev-Ivy" aria-label="Cliquez ici pour accéder mon profil GitHub" target="_blank">
                                <Icon name="mdi:github" class="size-9 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"/>
                                </a> 
                        </li>
                </ul>
                <div class="flex flex-col justify-center md:flex-row mt-4 lg:flex justify-items-normal lg:w-full">
                        <p class="flex mx-auto md:mx-0 md:mr-6 text-sky-700 dark:text-white">
                        <Icon name="lucide:copyright" class="mr-2 -my-0"/>{{ $t("2025") }} - {{ $t("Shoshin") }} {{ $t("Web") }}  {{ $t("Services") }}
                        </p>
                        <p class="flex mx-auto md:mx-0 text-sky-700 dark:text-white">{{ $t("Droits") }}</p>
                </div>
                <div class="flex flex-col justify-center mx-auto mt-4 md:flex-row lg:flex justify-items-normal lg:w-full pb-4">
                        <NuxtLink :to="localePath('/section/mentionslegales')" class="flex justify-center text-sky-700 dark:text-white"
                        aria-label="Cliquez ici pour aller sur la page des mentions légales">
                        {{ $t("Mentions") }}
                        </NuxtLink>
                        <p class="flex justify-center text-sky-700 dark:text-white mx-1">-</p>
                        <NuxtLink :to="localePath('/section/confidentialite')" class="flex justify-center text-sky-700 dark:text-white"
                        aria-label="Cliquez ici pour aller sur la page de confidentialité">
                        {{ $t("Confidentialite") }}
                        </NuxtLink>
                </div>
        </footer>
</template>


<script setup lang="ts" defer> 
const localePath = useLocalePath();

useHead({
  meta: [
    {
      name: 'description',
      content: 'Pied de page, footer. ',
    },
  ],
});
</script>

<style>
</style>