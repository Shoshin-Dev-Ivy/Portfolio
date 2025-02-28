<template>
<head>
   
</head>
<div>
        <div class="flex justify-center bg-sky-50 dark:bg-sky-900">
                <div>
                        <div class="flex">
                                <img src="assets/images/shoshin.svg"alt="logo" class="bg-gradient-to-r from-orange-400 dark:bg-white h-10 w-10 ml-12 mx-6 my-10 rounded-full shadow-2xl shadow-white bg-white"/>
                                <h1 class="flex text-2xl text-orange-400 mt-10">
                                        { <p class="text-sky-700 mx-1 dark:text-white">Shoshin</p >
                                        <p class="text-2xl text-orange-400 font-black mx-1">Web </p> 
                                        <p class="text-sky-700 dark:text-white mx-1">Services</p> } 
                                </h1>
                        </div>
                        <div class="flex -mt-16">
                                <h2 class="text-2xl text-sky-700 font-black dark:text-white my-10 ml-28 mr-4">Développeur</h2>
                                <h2 class="text-3xl text-orange-400 font-black my-9">Web</h2>
                        </div>
                        <div class="flex -mt-10">
                                <ul class="flex items-center flex-row mx-20 my-6">
                                        <li class="ml-14">
                                                <a href="https://www.linkedin.com/in/pierre-tinard-867200207/" target="_blank"><Icon name="entypo-social:linkedin" class=" size-8 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400"  aria-label="Cliquez ici pour accéder mon profil LinkedIn" />
                                                </a>
                                        </li>
                                        <li>
                                                <a href="mailto:shoshinwebservices@gmail.com" target="_blank"><Icon name="material-symbols:mail-outline" class="size-10 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400" aria-label="Cliquez ici pour envoyer un e-mail" />
                                                </a>
                                        </li>
                                        <li>
                                                <a href="https://github.com/ShoshinDevIvy" target="_blank"><Icon name="mdi:github" class="size-10 mx-2 text-sky-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400" aria-label="Cliquez ici pour accéder mon profil GitHub" />
                                                </a>
                                        </li>
                                </ul>
                        </div>
                        <p class="flex mt-4 mb-2 text-sky-700 dark:text-white">
                                <Icon name="lucide:copyright" class="mx-4 "/>2025 - Shoshin Web Services. Tout droits réservés.
                        </p>
                        <div class="flex -mb-24">
                                <a class="text-sky-700 dark:text-white ml-12" aria-label="Cliquez ici pour aller suur la page des mentions légales"><NuxtLink to="/mentionsLegales">Mentions Légales</NuxtLink>
                                </a >
                                <p class="text-sky-700 dark:text-white mx-2">-</p>
                                <a class="text-sky-700 dark:text-white ml-1" aria-label="Cliquez ici pour aller suur la page des mentions légales"><NuxtLink to="/confidentialite">Politique de confidentialité</NuxtLink>
                                </a >
                        </div>
                </div>
        </div>    
        <div class="bg-sky-50 dark:bg-sky-900 flex justify-end px-20 pb-10">
                <ScrollToTop /> 
        </div>
</div> 
</template>


<script> 
</script>

<style>
</style>