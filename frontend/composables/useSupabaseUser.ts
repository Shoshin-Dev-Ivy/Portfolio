import type { User } from '@supabase/supabase-js'

export const useSupabaseUser = () => {
  const user = useState<User | null>('supabase_user', () => null)

  // Utiliser un watcher pour gérer la réactivité sur la récupération de l'utilisateur
  const fetchUser = async () => {
    const { $supabase } = useNuxtApp()
    const { data, error } = await $supabase.auth.getUser()

    if (error) {
      console.error('Erreur Supabase:', error.message)
    }

    user.value = data?.user || null
  }

  // On charge l'utilisateur lors du montage du composant ou à l'initialisation
  if (!user.value) {
    fetchUser()
  }

  return user
}



