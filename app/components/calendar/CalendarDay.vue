<template>
  <v-sheet
    :class="{ 'is-today': day?.isToday, 'is-holiday': day?.isHoliday }"
    class="day-cell d-flex flex-column pa-1"
    height="120"
    border
    @click="$emit('day-click', day)"
  >
    <div v-if="day" class="fill-height">
      <div class="day-number-gregorian">{{ day.gregorianDate }}</div>
      <div class="day-number-geez">{{ day.dayNumberGe_ez }}</div>
      <div class="day-number-arabic">{{ day.dayNumber }}</div>
      <div v-if="day.isHoliday" class="holiday-marker"></div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
interface DayObject {
  dayNumber: number;
  dayNumberGe_ez: string;
  gregorianDate: number;
  isToday: boolean;
  isHoliday?: boolean;
}

defineProps<{
  day: DayObject | null;
}>();

defineEmits(['day-click']);
</script>

<style scoped>
.day-cell {
  transition: background-color 0.3s, box-shadow 0.3s;
  position: relative;
  cursor: pointer;
}
.day-cell:hover {
  background-color: #f5f5f5; /* grey-lighten-4 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.is-today {
  background-color: #E3F2FD; /* blue-lighten-5 */
  border: 1px solid #1976D2; /* blue-darken-2 */
}
.is-holiday {
    background-color: #FFEBEE; /* red-lighten-5 */
}
.day-number-geez {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: #212121; /* grey-darken-4 */
}
.day-number-arabic {
  font-size: 0.8rem;
  color: #757575; /* grey-darken-1 */
  position: absolute;
  bottom: 4px;
  right: 4px;
}
.day-number-gregorian {
  font-size: 0.8rem;
  color: #BDBDBD; /* vuetify grey-lighten-1 */
  position: absolute;
  top: 4px;
  right: 4px;
}
.holiday-marker {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 5px;
    height: 5px;
    background-color: #D32F2F; /* red-darken-2 */
    border-radius: 50%;
}
</style>