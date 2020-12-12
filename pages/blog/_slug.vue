// this is a dynamically created template

<template>
  <article class="blog">
      <NuxtLink to="/">Home</NuxtLink>
      <figure class="blog__hero">
          <img :src="post.attributes.thumbnail" :alt="post.attributes.title">
      </figure>
    <div class="blog__info" >
      <h1>{{ post.attributes.title }}</h1>
      <!-- <h3>{{ formattedDate }}</h3> -->
    </div>
    <div class="blog__body" v-html="post.html"></div>
    <div class="blog__footer">
      <h2 >Written By: {{ post.attributes.author }}</h2>
      <!-- <NuxtLink :to="`/blog/${nextBlogPath}`">
        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >
          <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
        </svg>
      </NuxtLink> -->
    </div>
  </article>
</template>
<script>
  export default {
    // get the slug as a param to import the correct md file
    async asyncData({ params }) {
      try {
        const currentPath = params.slug
        // get current post data
        const post = await import(`~/content/blog-posts/${currentPath}.md`);
        // get all post data for next route
       
        return {
          post,
          currentPath
        }
      } catch(err) {
        console.debug(err)
        return false
      }
    },
    computed: {
      // formattedDate() {
      //   return new Date(this.post.attributes.date).toDateString().slice(4)
      // }, 
      // nextBlogPath() {
      //   const firstBlogPath = this.sortedPaths[0]
      //   // if there's no 'next' path, return the first path
      //   const nextPath = isNull(this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]) ? firstBlogPath : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]
      //   function isNull(item) {
      //     return item === null || item === undefined
      //   }
      //   return nextPath
      // } 
    }, 
  }
</script>