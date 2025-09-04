

<!--

<template>
  <v-app>
    <v-main class="bg-background">
      <HolidayHeroBanner />
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
            :year="today.getFullYear()"
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
-->
<template>
  <v-app>
    <v-main class="bg-blue-grey-lighten-5">
      <v-container class="py-12">
        <v-card class="mx-auto pa-4 pa-sm-8" rounded="xl" elevation="10" max-width="1200">
          <v-card-title class="text-h4 text-sm-h3 font-weight-bold text-center mb-6">
            <span class="text-blue-darken-4">
              የኢትዮጵያ በዓላት
            </span>
            <br />
            <span class="text-sm-h5 text-blue-grey-darken-3">
              Ethiopian Holidays
            </span>
          </v-card-title>
          <v-divider class="mb-6"></v-divider>

          <!-- Filter Buttons -->
          <div class="d-flex justify-center mb-6 flex-wrap">
            <v-btn-toggle
              v-model="filterCategory"
              rounded="pill"
              color="blue-darken-4"
              group
              mandatory
              class="d-flex flex-wrap justify-center"
            >
              <v-btn value="all" class="ma-1 rounded-xl px-4 text-none font-weight-bold">
                All Holidays
              </v-btn>
              <v-btn value="upcoming" class="ma-1 rounded-xl px-4 text-none font-weight-bold">
                Upcoming
              </v-btn>
              <v-btn value="religious" class="ma-1 rounded-xl px-4 text-none font-weight-bold">
                Religious
              </v-btn>
              <v-btn value="national" class="ma-1 rounded-xl px-4 text-none font-weight-bold">
                National
              </v-btn>
              <v-btn value="cultural" class="ma-1 rounded-xl px-4 text-none font-weight-bold">
                Cultural
              </v-btn>
            </v-btn-toggle>
          </div>

          <v-row dense>
            <v-col
              v-for="holiday in filteredHolidays"
              :key="holiday.title.en"
              cols="12"
              md="6"
              lg="4"
            >
              <v-card
                class="holiday-card pa-4 d-flex flex-column"
                :class="{'upcoming-card': holiday.daysLeft <= 7}"
                rounded="xl"
                elevation="5"
              >
                <div class="d-flex justify-space-between align-start mb-2">
                  <div class="flex-grow-1">
                    <div class="text-h6 text-blue-darken-4 font-weight-bold">
                      {{ holiday.title.en }}
                    </div>
                    <div class="text-subtitle-1 text-blue-grey-darken-2">
                      {{ holiday.title.am }}
                    </div>
                  </div>
                  <v-chip
                    :color="getCategoryColor(holiday.category)"
                    class="font-weight-bold"
                    size="small"
                    label
                  >
                    {{ holiday.category }}
                  </v-chip>
                </div>

                <div class="mb-4">
                  <div class="text-body-1 font-weight-medium">
                    Date: {{ holiday.ethiopianDate }} ({{ holiday.gregorianDate }})
                  </div>
                  <div class="text-body-1 font-weight-medium">
                    Day: {{ holiday.dayOfWeek }}
                  </div>
                  <div class="text-h5 font-weight-bold mt-2" :class="getCountdownColor(holiday.daysLeft)">
                    {{ holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : 'Passed' }}
                  </div>
                </div>

                <v-spacer></v-spacer>

                <div class="d-flex justify-end mt-2">
                  <v-btn
                    variant="text"
                    color="blue-darken-4"
                    class="text-none font-weight-bold"
                    @click="showDetails(holiday)"
                  >
                    Read More
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>

    <!-- Details Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card rounded="xl">
        <v-card-title class="d-flex justify-space-between align-center text-h5">
          <span class="text-blue-darken-4 font-weight-bold">{{ selectedHoliday.title.en }}</span>
          <v-btn icon @click="dialog = false" variant="flat">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div class="text-subtitle-1 text-blue-grey-darken-2 mb-2">
            {{ selectedHoliday.title.am }}
          </div>
          <p class="text-body-1 mb-2">
            <strong>Date:</strong> {{ selectedHoliday.ethiopianDate }} ({{ selectedHoliday.gregorianDate }})
          </p>
          <p class="text-body-1 mb-2">
            <strong>Day:</strong> {{ selectedHoliday.dayOfWeek }}
          </p>
          <p class="text-body-1 mb-2">
            <strong>Category:</strong> {{ selectedHoliday.category }}
          </p>
          <v-divider class="my-4"></v-divider>
          <p class="text-body-1">{{ selectedHoliday.description }}</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
