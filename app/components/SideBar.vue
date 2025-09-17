<template>
  <v-list>
    <v-list-item
      v-for="item in menuItems"
      :key="item.title"
      :to="item.link"
      :prepend-icon="item.icon"
      :title="item.title"
      class="rounded-lg"
    />
  </v-list>
</template>

<script setup lang="ts">
const menuItems = [
  { title: 'Home', link: '/', icon: 'mdi-home-variant-outline' },
  { title: 'Ethiopian Calendar', link: '/Ethiopia-Calendar', icon: 'mdi-calendar-month-outline' },
  { title: 'Calendar Converter', link: '/converter', icon: 'mdi-swap-horizontal-bold' },
  { title: 'Ethiopian Time', link: '/Ethiopia-Time', icon: 'mdi-clock-time-four-outline' },
  { title: 'Current Ethiopia Date', link: '/Current-Ethiopia-Date', icon: 'mdi-calendar-check-outline' },
  { title: 'Holidays', link: '/Holidays', icon: 'mdi-party-popper' },
  
  //{ title: 'Calendar Widget', link: '/holidayet', icon: 'mdi-calendar-today' },
  //{ title: 'Printable Calendar', link: '/Printable-Calendar', icon: 'mdi-printer-outline' },
  //{ title: 'Ethiopia Weather', link: '/About', icon: 'mdi-weather-cloudy' },
  //{ title: 'Exchange Rates', link: '/ExchangeRates', icon: 'mdi-currency-usd' },
  
];
</script>