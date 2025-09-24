<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
         <!-- Header -->
        <div class="text-center mb-10">
  <h1 class="text-h5 text-md-h4 font-weight-bold text-gradient mb-3">
    Ethiopian ↔ Gregorian Date Converter
  </h1>
  <p class="text-subtitle-1 text-medium-emphasis">
    Convert dates seamlessly between Ethiopian and Gregorian calendars
  </p>
</div>
        <!-- Wrapper Card -->
        <div class="converter-wrapper ">
         

          <!-- Conversion Sections -->
      <v-row dense class="border rounded-lg pa-4">
  <!-- Ethiopian → Gregorian -->
  <v-col cols="12">
    <EthiopianToGregorian />
  </v-col>
  <!-- Divider -->
  <v-divider class="my-4" />
  <!-- Gregorian → Ethiopian -->
  <v-col cols="12">
    <GregorianToEthiopian />
  </v-col>
</v-row>

        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// This is just a wrapper page for the two converters
</script>

<style scoped>
/* Wrapper with subtle glass look */
.converter-wrapper {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  width: 100%;
}

/* Gradient title */
.text-gradient {
  background: linear-gradient(90deg, #3f51b5, #e91e63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Title font */
h1 {
  font-family: 'Inter', sans-serif;
}
</style>
