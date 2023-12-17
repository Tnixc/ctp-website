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
  <div class="flex p-5 bg-base justify-center text-text">
    <div class="w-full max-w-5xl flex justify-between items-center ">
      <div class="flex justify-around items-center gap-4">
        <div class="flex items-center gap-3">
          <NuxtImg src="/Catppuccin.png" alt="ctp logo" class="w-12 h-12" />
          <h1 class="text-2xl font-bold">
            Catppuccin
          </h1>
        </div>
        <div class="flex gap-2 text-subtext1">
          <button class="p-1 relative theme" @click="setTheme('latte')">
            Latte
          </button>
          <button class="p-1 relative theme" @click="setTheme('frappe')">
            Frappe
          </button>
          <button class="p-1 relative theme" @click="setTheme('macchiato')">
            Macchiato
          </button>
          <button class="p-1 relative theme" @click="setTheme('mocha')">
            Mocha
          </button>
        </div>
      </div>
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
  </div>
</template>
