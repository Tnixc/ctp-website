<script>
export default {
  methods: { setTheme(theme) {
    document.body.classList.remove('latte', 'frappe', 'macchiato', 'mocha')
    localStorage.setItem('theme', theme)
    document.body.classList.add(theme)
  } },
}
</script>

<template>
  <section class="lg:px-48 p-10 flex flex-wrap lg:flex-nowrap gap-5 justify-between">
    <div class="flex-col gap-6 flex">
      <h1
        id="landing-title" v-motion class="text-5xl mt-10 font-bold" :initial=" {
          y: 100,
          opacity: 0,
        } " :enter=" {
          y: 0,
          opacity: 1,
          transition: {
            delay: 200,
            type: 'keyframes',
            ease: 'easeOut',
          },
        } "
      >
        Catppuccin
      </h1>
      <h2
        v-motion class="text-3xl text-subtext1 " :initial=" {
          y: 100,
          opacity: 0,
        } " :enter=" {
          y: 0,
          opacity: 1,
          transition: {
            delay: 400,
            type: 'keyframes',
            ease: 'easeOut',
          },
        } "
      >
        A soothing pastel theme for the high-spirited!
      </h2>
      <h3
        v-motion class="text-2xl text-subtext0" :initial=" {
          y: 100,
          opacity: 0,
        } " :enter=" {
          y: 0,
          opacity: 1,
          transition: {
            delay: 600,
            type: 'keyframes',
            ease: 'easeOut',
          },
        } "
      >
        Four beautiful flavors | <Nuxt-link class="hover:underline text-text hover:text-blue transition-all" to="/palette">
          Full palette ->
        </Nuxt-link>
      </h3>
      <div class="flex">
        <div class="w-7">
          <span id="sel" class="text-2xl text-teal block absolute"> -> </span>
        </div>
        <div class="h-full w-0.5 bg-surface0 rounded-full" />
        <div class="flex flex-col">
          <button class="p-2 text-xl w-fit" @click="setTheme('latte')">
            Latte
          </button>
          <button class="p-2 text-xl w-fit" @click="setTheme('frappe')">
            Frappe
          </button>
          <button class="p-2 text-xl w-fit" @click="setTheme('macchiato')">
            Macchiato
          </button>
          <button class="p-2 text-xl w-fit" @click="setTheme('mocha')">
            Mocha
          </button>
        </div>
      </div>
    </div>
    <pre
      v-motion :initial=" {
        y: -40,
        opacity: 0,
      } " :enter=" {
        y: 0,
        opacity: 1,
        transition: {
          delay: 800,
          type: 'keyframes',
          ease: 'easeOut',
        },
      } " class="text-2xl font-flow flex flex-col max-w-xl p-5 h-fit rounded-lg select-none overflow-hidden mt-20 bg-gradient-to-r from-base to-mantle"
    >
      <div v-motion-slide-right :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">for</span> (<span class="mx-4 text-mauve">var</span> i<span class="text-teal"> = </span><span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {</div>
      <div v-motion-slide-right :delay="1000" class="line overflow-hidden">    <span class="mx-4 text-peach">console</span>.<span class="mx-4 text-blue">log</span>(<span class="mx-4 text-green">"Count:"</span>, i);</div>
      <div v-motion-slide-right :delay="1000" class="line overflow-hidden"> }</div>

      <div v-motion-slide-left :delay="1000" class="line overflow-hidden"><span class="mx-4 text-overlay0">// Array iteration</span></div>
      <div v-motion-slide-left :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">var</span> colors<span class="text-teal"> = </span>[<span class="mx-4 text-green">"Red"</span>, <span class="mx-4 text-green">"Green"</span>, <span class="mx-4 text-green">"Blue"</span>];</div>
      <div v-motion-slide-left :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">for</span> (<span class="mx-4 text-mauve">var</span> index <span class="mx-4 text-mauve">in</span> colors) {</div>
      <div v-motion-slide-left :delay="1000" class="line overflow-hidden">    <span class="mx-4 text-peach">console</span>.<span class="mx-4 text-blue">log</span>(<span class="mx-4 text-green">"Color:"</span>, colors[index]);</div>
      <div v-motion-slide-left :delay="1000" class="line overflow-hidden"><span class="text-yellow"> + something </span></div>

      <div v-motion-slide-right :delay="1000" class="line overflow-hidden"><span class="mx-4 text-overlay0">// Assuming there is an HTML element with the id "myParagraph"</span></div>
      <div v-motion-slide-right :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">var</span><span class="underline decoration-red decoration-8"> paragraph<span class="text-teal"> = </span></span><span class="mx-4 text-peach">document</span>.<span class="mx-4 text-blue">getElementById</span>(<span class="mx-4 text-green">"myParagraph"</span>);</div>
      <div v-motion-slide-right :delay="1000" class="line overflow-hidden">    paragraph.<span class="hljs-property">innerHTML</span><span class="text-teal"> = </span><span class="mx-4 text-green">"New content for the paragraph!"</span>;</div>
      <div v-motion-slide-right :delay="1000" class="line overflow-hidden" /></pre>
  </section>
</template>

<style>
#sel{
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.075);
}
.latte #sel{
  transform: translateY(4px);
}
.frappe #sel{
  transform: translateY(48px);
}
.macchiato #sel{
  transform: translateY(92px);
}
.mocha #sel{
  transform: translateY(136px);
}
</style>
