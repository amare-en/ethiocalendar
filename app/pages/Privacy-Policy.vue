<template>
  <v-container class="py-12 px-4 px-md-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <!-- Page Title -->
        <div class="text-center mb-8">
          <h1 class="text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4">
            Privacy Policy
          </h1>
          <p class="text-body-1 text-medium-emphasis">
            Your privacy is important to us at <strong>[Your App Name]</strong>. 
            This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <!-- Card Wrapper for Sections -->
        <v-card class="pa-6 rounded-xl elevation-2">
          <!-- Information We Collect -->
          <h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2">
            Information We Collect
          </h2>
          <ul class="text-body-1 mb-6 pl-6">
            <li>Cookies and usage data (to improve performance and show ads).</li>
            <li>Anonymous analytics (to understand how users use our app).</li>
          </ul>

          <!-- How We Use Your Information -->
          <h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2">
            How We Use Your Information
          </h2>
          <ul class="text-body-1 mb-6 pl-6">
            <li>To provide and improve our services.</li>
            <li>To display Google Ads (AdSense may use cookies to serve personalized ads).</li>
            <li>To analyze usage and enhance user experience.</li>
          </ul>

          <!-- Third-Party Services -->
          <h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2">
            Third-Party Services
          </h2>
          <p class="text-body-1 mb-6">
            We use Google AdSense. Google may use cookies to show ads based on your interests.
          </p>

          <!-- Your Rights -->
          <h2 class="text-h5 font-weight-bold mb-3 text-blue-darken-2">
            Your Rights
          </h2>
          <ul class="text-body-1 mb-6 pl-6">
            <li>You can disable cookies in your browser settings.</li>
            <li>We do not sell or share your personal data with third parties.</li>
          </ul>

          <!-- Contact Info -->
          <p class="text-body-1">
            If you have any questions, please contact us at: 
            <strong>[your email]</strong>.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Static page, no logic required
</script>
