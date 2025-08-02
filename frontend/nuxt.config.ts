/// <reference types="nuxt" />

export default defineNuxtConfig({
  compatibilityDate: '2025-08-03',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/socket.client.js'
  ],
  devServer: {
    port: 3000
  }
})
