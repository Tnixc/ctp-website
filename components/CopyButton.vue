<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      showCheck: false,
    }
  },
  methods: {
    async activate() {
      await navigator.clipboard.writeText(this.text)
      this.showCheck = true
      setTimeout(() => {
        this.showCheck = false
      }, 2500)
    },
  },
}
</script>

<template>
  <button class="flex flex-row items-center gap-x-1 text-xs font-mono" @click="activate">
    <template v-if="!showCheck">
      <span class="block w-3 h-3 shrink-0">Copy Icon</span> <!-- Replace with your copy icon -->
    </template>
    <template v-else>
      <span class="block w-3 h-3 shrink-0">Check Icon</span> <!-- Replace with your check icon -->
    </template>
    <span class="whitespace-nowrap">{{ text }}</span>
  </button>
</template>
