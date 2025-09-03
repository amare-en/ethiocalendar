<template>
  <!-- Top App Bar -->
  <v-app-bar
    flat
    height="70"
    class="head"
    color="primary"
  >
    <!-- Logo & Title -->
    <NuxtLink to="/" class="d-flex align-center text-white text-decoration-none ml-15">
      <v-img
        src="/logo2.png"
        alt="Logo"
        height="50"
        width="50"
        contain
        class="mr-2"
      />
      <span class="app-title">Ethiopian Calendar</span>
    </NuxtLink>

    <v-spacer />

    <!-- Desktop Navigation -->
    <div class="d-none d-md-flex align-center mr-6">
      <NuxtLink
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        class="nav-link"
      >
        {{ item.title }}
      </NuxtLink>
    </div>

    <!-- Mobile Menu Button -->
    <v-btn
      icon
      class="d-md-none text-white mr-2"
      @click="drawer = !drawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    right
    class="head"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const menuItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Ethiopian Calendar', to: '/EthiopiaCalendar', icon: 'mdi-calendar' },
  { title: 'Converter', to: '/Converter', icon: 'mdi-sync' },
  { title: 'Holidays', to: '/Holidays', icon: 'mdi-party-popper' }
]
</script>

<style scoped>
.head {
  background: linear-gradient(135deg, #2C5F2D 0%, #FCD116 50%, #DA121A 100%); /* Ethiopian flag colors */
}

.app-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.nav-link {
  margin: 0 12px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.8;
}
</style>
