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
  <div class="w-screen max-w-5xl min-h-screen mx-auto">
    <div class="p-5">
      <input v-model="textInput" class="w-full max-w-xl border-2 bg-mantle border-surface0 text-text px-4 py-2 rounded-lg focus:border-blue focus:shadow-outline outline-none" placeholder="Search..." @input="res">
    </div>
    <section class="flex w-full">
      <div class="flex flex-wrap max-w-5xl p-5 gap-3 w-full">
        <div
          v-for="(item, index) in dataArray"
          :key="index" :h="item[5]" :style="{ borderColor: `var(--${item[2]})` }"
          class="border-l-2 p-4 flex-grow rounded-xl bg-surface0 card lg:w-1/5 md:w-1/3 w-full"
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
  </div>
</template>

<style scoped>
.card[h="true"]{
  display: none;
}
</style>