// Mocking the ethiopian-date library for this single-file example.
// In a real project, you would import it: import { EthiopianDate } from 'ethiopian-date';
// and import your data file: import { staticHolidays } from '@/data/holidays.js';
const EthiopianDate = {
  now() {
    // Current date for the countdown calculation based on the provided date.
    return new Date('2025-09-01T16:28:00');
  },
  // Simplified conversion function for this example
  fromGregorian(year, month, day) {
    const gregorianDate = new Date(year, month - 1, day);
    const dayOfWeek = gregorianDate.toLocaleDateString('en-US', { weekday: 'long' });
    // This is a simplified, non-robust conversion for the example.
    // A real library would provide accurate conversion.
    const ethiopianYear = year - 7;
    const ethiopianMonth = month + 4;
    const ethiopianDay = day;
    const amharicMonths = ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜን'];
    return {
      year: ethiopianYear,
      month: ethiopianMonth,
      day: ethiopianDay,
      dayOfWeek: dayOfWeek,
      amharicMonth: amharicMonths[ethiopianMonth - 1]
    };
  }
};

const filterCategory = ref('all');
const dialog = ref(false);
const selectedHoliday = ref({});

// Hardcoded static data as requested, to be replaced by a data file in a real app.
const staticHolidays = [
  {
    title: { am: 'አዲስ ዓመት', en: 'Ethiopian New Year' },
    date: { month: 1, day: 1 },
    category: 'National',
    description: 'Marks the beginning of the Ethiopian calendar year, also known as Enkutatash.'
  },
  {
    title: { am: 'መስቀል', en: 'Meskel' },
    date: { month: 1, day: 17 },
    category: 'Religious',
    description: 'A major religious holiday commemorating the finding of the True Cross.'
  },
  {
    title: { am: 'ገና', en: 'Christmas' },
    date: { month: 4, day: 29 },
    category: 'Religious',
    description: 'The Ethiopian Orthodox celebration of the birth of Jesus Christ.'
  },
  {
    title: { am: 'ጥምቀት', en: 'Epiphany / Timkat' },
    date: { month: 5, day: 11 },
    category: 'Religious',
    description: 'Celebrates the baptism of Jesus Christ in the Jordan River.'
  },
  {
    title: { am: 'የአድዋ ድል በዓል', en: 'Adwa Victory Day' },
    date: { month: 6, day: 23 },
    category: 'National',
    description: 'Commemorates Ethiopia\'s victory over Italy in the Battle of Adwa.'
  },
  {
    title: { am: 'የዓለም የሠራተኞች ቀን', en: 'International Workers\' Day' },
    date: { month: 8, day: 23 },
    category: 'Cultural',
    description: 'A global holiday celebrating the achievements of workers.'
  },
  {
    title: { am: 'የአርበኞች ቀን', en: 'Patriots\' Victory Day' },
    date: { month: 8, day: 27 },
    category: 'National',
    description: 'Honors the Ethiopian patriots who fought against the Italian occupation.'
  },
];

