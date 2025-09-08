<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modelValue: {
    type: String,
    default: "all",
  },
});

const emit = defineEmits(["update:modelValue"]);

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Religious", value: "religious" },
  { label: "National", value: "national" },
  { label: "Cultural", value: "cultural" },
  { label: "Upcoming", value: "upcoming" },
];
</script>

<template>
  <div class="text-center">
    <v-chip-group
      :model-value="modelValue"
      @update:modelValue="emit('update:modelValue', $event)"
      color="blue-darken-4"
      group
      mandatory
    >
      <v-chip
        v-for="option in filterOptions"
        :key="option.value" m
        :value="option.value"
        class="px-sm-6"
      >
        {{ option.label }}
      </v-chip>
    </v-chip-group>
  </div>
</template>