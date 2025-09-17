<template>
  <v-card class="mb-4">
    <v-card-title>የ {{ year }} ዓ.ም የህዝብ በዓላት (Public Holidays in {{ year }})</v-card-title>
    <v-list>
      <v-list-item v-for="holiday in holidays" :key="holiday.name">
        <v-list-item-title>{{ holiday.name }}</v-list-item-title>
        <v-list-item-subtitle>
          ET: {{ holiday.month }}/{{ holiday.day }}/{{ holiday.year }} | GR: {{ gregorianDate(holiday) }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { toGregorian } from 'ethiopian-date';
import type { Holiday } from '~/type/holidays';

const props = defineProps({
  year: {
    type: Number,
    required: true,
  },
  holidays: {
    type: Array as () => Holiday[],
    required: true,
  },
});

const gregorianDate = (holiday: Holiday) => {
  const [y, m, d] = toGregorian(holiday.year, holiday.month, holiday.day);
  return `${y}/${m}/${d}`;
};
</script>