// Simplified function to calculate Ethiopian Orthodox Easter (Fasika) for the current year.
// A more robust algorithm is needed for full accuracy over many years.
function calculateFasika(year) {
  // A simplified, approximate calculation for the example.
  // Real-world implementation would use a precise algorithm.
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  const gregorianFasika = new Date(year, month - 1, day);
  const ethiopianFasika = EthiopianDate.fromGregorian(gregorianFasika.getFullYear(), gregorianFasika.getMonth() + 1, gregorianFasika.getDate());

  return {
    title: { am: 'ፋሲካ', en: 'Fasika (Easter)' },
    date: { year: ethiopianFasika.year, month: ethiopianFasika.month, day: ethiopianFasika.day },
    category: 'Religious',
    description: 'The Ethiopian Orthodox celebration of the Resurrection of Jesus Christ.'
  };
}

// Function to calculate upcoming holidays for a given year, including Fasika.
function getHolidaysForYear(year) {
  const allHolidays = [...staticHolidays];
  allHolidays.push(calculateFasika(year));
  // Add other dynamic holidays like Eid al-Fitr, Eid al-Adha, Mawlid here
  // by calculating their dates and pushing them to the array.
  return allHolidays;
}

const currentYear = new Date().getFullYear();
const allHolidays = ref(getHolidaysForYear(currentYear));

// Helper function to format the holiday data for display
function formatHoliday(holiday) {
  const today = EthiopianDate.now();
  const todayGregorian = new Date(today);
  const currentGregorianYear = todayGregorian.getFullYear();

  // Find the next occurrence of the holiday
  let gregorianYear = currentGregorianYear;
  let holidayDate = new Date(gregorianYear, holiday.date.month - 1, holiday.date.day);
  
  // Convert Ethiopian month/day to Gregorian for the current year
  // A real library would handle this accurately. For this example, it's a simplification.
  if (holiday.date.month < 4) {
    gregorianYear = currentGregorianYear + 1;
  }
  const ethiopianDate = `${holiday.date.amharicMonth} ${holiday.date.day}, ${holiday.date.year}`;
  const gregorianDate = `${holidayDate.toLocaleString('en-US', { month: 'long', day: 'numeric' })}, ${gregorianYear}`;
  const dayOfWeek = holidayDate.toLocaleString('en-US', { weekday: 'long' });
  const timeDifference = holidayDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return {
    ...holiday,
    ethiopianDate: ethiopianDate,
    gregorianDate: gregorianDate,
    dayOfWeek: dayOfWeek,
    daysLeft: daysLeft,
  };
}

const holidaysData = computed(() => {
  return allHolidays.value.map(formatHoliday);
});

const filteredHolidays = computed(() => {
  let list = holidaysData.value;
  if (filterCategory.value === 'upcoming') {
    return list.filter(h => h.daysLeft >= 0).sort((a, b) => a.daysLeft - b.daysLeft);
  } else if (filterCategory.value !== 'all') {
    return list.filter(h => h.category.toLowerCase() === filterCategory.value);
  }
  return list;
});

const showDetails = (holiday) => {
  selectedHoliday.value = holiday;
  dialog.value = true;
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'Religious': return 'red-darken-2';
    case 'National': return 'green-darken-2';
    case 'Cultural': return 'yellow-darken-2';
    default: return 'blue-grey-darken-2';
  }
};

const getCountdownColor = (days) => {
  if (days <= 7 && days >= 0) {
    return 'text-green-darken-2';
  } else if (days > 7) {
    return 'text-blue-darken-2';
  } else {
    return 'text-grey-darken-1';
  }
};

// Mount hook to fetch data
onMounted(() => {
  // The static and dynamic data is already in the script.
  // In a real app, you might fetch from a data source here.
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Ethiopic:wght@400;700&display=swap');

.v-application {
  font-family: 'Noto Serif Ethiopic', sans-serif;
}

.holiday-card {
  transition: all 0.3s ease-in-out;
}

.holiday-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
}

.upcoming-card {
  border: 2px solid #2e7d32;
  box-shadow: 0 0 10px rgba(46, 125, 50, 0.5) !important;
}
</style>
