<template>
  <v-app>
    <!-- Header -->
      <AppHeader/>
    <!-- Main Content -->
    <v-main>
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>
    <!-- Footer -->
      <AppFooter />
  </v-app>  
</template>
