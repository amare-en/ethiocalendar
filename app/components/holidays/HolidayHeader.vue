<template>
  <div class="holiday-header bg-primary text-white text-center pa-8">
    <v-icon size="64" class="mb-4">{{ icon }}</v-icon>
    <h1 class="text-h3 font-weight-bold">{{ title }}</h1>
    <p class="text-h6 mt-2">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.holiday-header {
  border-bottom: 5px solid #1565C0; /* Darker primary */
}
</style>
