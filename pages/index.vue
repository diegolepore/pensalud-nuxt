<template>
  <div class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <img width="200" :src="post.attributes.thumbnail" :alt="post.attributes.title">
        <h2 class="text-700">{{ post.attributes.title }}</h2>
        <p>{{ post.attributes.excerpt }}</p>
        <small>Autor: {{ post.attributes.author }}</small>
        <NuxtLink :to="`/blog/${formatSlug(post.attributes.title)}`">Leer más</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  async asyncData(context) {
    const allPosts = await require.context("~/content/blog-posts", true, /\.md$/)
    const posts =  allPosts.keys().map((key) => {
      // give back the value of each post context
      console.log("allPosts", allPosts)
      console.log("key", key)
      return allPosts(key)
    });

    console.log("posts", posts)

    return {
      posts
    }
  },

  methods: {
    formatSlug(title) {
      const regex = / /gi;
      return title.toLowerCase().trim().replace(regex, "-")
    }
  },

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
