<script>
import { len } from '@/server/ports'

export default {
  data() {
    return {
      len,
    }
  },
}
</script>

<template>
  <div class="pt-48 text-3xl font-bold p-5">
    <h1>Search {{ len }} ports </h1>
  </div>
  <PortsList />
</template>
