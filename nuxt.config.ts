// https://nuxt.com/docs/api/configuration/nuxt-config
import catppuccinTailwindcss from '@catppuccin/tailwindcss'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    config: {
      plugins: [
        catppuccinTailwindcss,
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui'],
          },
        },
      },
    },
  },
})
