<template>
  <div>
    <Hero :last-post="posts[0]"/>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <img width="200" :src="post.attributes.thumbnail" :alt="post.attributes.title">
        <h2 class="text-700">{{ post.attributes.title }}</h2>
        <p>{{ post.attributes.excerpt }}</p>
        <small>Autor: {{ post.attributes.author }}</small>
        <NuxtLink :to="`/blog/${slugs[index]}`">Leer más</NuxtLink>
      </li>
    </ul>
    
    <!-- <div>

      <h1 class="title"><span class="highlight" style="background: black"><del>MathSpace</del> Actually, just use CSS.</span></h1>

      <p class="title"><span class="highlight">DEFAULT: This is how highlighted text usally wraps. It gets tight on the left and right edges.</span></p>

      <p class="title"><span class="highlight highlight--wrapping">Good News! We can use <del>CSS and Unicode</del> <del>white-space: pre-wrap</del> <ins>box-shadow</ins> to fix it...</span></p>

      <p>Hattip: Harry Roberts for being a CSS Wizard <a href="http://jsfiddle.net/csswizardry/KUv8r/">http://jsfiddle.net/csswizardry/KUv8r/</a></p>
      <p>Hattip: Fabien-d is also a CSS wizard and shows you can just use box-shadow <a href="https://codepen.io/fabien-d/pen/rHtal">https://codepen.io/fabien-d/pen/rHtal</a></p>

      <p class="title title--js"><span class="highlight highlight--wrapping">Then get all "10x" and <del>automate unicode with a tiny jQuery I call "MathSpace"</del> <del>Just use pre-wrap</del> <ins>use box-shadow</ins></span></p>

        <p>FYI: Bit of a problem in <del>drunk</del> Firefox. <strong>BOX-SHADOW trick works in Firefox. Hooray</strong></p>

      <p class="title bdb"><span class="highlight">This is a box-decoration-break paragraph</span></p>

      <p>Webkit only. Firefox doesn't support this yet: <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=613659">https://bugzilla.mozilla.org/show_bug.cgi?id=613659</a></p>

    </div> -->

  </div>
</template>

<script>
export default {

  async asyncData() {
    const allPosts = await require.context("~/content/blog-posts", true, /\.md$/)
    const posts =  allPosts.keys().map((key) => {
      // give back the value of each post context
      console.log("allPosts", allPosts)
      console.log("key", key)
      return allPosts(key)
    });

    const slugs = allPosts.keys().map((key) => {
      return key.slice(2,-3);
    });

    return {
      posts,
      slugs
    }
  },

  methods: {
    formatSlug(title) {
      const regex = / /gi;
      return title.toLowerCase().trim().replace(regex, "-")
    },
  },

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* .title {
  font: 36px/1.25 Ubuntu, sans-serif;
  line-height: 1.25em;
  text-transform: uppercase;
  margin-bottom: 1em;
}
.title .highlight {
  display: inline;
  background: #ee4035;
  color: #fff;
  padding: 0.25em;
}
.title .highlight--wrapping {
  position: relative;
  left: 0.25em;
  padding-left: 0;
  box-shadow: 0.25em 0 0 #ee4035, -0.25em 0 0 #ee4035;
}

html,
body {
  background: #ccc;
  text-align: left;
  padding: 3%;
  font: 100%/1.5 Ubuntu, sans-serif;
}

h1.title {
  font-size: 3em;
}

p {
  margin-bottom: 1em;
}

del {
  opacity: 0.3;
}

a {
  color: #ee4035;
}

.bdb .highlight {
  background-color: green;
  box-decoration-break: clone;
} */

</style>
