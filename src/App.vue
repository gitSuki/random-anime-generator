<template>
  <Header :title="anime.title" :titleEnglish="anime.titleEnglish" :titleJapanese="anime.titleJapanese"/>
  <div id="content">
    <div id="left-side">
      <Image :title="anime.title" :animeURL="anime.url" :imageURL="anime.images.jpg.image_url" />
      <Button/>
    </div>
    <div id="top">
      <Info :season="anime.season" :year="anime.year" :episodes="anime.episodes" :type="anime.type" :score="anime.score" :synopsis="anime.synopsis"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Image from './components/Image.vue'
import Button from './components/Button.vue'
import Info from './components/Info.vue'
import animeCache from './anime_cache.json'

const { sfw: idList } = animeCache;
const anime = {
  id: 50265,
  url: 'https://myanimelist.net/anime/50265/Spy_x_Family',
  title: 'Spy x Family',
  titleEnglish : '',
  titleJapanese: 'SPY×FAMILY',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg'
    },
  },
  score: 8.85,
  episodes: 12,
  type: 'TV',
  season: 'Spring',
  year: 2022,
  synopsis: `Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.

In the bustling Ostanian city of Berlint, Twilight dons the alias of "Loid Forger," an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion.

Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as "Thorn Princess"—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.`
}

function getRandom(){
  return Math.floor(Math.random() * idList.length);
}

async function fetchAnime(id){
  const results = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
  const { data } = await results.json()
  return data
}

function transferData(newAnime){
  for (const property in anime){
    anime[property] = newAnime[property]
  }
}

async function main(){
  const randomKey = getRandom();
  const newAnime = await fetchAnime(idList[randomKey])
  transferData(newAnime)
}

export default {
  name: 'App',
  components: {
    Header,
    Image,
    Button,
    Info
  },
  data() {
    return {
      anime: anime
    }
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    font-family: Verdana,Arial;
}

#app {
  width: 500px;
  height: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
}

#header {
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  background-color: #e1e7f5;
  font-size: 1.1rem;
  padding: 0.5em;
  border-bottom: 1px solid #1d439b;;
}

#header-left-side {
  display: flex;
  flex-direction: column;
}

.secondary-title {
  margin-top: 2px;
  color: grey;
  font-size: 1rem;
}

#content {
  margin-top: 0.25rem;
  display: flex;
}

#left-side {
  width: 225px;
  padding: 3px;
}

button {
  display: block;
  border: none;
  background-color: #4f74c8;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  padding: 6px;
  width: 100%;
  text-decoration: none;
}

#top {
  padding: 0.2rem;
}

#info-div {
  display: grid;
  grid-template-columns: auto 70px;
  padding-top: 10px;
  padding-bottom: 10px;
}

#info-left-side {
  display: flex;
  gap: 9px;
  flex-direction: column;
}

#air-data {
  font-size: 1.4rem;
}

#air-data::first-letter {
  text-transform:capitalize;
}

#episodes {
  color: #323232;;
}

#score {
  color: #323232;;
  padding-top: 0.75rem;
  text-align: right;
  font-size: 1.2rem;
}

#score-icon {
  max-width: 20px;
  vertical-align: middle;
}

#score-data {
  padding-top: 1px;
  vertical-align: middle;
}

#synopsis {
  margin-top: 1.1rem;
  font-size: 0.9rem;
  color: #323232;;
  height: 275px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>