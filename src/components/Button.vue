<template>
  <button @click="onClick()">Get A New Random Anime</button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onClick: onClick
  }
}

function onClick(){
  console.log("Hello")
}
</script>