<template>
  <Head>
    <Title>Shoshin Web Services</Title>
  </Head>
  <div class="flex flex-col mb-20">
    <div class="flex">
      <h1 class="flex justify-start text-2xl text-sky-700 mx-28 my-4 dark:text-white">Pierre Tinard</h1>
      <h2 class="text-2xl text-sky-700 font-black dark:text-white my-4 ml- mr-4">Développeur</h2>
      <h2 class="text-3xl my-3 mr-16 font-black text-orange-400">Web</h2>
    </div>
    <div class="flex justify-center avatar my-10">
      <div class="w-48 rounded-full">
        <img src="assets/images/Aikido.jpg" />
      </div>
    </div>
    <div class="flex justify-center">
      <p class="text-2xl">Ma priorité: utiliser la solution la plus efficace, et la plus évolutive possible.</p>
    </div>
    <div class="flex justify-center">
      <p class="text-2xl">Créons ensemble vos projets web !!</p>
    </div>
    <div>
      <div>
        <div>
          <div class="flex flex-col">
            <div class="flex items-start">
              <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 ml-48 size-12" />
              <h2 class="text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">Mon parcours</h2>
            </div>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">2024</time>
                  <div class="text-lg font-black text-orange-400">Formation Nuxt.js & Python</div>
                  Formation autodidacte Nuxt & Python (Udemy).
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic">2021 / 2023</time>
                  <div class="text-lg font-black text-orange-400">Formation Développeur Web</div>
                  Formation Développeur Web (OpenClassrooms). <br />
                  Diplomé, certification professionnelle ( RNCP Code 326T ) <br />
                  P1 => Planifier et organiser l'apprentissage de la formation. <br />
                  P2 => Transformer une maquette en site web avec HTML & CSS. <br />
                  P3 => Dynamiser une page web avec des animations CSS. <br />
                  P4 => Optimiser un site web existant (SEO). <br />
                  P5 => Construire un site de e-commerce en Javascript. (Frontend) <br />
                  P6 => Construire une API sécurisée pour une application d'avis gastronomiques. ( Backend NoSQL MongoDB )<br />
                  P7 => Créer un réseau social d'entreprise. (FullStack)
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">2019 / 2020</time>
                  <div class="text-lg font-black text-orange-400">Téléconseiller Phone Régie</div>
                  Prise d'appels et gestion des demandes clients. <br />
                  Applications de procédures bancaires. <br />
                  Prise d'appels en anglais.
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic">2018</time>
                  <div class="text-lg font-black text-orange-400">Brevet fédéral Aikido</div>
                  Animation et gestion de groupe: enfants, ados, adultes. <br />
                  Pédagogie adapté aux niveau et à la progression des pratiquants.
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">2007 / 2018</time>
                  <div class="text-lg font-black text-orange-400">Vente & commerce</div>
                  Durant plus de 10 ans, dans le secteur du commerce et de la vente, <br />
                  j'ai occupé différents postes à responsabilités. <br />
                  (activité sportive comprise). <br />
                  Ce qui m'a permis de développer des compétences en gestion de projet. <br />
                  Utilisées aujourd'hui pour offrir des solutions techniques et évolutives <br />
                  dans mes projets de développement web.
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-end mb-10">
                  <time class="font-mono font-black italic">2006</time>
                  <div class="text-lg font-black text-orange-400">Certificat de spécialisation <br />en transformation laitière</div>
                  Fabrication de fromages de Haute-Savoie:
                  <br />Tomme de Savoie, Abondance, Reblochon, Raclette, beurre. <br />ENILV La Roche-sur-Foron. <br />Diplômé.
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
              <li>
                <hr class="mx-2 bg-orange-400" />
                <div class="timeline-middle"></div>
                <div class="timeline-start mb-10 md:text-end">
                  <time class="font-mono font-black italic">2004 / 2005</time>
                  <div class="text-lg font-black text-orange-400">DAEU option A</div>
                  Equivalence baccalauréat option A (littéraire), préparé avec le CNED. <br />
                  Epreuves d'examen à l'université Jean Monnet (St Etienne). <br />
                  Diplômé.
                </div>
                <hr class="mx-2 bg-orange-400" />
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-start" id="1">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 ml-48 size-12" />
          <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">Skills</h2>
        </div>
        <div class="flex mx-96 px-20 dark:bg-sky-100 rounded-2xl">
          <div class="flex mx-auto">
            <div class="flex flex-col">
              <p class="text-xl text-orange-400 font-black -ml-4 mt-4">Frontend</p>
              <div>
                <Icon name="logos:html-5" class="-ml-12 my-8 mr-6 size-16" />
                <Icon name="logos:css-3" class="my-8 size-16" />
              </div>
              <div>
                <Icon name="logos:vue" class="-ml-12 my-4 mr-6 size-16" />
                <Icon name="logos:nuxt" class="my-4 size-16" />
              </div>
              <div>
                <Icon name="logos:typescript-icon" class="-ml-12 my-4 mr-6 size-16" />
                <Icon name="skill-icons:tailwindcss-light" class="my-4 size-16" />
              </div>
              <Icon name="devicon:javascript" class="-ml-12 my-4 mr-6 size-16" />
            </div>
          </div>
          <div class="flex mx-auto">
            <div class="flex flex-col">
              <p class="text-xl text-orange-400 font-black mt-4">Backend</p>
              <Icon name="logos:python" class="my-6 size-16 mt-8" />
              <div>
                <Icon name="logos:mongodb" class="-ml-12 my-4 mr-6 size-18" />
                <Icon name="logos:mysql" class="my-2 size-16" />
              </div>
              <Icon name="logos:nodejs" class="my-4 size-16" />
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-start">
            <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 ml-48 size-12" />
            <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">Les services proposés</h2>
          </div>
          <p class="my-2 mx-56">Création d'API / API REST</p>
          <p class="my-2 mx-56">Création de base de données MySQL / NoSQL(MongoDB)</p>
        </div>
        <div class="flex items-start" id="2">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 ml-48 size-12" />
          <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">Portfolio</h2>
          <h3 class="my-24">Un aperçu des projets réalisés, ceux en cours, où à venir...</h3>
        </div>
        <div class="container-projets grid grid-cols-2 justify-items-center gap-x-20 gap-y-16 md:w-1/2 m-auto max-lg:grid-cols-1">
          <div class="card bg-sky-600 dark:bg-sky-800 w-80 h-96 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeFGBussac.jpg" alt="Auteur" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet F-G Bussac</h2>
              <p>Création from scratch site web: en cours de création...</p>
              <p>Drupal</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure>
              <img src="assets/images/homePortfolioLightMode.png" alt="home Portfolio" class="object-cover w-full h-full" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet Porfolio</h2>
              <p>Création from scratch, visuel sur mon activité</p>
              <p>Nuxt.js, Tailwind.css, Typescrypt</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeGroupomania.jpg" alt="home Groupomania" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet P7 Groupomania</h2>
              <p>Création réseau social d'entreprise Full Stack</p>
              <p>MySQL, Node.js, JavaScript</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeHotTakes.jpg" alt="home Hot Takes" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet P6 Hot Takes</h2>
              <p>Création API REST</p>
              <p>Node.js, NoSQl (MongoDB)</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeKanap.jpg" alt="home Kanap" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet P5 Kanap</h2>
              <p>Création site e-commerce</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeLaChouetteAgence.jpg" alt="home La Chouette Agence" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet P4 La Chouette Agence</h2>
              <p>Optimisation du SEO d'une page web</p>
              <p>SEO</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeOhmyfood.jpg" alt="home Ohmyfood" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet P3 Ohmyfood</h2>
              <p>Créer des animations en CSS (ex: loading-spinner) et le responsive d'une page web</p>
              <p>CSS et responsive</p>
            </div>
          </div>
          <div class="card bg-sky-600 dark:bg-sky-800 h-96 w-80 shadow-xl grid grid-rows-2">
            <figure><img src="assets/images/homeReservia.jpg" alt="home Reservia" class="object-cover w-full h-full" /></figure>
            <div class="card-body">
              <h2 class="card-title text-white dark:text-orange-400">Projet P2 Reservia</h2>
              <p>Créer une page web d'après une maquette et son responsive</p>
              <p>HTML CSS et responsive</p>
            </div>
          </div>
        </div>
        <div class="flex items-start" id="3">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 ml-48 size-12" />
          <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4" id="contact-form">Contact</h2>
        </div>
        <section class="bg-sky-600 dark:bg-sky-800 max-w-md mx-auto flex justify-center rounded-2xl">
          <div class="py-8 lg:py-16 px-8 justify-items-center">
            <h2 class="mb-4 -mt-10 text-3xl tracking-tight text-center text-white">Échangeons ensemble !!</h2>
            <form @submit.prevent="envoyerFormulaire" class="flex flex-col space-y-8">
              <div>
                <label for="email" class="block mb-2 text-lg font-medium text-white">Email</label>
                <input v-model="form.email" type="email" id="email" required class="shadow-sm bg-gray-50 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
              </div>
              <div>
                <label for="message" class="block mb-2 text-lg font-medium text-white">Décrivez moi votre projet:</label>
                <textarea rows="6" v-model="form.message" id="message" required class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
              </div>
              <button type="submit" class="m-auto -mb-8 py-3 px-5 text-lg font-medium text-center text-orange-400 rounded-lg bg-sky-900 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:bg-sky-900dark:focus:ring-primary-800">Envoyer</button>
            </form>
            <p class="mt-6 -mb-8"  v-if="statusMessage">{{ statusMessage }}</p>
        </div>
        </section>
        <div class="flex items-start">
          <Icon name="heroicons:code-bracket-16-solid" class="bg-orange-400 my-12 ml-48 size-12" />
          <h2 class="flex justify-left text-2xl font-black text-sky-700 dark:text-white my-14 ml-4">News</h2>
        </div>
        <p class="ml-48 text-black dark:text-white">Nuxt.js => Site web activité littéraire de François-G. Bussac (projet en cours)</p>
        <p class="ml-48 text-black dark:text-white">Nuxt.js => portfolio Shoshin Web Services</p>
        <p class="ml-48 text-black dark:text-white">Python => Formation autodidacte (Udemy)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from 'emailjs-com';

const form = ref({
  email: '',
  message: '',
});

const statusMessage = ref('');

const envoyerFormulaire = () => {
  const serviceID = 'contact_service'; // Remplace par ton Service ID EmailJS
  const templateID = 'contact_form'; // Remplace par ton Template ID EmailJS
  const publicKey = 'fCIqpwTs_3L1C-9No'; // Remplace par ta public key

  const templateParams = {
    email: form.value.email,
    message: form.value.message,
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log('Message envoyé avec succès', response);
      statusMessage.value = 'Votre message a bien été envoyé !!'
      form.value.email = '';
      form.value.message = '';
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi", error);
      statusMessage.value = 'Une erreur est survenue. Veuillez réessayer.';
    });
};
</script>