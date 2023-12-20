<script>
import { ports } from '@/server/ports'

export default {
  data() {
    return {
      dataArray: ports,
    }
  },
}
</script>

<template>
  <div v-for="(item, index) in dataArray" :key="index" class="custom-div">
    <h1>{{ item[0] }}</h1>
    <div class="category">
      {{ item[1] }}
    </div>
    <div :style="{ backgroundColor: `var(--${item[2]})` }">
      <a :href="item[3]">Link</a>
    </div>
  </div>
</template>
