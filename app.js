const app = Vue.createApp({
    data() {
        return {
            id: '50265',
            url: 'https://myanimelist.net/anime/50265/Spy_x_Family',
            titleEnglish: 'Spy x Family',
            titleJapanese: 'SPY×FAMILY',
            image: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg',
            score: 8.85,
            ranked: 24,
            popularity: 149,
            members: 888116,
            synopsis: `Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.

In the bustling Ostanian city of Berlint, Twilight dons the alias of "Loid Forger," an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion.

Unfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as "Thorn Princess"—and Anya—an esper who can read people's minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.`,
            episodes: '12',
            season: 'Spring',
            year: '2022',
        }
    }
})

app.mount('#app')