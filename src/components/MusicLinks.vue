<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';


const props = defineProps({
    spotify: String,
    youtube: String,
    apple: String
})

const exists = (num) => {
  if (num == 1) return !(props.spotify === "none");
  else if (num == 2) return !(props.youtube === "none");
  else if (num == 3) return !(props.apple === "none");
}

</script>

<template>
    <div style="margin-bottom: .7vh; display: flex; flex-direction: row; align-items: center;">
      <a v-if="exists(1)" :href="spotify" target="_blank" style="position: relative; display: inline-block;">
          <img src="../assets/Icons/spotify.webp" width="30px" height="30px" style="margin-right:3vw; filter: brightness(0%);">
          <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
      </a>

      <a v-if="exists(2)" :href="youtube" target="_blank" style="position: relative; display: inline-block;">
          <img src="../assets/Icons/youtubelogo.webp" width="30px" height="30px" style="margin-right:3vw; filter: brightness(0%);">
          <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
      </a>
      
      <a v-if="exists(3)" :href="apple" target="_blank" style="position: relative; display: inline-block;">
          <img src="../assets/Icons/apple.webp" width="30px" height="30px" style="margin-right:3vw; filter: brightness(0%);">
          <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
      </a>
      </div>
</template>

<style scoped>

.email {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items:end;
}

.email-name {
  border-radius: 10px;
  background-color: var(--eg);
  margin-top: 0;
  padding: 3px 8px 3px 8px;
  width:fit-content;
  min-width: 215px;
}
.email-name:hover {
  cursor: pointer;
  background-color: var(--s);
}

.mailbtn {
  margin: 0;
  padding: 0;
  background-image: url("../assets/Icons/email.webp");
  background-size: cover;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border-width: 0;
}

.mailbtn:hover {
  cursor: pointer;
}

.copy-text {
  font-size: 1.2em;
  font-weight: bold;
}

.text-content {
  display: inline-block;
  width: 100%; /* Ensures the text takes up the same space */
  text-align: center;
}

</style>