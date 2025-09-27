import { ref, computed } from 'vue';
import { f as gregorianToEthiopian, c as getEthiopianDayName, b as getEthiopianMonthName } from './ethiopianDate-D8eUZq7u.mjs';

function useCurrentDateAndTime() {
  const currentDate = ref(/* @__PURE__ */ new Date());
  const ethiopian = computed(() => gregorianToEthiopian(currentDate.value));
  const gregorianDate = computed(
    () => currentDate.value.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long"
    })
  );
  const ethiopianDate = computed(() => {
    const { year, month, day } = ethiopian.value;
    const monthName = getEthiopianMonthName(month);
    const dayName = getEthiopianDayName(currentDate.value.getDay());
    return `${dayName}, ${monthName} ${day}, ${year}`;
  });
  const ethiopianTime = computed(() => {
    let hour = currentDate.value.getHours() - 6;
    if (hour < 0) {
      hour += 24;
    }
    const minute = currentDate.value.getMinutes();
    const second = currentDate.value.getSeconds();
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  });
  const gregorianTime = computed(
    () => currentDate.value.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
      // Use 24-hour format
    })
  );
  return { ethiopianDate, ethiopianTime, gregorianDate, gregorianTime };
}

export { useCurrentDateAndTime as u };
//# sourceMappingURL=useCurrentDateAndTime-Dvt9pcao.mjs.map
