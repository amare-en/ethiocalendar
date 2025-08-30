<template>
  <v-card class="holiday-hero-banner text-center py-12 px-4" flat>
    <v-container>
      <h1 class="text-h3 text-sm-h2 font-weight-bold mb-4 banner-title">
        Ethiopian Holidays
      </h1>
      <p class="text-h6 text-sm-h5 mb-8 banner-subtitle">
        Explore national, religious, and cultural holidays celebrated across Ethiopia.
      </p>
      <v-btn
        color="white"
        size="x-large"
        class="view-holidays-btn"
        to="/holidays"
      >
        View All Holidays
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
// No script needed for this component
</script>

<style scoped>
.holiday-hero-banner {
  background: linear-gradient(135deg, #2C5F2D 0%, #FCD116 50%, #DA121A 100%); /* Green, Yellow, Red */
  color: white;
  border-radius: 0; /* Make it full width and no rounded corners */
  overflow: hidden;
  position: relative;
}

/* Optional: Add a subtle pattern overlay */
.holiday-hero-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zM6 5v1H5z"/%3E%3C/g%3E%3C/svg%3E');
    pointer-events: none;
    z-index: 0;
}
.holiday-hero-banner > * {
    position: relative;
    z-index: 1;
}
</style>