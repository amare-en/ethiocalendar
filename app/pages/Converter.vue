<template>
  <v-container class="py-10">
    <v-row class="justify-center mb-8">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 font-bold">Ethiopian ↔ Gregorian Date Converter</h1>
        <p class="text-subtitle-1">Convert dates between Ethiopian and Gregorian calendars</p>
      </v-col>
    </v-row>

    <v-row dense>
      
      <!-- Ethiopian → Gregorian -->
      <v-col cols="12" md="6" class="mb-6">
         <EthiopianToGregorian />
      </v-col>
<!-- Gregorian → Ethiopian -->
      <v-col cols="12" md="6" class="mb-6">
        <GregorianToEthiopian />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1 {
  color: #1e1e2f;
}
.text-subtitle-1 {
  color: #555;
}
</style>
