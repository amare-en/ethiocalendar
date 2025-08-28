// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
compatibilityDate: '2023-10-01',
  modules: ['vuetify-nuxt-module'],
  css: ['@/assets/scss/main.scss'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: '#1867C0',
              secondary: '#5CBBF6',
            },
          },
        },
      },
    },
  },
  // Other Nuxt 4 configuration options...
})