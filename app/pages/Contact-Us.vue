<template>
  <v-container class="py-10 px-4 px-md-12">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center mb-8">
        <h2 class="text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4">
          Contact Us
        </h2>
        <p class="text-body-1 text-medium-emphasis">
          If you have any questions, suggestions, or feedback, please feel free to reach out to us. 
          We’d love to hear from you!
        </p>
      </v-col>
    </v-row>

    <!-- Contact Form -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="pa-4 rounded-lg border">
          <v-form>
            <v-text-field
              label="Full Name"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-account"
              required
              class="mb-4"
            ></v-text-field>
            <v-text-field
              label="Email Address"
              type="email"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-email"
              required
              class="mb-4"
            ></v-text-field>
            <v-textarea
              label="Your Message"
              rows="5"
              variant="outlined"
              prepend-inner-icon="mdi-message-text"
              required
            ></v-textarea>

            <v-btn
              block
              color="primary"
              size="large"
              class="mt-6 text-white rounded-lg"
            >
              Send Message
            </v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>

    <!-- Footer note -->
    <v-row>
      <v-col cols="12" class="text-center mt-8">
        <p class="text-body-2 text-medium-emphasis">
          We’ll get back to you as soon as possible.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
</script>
