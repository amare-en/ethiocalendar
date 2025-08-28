<template>
  <v-row>
    <v-col
      v-for="(day, index) in weekdaysAm"
      :key="index"
      class="text-center font-medium"
    >
      {{ day }}
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const weekdaysAm: string[] = ["እሁድ","ሰኞ","ማክሰኞ","ረቡዕ","ኀሙስ","ዓርብ","ቅዳሜ"];
</script>
