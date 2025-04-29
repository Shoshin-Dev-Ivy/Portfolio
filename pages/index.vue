<template>
<Head>
  <title>Shoshin Web Services</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Meta description pour SEO -->
  <meta name="description" content="Des services web de qualité avec des solutions évolutives." />

  <!-- Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp) -->
  <meta property="og:title" content="Shoshin Web Services" />
  <meta property="og:description" content="Des services web de qualité avec des solutions évolutives." />
  <meta property="og:author" content="Pierre Tinard">
  <meta property="og:image" content="https://www.shoshin-web-services.com/images/HomeSWS.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://www.shoshin-web-services.com" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shoshin Web Services" />
  <meta property="keywords" content="Shoshin Web Services, portfolio, services web, développement web, freelance, backend, Python, Nuxt, Pierre Tinard">

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shoshin Web Services" />
  <meta name="twitter:description" content="Des services web de qualité avec des solutions évolutives." />
  <meta name="twitter:image" content="https://www.shoshin-web-services.com/images/HomeSWS.webp" />
  <meta name="twitter:url" content="https://www.shoshin-web-services.com" />

  <!-- Canonical URL (recommandé pour le SEO) -->
  <link rel="canonical" href="https://www.shoshin-web-services.com" />
</Head>
  <div class="flex justify-center mx-auto -mt-12">
    <div class="text-center text-xl mt-6"><WelcomeMessage /></div>
  </div>
  <div class="flex justify-center mx-auto py-6">
    <Transition
    enter-active-class="transition-opacity duration-[10000ms] ease-in-out"
    leave-active-class="transition-opacity duration-[10000ms] ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div v-if="show"
      class="p-4 rounded-lg opacity-100 text-xl text-sky-700 dark:text-white">
      <p class="mb-4 text-center">{{ $t("ShoshinDefinition") }}</p>
      <p class="text-center">{{ $t("ShoshinDefinition2") }}</p>
    </div>
  </Transition>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-col justify-center md:mt-24 md:-mb-20 lg:-mt-2 xl:mt-2">
      <h1 class="flex text-2xl text-sky-700 mx-auto mt-2 dark:text-white  2xl:ml-50">{{ $t("PierreTinard") }}</h1>
      <div class="flex mx-auto">
        <h2 class="text-2xl text-orange-400 font-black my-4">{{ $t("DevWeb") }}</h2>
      </div>
    </div>
    <div class="flex justify-center flex-col avatar mt-4 mb-4 md:mt-28 lg:mt-18 2xl:my-4 2xl:mt-24">
      <div class="w-48 rounded-full border-2 self-center border-sky-700 dark:border-orange-400">
        <ImageSwitcher />
      </div>
    </div>
    <div class="flex flex-col text-center">
      <p class="text-2xl text-sky-700 dark:text-white"><DisplayTagline1 /></p>
      <p class="text-2xl text-sky-700 dark:text-white"><DisplayTagline2 /></p>
    </div> 
    <div class="flex" id="item-1">
      <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
      <h2 class="flex text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{$t("Services")}}</h2>
    </div>
    <div class="text-center">
        <ul class="-mt-8">
        <li class="text-lg text-sky-700 dark:text-white">SaaS</li>
        <li class="text-lg text-sky-700 dark:text-white">API / API REST</li>
        <li class="text-lg text-sky-700 dark:text-white">{{$t("BDD")}} MySQL / NoSQL (MongoDB)</li>
      </ul>
    </div>
    <div class="flex" id="item-2">
      <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
      <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("Skills") }}</h2>
    </div>
      <div class="flex flex-col items-center md:mx-auto md:w-96 dark:bg-sky-100 rounded-2xl -mt-4">
      <div class="flex">
        <div class="flex flex-col items-center">
          <p class="flex justify-center text-xl text-orange-400 font-black mb-8 mt-4">{{ $t("Frontend") }}</p>
          <div class="grid grid-cols-2 gap-y-10 gap-x-14">
            <Icon name="logos:html-5" class="size-16" />
            <Icon name="logos:css-3" class="size-16" />
            <Icon name="logos:vue" class="size-16" />
            <Icon name="logos:nuxt" class="size-16" />
            <Icon name="logos:typescript-icon" class="size-16" />
            <Icon name="skill-icons:tailwindcss-light" class="size-16" />
          </div>
          <Icon name="devicon:javascript" class="size-16 my-10" />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col">
          <p class="flex justify-center text-xl text-orange-400 font-black mb-8">{{ $t("Backend") }}</p>
          <div class="grid grid-cols-2 gap-y-10 gap-x-14">
            <Icon name="logos:python" class="size-16" />
            <Icon name="logos:nodejs" class="size-16" />
            <Icon name="logos:mongodb" class="size-16" />
            <Icon name="logos:mysql" class="size-16" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          <div class="flex flex-col" id="item-3">
            <div class="flex items-start">
              <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
              <h2 class="text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("Parcours") }}</h2>
            </div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">{{ $t("2024") }}</time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Formation") }} Nuxt.js / Python</div>
                  {{ $t("Formation") }} {{ $t("Autodidacte") }} Nuxt / Python (Udemy).
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic">{{ $t("2021") }} / {{ $t("2023") }} </time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Formation") }} {{ $t("DevWeb") }}</div>
                  (OpenClassrooms) => {{ $t("Diplome") }}, <br />
                  {{ $t("Certification") }} => RNCP code 326T. <br />
                  <br />P1 => {{ $t("P1") }} <br />
                  P2 => {{ $t("P2") }} <br />
                  P3 => {{ $t("P3") }} <br />
                  P4 => {{ $t("P4") }} <br />
                  P5 => {{ $t("P5") }} <br />
                  P6 => {{ $t("P6") }} <br />
                  {{ $t("P6Techno") }} <br />
                  P7 => {{ $t("P7")}} <br />
                  {{ $t("P7Techno") }} <br />
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic"> {{ $t("2019") }} / {{ $t("2020") }} </time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Teleconseiller") }} Phone Régie</div>
                 {{ $t("Appel") }} <br />
                  {{ $t("Bancaires") }} <br />
                  {{ $t("Call") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic"> {{ $t("2018") }} </time>
                  <div class="text-lg font-black text-orange-400"> {{ $t("Brevet") }}</div>
                   {{ $t("Animation") }} <br />
                   {{ $t("Pedagogie") }} <br />
                   => {{ $t("Diplome") }} , N° 16-10-18.<br />
                   {{ $t("Experience") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">{{ $t("2007") }} / {{ $t("2018") }}</time>
                  <div class="text-lg font-black flex-wrap text-orange-400"> {{ $t("Vente") }}</div>
                  {{ $t("Duree") }} <br>
                  {{ $t("Commerce") }} <br>
                  {{ $t("Responsabilites") }} <br />
                 {{ $t("Activites") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic"> {{ $t("2006") }}</time>
                  <div class="text-lg font-black text-orange-400">{{ $t("Lait") }}</div>
                   {{ $t("Fabrication") }}
                  <br />{{ $t("Fromages") }} <br />
                  ENILV La Roche-sur-Foron. <br />
                  => {{ $t("Diplome") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic"> {{ $t("2004") }} / {{ $t("2005") }}</time>
              <div class="text-lg font-black text-orange-400">{{ $t("DAEU") }}</div>
                  {{ $t("Equivalence") }} <br />
                  {{ $t("Epreuves") }} <br />
                  => {{ $t("Diplome") }}
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
            </ul>
          </div>
        </div>
       
        <div class="flex" id="item-4">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
          <h2 class="text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("Projets") }}</h2>
        </div>
        <div class="text-center md:text-center xl:text-center">
          <h3 class="-mt-6 mb-6 md:mb-10">{{ $t("Aperçu") }}</h3>
        </div>
        <div class="grid grid-cols-2 justify-center gap-x-20 gap-y-16 md:w-auto md:mx-32 lg:mx-32 lg:w-auto 2xl:mx-96 2xl:w-auto max-lg:grid-cols-1 mb-26">
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/JardinierFGBussac.webp" alt="Aperçu de l'univers littéraire de F-G Bussac" 
              class="object-cover sm:object-cover md:object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} F-G Bussac</h2>
              <p>{{ $t("ProjetBussac") }}</p>
              <p>Nuxt.js, Tailwind.css, TypeScript</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure>
              <img src="assets/images/HomeSWS.webp" alt="Aperçu de la page d'accueil du portfolio Shoshin Web Services" 
              class="object-cover w-full h-full" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} {{ $t("Portfolio") }}</h2>
              <p>{{ $t("ProjetPortfolio") }}</p>
              <p>Nuxt.js, Tailwind.css, TypeScript</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeGroupomania.webp" alt="Aperçu de la page d'accueil Groupomania" 
              class="object-cover sm:object-cover md:object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} P7 Groupomania</h2>
              <p>{{ $t("Projet7") }}</p>
              <p>MySQL, Node.js, JavaScript</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeHotTakes.webp" alt="Aperçu de la page d'accueil Hot Takes" 
              class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} P6 Hot Takes</h2>
              <p>{{ $t("Projet6") }}</p>
              <p>Node.js, NoSQL (MongoDB)</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeKanap.webp" alt="Aperçu de la page d'accueil Kanap" 
              class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} P5 Kanap</h2>
              <p>{{ $t("Projet5") }}</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeLaChouetteAgence.webp" alt="Aperçu de la page d'accueil La Chouette Agence" 
              class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} P4 La Chouette Agence</h2>
              <p>{{ $t("Projet4") }}</p>
              <p>SEO</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeOhmyfood.webp" alt="Aperçu de la page d'accueil Ohmyfood" 
              class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} P3 Ohmyfood</h2>
              <p>{{ $t("Projet3") }}</p>
              <p>{{ $t("Projet3Techno") }}</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-auto shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeReservia.webp" alt="Aperçu de la page d'accueil Reservia" 
              class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">{{ $t("Projet") }} P2 Reservia</h2>
              <p>{{ $t("Projet2") }}</p>
              <p>{{ $t("Projet2Techno") }}</p>
            </div>
          </div>
        </div>
        <div class="flex my-12" id="item-5">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-2 size-12 2xl:ml-24" />
          <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-4 ml-4" id="contact-form">{{ $t("Contact") }}</h2>
        </div>
        <section class="bg-sky-600 dark:bg-sky-800 mx-auto rounded-2xl w-auto md:w-96 lg:w-96 lg:content-center  2xl:w-96 -mt-4 -my-14 mb-4 pt-4">
          <div class="py-8 lg:py-16 px-8">
            <h2 class="text-center w-auto mb-4 -mt-6 text-3xl tracking-tight text-white">{{ $t("Echangeons")}}</h2>
            <form @submit.prevent="envoyerFormulaire" class="flex flex-col space-y-8">
              <div>
                <label for="email" class="text-lg font-medium text-white">{{ $t("Email") }}</label>
                <input v-model="form.email" type="email" id="email" required class="mt-4 shadow-sm bg-sky-50 border-gray-300 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
              </div>
              <div>
                <label for="message" class="text-lg font-medium text-white">{{ $t("Message") }}</label>
                <textarea id="message" rows="6" v-model="form.message" required class="mt-4 p-2.5 w-full text-base text-gray-900 bg-sky-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                <p class="text-white">{{ form.message.length }} / 250 {{ $t("Caracteres") }}</p>
              </div>
              <!-- Honeypot -->
              <div style="display: none;">
                <input v-model="form.botField" type="text" tabindex="-1" autocomplete="off" />
              </div>
              <button type="submit" :disabled="isSubmitting" class="m-auto -mb-4 py-3 px-5 text-lg text-center font-black text-orange-400 rounded-lg bg-sky-50 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:bg-sky-900 dark:focus:ring-primary-800">
                <span v-if="isSubmitting">Envoi en cours...</span>
                <span v-else>{{ $t("Submit") }}</span>
              </button>
              <p class="my-6 text-center -mb-4 text-white text-lg" v-if="statusMessage" :style="{ color: isSubmitting ? 'blue' : 'white' }">{{ statusMessage }}</p>
            </form>
          </div>
        </section>
        <div class="flex items-start">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 size-12 2xl:ml-24" />
          <h2 class="flex text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">{{ $t("News")}}</h2>
        </div>
        <div class="flex flex-col text-center md:flex-col">
          <p class="ml-2 -mt-4 text-black dark:text-white">{{ $t("News1") }}</p>
          <p class="ml-2 text-black dark:text-white">{{ $t("News2") }}</p>
          <p class="ml-2 md:mb-4 text-black dark:text-white">{{ $t("News3") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from 'emailjs-com'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead, useRuntimeConfig } from '#imports'
import ImageSwitcher from '~/components/ImageSwitcher.vue'
import WelcomeMessage from '~/components/WelcomeMessage.vue'
import DisplayTagline1 from '~/components/DisplayTagline1.vue'
import DisplayTagline2 from '~/components/DisplayTagline2.vue'

// Accès aux variables d’environnement publiques
const config = useRuntimeConfig()
const serviceID = config.public.EMAILJS_SERVICE_ID
const templateID = config.public.EMAILJS_TEMPLATE_ID
const publicKey = config.public.EMAILJS_PUBLIC_KEY


const form = ref({
  email: '',
  message: '',
  botField: '', // Champ anti-bot caché
})

const statusMessage = ref('')
const isSubmitting = ref(false)

const validateForm = () => {
  if (!form.value.email || !form.value.message) {
    statusMessage.value = 'Tous les champs sont requis.'
    return false
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(form.value.email)) {
    statusMessage.value = "L'email est invalide."
    return false
  }
  return true
}

const envoyerFormulaire = async () => {
  if (form.value.botField !== '') {
    console.warn('Bot détecté. Soumission bloquée.')
    return
  }

  if (!validateForm()) return

  isSubmitting.value = true

  const templateParams = {
    from_email: form.value.email,
    message: form.value.message,
  }

  try {
    const response = await emailjs.send(serviceID, templateID, templateParams, publicKey)
    console.log('Message envoyé avec succès', response)
    statusMessage.value = 'Votre message a bien été envoyé !'
    form.value.email = ''
    form.value.message = ''
  } catch (error) {
    console.error("Erreur lors de l'envoi", error)
    statusMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

// Affichage temporaire de la section "définitions"
const show = ref(false)
const handleShowDefinitions = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 20000)
}

onMounted(() => {
  window.addEventListener('show-definitions', handleShowDefinitions)
})

onBeforeUnmount(() => {
  window.removeEventListener('show-definitions', handleShowDefinitions)
})

useHead({
  title: 'Shoshin Web Services',
  meta: [
    { name: 'description', content: 'Des services web de qualité avec des solutions évolutives.' },
    { name: 'author', content: 'Pierre Tinard' },
    { name: 'keywords', content: 'Shoshin Web Services, portfolio, services web, développement web, freelance, backend, Python, Nuxt, Pierre Tinard' }
  ],
})
</script>

