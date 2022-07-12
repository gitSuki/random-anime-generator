<template>
  <a :href="animeURL">
    <img :src="imageURL" :alt="`${title} promo image`">
  </a>
</template>

<script>
export default {
  name: 'Image',
  props: {
    animeURL: String,
    imageURL: String ,
    title: String
  }
}
</script>