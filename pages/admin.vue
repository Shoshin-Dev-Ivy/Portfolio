<template>
  <div>
    <input v-model="key" placeholder="Clé admin secrète" />
    <button @click="login">Valider</button>
  </div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()
console.log('💡 Supabase:', $supabase)

const key = ref('')

const login = async () => {
  const { $supabase } = useNuxtApp()

  console.log('🔑 Clé entrée :', key.value)

  const { data, error } = await $supabase
    .from('admin_config')
    .select('id')
    .eq('secret', key.value)
    .maybeSingle()

  console.log('📦 Réponse Supabase :', { data, error })

  if (data && !error) {
    useCookie('admin_key').value = key.value
    console.log('✅ Clé acceptée, cookie posé')
    navigateTo('/')
  } else {
    console.warn('⛔ Clé incorrecte')
    alert('Clé admin incorrecte')
  }
}
</script>


