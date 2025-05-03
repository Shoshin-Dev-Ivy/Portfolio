export const useCookieConsent = () => {
    const consent = ref<Record<string, boolean>>({
      necessary: true, // Toujours activé
      analytics: false,
      marketing: false,
      youtube: false,
      facebook: false,
      maps: false,
    })
  
    const isConsentGiven = useState<boolean>('consentGiven', () => false)
  
    const loadConsentFromStorage = () => {
      const stored = localStorage.getItem('cookieConsent')
      if (stored) {
        consent.value = JSON.parse(stored)
        isConsentGiven.value = true
      }
    }
  
    const saveConsent = (data: Record<string, boolean>) => {
      consent.value = { ...data, necessary: true }
      localStorage.setItem('cookieConsent', JSON.stringify(consent.value))
      isConsentGiven.value = true
    }
  
    const acceptAll = () => {
      saveConsent({
        necessary: true,
        analytics: true,
        marketing: true,
        youtube: true,
        facebook: true,
        maps: true,
      })
    }
  
    const rejectAll = () => {
      saveConsent({
        necessary: true,
        analytics: false,
        marketing: false,
        youtube: false,
        facebook: false,
        maps: false,
      })
    }
  
    onMounted(() => loadConsentFromStorage())
  
    return {
      consent,
      isConsentGiven,
      acceptAll,
      rejectAll,
      saveConsent,
    }
  }
  