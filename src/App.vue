<script setup>
import { ref } from 'vue'
import AboutMe from './components/AboutMe.vue'
import Music from './components/Music.vue'
import Socials from './components/Socials.vue'

const reload = () => window.location.reload()
let tab = ref(2)
let switchTabs = (num) => {
  tab.value = num
}


</script>



<template>
  <div class="menu-container">
    <button class="header" @click="reload">Jake Artang</button>
    <button class="menu-item" @click="switchTabs(1)">About</button>
    <button class="menu-item" @click="switchTabs(2)">Music</button>
    <button class="menu-item" @click="switchTabs(3)">Socials</button>
  </div>
  <br></br>
  <AboutMe v-if="tab == 1"></AboutMe>
  <Music v-else-if="tab == 2"></Music>
  <Socials v-else-if="tab == 3"></Socials>
</template>


<style>

.header {
  font-family: 'Courier New', monospace;
  border: none;
  font-size: 2em;
}

.header:hover {
  cursor: pointer;
}

.menu-container {
  display: flex;
  margin-left: 20px;
  /* Aligns items in a row */
  align-items: center;
  /* Center items vertically */
  /* Add additional styling for the container as needed */
}

.menu-item {
  font-family: 'Courier New', monospace;
  font-size: 1em;
  border: none;
  background-color: transparent;
}

.menu-container button:hover {
  cursor: pointer;
  /* Add any hover effects you like */
}
</style>

<style scoped>


.menu-item {
  margin-left: 4vh;
  position: relative;
}
.header {
  padding: 2vh;
}

</style>
