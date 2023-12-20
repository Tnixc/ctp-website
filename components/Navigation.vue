<script>
export default {
  data() {
    return {
      isOpen: false,
      stars: '10.8K',
    }
  },
  async mounted() {
    // Navigation stuff
    if (window.innerWidth >= 1024)
      this.isOpen = true
    else
      this.isOpen = false

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024)
        this.isOpen = true
      else
        this.isOpen = false
    })

    // Stars
    const res = await fetch('https://api.github.com/repos/catppuccin/catppuccin')
    const data = await res.json()
    this.stars = Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(data.stargazers_count)
  },
  methods: {
    toggleVisibility() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<template>
  <div
    class="flex p-6 bg-mantle lg:bg-base justify-center text-text flex-col lg:flex-row text-xl lg:text-base top-0 fixed z-50 left-0 right-0"
  >
    <div class="w-full max-w-6xl flex justify-between items-center flex-col lg:flex-row">
      <div class="flex justify-around items-center gap-4 lg:w-fit w-full flex-wrap lg:flex-nowrap">
        <div
          class="flex items-center gap-3 w-full items-center"
        >
          <Nuxt-link to="/" class="flex gap-3 items-center flex-grow">
            <NuxtImg src="/Catppuccin.png" alt="ctp logo" class="w-12 h-12" />
            <h1 class="text-2xl font-bold select-none text-text">
              Catppuccin
            </h1>
          </Nuxt-link>
          <button class="lg:hidden block" @click="toggleVisibility">
            <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" /></svg>
            <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" /></svg>
            <span class="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>
      <div v-show="isOpen" class="w-full my-7 lg:hidden block h-0.5 bg-surface0" />
      <nav
        v-show="isOpen" v-motion class="flex gap-4 flex-col lg:flex-row items-end w-full lg:w-fit lg:items-center"
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
        <NuxtLink class="text-subtext0 hover:text-text" to="/">
          Home
        </NuxtLink>
        <NuxtLink class="text-subtext0 hover:text-text" to="/palette">
          Palette
        </NuxtLink>
        <NuxtLink class="text-subtext0 hover:text-text" to="/ports">
          Ports
        </NuxtLink>
        <a class="text-subtext0 hover:text-text px-2 py-1 bg-surface0 rounded-md flex gap-1.5" href="https://github.com/catppuccin">
          Github
          <span class="text-yellow">{{ stars }}★</span></a>
        <a class="text-subtext0 hover:text-text" href="">Donate</a>
      </nav>
      <div v-show="isOpen" class="w-full mt-7 lg:hidden block h-0.5 bg-surface0" />
    </div>
  </div>
</template>

<style scoped>
*{
  transition: background-color 0.5s ease;
}
.theme::after{
  content: '';
  position: absolute;
  height: 3px;
  bottom: 0px;
  left: 0;
  right: 0;
  border-radius: 99px;
  background: var(--lavender);
  opacity: 0;
  transition: all 0.4s ease;
}
.theme:hover::after{
  background: var(--rosewater);
  opacity: 1;
}
.latte .theme:nth-child(1)::after,.frappe .theme:nth-child(2)::after,.macchiato .theme:nth-child(3)::after,.mocha .theme:nth-child(4)::after{
  opacity: 1;
}
.router-link-active {
  color: var(--text);
}
</style>
