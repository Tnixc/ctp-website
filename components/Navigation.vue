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
  <div class="flex p-5 bg-base ">
    <NuxtImg src="/Catppuccin.png" alt="ctp logo" class="w-12 h-12" />
    <h1>Catppuccin</h1>
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
    <nav>
      <NuxtLink to="/" class="bg-rosewater">
        Home page1
      </NuxtLink>
      <NuxtLink to="/ports">
        Ports page
      </NuxtLink>
      <a href="">Github</a>
      <a href="">Donate</a>
    </nav>
  </div>
</template>
