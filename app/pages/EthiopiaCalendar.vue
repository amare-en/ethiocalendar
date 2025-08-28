<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" md="10" lg="8">
            <CalendarGrid />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
 
<script setup lang="ts">
import CalendarGrid from '~/components/calendar/CalendarGrid.vue';

</script>