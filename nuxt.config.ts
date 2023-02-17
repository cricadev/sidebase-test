import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', 'nuxt-icon', '@nuxtjs/color-mode', '@nuxt/devtools', '@nuxt/image-edge'

  ],

  build: {
    transpile: ['trpc-nuxt']
  },
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light' // fallback value if not system preference found
  },
  image: {
    domains: ['cinemagod.cricadev.com']
  }
})
