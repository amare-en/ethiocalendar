<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-h4 font-weight-bold text-primary mb-2">
            Ethiopian ↔ Gregorian Date Converter
          </h1>
          <p class="text-subtitle-1 text-medium-emphasis">
            Easily convert dates between Ethiopian and Gregorian calendars
          </p>
        </div>

        <!-- Conversion Sections -->
        <v-row dense>
          <!-- Ethiopian → Gregorian -->
          <v-col cols="12" class="mb-6">
            <EthiopianToGregorian />
          </v-col>

          <v-divider inset class="my-6 mx-4  px-10" />

          <!-- Gregorian → Ethiopian -->
          <v-col cols="12">
            <GregorianToEthiopian />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// No script logic needed for the wrapper
</script>

<style scoped>
h1 {
  font-family: 'Inter', sans-serif;
}

.text-primary {
  color: #3f51b5; /* Indigo (modern accent color) */
}
</style>
