<script setup>
function setTheme(theme) {
  document.body.classList.remove('latte', 'frappe', 'macchiato', 'mocha')
  localStorage.setItem('theme', theme)
  document.body.classList.add(theme)
}

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme !== 'latte' && theme !== 'frappe' && theme !== 'macchiato' && theme !== 'mocha') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setTheme('mocha')
    else
      setTheme('latte')
  }
  else {
    setTheme(theme)
  }
})
</script>

<template>
  <button @click="setTheme('latte')">
    Latte
  </button>
  <button @click="setTheme('frappe')">
    Frappe
  </button>
  <button @click="setTheme('macchiato')">
    Macchiato
  </button>
  <button @click="setTheme('mocha')">
    Mocha
  </button>
  <NuxtLink to="/" class="bg-rosewater">
    Home page1
  </NuxtLink>
  <NuxtLink to="/ports">
    Ports page
  </NuxtLink>
</template>
