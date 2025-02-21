<template>
    <div class="flex items-center justify-center gap-3 h mb-10 bg-sky-50 dark:bg-sky-900 sticky top-0 z-20 box-shadow-xl box-shadow-green-400">
        <div class="flex"> 
            <img src="assets/images/shoshin.svg" alt="logo" class="h-10 w-10 my-10 mx-6 rounded-full bg-white dark:shadow shadow-2xl  dark:shadow-white bg-gradient-to-r from-orange-400 dark:bg-white"/>
            <h1 class="flex text-2xl text-orange-400 mt-11 mr-28">{ <p class="text-sky-700 dark:text-white mx-1">Shoshin</p >
                <p class="text-orange-400 font-black mx-1">Web </p> <p class="text-2xl text-sky-700 dark:text-white mx-1">Services</p> }
            </h1>
            <nav class="flex justify-around">
                <button class="text-orange-400 font-black hover:underline dark:text-white text-2xl  hover:underline-offset-8 mx-6 -mt-5" aria-label="Cliquez ici pour revenir suur la page d'accueil">
                    <NuxtLink to="/">Accueil</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-5" aria-label="Cliquez ici pour accéder à la partie skills">
                    <NuxtLink to="#1">Skills</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl hover:underline hover:underline-offset-8 mx-6 -mt-5" aria-label="Cliquez ici pour accéder à la partie portfolio">
                    <NuxtLink to="#2">Portfolio</NuxtLink>
                </button>
                <button class="text-orange-400 font-black dark:text-white text-2xl h hover:underline hover:underline-offset-8 mx-6 -mt-5" aria-label="Cliquez ici pour accéder à la partie contact">
                    <NuxtLink to="#3">Contact</NuxtLink>
                </button>
                <a href="https://calendly.com/shoshinwebservices" cta-button target="_blank">
                    <button class="text-sky-700 text-2xl dark:text-white hover:bg-gradient-to-r from-orange-400 my-12 ml-6 px-2 py-4 border-solid border-2 border-orange-400 hover:border-sky-700 dark:hover:border-white font-black rounded-xl -mr-3 mt-7">
                        Prendre un RDV
                    </button>
                </a> 
                <span class="relative flex h-7 w-7 my-4">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-red-500"><p class="px-2 py-1 text-white">1</p></span>
                </span>
                <button class="text-2xl text-orange-400 mx-6"></button>
            </naV>
            <ModeSwitch class="my-10"/>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>

