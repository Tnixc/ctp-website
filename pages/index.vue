<template>
  <div class="lg:p-40 p-10 h-screen flex flex-wrap lg:flex-nowrap">
    <div class="flex-col gap-6 flex ">
      <h1
        v-motion class="text-5xl font-bold" :initial=" {
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
        Four beautiful flavours
      </h3>
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
      } " class="text-2xl font-flow flex flex-col max-w-2xl p-5 bg-mantle h-fit rounded-lg select-none overflow-hidden"
    >
      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">for</span> (<span class="mx-4 text-mauve">var</span> i = <span class="hljs-number">1</span>; i &lt;= <span class="hljs-number">5</span>; i++) {</div>
      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden">    <span class="mx-4 text-peach">console</span>.<span class="mx-4 text-blue">log</span>(<span class="mx-4 text-green">"Count:"</span>, i);</div>
      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden">}</div>

      <div v-motion-slide-visible-left :delay="1000" class="line overflow-hidden"><span class="mx-4 text-overlay0">// Array iteration</span></div>
      <div v-motion-slide-visible-left :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">var</span> colors = [<span class="mx-4 text-green">"Red"</span>, <span class="mx-4 text-green">"Green"</span>, <span class="mx-4 text-green">"Blue"</span>];</div>
      <div v-motion-slide-visible-left :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">for</span> (<span class="mx-4 text-mauve">var</span> index <span class="mx-4 text-mauve">in</span> colors) {</div>
      <div v-motion-slide-visible-left :delay="1000" class="line overflow-hidden">    <span class="mx-4 text-peach">console</span>.<span class="mx-4 text-blue">log</span>(<span class="mx-4 text-green">"Color:"</span>, colors[index]);</div>
      <div v-motion-slide-visible-left :delay="1000" class="line overflow-hidden">}</div>

      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden"><span class="mx-4 text-overlay0">// Assuming there is an HTML element with the id "myParagraph"</span></div>
      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden"><span class="mx-4 text-mauve">var</span> paragraph = <span class="mx-4 text-peach">document</span>.<span class="mx-4 text-blue">getElementById</span>(<span class="mx-4 text-green">"myParagraph"</span>);</div>
      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden">paragraph.<span class="hljs-property">innerHTML</span> = <span class="mx-4 text-green">"New content for the paragraph!"</span>;</div>
      <div v-motion-slide-visible-right :delay="1000" class="line overflow-hidden" /></pre>
  </div>
</template>
