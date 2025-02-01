<script setup>
import { ref } from 'vue'
import Music from './components/Music.vue';
import ContactUs from './components/ContactUs.vue';
import ContactMe from './components/ContactMe.vue';
import ContactLeft from './components/ContactLeft.vue';
import Media from './components/Media.vue';
import WebDev from './components/WebDev.vue';

const reload = () => window.location.reload()
let tab = ref(1);
const url = ref("./src/assets/menu.webp");

let switchTabs = (num) => {
  tab.value = num
  document.getElementById("vertMenu").style.display = "none";
  document.getElementById("socialsMenu").style.display = "none";
  url.value = "./src/assets/menu.webp";
  open.value = !open.value;
}

let open = ref(false);
let socials = ref(false);

const openTabs = () => {
  open.value = !open.value;
  if (open.value) {
    document.getElementById("vertMenu").style.display = "flex";
    url.value = "./src/assets/xbutton.webp";
  } else {  
    url.value = "./src/assets/menu.webp";
    document.getElementById("vertMenu").style.display = "none";
    document.getElementById("socialsMenu").style.display = "none";
  }
}

const showSocials = () => {
  socials.value = !socials.value;
  if (socials.value) {
    document.getElementById("socialsMenu").style.display = "flex";
  } else {
    document.getElementById("socialsMenu").style.display = "none";
  }
}
  
</script>



<template>
  <ContactUs class="contact"/>
  <ContactLeft class="contact-left"/>
  <div style="display:flex; flex-direction: column; padding: 0; margin: 0;">
      <div class="centered container">
        <svg class="trapezoid-box" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Trapezoid -->
        <path class="trapezoid" d="
        M 0,0
        L 100,0
        Q 80,100 65,100 
        L 0,100
        Z"/>
        </svg>
        <div class="vert-container">
          <button class="header" @click="reload">Jake Artang</button>
          <div class="menu container">
            <button class="tab-item" @click="switchTabs(1)">Music</button>
            <button class="tab-item" @click="switchTabs(2)">Web Dev</button>
            <button class="tab-item" @click="switchTabs(3)">Media</button>
            <button class="lines" @click="openTabs" :style="{ backgroundImage: `url(${url})`, backgroundColor: '#F0EAD6'}"></button>
          </div>                                  
        </div>
        <svg class="trapezoid-box" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Trapezoid -->
        <path class="trapezoid" d="
        M 0,0
        Q 20,100 45,100
        L 100,100
        L 100,0
        Z"/>
        </svg>
      </div>
    <div id="vertMenu" class="vert-menu">
          <button class="vert-item" @click="switchTabs(1)">Music</button>
          <button class="vert-item" @click="switchTabs(2)">Web Dev</button>
          <button class="vert-item" @click="switchTabs(3)">Media</button>
          <button class="vert-item" @click="showSocials">Socials</button>
    </div>
    <ContactMe id="socialsMenu"/>
    <Music v-if="tab == 1"/>
    <WebDev v-else-if="tab == 2"/>
    <Media v-else-if="tab == 3"/>

  </div>

  <p style="margin-left: 40%;">
    <a style="color: #F0EAD6;" href="https://jakesgrilledcheese.com" target="_blank">jakesgrilledcheese.com</a>
  </p>
</template>


<style>

:root {
  --lb: #5B7693; /* Use for backgrounds */
  --p: #6E535A;
  --s: #D8C4BD;
  --o: #AB764D;  /* Use for highlights  */
  --db: #383E55;
  --pi: #ED797A;
  --eg: #F0EAD6;
  --t: #9bffc2; 
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--eg);
  overflow-x: hidden;
}

p {
  line-height: 2;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1em;
}

h {
  font-family: 'Courier New', monospace;
  font-size: 2em;
}

a {
  font-weight: 600;
  color: #1E90FF;
  text-decoration: none;
}

a:hover {
  color: #53b1ff;
  text-decoration: underline;
}

a:visited {
  color: #c983ff;
}

.title {
  font-family: 'Courier New', monospace;
  border: none;
  font-size: 2em;
  background-color: transparent;
  padding: 0;
  margin: 0;
  line-height: 1;
}

.header {
  font-family: 'Courier New', monospace;
  border: none;
  font-size: 2em;
  padding: 2vh;
  background-color: transparent;
}

.header:hover {
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;
}

.centered {
  justify-content: space-between;
  padding: 0;
  margin-bottom: 3vh;
}

.contact {
  visibility: visible;
  position: absolute;
  top: 5vh;
  right: 5vw;
}

.trapezoid-box {
  width: 40vw;
  height: calc(2.2em + 11vh);
  max-width: 40vw;
}

.trapezoid {
  fill:#AB764D;
}

.blurb {
    margin: 0px 15vw 60px 15vw;
    border-radius: 40px;
    padding: 30px;
    text-align: center;
}

.menu {
  margin: 2vh 0 5vh 0;
  min-width: 300px;
}

.tab-item {
  font-family: 'Courier New', monospace;
  font-size: 1.2em;
  border: none;
  color: black;
  font-weight: 500;
  background-color: transparent;
  position: relative; 
}

.tab-item:hover {
  cursor: pointer;
}

.tab-item:focus {
  outline: none;
  box-shadow: none;
}

.tab-item::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0%;
  height: 1px;
  background-color: black;
  transition: all 0.15s ease-out;
  transform: translateX(-50%);
}

.tab-item:hover::after {
  width: 90%;
  transform: translateX(-50%);
}

.vert-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
}

.vert-menu {
  display: none;
}

.vert-item {
  display: none;
}
.vert-item:focus {
  outline: none;
  box-shadow: none;
}

.contact-left {
  display: none;
  position: absolute;
  top: 5vh;
  left: 5vw;
}

#socialsMenu {
  display: none;
  position: relative;
  align-self: center;
  border: none;
}

.lines {
  display: none;
}

.lines:focus {
  outline: none;
  box-shadow: none;
}

#socialsMenu {
  margin: 0 0 30px 0;
}

@media (max-aspect-ratio: 4/3) {

  .vert-menu {
    display: none;
    flex-direction: column;
    margin: 0 0 30px 0;
    align-self: center;
  }

  .vert-item {
    display: block;
    font-family: 'Courier New', monospace;
    border: none;
    font-size: 1.2em;
    color: black;
    font-weight: 500;
    background-color: transparent;
    position: relative; 
    margin: 15px 0 15px 0;
    align-self: center;
  }

  .vert-item:hover {
    cursor: pointer;
  }

  .vert-item::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0%;
    height: 1px;
    background-color: black;
    transition: all 0.15s ease-out;
    transform: translateX(-50%);
  }

  .vert-item:hover::after {
    width: 90%;
    transform: translateX(-50%);
  }
  .tab-item {
    display: none;
  }

  .container {
    justify-content: center;
  }

  .lines {
    display: flex;
    background-size: contain;
    border-width: 0px;
    width: 50px;
    height: 50px;
    align-self: center;
    margin-top: 0;
  }
  .lines:hover {
    cursor: pointer;
  }

  .menu {
    flex-direction: column;
    margin: 0;
  }
}

</style>