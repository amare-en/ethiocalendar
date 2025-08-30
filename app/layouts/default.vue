<template>
    <v-app>
      <v-container fluid class="pa-4">
        <AppHeader />
    <v-navigation-drawer class="border rounded-lg pa-4 mt-15">
      <v-row >
        <v-col>
          <v-toolbar flat class="menu">
            <v-toolbar-title >Ethiopian Calendar</v-toolbar-title>
          </v-toolbar>
          <v-list nav>
            <v-btn prepend-icon="mdi-home" variant="text" class="no-hover">
       <NuxtLink to="/" class="text-capitalize">Home</NuxtLink>
  </v-btn>
            <v-divider></v-divider>
            <v-list-item>
              <NuxtLink to="/EthiopiaCalendar" class=" text-capitalize">Ethiopian Calendar</NuxtLink>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <NuxtLink to="/EthiopianTime" class="text-capitalize">Ethiopian Time</NuxtLink>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
               <NuxtLink to="/Holidays" class="text-capitalize">Holidays</NuxtLink>
            </v-list-item>
          
            <v-divider></v-divider>
            <v-list-item>
              <NuxtLink to="/CalendarWidget" class="text-capitalize">Calendar Widget</NuxtLink>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <NuxtLink to="/Printable Calendar" class="text-capitalize">Printable Calendar</NuxtLink>
            </v-list-item>
            
            <v-list-item>
              <NuxtLink to="/About" class="text-capitalize">Ethiopia Weather</NuxtLink>
            </v-list-item>
            <v-divider></v-divider>
              <v-list-item>
              <NuxtLink to="/ExchangeRates" class="text-capitalize">Exchange Rates</NuxtLink>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-navigation-drawer>

        <v-main>
          <slot />
        </v-main>
        <AppFooter />
      </v-container>
    </v-app>
</template>
<script setup lang="ts">
</script>
<style scoped>
.menu {
  font-weight: bold;
  font-size: 1.2em;
   background: linear-gradient(135deg, #2C5F2D 0%, #FCD116 50%, #DA121A 100%); /* Green, Yellow, Red */
}

.no-hover {
  background-color: transparent !important;
  box-shadow: none !important;
  cursor: default !important; /* Optional: changes cursor back to default */
}

/* Important: This is the key part to remove the hover effect */
.no-hover:hover {
  background-color: transparent !important;
  box-shadow: none !important;
  opacity: 1 !important; /* Sometimes Vuetify adds a slight opacity change on hover */
}
</style>