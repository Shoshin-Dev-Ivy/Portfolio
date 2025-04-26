<script setup>
import { ref } from 'vue'
import { useReCaptcha } from 'vue-recaptcha-v3'

const form = ref({ name: '' })
const submissionMessage = ref(null)
const errorMessage = ref(null)

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

const submitForm = async () => {
  await recaptchaLoaded()
  const token = await executeRecaptcha("contact")

  if (!token) {
    errorMessage.value = "Invalid reCAPTCHA. Please try again."
    submissionMessage.value = null
    alert(errorMessage.value)
    return
  }

  try {
    const captchaResponse = await fetch("https://api.x.com/api/captcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptcha_token: token }),
    })

    if (!captchaResponse.ok) {
      errorMessage.value = "CAPTCHA validation failed. Please try again."
      submissionMessage.value = null
      alert(errorMessage.value)
      return
    }

    const formData = new FormData()
    formData.append("name", form.value.name)
    formData.append("recaptchaToken", token)

    const formSubmitResponse = await fetch("https://api.x.com/api/contact", {
      method: "POST",
      body: formData,
    })

    if (formSubmitResponse.ok) {
      submissionMessage.value = "Contact form submitted successfully!"
      errorMessage.value = null
      alert(submissionMessage.value)
    } else {
      const error = await formSubmitResponse.json()
      errorMessage.value = error.message || "Error submitting form."
      submissionMessage.value = null
      alert(errorMessage.value)
    }

  } catch (error) {
    console.error("Submission error:", error)
    errorMessage.value = "An error occurred while submitting the form."
    submissionMessage.value = null
    alert(errorMessage.value)
  }
}

const resetForm = () => {
  form.value.name = ''
}
</script>