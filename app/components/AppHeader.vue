<template>
  <v-app-bar app elevation="2" :height="70" class="app-header" color="primary">
    <!-- Use fluid container to match main content width exactly -->
    <v-container class="px-0">
      <v-row align="center" justify="space-between">
        <!-- Left: Logo + Title -->
        <v-col cols="auto" class="d-flex align-center">
          <NuxtLink to="/" class="d-flex align-center text-decoration-none text-white">
            <v-img
              src="/logo2.png"
              alt="Logo"
              height="42"
              width="42"
              class="mr-2"
            />
            <div class="text-center">
              <h2 class="text-h5 font-weight-bold mb-0 text-white">
               የኢትዮጵያ ቀን መቁጠሪያ 
              </h2>
              <p class="text-white text-body-2 mb-0">Ethiopian Calendar</p>
            </div>
          </NuxtLink>
        </v-col>
        <!-- Right: Navigation -->
        <v-col cols="auto" class="d-none d-md-flex align-center">
          <NuxtLink
            v-for="(item, i) in menuItems"
            :key="i"
            :to="item.to"
            class="nav-link"
            active-class="router-link-active"
          >
            {{ item.title }}
          </NuxtLink>
        </v-col>

        <!-- Mobile Drawer Icon -->
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="emit('toggle-drawer')"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const emit = defineEmits(['toggle-drawer']);
const menuItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Ethiopian Calendar', to: '/Ethiopia-Calendar', icon: 'mdi-calendar' },
  { title: 'Converter', to: '/Converter', icon: 'mdi-sync' },
  { title: 'Current Ethiopian Date & Time', to: '/Current-Ethiopia-Date', icon: 'mdi-information' },
  //{ title: 'Time', to: '/Ethiopia-Time', icon: 'mdi-clock' },
  { title: 'Holidays', to: '/Holidays', icon: 'mdi-party-popper' },
];
</script>
<style scoped>
.app-header {
  background-color: rgba(15, 71, 175, 0.85);
  backdrop-filter: blur(8px);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
/* Navigation links */
.nav-link {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 18px;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  padding-bottom: 4px;
}
.nav-link:hover {
  color: white;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background-color: white;
  transition: width 0.3s ease;
  border-radius: 2px;
}
.nav-link:hover::after {
  width: 100%;
}
/* Active link style */
.nav-link.router-link-active {
  color: white;
  font-weight: 600;
}
.nav-link.router-link-active::after {
  width: 100%;
}
</style>