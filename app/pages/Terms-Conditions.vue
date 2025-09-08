<template>
  <v-container class="py-12 px-4 px-md-12">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-8 rounded-xl elevation-2">
          <!-- Header -->
          <div class="text-center mb-10">
            <h1 class="text-h4 text-md-h3 font-weight-bold mb-4 text-blue-darken-3">
              Terms & Conditions
            </h1>
            <p class="text-body-1 text-medium-emphasis">
              Welcome to <strong>[Your App Name]</strong>. By using our app, you agree to the following terms and conditions.
            </p>
          </div>

          <!-- Section 1 -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2">
              <v-icon size="20" class="mr-2">mdi-account-check</v-icon>
              1. Use of Service
            </h2>
            <p class="text-body-1 text-medium-emphasis">
              You may use this app for personal, non-commercial purposes only.
            </p>
          </div>

          <!-- Section 2 -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2">
              <v-icon size="20" class="mr-2">mdi-calendar-check</v-icon>
              2. Accuracy
            </h2>
            <p class="text-body-1 text-medium-emphasis">
              We do our best to provide accurate dates and holiday information, but we cannot guarantee 100% accuracy.
            </p>
          </div>

          <!-- Section 3 -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2">
              <v-icon size="20" class="mr-2">mdi-alert-circle</v-icon>
              3. Restrictions
            </h2>
            <ul class="pl-6 list-disc text-body-1 text-medium-emphasis">
              <li>Do not copy or redistribute our content without permission.</li>
              <li>Do not misuse the site (e.g., spam, hacking, or unlawful activities).</li>
            </ul>
          </div>

          <!-- Section 4 -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2">
              <v-icon size="20" class="mr-2">mdi-shield-alert</v-icon>
              4. Limitation of Liability
            </h2>
            <p class="text-body-1 text-medium-emphasis">
              [Your App Name] is not responsible for any loss or damages caused by the use of this app.
            </p>
          </div>

          <!-- Section 5 -->
          <div class="mb-8">
            <h2 class="text-h5 font-weight-semibold mb-2 text-blue-darken-2">
              <v-icon size="20" class="mr-2">mdi-update</v-icon>
              5. Changes
            </h2>
            <p class="text-body-1 text-medium-emphasis">
              We may update these terms at any time. Continued use means you accept the updated terms.
            </p>
          </div>

          <!-- Footer -->
          <div class="text-center mt-10">
            <v-divider class="mb-6"></v-divider>
            <p class="text-caption text-medium-emphasis">
              &copy; {{ new Date().getFullYear() }} [Your App Name]. All rights reserved.
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
