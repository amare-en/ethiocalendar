<template>
  <v-container class="py-10 px-4 px-md-12">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center mb-8">
        <h2 class="text-h4 text-md-h3 font-weight-bold text-blue-darken-3 mb-4">
          About Us
        </h2>
        <p class="text-body-1 text-medium-emphasis">
          Welcome to <strong>Ethiopian Calendar</strong> — an Ethiopian Calendar web app 
          designed to make it easier for everyone to access Ethiopian holidays, 
          non-working days, and date conversions between the Ethiopian and Gregorian calendars.
        </p>
      </v-col>
    </v-row>
    <!-- Mission Section -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="pa-4 rounded-xl border">
          <h2 class="text-h5 font-weight-bold mb-4 text-blue-darken-2">
            Our Mission
          </h2>
          <v-list density="compact">
            <v-list-item prepend-icon="mdi-calendar-heart">
              <v-list-item-title>
                To help Ethiopians and the diaspora stay connected with cultural and national holidays.
              </v-list-item-title>
            </v-list-item>
            <v-list-item  class="pr-2"prepend-icon="mdi-check-circle">
              <v-list-item-title>
                To provide accurate, reliable, and user-friendly calendar tools.
              </v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-earth">
              <v-list-item-title>
                To promote awareness of Ethiopia’s unique calendar system.
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <p class="text-body-1 text-medium-emphasis mt-4">
            We believe in blending technology with culture to create something 
            useful and meaningful.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>
