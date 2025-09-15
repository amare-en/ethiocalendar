<template>
  <v-card class="mb-4">
    <v-card-title>Public Holidays in {{ year }}</v-card-title>
    <v-list>
      <v-list-item v-for="holiday in holidays" :key="holiday.name">
        <v-list-item-content>
          <v-list-item-title>{{ holiday.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ holiday.month }}/{{ holiday.day }}/{{ holiday.year }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  year: {
    type: Number,
    required: true,
  },
  holidays: {
    type: Array,
    required: true,
  },
});
</script>
