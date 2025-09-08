<template>
  <v-app-bar app elevation="2" :height="70" class="app-header" color="primary">
    <v-app-bar-nav-icon
      class="d-md-none"
      @click="emit('toggle-drawer')"
    />

    <v-toolbar-title class="d-flex align-center">
      <NuxtLink to="/" class="d-flex align-center text-decoration-none text-white">
        <v-img
          src="/logo2.png"
          alt="Logo"
          height="42"
          width="42"
          class="mr-2"
        />
        <span class="text-h6 font-weight-bold">Ethiopian Calendar</span>
      </NuxtLink>
    </v-toolbar-title>

    <v-spacer />
<!--
    <nav class="d-none d-md-flex align-center">
      <NuxtLink
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        class="nav-link"
        active-class="router-link-active"
      >
        {{ item.title }}
      </NuxtLink>
    </nav>
    --->
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const emit = defineEmits(['toggle-drawer']);
const route = useRoute();
const menuItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Ethiopian Calendar', to: '/Ethiopia-Calendar', icon: 'mdi-calendar' },
  { title: 'Converter', to: '/Converter', icon: 'mdi-sync' },
  { title: 'Holidays', to: '/Holidays', icon: 'mdi-party-popper' },
];
</script>

<style scoped>
.app-header {
  background-color: rgba(15, 71, 175, 0.85); /* #0F47AF with transparency */
  backdrop-filter: blur(8px);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 0 16px;
}

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