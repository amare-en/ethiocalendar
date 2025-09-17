<template>
  <v-container class="py-10">
    <!-- Title -->
    <div class="text-center mb-8">
      <h2 class="text-h5 text-md-h4 font-weight-bold text-primary">
        Frequently Asked Questions
      </h2>
      <p class="text-body-1 mt-2 text-medium-emphasis">
        Find answers to common questions below.
      </p>
    </div>

    <!-- FAQ List with Icons -->
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="(faq, i) in faqs"
        :key="i"
      >
        <v-expansion-panel-title expand-icon="mdi-chevron-down">
          <span class="font-weight-medium">{{ faq.question }}</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="text-body-2">{{ faq.answer }}</p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
const faqs = [
    {
        question: "What is the Ethiopian calendar?",
      answer:"The Ethiopian calendar is a solar calendar with 13 months: 12 months of 30 days and one short month of 5 days (6 in a leap year). It is about 7–8 years behind the Gregorian calendar."
    },
 {
    question: "Why is the Ethiopian calendar 7–8 years behind?",
    answer:
      "The difference comes from alternate calculations of the birth year of Jesus Christ. The Ethiopian calendar follows the Alexandrian system, which places His birth later than the Gregorian calculation.",
  },
  {
question:"When does the Ethiopian New Year (Enkutatash) fall?",
answer:"Ethiopian New Year falls on Meskerem 1, which corresponds to September 11th in the Gregorian calendar, or September 12th in a Gregorian leap year."
  },

  {
    question: "How is the Ethiopian calendar different from the Gregorian?",
    answer:
      "The Ethiopian calendar has 13 months: 12 months of 30 days and a 13th month, Pagume, of 5 or 6 days. It also has unique month names and follows a different calculation for leap years.",
  },

  {
    question: "What are the names of the Ethiopian months?",
    answer:"The 12 primary months are: Meskerem, Tikimt, Hidar, Tahsas, Tir, Yekatit, Megabit, Miyazia, Ginbot, Sene, Hamle, and Nehasse. The 13th month is Pagume."
      

  },
  {
    question: "How does the 13th month work?",
    answer:
      "The 13th month, Pagume, has 5 days (6 in leap years). It ensures the calendar aligns with the solar year",
  },

 
];
</script>

<style scoped>
.v-expansion-panel-title {
  font-size: 1.05rem;
}
.v-expansion-panel-title .v-icon {
  transition: transform 0.3s ease;
}
.v-expansion-panel-title--active .v-icon {
  transform: rotate(180deg);
}
</style>
