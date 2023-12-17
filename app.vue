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

<template>
  <Navigation />
  <div class="bg-base text-text overflow-y-scroll">
    <NuxtPage />
    <Footer />
  </div>
</template>
