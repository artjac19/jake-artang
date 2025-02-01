<script setup>
import { ref } from 'vue'
import { nextTick } from 'vue';
import HomePage from './components/HomePage.vue'
import KidsCamp from './components/KidsCamp.vue'
import Contact from './components/ContactUs.vue'
import DiscGolf from './components/DiscGolf.vue'
import ProShop from './components/ProShop.vue'
import ExampleTab from './components/ExampleTab.vue';


let tab = ref('Home')
let number = ref(1)
let isVisible = true;

const reload = () => {
  window.location.reload()
  number.value=1
}

const switchTabs = (id, num) => {
  tab.value = id;
  number.value = num;

  if (isVisible) {
    toggleVisibility(false)
  }

  nextTick(() => {
    if (number.value == 1) {
      window.scrollTo({top: 0, behavior: 'instant'})
    } else {
    const element = document.getElementById(number.value);
    if (element) {
      const offsetVH = 15;
      const offsetPixels = window.innerHeight * (offsetVH / 100);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offsetPixels;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  });
}

const checkTabs = (myId) => {
  return myId == tab.value;
}

const toggleVisibility = (makeVisible) => {
  if (makeVisible) {
    document.getElementById('tabs').className = "menu-mobile";
    document.getElementById('proshop').className = "tab-item";
    document.getElementById('logo').className = "logo-gone";
    document.getElementById('x-button').className = "logo";
    document.getElementById('exit-tabs').className = "exit";
    isVisible = true;
  } else {
    document.getElementById('tabs').className = "menu-container";
    document.getElementById('proshop').className = "tab-item proshop";
    document.getElementById('logo').className = "logo";
    document.getElementById('x-button').className = "logo-gone";
    document.getElementById('exit-tabs').className = "logo-gone";
    isVisible = false;
  }
}

</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <div style="border-bottom: .4vh solid rgb(72, 255, 0); background-color: black; align-items: center; margin: 0; padding: 0; position: fixed; top: 0; left: 0; width: 100vw; z-index: 2;">
      <button class="logo" style="display: flex; flex-direction: column; margin-left: auto; margin-right: auto; margin-top: 2vh; margin-bottom: 2vh;" @click="toggleVisibility(true)"><img id="hamburger" src="./assets/menu-01.webp" object-fit="cover" flood="#ff0000" width="50vh" height="50vh"/></button>
    </div>
    <div id="tabs" class="menu-container">
      <button class="logo" id="logo" @click="reload"><img src="./assets/swerve-01.webp" object-fit="cover" flood="#ff0000" width="70vh" height="70vh"/></button>
      <button class="logo-gone" id="x-button" @click="toggleVisibility(false)"><img src="./assets/x-button-01.webp" object-fit="cover" flood="#ff0000" style="width: 5vh; height: 5vh; align-self: center; margin: 1vh 0 0 0; padding: 0;"/></button>
      <button class="tab-item" @click="switchTabs('Home', 1)">Home</button>
      <button class="tab-item" @click="switchTabs('Home', 2)">Schedule a Visit</button>
      <button class="tab-item" @click="switchTabs('Home', 3)">Our Team</button>
      <button class="tab-item" @click="switchTabs('Home', 4)">Lake and Area</button>
      <!--<button class="tab-item" @click="switchTabs('Home', 5)">Example Header</button> the number next to 'Home' is the id of the 
        element you want the page to scroll to when you click on the tab item. so for this i'm going to put id="5" at the bottom of
        HomePage next to the header element
      -->
      <button class="tab-item proshop" id="proshop" @click="switchTabs('Proshop', 1)">Pro Shop</button>
      <button class="tab-item" @click="switchTabs('Kids', 1)">Kids Camp</button>
      <button class="tab-item" @click="switchTabs('Disc', 1)">Disc Golf</button>
      <!--<button class="tab-item" @click="switchTabs('Example', 1)">Example Tab</button> make sure to add your tab as such -->
    </div>
    <button class="logo-gone" id="exit-tabs" @click="toggleVisibility(false)" style="margin: 0; padding: 0; width: 100%; position: fixed; height: 50vh; top: 57vh; left: 0; z-index: 2;"></button>
  <HomePage v-if="checkTabs('Home')"/>
  <KidsCamp v-if="checkTabs('Kids')"/>
  <DiscGolf v-if="checkTabs('Disc')"/>
  <ProShop v-if="checkTabs('Proshop')"/>
  <ExampleTab v-if="checkTabs('Example')"/>
  <Contact/>
</template>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: rgb(20, 20, 20);
}

p {
  font-family: 'Montserrat', serif;
  font-size: 1.2em;
  border: none;
  color: white;
  background-color: transparent;
  position: relative;
  text-align: left;
  font-weight: 0;
  box-sizing: border-box;
  max-width: calc(100vw - 80px);
  line-height: 2;
  overflow-wrap: break-word;
  flex: 1;
  margin-top: 0vh;
  letter-spacing: .016em;
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

.logo {
  border: none;
  position: relative;
  background-color: transparent;
  margin-top: 1vh;
  margin-left: 1vh;
}
.logo:hover {
  cursor: pointer;
}

.exit {
  border: none;
  background-color: transparent;
}

.logo-gone {
  display: none;
}

.menu-container {
  position: fixed;
  z-index: 2;
  display: flex;
  width: 100%;
  margin: 0vh;
  top: 0vh;
  left: 0vh;
  padding-bottom: 1vh;
  align-items: center;
  background-color:black;
  border-bottom: .4vh solid rgb(72, 255, 0);
  overflow: hidden;
}
.menu-container button:hover {
  cursor: pointer;
}

.menu-mobile {
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0vh;
  top: 0vh;
  left: 0vh;
  padding-bottom: 1vh;
  align-items: center;
  background-color:black;
  border-bottom: .4vh solid rgb(72, 255, 0);
  overflow: hidden;
}

.tab-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
  border: none;
  color: rgb(72, 255, 0);
  background-color: transparent;
  position: relative; 
  overflow: hidden;
  margin-left: 1vw;
  min-width: 6vw;
  padding: 8px 16px;
}

.tab-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background-color: rgb(72, 255, 0);
  transition: all 0.15s ease-out;
  transform: translateX(-50%);
}

