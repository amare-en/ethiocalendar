<template>
  <v-sheet class="d-flex justify-center pa-4 mb-6">
    <v-chip-group
      v-model="selectedFilter"
      mandatory
      active-class="primary--text"
    >
      <v-chip
        v-for="filter in filters"
        :key="filter.value"
        :value="filter.value"
        large
      >
        {{ filter.label }}
      </v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  filters: {
    type: Array as () => Array<{ value: string; label: string; }>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const selectedFilter = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style scoped>
.v-chip {
  font-size: 1rem;
  padding: 1.5rem 2rem;
}
</style>
