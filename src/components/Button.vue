<template>
  <button @click="onClick()">Get A New Random Anime</button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onClick() {
      this.$emit('generate-new-anime')
    }
  },
}
</script>