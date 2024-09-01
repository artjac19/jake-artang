<script setup>
import { ref } from 'vue'

let playing = ref(false)
let play = () => {
  playing.value = !playing.value
  // play audio file here
}

</script>

<template>
    <div class="box">
        <img v-show="playing == false"  src="../assets/SVG/triangle.png" class="icon"></img>
        <img v-show="playing == true"  src="../assets/SVG/pause.png" class="icon"></img>
        <button @click="play"   class="icon-button"></button>
        <slot></slot>
    </div>
</template>


<style scoped>
.box {
    border: 2px solid white;
    margin-left: 5vh;
    display: flex;
    flex-direction: row;
    border-radius: 2vh;
    padding-left: 2vh;
    padding-right: 2vh;
    padding-inline: 2vh;
    align-items: center;
}

.icon {
    background-color: transparent ;
    height: 5vh;
    width: auto;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 2vh;
    margin-right: 2vh;
}

.icon-button {
    position: absolute;
    margin-top: 0vh;
    margin-left: 0vh;
    width: 7vh;
    height: 5vh;
    background-color: transparent;
    border: none;
}

.menu-item {
    color: white;
    margin-right: 0vh;
    padding: 0vh;
}


</style>