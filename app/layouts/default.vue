<template>
  <v-app>
    <!-- Header -->
    <AppHeader />

    <!-- Sidebar + Main Content -->
    <v-main>
      <v-container fluid>
        <SideBar />
        <slot />
      </v-container>
    </v-main>

    <!-- Footer -->
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Example basic layout spacing */
v-main {
  padding: 16px;
}
</style>
