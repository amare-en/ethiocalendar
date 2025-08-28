<template>

    <v-row justify="center" class="g-8">
      <v-col
        v-for="(item, index) in feature"
        :key="index"
        cols="12"
        md="4"
      >
        <div class="feature-box  d-flex flex-column border rounded-lg pa-4 h-100">
          <h3 class="feature-title">{{ item.title }}</h3>
          <p class="feature-desc">
            {{ item.description }}
          </p>
          <div class="mt-auto">
            <v-btn
              :href="item.link"
              target="_blank"
              color="primary"
              variant="flat"
              class="p-5"
            >
              Learn More
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
 
</template>
<script setup>
import { ref } from 'vue'

const feature = ref([
  {
    title: 'Ethiopian Calendar',
    description:
      'The Ethiopian calendar is a solar calendar based on the ancient Coptic calendar, consisting of 13 months: 12 months of 30 days each and a 13th month of 5 or 6 days.',
    link: 'https://example.com',
  },
  {
    title: 'Ethiopian Holidays',
    description:
      'Explore national and religious holidays in the Ethiopian calendar.',
    link: 'https://example.com',
  },
  {
    title: 'Ethiopian Date Converter',
    description:
      'Easily convert dates between the Gregorian and Ethiopian calendars with our converter tool.',
    link: 'https://example.com',
  },
])
</script>
<style scoped>
.feature-box {
  background: white;
 
}
.feature-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #111827;
}
.feature-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
  flex-grow: 1;
}
</style>


<!--
 <v-img
            :src="item.image"
            height="200"
            cover
            class="rounded-t-xl"
          ></v-img>-->