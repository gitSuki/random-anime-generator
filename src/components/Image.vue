<template>
  <a :href="animeUrl">
    <img :src="imageUrl" :alt="`${title} promo image`">
  </a>
</template>

<script>
export default {
  name: 'Image',
  props: {
    animeUrl: String,
    imageUrl: String ,
    title: String
  }
}
</script>