// stores/maintenance.ts
import { defineStore } from 'pinia'

export const useMaintenanceStore = defineStore('maintenance', {
  state: () => ({
    enabled: false as boolean
  }),

  actions: {
    async fetch() {
      try {
        const { $supabase } = useNuxtApp()
        const { data, error } = await $supabase
          .from('maintenance')
          .select('value')
          .limit(1)
          .maybeSingle()

        if (error) {
          console.error('❌ Erreur fetch maintenance:', error.message)
          return
        }
        this.enabled = data?.value ?? false
      } catch (e) {
        console.error('❌ Exception fetch maintenance:', e)
      }
    },

    async toggle() {
      try {
        const { $supabase } = useNuxtApp()
        const rowId = 'cd11d582-e029-470a-ace1-63757b8090f5'

        const { error } = await $supabase
          .from('maintenance')
          .update({ value: !this.enabled })
          .eq('id', rowId)

        if (error) {
          console.error('❌ Erreur toggle maintenance:', error.message)
          return
        }

        this.enabled = !this.enabled
      } catch (e) {
        console.error('❌ Exception toggle maintenance:', e)
      }
    }
  }
})
