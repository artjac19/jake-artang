<script setup>
import Song from './Song.vue'

</script>




<template>
    <div class="box-rounded">
        <img src="../assets/firstImpressions.PNG" class="image" />
        <div class="vertical-container">
            <p class="header">First Impressions</p>
            <p class="menu-item">A solo piano EP with fresh takes on classic tunes. Recorded at Jazz Central Studios during summer 2023. Produced by Jake Artang and Owen McCormick.</p>
            <Song>
              <p class="song-title">tell me a bedtime story</p>
            </Song>
        </div>
    </div>
</template>

<style scoped>
.box-rounded {
    display: flex;
    flex-direction: row;
    background-color: rgb(68, 68, 68);
    padding: 2vh;
    margin-left: 5vh;
    margin-right: 30vh;
    margin-top: 10vh;
    border-radius: 5vh;
}

.image {
    margin-top: 2vh;
    margin-left: 5vh;
    margin-bottom: 2vh;
    padding: 0;
    width: auto;
    height: 40vh;
  }

  .header {
    color: white;
    margin-left: 5vh;
    margin-bottom: 0;
    margin-top: 3vh;
  }

  .menu-item {
    color: white;
    margin-left: 5vh;
    margin-right: 10vh;
    margin-top: 2vh;
    line-height: 1.5;
    padding: 0;
    position: relative;
  }

  .vertical-container {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .song-title {
    color: white ;
    font-family: 'Courier New', monospace;
    font-size: 1em;
  }

</style>