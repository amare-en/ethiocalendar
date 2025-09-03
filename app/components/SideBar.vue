<template>
      <!-- Navigation Drawer / Sidebar -->
        <v-navigation-drawer
          app
          permanent
          class="sidebar glass-sidebar"
          width="280"
        >
        <!--
          <v-toolbar flat class="sidebar-header">
            <v-toolbar-title class="text-h6 font-bold text-white">
              Ethiopian Calendar
            </v-toolbar-title>
          </v-toolbar>
          -->
          <v-list nav dense>
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              class="sidebar-item"
              link
            >
              <v-list-item-icon>
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <NuxtLink :to="item.link" class="sidebar-link">
                  {{ item.title }}
                </NuxtLink>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

</template>
<script setup lang="ts">
// Sidebar menu items
const menuItems = [
  { title: 'Home', link: '/', icon: 'mdi-home' },
  { title: 'Ethiopian Calendar', link: '/EthiopiaCalendar', icon: 'mdi-calendar' },
  { title: 'Calendar Converter', link: '/converter', icon: 'mdi-swap-horizontal' },
  { title: 'Ethiopian Time', link: '/Ethiopia-Time', icon: 'mdi-clock-time-four-outline' },
    { title: 'Current Ethiopia Date', link: '/Current-Ethiopia-Date', icon: 'mdi-calendar-check' },
  { title: 'Holidays', link: '/Holidays', icon: 'mdi-party-popper' },
  { title: 'Calendar Widget', link: '/holidayet', icon: 'mdi-calendar-today' },
  { title: 'Printable Calendar', link: '/Printable Calendar', icon: 'mdi-printer' },
  { title: 'Ethiopia Weather', link: '/About', icon: 'mdi-information' },
  { title: 'Exchange Rates', link: '/ExchangeRates', icon: 'mdi-currency-usd' },
];
</script>
<style scoped>
/* Sidebar Glassmorphism & Gradient header */
.sidebar {
  background: #FCFCFC;
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.sidebar-header {
  border-radius: 12px;
  margin: 0.5rem;
  justify-content: center;
  background: linear-gradient(45deg, #2c5f2d, #97bc62);
}

/* Sidebar items */
.sidebar-item {
  transition: all 0.3s ease;
  border-radius: 12px;
  margin: 4px 8px;
}
.sidebar-item:hover {
  background: rgba(44, 95, 45, 0.1);
  transform: translateX(4px);
}

/* Link styles */
.sidebar-link {
  text-decoration: none;
  color: #1e1e2f;
  font-weight: 500;
  font-size: 1rem;
}

/* Remove default button hover effects */
.no-hover {
  background-color: transparent !important;
  box-shadow: none !important;
  cursor: default !important;
}

.no-hover:hover {
  background-color: transparent !important;
  box-shadow: none !important;
  opacity: 1 !important;
}
</style>