// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcssThemer from 'tailwindcss-themer'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    config: {
      plugins: [
        tailwindcssThemer({
          defaultTheme: {
            extend: {
              colors: {
                primary: 'red'
              }
            }
          },
          themes: [
            {
              name: 'my-theme',
              extend: {
                colors: {
                  primary: 'blue',
                },
              },
            },
          ],
        }),
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
