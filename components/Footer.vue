<template>
<head>
   
</head>
                <div class="flex flex-col">
                        <div class="flex justify-center mx-auto">
                                <img src="assets/images/logo.svg"alt="logo" class="flex h-16 w-16 my-8 mx-2 rounded-full border-2 border-sky-700 dark:border-orange-400"/>
                                <h1 class="flex text-2xl text-orange-400 mt-10 mb-10">{ 
                                <p class="flex text-sky-700 mx-1 dark:text-white">{{ $t("Shoshin") }}</p>
                                <p class="flex text-2xl text-orange-400 font-black mx-1">{{ $t("Web") }}</p> 
                                <p class="flex text-sky-700 dark:text-white mx-1">{{ $t("Services") }}</p> } 
                        </h1>
                        </div>
                        <div class="flex justify-center mx-auto -mt-12">
                                <h2 class="text-2xl text-sky-700 font-black dark:text-white my-10 mr-4">{{ $t("Developpeur") }}</h2>
                                <h2 class="text-3xl text-orange-400 font-black my-9">{{ $t("Web") }}</h2>
                        </div>
                        
                        <ul class="flex justify-center mx-auto -mt-1">
                                <li>
                                        <a href="https://www.linkedin.com/in/pierre-tinard-867200207/" target="_blank">
                                                <Icon name="entypo-social:linkedin" class=" size-8 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"  
                                                aria-label="Cliquez ici pour accéder mon profil LinkedIn" />
                                        </a>
                                </li>
                                <li>
                                <a href="https://github.com/ShoshinDevIvy" target="_blank">
                                        <Icon name="mdi:github" class="size-9 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400" 
                                        aria-label="Cliquez ici pour accéder mon profil GitHub" />
                                </a>
                                </li>
                        </ul>
                        <div class="flex flex-col justify-center mx-auto mt-4">
                                <p class="flex mx-auto text-sky-700 dark:text-white">
                                <Icon name="lucide:copyright" class="mr-2 -my-0"/>{{ $t("2025") }} - {{ $t("Shoshin") }} {{ $t("Web") }}  {{ $t("Services") }}
                                </p>
                                <p class="flex mx-auto text-sky-700 dark:text-white">{{ $t("Droits") }}</p>
                        </div>
                        <div class="flex flex-col justify-center mx-auto mt-4">
                                <a class="flex text-sky-700 dark:text-white ml-8" aria-label="Cliquez ici pour aller suur la page des mentions légales">
                                        <NuxtLink :to="{ path: localePath('/mentionsLegales') }">{{ $t("Mentions") }}</NuxtLink>
                                </a >
                                <p class="flex justify-center text-sky-700 dark:text-white mx-1">-</p>
                                <a class="text-sky-700 dark:text-white ml-1" aria-label="Cliquez ici pour aller suur la page des mentions légales">
                                        <NuxtLink :to="{ path: localePath('/confidentialite') }">{{ $t("Confidentialite") }}</NuxtLink>
                                </a>
                        </div>
                </div>    
                <div class="bg-sky-50 dark:bg-sky-900 flex justify-center mt-4 mr-auto">
                        <ScrollToTop /> 
                </div>
</template>


<script setup lang="ts"> 
const localePath = useLocalePath();
</script>

<style>
</style>