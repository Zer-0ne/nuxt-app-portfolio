// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts','nuxt-icons'],
  typescript: {
    strict: true  // Enforces type-checking and avoids runtime errors
    , typeCheck: true
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})