<template>
  <v-app>
    <v-main class="bg-background">
      <div class="ethiopian-holidays">
        <HolidayHeader 
          title="Ethiopian Holidays"
          subtitle="Discover and celebrate the rich cultural and religious traditions of Ethiopia"
          icon="mdi-calendar-heart"
        />
        <v-container>
          <HolidayFilters 
            :filters="filters" 
            v-model="activeFilter"
          />
          
          <HolidayList 
            :holidays="filteredHolidays"
          />
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import HolidayHeader from '~/components/holidays/HolidayHeader.vue';
import HolidayFilters from '~/components/holidays/HolidayFilters.vue';
import HolidayList from '~/components/holidays/HolidayList.vue';

// Types
interface Holiday {
  id: number;
  name: string;
  ethiopianDate: string;
  gregorianDate: string;
  description: string;
  category: 'national' | 'religious';
  publicHoliday: boolean;
  date: Date;
}

const activeFilter = ref('upcoming');

const filters = [
  { value: 'all', label: 'All Holidays' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'religious', label: 'Religious' },
  { value: 'national', label: 'National' }
];

// Sample Ethiopian holidays data
const holidays = ref<Holiday[]>([
    {
        id: 1,
        name: "Enkutatash (Ethiopian New Year)",
        ethiopianDate: "1 Meskerem",
        gregorianDate: "September 11, 2023",
        description: "Ethiopian New Year, also known as Enkutatash, marks the end of the rainy season and the beginning of spring.",
        category: "national",
        publicHoliday: true,
        date: new Date(2023, 8, 11) // September is month 8 (0-indexed)
    },
    {
        id: 2,
        name: "Meskel (Finding of the True Cross)",
        ethiopianDate: "17 Meskerem",
        gregorianDate: "September 27, 2023",
        description: "Meskel commemorates the discovery of the True Cross by Queen Helena (Eleni) in the fourth century.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2023, 8, 27)
    },
    {
        id: 3,
        name: "Eid al-Fitr (End of Ramadan)",
        ethiopianDate: "1 Shawwal",
        gregorianDate: "April 21, 2023 (approx)",
        description: "Marks the end of Ramadan, the Islamic holy month of fasting. Date varies based on lunar calendar.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2023, 3, 21)
    },
    {
        id: 4,
        name: "Genna (Ethiopian Christmas)",
        ethiopianDate: "29 Tahsas",
        gregorianDate: "January 7, 2024",
        description: "Christmas in Ethiopia is called Genna and is celebrated on January 7th according to the Gregorian calendar.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2024, 0, 7)
    },
    {
        id: 5,
        name: "Timkat (Epiphany)",
        ethiopianDate: "11 Tir",
        gregorianDate: "January 19, 2024",
        description: "Timkat is the Ethiopian Orthodox celebration of Epiphany, commemorating the baptism of Jesus in the Jordan River.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2024, 0, 19)
    },
    {
        id: 6,
        name: "Adwa Victory Day",
        ethiopianDate: "23 Megabit",
        gregorianDate: "March 2, 2024",
        description: "Commemorates the victory of Ethiopia over Italy in the Battle of Adwa in 1896.",
        category: "national",
        publicHoliday: true,
        date: new Date(2024, 2, 2)
    },
    {
        id: 7,
        name: "Ethiopian Good Friday",
        ethiopianDate: "15 Miyazya",
        gregorianDate: "April 26, 2024 (approx)",
        description: "Commemorates the crucifixion of Jesus Christ. Date varies each year.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2024, 3, 26)
    },
    {
        id: 8,
        name: "Ethiopian Easter",
        ethiopianDate: "17 Miyazya",
        gregorianDate: "April 28, 2024 (approx)",
        description: "Celebrates the resurrection of Jesus Christ. Date varies each year.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2024, 3, 28)
    },
    {
        id: 9,
        name: "International Workers' Day",
        ethiopianDate: "23 Miyazya",
        gregorianDate: "May 1, 2024",
        description: "Celebrates the achievements of workers and the labor movement.",
        category: "national",
        publicHoliday: true,
        date: new Date(2024, 4, 1)
    },
    {
        id: 10,
        name: "Patriots' Victory Day",
        ethiopianDate: "27 Miyazya",
        gregorianDate: "May 5, 2024",
        description: "Commemorates the end of the Italian occupation in 1941.",
        category: "national",
        publicHoliday: true,
        date: new Date(2024, 4, 5)
    },
    {
        id: 11,
        name: "Downfall of Derg",
        ethiopianDate: "20 Ginbot",
        gregorianDate: "May 28, 2024",
        description: "Marks the overthrow of the Derg regime in 1991.",
        category: "national",
        publicHoliday: true,
        date: new Date(2024, 4, 28)
    },
    {
        id: 12,
        name: "Eid al-Adha (Feast of Sacrifice)",
        ethiopianDate: "10 Dhu al-Hijjah",
        gregorianDate: "June 28, 2023 (approx)",
        description: "Commemorates Ibrahim's willingness to sacrifice his son. Date varies based on lunar calendar.",
        category: "religious",
        publicHoliday: true,
        date: new Date(2023, 5, 28)
    }
]);

const today = new Date();
today.setHours(0, 0, 0, 0); // Set to beginning of the day for accurate comparison

const isUpcoming = (holiday: Holiday) => {
  return holiday.date >= today;
};

// Filter holidays based on active filter
const filteredHolidays = computed(() => {
  let filtered = [...holidays.value];
  
  if (activeFilter.value === 'upcoming') {
    filtered = filtered.filter(holiday => isUpcoming(holiday));
  } else if (activeFilter.value === 'religious') {
    filtered = filtered.filter(holiday => holiday.category === 'religious');
  } else if (activeFilter.value === 'national') {
    filtered = filtered.filter(holiday => holiday.category === 'national');
  }
  
  // Sort by date
  return filtered.sort((a, b) => a.date.getTime() - b.date.getTime());
});

</script>

<style scoped>
.ethiopian-holidays {
    font-family: 'Roboto', sans-serif;
}
</style>
