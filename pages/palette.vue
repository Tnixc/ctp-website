<script lang="ts">
import { variants } from '@catppuccin/palette'

const flavors = Object.keys(variants) as (keyof typeof variants)[]
const flavorDisplayName = {
  latte: 'Latte',
  frappe: 'Frappe',
  macchiato: 'Macchiato',
  mocha: 'Mocha',
}

const colors = Object.keys(variants.frappe) as (keyof typeof variants.frappe)[]
export default {
  data() {
    return {
      variants,
      flavors,
      flavorDisplayName,
      colors,
    }
  },
}
</script>

<template>
  <div class="bg-base text-text min-h-screen p-5 ">
    <div class=" flex flex-col gap-4 items-center p-5 pt-20">
      <h1 class="text-3xl font-extrabold tracking-tight mb-3 p-5">
        Palette
      </h1>
      <p class="text-lg text-ctp-subtext1 font-medium tracking-tight mb-12 max-w-4xl p-5 text-subtext1">
        Catppuccin consists of 4 beautiful pastel color palettes, named flavors. If you want to use them
        for your own project, refer to our
        <a class="inline-link" href="https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md">style
          guide</a>
        for general use cases and guidelines. Additionally, you can find integrations with popular frameworks
        and tools in
        <a class="inline-link" href="https://github.com/catppuccin/palette">catppuccin/palette</a>.
      </p>
    </div>
    <div class="flex flex-col gap-y-6 items-center w-full">
      <details
        v-for=" flavor in flavors " :key=" flavor "
        class="p-8 flex flex-col gap-y-3 rounded-lg w-full max-w-4xl bg-mantle"
      >
        <summary class="text-2xl font-bold cursor-default flex items-center justify-around gap-2">
          <h2 class="flex-grow hover:text-mauve transition-all">
            ↓ {{ flavorDisplayName[flavor] }}
          </h2>
          <div v-for=" colorKey in colors " :key=" colorKey " class="md:block hidden">
            <span class="block w-4 h-4 rounded-md" :style=" { backgroundColor: variants[flavor][colorKey].hex } " />
          </div>
        </summary>
        <div class="overflow-x-scroll bg-mantle p-4 rounded-lg mt-8">
          <table class="w-[700px] mx-auto">
            <tr v-for=" colorKey in colors " :key=" colorKey " class="grid grid-cols-8 place-content-center">
              <td class="p-2 w-min-fit flex flex-row items-center gap-x-2 col-span-2">
                <span :style=" { backgroundColor: variants[flavor][colorKey].hex } " class="block w-4 h-4 rounded-full" />
                <span class="font-semibold text-sm ">{{ colorKey[0].toUpperCase() + colorKey.slice(1) }}</span>
              </td>
              <td class="p-2 w-min-fit">
                <PaletteCopyButton :text=" variants[flavor][colorKey].hex " />
              </td>
              <td class="p-2 w-min-fit col-span-2">
                <PaletteCopyButton :text=" variants[flavor][colorKey].rgb " />
              </td>
              <td class="p-2 w-min-fit">
                <PaletteCopyButton :text=" variants[flavor][colorKey].hsl " />
              </td>
            </tr>
          </table>
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped>
.inline-link {
  text-shadow:
    -1px -1px 0 var(--base),
    1px -1px 0 var(--base),
    -1px 1px 0 var(--base),
    1px 1px 0 var(--base),
    0 1px 0 var(--base),
    0 -1px 0 var(--base),
    -1px 0 0 var(--base),
    1px 0 0 var(--base);
  position: relative;
  z-index: 3;
}
.inline-link:hover{
  color: var(--blue);
}

.inline-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--blue);
  z-index: -1;
  border-radius: 99px;
  opacity: 0.75;
  transition: 0.2s;
}

.inline-link:hover::after {
  opacity: 1;
}
</style>
