<script setup>
</script>

<template>
      <div class="all">
        <a href="https://open.spotify.com/artist/6NPdLNwQEqgBNx0XbuHmgl?si=w-2snzLDQAitB84O0EEsVg" class="be-gone" target="_blank">
            <div class="eggshell spotify"></div>
            <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
        </a>

        <a href="https://youtube.com/@jakedoesjazz-ex5fd?si=048KHkaBR3_l9BOy" class="be-gone" target="_blank">
            <div class="eggshell youtube"></div>
            <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
        </a>
    </div>
</template>

<style scoped>

.be-gone {
  position: relative; 
  display: none;
}

.eggshell {
  background-color: var(--eg);
  mask-repeat: no-repeat;
  mask-size: contain;
}

.youtube {
  -webkit-mask-image: url('../assets/Icons/youtubelogo.webp'); 
  mask-image: url('../assets/Icons/youtubelogo.webp'); 
  margin-right: 3vw;
  width: 30px;
  height: 30px;
}

.spotify {
  -webkit-mask-image: url('../assets/Icons/spotify.webp'); 
  mask-image: url('../assets/Icons/spotify.webp'); 
  margin-right: 3vw;
  width: 30px;
  height: 30px;
}

.all {
  margin-bottom: .7vh; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
}

@media (max-aspect-ratio: 5/3) {
  .be-gone {
    display: inline-block;
  }
}

@media (max-aspect-ratio: 4/3) {
    .all {
        display: none;
    }
}

</style>