<script setup>
import Album from './Album.vue';

</script>

<template>
    <div class="container">
        <div class="releases">
            <Album style="background-color: var(--t); margin-bottom: 4vh;"
                title="Purpose" 
                desc="A collaboration with Jordan Waters. Rap with live instruments for the beat. Thanks to Maddox Neumann (drums), Jared Burnett (bass), and Owen McCormick (production) for helping bring this piece to life. Released February 2025 available on all streaming platforms."
                src="./src/assets/purposeCover.webp"
                fill="#9bffc2"
                spotify="https://open.spotify.com/artist/6NPdLNwQEqgBNx0XbuHmgl?si=w-2snzLDQAitB84O0EEsVgm"
                youtube="https://youtube.com/@jakedoesjazz-ex5fd?si=048KHkaBR3_l9BOy"
                apple="https://music.apple.com/us/artist/jake-artang/1702946623"
                audio="/purposeClip.mp3"/>
            <Album style="background-color: var(--s);"
                title="First Impressions" 
                desc="This EP features 5 of my favorite jazz standards, all solo piano. Produced by Jake Artang and Owen McCormick, Released August 2023 available on youtube."
                src="./src/assets/firstImpressions.webp"
                fill="#D8C4BD"
                spotify="none"
                youtube="https://youtube.com/playlist?list=PLytg67aqmSXTJseMtiIVh10yhfRPPaHSb&si=xdweKbe1DxhtceII"
                apple="none"
                audio="/tellmeClip.mp3"/>
        </div>
        <div class="about-me">
            <img class="me" src="../assets/BestPhotos/onbench.webp">
            <p class="title">Bio</p>
            <p class="bio">Jake Artang is a jazz pianist from Prior Lake, Minnesota. He started with piano lessons at the age of 5, exploring classical and ragtime works before discovering a passion for jazz in high school when he began lessons with Peter Shu, a music professor at North Central University. Throughout high school, he performed at Jazz Central Studios in Minneapolis, served as a sideman for two senior recitals at North Central University, and led his own high school jazz combo to the Eau Claire Jazz Fest, where he won the Best Keyboard Soloist award. Jake is currently studying with Johannes Wallmann at UW-Madison where he is double majoring in jazz piano and computer science. He has released a solo piano EP “First Impressions” and plans to debut two original compositions early 2025. Jake’s sound is shaped by jazz greats Oscar Peterson and Jobim as well as newer keyboardists/producers Anomalie and Kiefer.</p>
        </div>
    </div>
</template>

<style scoped>

.about-me {
    border-radius: 40px;
    background-color: var(--lb);
    margin: 0 2vw 0 0;
    width: 37vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.releases {
    width: 57vw;
    margin: 0;
}

.me {
    width: 32vw;
    min-width: 250px;
    height: auto;
    margin: 2vw;
    border-radius: 10px;
}

.bio {
    margin: 1vh 3vw 3vw 3vw;
}

.container {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  width: 100%;
}

.title {
    margin: 0;
}

@media (max-aspect-ratio: 4/3) {
  .container {
    flex-direction: column;
  }

  .releases {
    width: 90vw;
    align-self: center;
    margin: 5vh 0 5vh 0;
  }

  .about-me {
    width: 90vw;
    align-self: center;
    margin: 0;
  }

  .me {
    width: 66vw;
    margin: 5vh 0 3vh 0;
  }

  .bio {
    width: 66vw;
    text-align: center;
  }

}

</style>