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
  <div>
    <div
      v-motion class=""
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
