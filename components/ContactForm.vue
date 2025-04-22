<script defer>
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
      },
      submissionMessage: null,
      errorMessage: null,
    };
  },
  setup() {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

    const recaptcha = async () => {
      await recaptchaLoaded(); // Wait for reCAPTCHA to load
      return await executeRecaptcha("contact"); // Create a reCAPTCHA token
    };
    return {
      recaptcha,
    };
  },

  methods: {
    async submitForm() {
      const token = await this.recaptcha(); // Call the recaptcha method to get the token
      console.log(token);

      // Check if the token is valid
      if (!token) {
        this.errorMessage = "Invalid reCAPTCHA. Please try again.";
        this.submissionMessage = null; // Clear previous messages
        alert(this.errorMessage);
        return;
      }

      try {
        // Send the token to the CAPTCHA validation API first
        const captchaResponse = await fetch(
          "https://api.x.com/api/captcha",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ recaptcha_token: token }),
          }
        );

        // If the CAPTCHA validation is successful (status 200), submit the form
        if (captchaResponse.ok) {
          console.log("response is ok");

          // Prepare form data for submission
          const formData = new FormData();
          formData.append("name", this.form.name);
          formData.append("recaptchaToken", token); // Append the reCAPTCHA token

          // Submit the form data
          const formSubmitResponse = await fetch(
            "https://api.x./api/contact",
            {
              method: "POST",
              body: formData,
            }
          );

          // Check if the form submission response is okay (status 200-299)
          if (formSubmitResponse.ok) {
            const result = await formSubmitResponse.json();
            this.submissionMessage = "Contact form submitted successfully!";
            this.errorMessage = null; // Clear previous error messages
            alert(this.submissionMessage); // Show success alert
          } else {
            // Handle errors from the form submission server
            const error = await formSubmitResponse.json();
            this.errorMessage = error.message || "Error submitting form.";
            alert(this.errorMessage);
            this.submissionMessage = null; // Clear previous messages
          }
        } else {
          // Handle CAPTCHA validation error
          this.errorMessage = "CAPTCHA validation failed. Please try again.";
          alert(this.errorMessage);
          this.submissionMessage = null;
        }
      } catch (error) {
        console.error("Submission error:", error);
        this.errorMessage = "An error occurred while submitting the form.";
        this.submissionMessage = null; // Clear previous messages
        alert(this.errorMessage); // Show error alert
      }
    },
    resetForm() {
      this.form.name = "";
    },
  },

 beforeUnmount() {
  this.$recaptcha.destroy();
  },
};

</script>