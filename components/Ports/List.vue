<script>
import { ports } from '@/server/ports'

export default {
  data() {
    return {
      dataArray: ports,
      textInput: '',
    }
  },
  methods: {
    res() {
      const req = this.textInput.toLowerCase().replace(/\s+/g, '-')
      for (let i = 0; i < ports.length; i++) {
        const thing = ports[i]
        if (!thing[4].includes(req)) {
          thing[5] = true
        }
        else {
          if (thing[4].includes(req))
            thing[5] = false
        }
      }
    },
  },
}
</script>

<template>
  <input v-model="textInput" placeholder="Search..." @input="res">
  <section class="flex justify-center">
    <div class="flex flex-wrap max-w-5xl p-5 gap-4">
      <div
        v-for="(item, index) in dataArray"
        :key="index" :h="item[5]" :style="{ borderColor: `var(--${item[2]})` }"
        class="border-2 p-4 flex-grow w-1/4 rounded-xl bg-surface0 card"
      >
        <h1 class="text-lg font-bold">
          {{ item[0] }}
        </h1>
        <div class="text-subtext0 capitalize">
          {{ item[1] }}
        </div>
        <div>
          <a :href="item[3]" class="hover:underline decoration-2 hover:text-blue">Link -></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
div[h="true"]{
  display: none;
}
</style>
