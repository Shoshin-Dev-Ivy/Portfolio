<template>
    <div class="flex items-center justify-center gap-3 h mb-10 bg-slate-500 dark:bg-sky-950 sticky top-0 z-20 box-shadow-xl box-shadow-green-400">
        <div class="flex"> 
            <img src="assets/images/shoshin.svg" alt="logo" class="h-10 w-10 my-10 mx-6 rounded-full dark:shadow-2xl dark:shadow-white bg-gradient-to-r from-green-400 dark:bg-white"/>
            <h1 class=" flex text-2xl  text-green-400 dark:text-white mt-11 mr-28">{ <p class="text-black dark:text-white mx-1">Shoshin</p ><p class="text-green-400 mx-1">Web </p> <p class="text-black dark:text-white mx-1">Services</p> }</h1>
            <nav class="flex justify-around">
                <button class=" text-black hover:text-green-400 hover:underline dark:text-white dark-underline-green-400 text-2xl  hover:underline-offset-8 mx-6 -mt-5">
                    <NuxtLink to="/">Accueil</NuxtLink>
                </button>
                <button class=" text-black dark:text-white text-2xl hover:text-green-400 hover:underline hover:underline-offset-8 mx-6 -mt-5">
                    <a href="#Skills">Skills</a>
                </button>
                <button class=" text-black dark:text-white text-2xl hover:text-green-400 hover:underline hover:underline-offset-8 mx-6 -mt-5">
                    <NuxtLink to="/">Portfolio</NuxtLink>
                </button>
                <button class=" text-black dark:text-white text-2xl hover:text-green-400 hover:underline hover:underline-offset-8 mx-6 -mt-5">
                    <NuxtLink to="/">Contact</NuxtLink>
                </button>
                <a href="https://calendly.com/shoshinwebservices" cta-button target="_blank">
                    <button class="text-green-400 text-2xl hover:text-black dark:text-white hover:bg-gradient-to-r from-green-400 my-12 ml-6 px-2 py-4 border-solid border-2 border-green-400 hover:border-black dark:hover:border-white rounded-xl -mr-3 mt-7">Prendre un RDV
                    </button>
                </a> 
                <span class="relative flex h-7 w-7 my-4">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-red-500"><p class="px-2 py-1 text-white">1</p></span>
                </span>
                <button class="text-2xl text-green-400 mx-6"></button>
            </naV>
            <ModeSwitch class="my-10"/>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>