.tab-item:hover::after {
  width: 80%;
  transform: translateX(-50%);
}

.proshop {
  border-left: .4vh solid rgb(72,255, 0); 
  padding-left: 3.4vh;
}

.vert-container {
  flex-direction: column;
  display: flex;
  margin-top: 0vh;
  margin-left: 0;
  margin-right: 0;
  align-items: center;
  justify-content: center;
    width: 100%;
  }

.container { 
  flex-direction: row;
  align-self: center;
  display: flex;
  margin-right: 0vh;
  margin-left: 0vh;
}
  
.photos { 
  flex-direction: row;
  align-self: center;
  display: flex;
  margin-right: 2vw;
  margin-left: 2vw;
}

.photo {
  margin-left: 2vw;
  border-radius: 1vh;
  margin-bottom: 5vh;
}

.youtube-1 {
  margin-right: 2vw;
  border-radius: 1vh;
  width: 35vw;
  height: 19vw;
}

.youtube-2 {
  border-radius: 1vh;
  width: 35vw;
  height: 19vw;
  margin-right: 2vw;
}

ul {
 color: white;
}
li {
  font-family: 'Montserrat', serif;
  line-height: 2;
  margin-left: 6vw;
  margin-right: 6vw;
  overflow-wrap: break-word;
  font-size: 1.2em;
  color: white;
}

h2 {
  font-family: 'Merriweather', sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 2em;
  color: white;
  margin-bottom: 2vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  margin-top: 5vh;
  background-color: #333;
  padding: 2vh;
  border-radius: 8px;
}

select {
  font-family: 'Montserrat', serif;
  font-size: .9em;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: white;
  line-height: 2;
  padding: 1.3vh;
}

.submit-button {
  font-family: 'Montserrat', serif;
  font-size: .9em;
  color: white;
  background-color: #28a745;
  padding: 1.3vh;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.submit-button:hover {
  background-color: #218838;
}

table {
  background-color: #333;
  max-width: 90%;
  border-radius: 2vh;
  align-self: center;
  border-collapse: collapse;
  padding: 0vh;
  margin-bottom: 2vh;
}

th {
  font-size: 1.2em;
  font-weight: 200;
}

td, th {
  border: .8vh solid #444;
  border-radius: 2vh;
  padding: 1vh;
  padding-left: 3vh;
  margin: 0vh;
  padding-right: 5vh;
  font-family: 'Montserrat', serif;
  color: white;
  vertical-align: top;
  min-width: 200px;
}

.info-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.info-item {
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
}

.button-hover {
  cursor: pointer; 
  border-radius: 10px;
}

.item:hover {
  color: rgb(72, 255, 0);
}

.mobile-table {
  display: none;
}

.big-table {
  display: none;
}

img {
  max-width: 80vw;
}

@media (max-aspect-ratio: 3/2) {
  .photos {
    flex-direction: column;
    align-self: center;
    display: flex;
    align-items: center;
  }

  .menu-container {
    display: none;
  }

  .youtube-1, .youtube-2 {
    border-radius: 1vh;
    width: 380px;
    height: 210px;
    margin-right: 0;
    margin-top: 3vh;
  }

  table {
    display: none;
  }

  .mobile-table {
    display: flex;
  }

  .big-table {
    display: flex;
    background-color: #333;
    max-width: 90%;
    border-radius: 2vh;
    align-self: center;
    border-collapse: collapse;
    padding: 0vh;
    margin-bottom: 2vh;
  }
}

</style>
