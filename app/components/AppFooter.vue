<template>
  <v-container class="box">
    <v-row class="text-center text-md-left">
      <!-- Logo and Brand -->
      <v-col cols="12" md="3">
        <div class="d-flex align-center justify-center justify-md-start mb-4">
          <v-avatar tile class="mr-3">
            <v-img src="/Footerlogo.png" alt="Ethiopian Calendar Logo"></v-img>
          </v-avatar>
          <div class="text-h6 font-weight-bold  title-text text-primary">Ethiopian Calendar</div>
        </div>
        <p class="text-body-2 copy">
          Your guide to Ethiopian dates, holidays, and time.
        </p>
      </v-col>
      <!-- Spacer -->
      <v-col md="1" class="d-none d-md-block"></v-col>
      <!-- Link Sections -->
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <div class="text-h6 font-weight-bold mb-4 title-text text-primary">Navigate</div>
            <ul class="footer-links">
              <li><NuxtLink to="/Ethiopia-Calendar">Calendar</NuxtLink></li>
              <li><NuxtLink to="/converter">Converter</NuxtLink></li>
              <li><NuxtLink to="/Holidays">Holidays</NuxtLink></li>
              <li><NuxtLink to="/Ethiopia-Time">Time</NuxtLink></li>
            </ul>
          </v-col>

          <v-col cols="12" sm="4" md="4">
            <div class="text-h6 font-weight-bold mb-4  title-text text-primary">About</div>
            <ul class="footer-links">
              <li><NuxtLink to="/About-Us">About Us</NuxtLink></li>
              <li><NuxtLink to="/Ethiopian-Calendar-Facts">Calendar Facts</NuxtLink></li>
              <li><NuxtLink to="/Contact-Us">Contact</NuxtLink></li>
            </ul>
          </v-col>

          <v-col cols="12" sm="4" md="4">
            <div class="text-h6 font-weight-bold mb-4 title-text text-primary">Legal</div>
            <ul class="footer-links">
              <li><NuxtLink to="/Terms-Conditions">Terms</NuxtLink></li>
              <li><NuxtLink to="/Privacy-Policy">Privacy</NuxtLink></li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <v-row align="center">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <div class="text-body-2 copy text-primary">
          &copy; {{ new Date().getFullYear() }} Ethiopian Calendar. All rights reserved.
        </div>
      </v-col>

      <v-col cols="12" md="6" class="text-center text-md-right">
        <div>
          <v-btn
            v-for="social in socials"
            :key="social.icon"
            :href="social.url"
            target="_blank"
            rel="noopener"
            color="primary"
            icon
            variant="text"           
            class="mx-1"
          >
            <v-icon :icon="social.icon" size="22"></v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const socials = [
  { icon: "mdi-facebook", url: "https://facebook.com" },
  { icon: "mdi-twitter", url: "https://twitter.com" },
  { icon: "mdi-linkedin", url: "https://linkedin.com" },
  { icon: "mdi-telegram", url: "https://t.me" },
];
</script>

<style scoped>
.box{
background-color: #FCFCFC;
}
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links a {
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  color: var( --ethiopian-blue)

}

.footer-links a:hover {
  color: rgb(var(--v-theme-primary));
}

.footer-links li {
  margin-bottom: 12px;
}
.title-text{
  color:var(--primary-color);
}
.copy {
  color: var(--ethiopian-blue);
  font-size: 0.8rem;}
</style>
