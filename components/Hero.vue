<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="hero">
    <div class="hero__wrapper relative bg-white overflow-hidden">
      <div class="hero__title-wrapper w-3/6">
        <h1 class="hero__title font-serif font-bold text-gray-800">
          <span>{{ lastPost.attributes.title }}</span>
        </h1>
      </div>
      <img class="w-full" :src="lastPost.attributes.thumbnail" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      lastPost: {
        type: Object
      }
    },
  }
</script>

<style lang="scss" scoped>
.hero {
  &__wrapper {
    height: 600px;
    margin-bottom: 48px;
  }

  /* Heading style */
  &__title,
  &__title:after {
    background-color: #FCCFCD;
  }

  &__title {
    position: relative;
    line-height:1;
    display:inline;
    white-space:pre-wrap;
    border:0 solid #FCCFCD;
    border-width:0.25em 0; /* 0.25em is roughly equal to one space character. */

    &-wrapper {
      top: 50%;
      transform: translateY(-50px);
      position: absolute;
      margin-left: 50px;
    }
  }

  &__title:after {
    content:"";
    position:absolute;
    top:-0.25em;
    right:100%;
    bottom:-0.25em;
    width:0.25em;
  }

  &__title > span {
    position:relative;
    z-index:1;
  }
}
</style>