<script setup>
useHead({
  link: [
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
  <div class="bg-base text-text overflow-y-scroll">
    <NuxtPage />
    <Footer />
  </div>
</template>
