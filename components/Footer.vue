<script>
export default {
  methods: { setTheme(theme) {
    document.body.classList.remove('latte', 'frappe', 'macchiato', 'mocha')
    localStorage.setItem('theme', theme)
    document.body.classList.add(theme)
  } },
}
</script>

<template>
  <div class="flex justify-center w-full">
    <div
      v-motion class="flex p-8 max-w-4xl"
      :initial="{
        y: -40,
        opacity: 0.5,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 100,
          type: 'keyframes',
          ease: 'easeOut',
        },
      }"
    >
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
</template>

<style scoped>
  .latte button:nth-child(1){
    @apply text-rosewater underline;
  }
  .frappe button:nth-child(2){
    @apply text-rosewater underline;
  }
  .macchiato button:nth-child(3){
    @apply text-rosewater underline;
  }
  .mocha button:nth-child(4){
    @apply text-rosewater underline;
  }
  .underline{text-decoration-thickness: 2px;}
</style>
