<template>
  <v-card class="pa-2">
    <v-card-title class="text-h5 font-weight-bold d-flex align-center">
      <v-icon start color="primary">mdi-star-circle</v-icon>
      <span>Public Holidays in {{ year }}</span>
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-list lines="two" dense>
      <template v-for="(holiday, index) in holidays" :key="holiday.name.en">
        <v-list-item>
            <template v-slot:prepend>
                <v-avatar color="primary">
                    <v-icon>mdi-calendar-star</v-icon>
                </v-avatar>
            </template>
          <v-list-item-title class="font-weight-medium primary--text">{{ holiday.name.am }} / {{ holiday.name.en }}</v-list-item-title>
          <v-list-item-subtitle class="text-caption">{{ formatHolidayDate(holiday) }}</v-list-item-subtitle>
        </v-list-item>
        <v-divider v-if="index < holidays.length - 1" inset></v-divider>
      </template>
    </v-list>
  </v-card>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { getHolidaysForYear } from '@/utils/holidays';
import { getEthiopianMonthName, ethiopianToGregorian } from '@/utils/ethiopianDate';

const props = defineProps({
  year: {
    type: Number,
    required: true,
  },
});
const holidays = ref<Array<{ month: number, day: number, name: { am: string; en: string } }>>([]);
const formatHolidayDate = (holiday: { month: number, day: number, name: { am: string; en: string } }) => {
    const monthName = getEthiopianMonthName(holiday.month);
    const ethDate = `${monthName} ${holiday.day}, ${props.year}`;
    const gDate = ethiopianToGregorian(props.year, holiday.month, holiday.day);
    const gregDate = gDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return `${ethDate}  /  ${gregDate}`;
};
watch(() => props.year, (newYear) => {
    holidays.value = getHolidaysForYear(newYear);
}, { immediate: true });
</script>
<style scoped>
.primary--text {
    color: #1976D2; /* Vuetify primary blue */
}
.v-list-item-subtitle {
    font-size: 0.8rem;
}
</style>
