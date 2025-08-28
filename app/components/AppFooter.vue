<template>
  <v-footer app>
    <v-row justify="center" no-gutters>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Calendar Converter</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script setup lang="ts">
</script>
<!--

// app/composables/useEthiopianCalendar.ts
import { ref, computed, onMounted, onBeforeUnmount } from "vue";


// Ethiopian months in Amharic
const ETH_MONTHS_AM = [
  "መስከረም","ጥቅምት","ህዳር","ታኅሣሥ",
  "ጥር","የካቲት","መጋቢት","ሚያዝያ",
  "ግንቦት","ሰኔ","ሐምሌ","ነሐሴ","ጳጉሜ"
];

// Weekdays in Amharic (starting Sunday)
const ETH_WEEKDAYS_AM = [
  "እሁድ","ሰኞ","ማክሰኞ","ረቡዕ","ኀሙስ","ዓርብ","ቅዳሜ"
];

export function useEthiopianCalendar() {
  const now = ref(new Date());

  // Update every second
  let timer: number | null = null;
  onMounted(() => {
    timer = window.setInterval(() => {
      now.value = new Date();
    }, 1000);
  });
  onBeforeUnmount(() => {
    if (timer) window.clearInterval(timer);
  });

  // Ethiopian date with weekday in Amharic
  //const ethiopianDate = computed(() => {
    //const etDate = EtDatetime.fromGregorianDate(now.value);
    //const weekday = ETH_WEEKDAYS_AM[now.value.getDay()]; // JS weekday 0=Sun
   // return `${weekday}, ${etDate.date} ${ETH_MONTHS_AM[etDate.month - 1]} ${etDate.year}`;
//  });


  // Ethiopian local time (6-hour offset)
  const ethiopianTime = computed(() => {
    let h = now.value.getHours() - 6;
    if (h <= 0) h += 12;
    if (h > 12) h -= 12;
    const m = now.value.getMinutes().toString().padStart(2, "0");
    const s = now.value.getSeconds().toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  });

  // Gregorian date
  const gregorianDate = computed(() =>
    now.value.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  // Gregorian time
  const gregorianTime = computed(() =>
    now.value.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  );

  return { ethiopianTime, gregorianDate, gregorianTime };
}


-->