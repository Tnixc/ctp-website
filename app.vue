<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/xicon',
      href: '/public/favicon.ico',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Flow+Circular&family=Manrope:wght@500;700&display=swap',
      crossorigin: '',
    },
  ],
})
useSeoMeta({
  title: 'Catppuccin',
  description: 'A soothing pastel theme for the high-spirited! ',
  ogTitle: 'Catppuccin',
  ogDescription: 'A soothing pastel theme for the high-spirited! ',
  ogImage: 'https://i.imgur.com/HTvdw1i.png',
  ogUrl: '[og:url]',
  twitterTitle: 'Catppuccin',
  twitterDescription: 'A soothing pastel theme for the high-spirited! ',
  twitterImage: 'https://i.imgur.com/HTvdw1i.png',
  twitterCard: 'summary',
})
</script>

<script>
export default {
  mounted() {
    const theme = localStorage.getItem('theme')
    if (theme !== 'latte' && theme !== 'frappe' && theme !== 'macchiato' && theme !== 'mocha') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        this.setTheme('mocha')
      else
        this.setTheme('latte')
    }
    else {
      this.setTheme(theme)
    }
  },
  methods: {
    setTheme(theme) {
      document.body.classList.remove('latte', 'frappe', 'macchiato', 'mocha')
      localStorage.setItem('theme', theme)
      document.body.classList.add(theme)
    },
  },
}
</script>

<template>
  <Navigation />
  <div class="bg-base text-text overflow-y-scroll flex justify-center">
    <div class="max-w-6xl w-screen">
      <NuxtPage class="pt-20" />
      <Footer />
    </div>
  </div>
</template>
