<script>
export default {
  mounted() {
    if (process.client) {
      import('~/scripts/theme_init').then((module) => {
        module.setTheme()
      })
    }
  },
}
</script>

<template>
  <div>
    <NuxtLink to="/" class="bg-red">
      Home page
    </NuxtLink>
    <NuxtLink to="/ports">
      Ports page
    </NuxtLink>
  </div>
</template>
~/scripts/theme_init
