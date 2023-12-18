<template>
  <div class="flex p-10 lg:p-32 flex-col gap-10 lg:gap-20 lg:flex-row lg:pl-48">
    <div class="flex-grow">
      <h1
        class="text-3xl mt-10 font-bold"
      >
        What is Catppuccin?
      </h1>
      <p class="text-subtext1 leading-8 pt-4 max-w-xl">
        Catppuccin is a community-driven pastel theme that aims to be the middle ground between low and high contrast themes. It consists of 4 soothing warm palettes with 26 eye-candy colors each, perfect for coding, designing, and much more!
      </p>
    </div>
    <section
      class="select-none overflow-hidden font-flow flex-grow w-full h-96 relative"
    >
      <div class="relative translate-x-1/4">
        <div class="absolute translate-x-32 translate-y-12">
          <div class="ring-rosewater bg-surface0 ring-2 p-2 px-6 rounded-full">
            <span class="text-sky">Something</span> and then something else
          </div>
        </div>
        <div class="absolute translate-x-0 translate-y-0">
          <div class="px-2 w-10 flex gap-3">
            <div class="text-center">
              <span class="text-text bg-surface1 h-10 rounded px-2 py-1 text-xs select-none">
                Info
              </span>
            </div>
            <div class="text-center">
              <span class="text-crust bg-green h-10 rounded px-2 py-1 text-xs select-none">
                Success
              </span>
            </div>
            <div class="text-center">
              <span class="text-crust bg-peach h-10 rounded px-2 py-1 text-xs select-none">
                Warning
              </span>
            </div>
            <div class="text-center">
              <span class="text-crust bg-red h-10 rounded px-2 py-1 text-xs select-none">
                Danger
              </span>
            </div>
          </div>
        </div>
        <div class="absolute -translate-x-5 translate-y-10">
          <div class="inline-flex">
            <button
              class="text-crust text-sm px-4 py-1 border-2 rounded-l border-lavender focus:outline-none hover:bg-surface1 bg-lavender hover:bg-lavender"
            >
              Left
            </button>
            <button
              class="text-text text-sm px-4 py-1 border-2 rounded-r border-lavender focus:outline-none hover:bg-lavender hover:text-crust"
            >
              Right
            </button>
          </div>
        </div>
        <div class="absolute -translate-x-14 translate-y-40">
          <div class="mb-4 px-2 ">
            <label class="block mb-2 text-sm">Username</label>

            <div class="flex">
              <div
                class="bg-surface0 flex items-center px-4 py-2 border border-r-0 rounded-l text-sm font-medium text-text select-none border-surface0"
              >
                https://twitter.com/
              </div>
              <div class="flex-1">
                <input
                  class=" border bg-mantle border-surface0 text-text px-4 py-2 rounded-r focus:border-blue focus:shadow-outline outline-none"
                  type="text" placeholder="@username..."
                >
              </div>
            </div>
          </div>
        </div>
        <div class="absolute translate-x-16 translate-y-72">
          <div class="mx-auto flex items-center select-none">
            <div class="relative">
              <div class="text-sapphire">
                &#9679;
              </div>
              <div class="absolute text-sm w-16 text-sapphire">
                Step 1
              </div>
            </div>
            <div class="w-12 bg-sapphire h-1 rounded mx-px" />
            <div class="relative">
              <div class="text-sapphire">
                &#9679;
              </div>
              <div class="absolute text-sm w-16 text-sapphire">
                Step 2
              </div>
            </div>
            <div class="w-12 bg-sapphire h-1 rounded mx-px" />
            <div class="relative">
              <div class="text-sapphire">
                &#9675;
              </div>
              <div class="absolute text-sm w-16 text-sapphire">
                Step 3
              </div>
            </div>
            <div class="w-12 bg-overlay1 h-1 rounded mx-px" />
            <div class="relative">
              <div class="text-subtext0">
                &#9675;
              </div>
              <div class="absolute text-sm w-16 text-subtext0">
                Step 4
              </div>
            </div>
          </div>
        </div>
        <div class="absolute translate-x-20 translate-y-28">
          <div class="p-5 bg-surface0 ring-2 rounded-2xl select-none ring-surface1">
            <h1 class="text-2xl font-bold">
              A Card
            </h1>
            <p class="text-subtext0">
              Nice colors, eh? I'm a card. <br>However you want to use me, I'm here for you.
            </p>
            <span class="block text-blue pt-2 hover:underline">Read more</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
