<template>
  <div id="header">
    <div id="header-left-side">
      <strong>{{title}}</strong>
      <strong class="secondary-title">{{titleEnglish}}</strong>
    </div>
    <strong class="secondary-title">{{titleJapanese}}</strong>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: "Unknown anime",
    },
    titleEnglish: String,
    titleJapanese: String
  }
}
</script>