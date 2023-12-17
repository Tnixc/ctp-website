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
  <button class="flex flex-row items-center gap-x-1 text-xs font-mono p-1 bg-surface0 rounded-lg hover:bg-surface1" @click="activate">
    <template v-if="!showCheck">
      <span class="block"><svg class="scale-[85%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z" /></svg></span>
    </template>
    <template v-else>
      <span class="block"><svg class="scale-[85%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" /></svg></span>
    </template>
    <span class="whitespace-nowrap">{{ text }}</span>
  </button>
</template>
