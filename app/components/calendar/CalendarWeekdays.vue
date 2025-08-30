<template>
  <thead>
    <tr>
      <th v-for="(day, index) in weekdays" :key="index" class="text-center text-subtitle-2">
        <div class="weekday-labels">
          <span>{{ day }}</span>
          <span v-if="showGregorian" class="english-weekday text-caption text-grey-darken-1">
            {{ englishWeekdays[index] }}
          </span>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
/**
 * Props for the CalendarWeekdays component.
 */
interface Props {
  weekdays: string[];
  showGregorian: boolean;
}
const props = defineProps<Props>();

// Corresponding English weekday names
const englishWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<style scoped>
th {
  color: #555;
  background-color: #f5f5f5;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.weekday-labels {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.english-weekday {
  margin-top: 2px;
}
</style>