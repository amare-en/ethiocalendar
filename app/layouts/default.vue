<template>
  <v-app>
    <!-- Header -->
    <AppHeader @toggle-nav="drawer = !drawer" />

    <!-- Main Layout Wrapper -->
    <div class="d-flex flex-column min-h-screen">
      <!-- Content Row (Sidebar + Main) -->
      <div class="d-flex flex-grow-1">
        <!-- Sidebar -->
        <v-navigation-drawer
          v-model="drawer"
          :permanent="!isMobile"
          :temporary="isMobile"
          app
          color="#fafafa"
          class="rounded-r-xl py-5 pl-6 pr-0"
          width="300"
        >
          <SideBar />
        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main class="flex-grow-1 bg-surface">
          <v-container fluid class="py-6 ">
            <v-row>
              <v-col cols="12">
                <slot />
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </div>
      <!-- Footer (aligned with content, not sidebar) -->
      <div class="d-flex">
        <!-- Sidebar spacer (same width as drawer, only on desktop) -->
        <div style="width: 300px" v-if="!isMobile && drawer"></div>
        <!-- Footer -->
        <v-footer
          class="text-caption text-medium-emphasis justify-center py-4 flex-grow-1 rounded-t-xl"
          color="#fafafa"
        >
          <AppFooter />
        </v-footer>
      </div>
    </div>
  </v-app>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
const isMobile = computed(() => mobile.value);
const drawer = ref(!isMobile.value);

// toggle drawer on resize
watch(isMobile, (newVal) => {
  drawer.value = !newVal;
});
</script>

<style scoped>
.v-main {
  background-color: #ffffff;
}

/* subtle background for the main content */
.bg-surface {
  background-color: #fdfdfd;
}

/* smooth transition when drawer opens/closes */
.v-navigation-drawer {
  transition: all 0.3s ease;
}
</style>
