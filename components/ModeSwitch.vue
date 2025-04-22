<template>
    <div>
      <Switch
        v-model="enabled"
        v-if="enabled !== null"
        @click="toggleTheme"
        :class="enabled ? 'bg-black' : 'bg-orange-50'"  class="relative inline-flex h-[38px] w-[74px]  cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 md:relative md:inline-flex md:h-[38px] md:w-[74px]  md:cursor-pointer md:rounded-full md:border-2 md:border-transparent md:transition-colors md:duration-200 md:ease-in-out md:focus:outline-none md:focus-visible:ring-2 md:focus-visible:ring-white md:focus-visible:ring-opacity-75">
        <span class="sr-only">Mode setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block transform ring-0 transition duration-200 ease-in-out md:pointer-events-none md:inline-block md:transform md:ring-0 md:transition md:duration-200 md:ease-in-out">
          <MoonIcon v-if="enabled" class="h-[34px] w-[34px] fill-gray-300" />
          <SunIcon v-else class="h-[34px] w-[34px] fill-yellow-500" />
        </span>
      </Switch>
    </div>
</template>
  
<script setup lang="ts" defer>
import { Switch } from "@headlessui/vue"
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid"
  
  useHead({
       script: [ {children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.removeAttribute("data-theme")
      }`} ]
  })
  
  const { enabled, toggleTheme } = useTheme() 
  
</script>