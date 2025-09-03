// composables/useHolidays.js
import { ref, computed, onMounted } from "vue";
import { staticHolidays } from "@/utils/staticHolidays";
import { formatHoliday } from "@/utils/holidayUtils";

export function useHolidays() {
  const filterCategory = ref("all");
  const dialog = ref(false);
  const selectedHoliday = ref({});
  const holidaysData = ref([]);
  const upcomingHolidays = ref([]);

  onMounted(() => {
    const formattedHolidays = staticHolidays.map(formatHoliday);
    holidaysData.value = formattedHolidays;
    upcomingHolidays.value = formattedHolidays
      .filter((h) => h.daysLeft >= 0)
      .sort((a, b) => a.daysLeft - b.daysLeft);
  });

  const filteredHolidays = computed(() => {
    if (filterCategory.value === "upcoming") {
      return upcomingHolidays.value;
    } else if (filterCategory.value !== "all") {
      return holidaysData.value.filter(
        (h) => h.category.toLowerCase() === filterCategory.value
      );
    }
    return holidaysData.value;
  });

  function showDetails(holiday) {
    selectedHoliday.value = holiday;
    dialog.value = true;
  }

  return {
    filterCategory,
    dialog,
    selectedHoliday,
    holidaysData,
    filteredHolidays,
    showDetails,
    upcomingHolidays,
  };
}
