import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-12-28',
  devtools: { enabled: false },
  modules: ['@nuxt/image',
            '@nuxt/icon',
  ],
  
  plugins: ['~/plugins/vuetify'],
  image: {
    dir: 'assets', // Mengarahkan Nuxt Image ke folder assets
  },
  css: [
    '~/assets/css/main.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

})