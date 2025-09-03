<template>
  <v-dialog v-model="localModel" max-width="500">
    <v-card rounded="xl">
      <v-card-title class="d-flex justify-space-between align-center text-h5">
        <span class="text-blue-darken-4 font-weight-bold">{{ holiday?.title?.en }}</span>
        <v-btn icon @click="closeDialog" variant="flat">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="text-subtitle-1 text-blue-grey-darken-2 mb-2">{{ holiday?.title?.am }}</div>
        <p><strong>Date:</strong> {{ holiday?.ethiopianDate }} ({{ holiday?.gregorianDate }})</p>
        <p><strong>Day:</strong> {{ holiday?.dayOfWeek }}</p>
        <p><strong>Category:</strong> {{ holiday?.category }}</p>
        <v-divider class="my-4" />
        <p>{{ holiday?.description }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: Boolean,
  holiday: Object,
});

const emit = defineEmits(["update:modelValue"]);

// Local copy of modelValue
const localModel = ref(props.modelValue);

// Keep localModel in sync with parent prop
watch(
  () => props.modelValue,
  (newVal) => {
    localModel.value = newVal;
  }
);

// Emit back changes when v-dialog updates
watch(localModel, (newVal) => {
  emit("update:modelValue", newVal);
});

function closeDialog() {
  localModel.value = false;
}
</script>
