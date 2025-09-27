// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    nitro: {
    preset: 'vercel'
  },
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
              primary: '#23629F',
              secondary:'#5CBBF6',
              accent: '#C01867',
              error: '#FF5252',
            },
          },
        },
      },
    },
  }, // Other Nuxt 4 configuration options...
})