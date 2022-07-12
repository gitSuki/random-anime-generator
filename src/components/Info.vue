<template>
  <div id="top">
    <div id="info-div">
      <div id="info-left-side">
        <span id="air-data">{{season}} {{year}}</span>
        <div id="episodes">{{episodes}} episodes - {{type}}</div>
      </div>
      <div id="score">
        <img src="../assets/star.svg" alt="star" id="score-icon">
        <span id="score-data">{{score}}</span>
      </div>
    </div>
    <span id="synopsis">{{synopsis}}</span>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    season: String,
    year: Number,
    episodes: {
      type: Number,
      default: "Unknown"
    },
    type: {
      type: String,
      default: "Unknown type"
    },
    score: {
      type: [Number, String],
      default: "N/A"
    },
    synopsis: String
  }
}
</script>