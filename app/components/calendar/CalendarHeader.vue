<template>
  <v-row class="align-center justify-space-between mb-4">
    <v-btn icon @click="emit('prevMonth')">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <div class="text-h6 font-bold text-center">
      {{ props.monthName }} {{ props.yearNumberGe_ez }}
    </div>

    <v-btn icon @click="emit('nextMonth')">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-row>
</template>

<script setup lang="ts">
interface Props {
  monthName: string;
  yearNumberGe_ez: string;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'prevMonth'): void;
  (e: 'nextMonth'): void;
}

const emit = defineEmits<Emits>();
</script>
