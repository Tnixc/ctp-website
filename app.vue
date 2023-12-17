<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
      crossorigin: '',
    },
  ],
})
</script>

<template>
  <div>
    <Navigation />
    <NuxtPage />
  </div>
</template>
