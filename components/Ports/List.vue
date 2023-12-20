<script lang="ts">
import { something } from '@/server/ports'

export default {
  mounted() {
    console.log(something)
  },
}
</script>

<template>
  <div>1</div>
</template>
