<script setup>
import { ref } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submissionMessage = ref(null)
const errorMessage = ref(null)
const isSubmitting = ref(false)

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const submitForm = async () => {
  isSubmitting.value = true
  await recaptchaLoaded()

  const token = await executeRecaptcha('contact')

  if (!token) {
    errorMessage.value = 'Invalid reCAPTCHA. Please try again.'
    submissionMessage.value = null
    isSubmitting.value = false
    alert(errorMessage.value)
    return
  }

  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        recaptchaToken: token
      })
    })

    if (response.ok) {
      submissionMessage.value = 'Message envoyé avec succès !'
      errorMessage.value = null
      resetForm()
      alert(submissionMessage.value)
    } else {
      const error = await response.json()
      errorMessage.value = error.message || 'Erreur lors de l’envoi.'
      submissionMessage.value = null
      alert(errorMessage.value)
    }

  } catch (err) {
    errorMessage.value = 'Une erreur est survenue.'
    submissionMessage.value = null
    alert(errorMessage.value)
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>
