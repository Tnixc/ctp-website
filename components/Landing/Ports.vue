<script>
export default {
  data() {
    return {
      ports: 0,
    }
  },
  async mounted() {
    async function fetchData() {
      let page = 1
      let totalResponse = []

      while (true) {
        const response = await fetch(`https://api.github.com/orgs/catppuccin/repos?per_page=100&page=${page}`)
        const data = await response.json()

        if (data.length < 100) {
          totalResponse = totalResponse.concat(data)
          break
        }

        totalResponse = totalResponse.concat(data)
        page++
      }
      return totalResponse.length
    }
    this.ports = await fetchData()
  },
}
</script>

<template>
  <section>
    <div class="w-full">
      <h1 class="text-3xl text-center">
        Themed for all your favourite apps and websites
      </h1>
      <h2>{{ ports }} ports</h2>
    </div>
  </section>
</template>
