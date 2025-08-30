<template>
  <v-card-title class="calendar-header">
    <v-btn icon size="small" variant="text" @click="$emit('prev-year')" aria-label="Previous Year">
      <v-icon>mdi-chevron-double-left</v-icon>
    </v-btn>

    <div class="calendar-title flex-grow-1">
      <div class="text-h6 font-bold">{{ props.monthName }} {{ props.year }}</div>
      <div v-if="props.showGregorian" class="text-subtitle-2 text-grey-darken-1 mt-1">
        {{ props.gregorianDate }}
      </div>
    </div>

    <v-btn icon size="small" variant="text" @click="$emit('next-year')" aria-label="Next Year">
      <v-icon>mdi-chevron-double-right</v-icon>
    </v-btn>
  </v-card-title>
</template>

<script setup lang="ts">
/**
 * Props for the CalendarHeader component.
 */
interface Props {
  monthName: string;
  year: number;
  gregorianDate: string;
  showGregorian: boolean;
}

const props = defineProps<Props>();

/**
 * Emits for the CalendarHeader component.
 */
interface Emits {
  (e: 'prev-year'): void;
  (e: 'next-year'): void;
}

const emit = defineEmits<Emits>();
</script>

<style scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
  border-radius: 16px 16px 0 0;
}

.calendar-title {
  text-align: center;
  flex-grow: 1;
  user-select: none;
}
</style>