<script setup>
import { defineProps, ref, watch } from 'vue';
import MusicLinks from './MusicLinks.vue';

const props = defineProps({
  title: String,
  desc: String,
  src: String,
  fill: String,
  spotify: String,
  youtube: String,
  apple: String,
  audio: String
});

const url = ref("./src/assets/SVG/triangle.webp");
const isActive = ref(false);
let elapsedTime = 0; // To track elapsed animation time
let animationFrameId; // To store the animation frame ID
let purpose = new Audio(props.audio); // Use the prop directly
purpose.loop = false;
purpose.volume = 1.0;
console.log("Audio initialized successfully:", purpose);

// Function to play/pause the animation
const play = () => {
  isActive.value = !isActive.value;
  if (isActive.value) {
    url.value = "./src/assets/SVG/pause.webp";
    resumeAnimation(); // Resume animation
    resumeAudio();
  } else {
    url.value = "./src/assets/SVG/triangle.webp";
    pauseAnimation(); // Pause animation
    pauseAudio();
  }
};


// Function to pause the audio
function pauseAudio() {
  purpose.pause();
}

// Function to resume the audio
function resumeAudio() {
  purpose.currentTime = elapsedTime / 1000; // Sync audio time with elapsed animation time (convert ms to s)
  purpose.play();
}



// Function to convert polar coordinates to Cartesian
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

// Function to describe a filled arc in SVG path format
function describeCirclePiece(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${x},${y}`, // Move to the center
    `L ${start.x},${start.y}`, // Line to the start of the arc
    `A ${radius},${radius} 0 ${largeArcFlag} 0 ${end.x},${end.y}`, // Arc
    "Z", // Close the path back to the center
  ].join(" ");
}

// Reactive SVG path data
const circlePath = ref("");

// Function to update the circle path dynamically
function updateCircle(value) {
  circlePath.value = describeCirclePiece(-50, -50, 100, -45, value);
}

// Animation function to fill the circle
function animateCircle(duration = purpose.duration * 1000) {
  const startTime = performance.now() - elapsedTime; // Adjust start time by elapsed time

  function step(currentTime) {
    if (!isActive.value) {
      return; // Exit early if paused
    }

    const elapsed = currentTime - startTime;
    elapsedTime = elapsed; // Update elapsed time for pause/resume
    const progress = Math.min(elapsed / duration, 1); // Clamp progress to 0-1
    const calculatedAngle = progress * 360; // Calculate the angle based on progress

    updateCircle(calculatedAngle - 45); // Update the SVG path

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step); // Continue the animation
    } else {
      elapsedTime = 0; // Reset elapsed time when animation completes
      url.value = "./src/assets/SVG/triangle.webp"
    }
  }

  animationFrameId = requestAnimationFrame(step); // Start the animation
}

// Function to pause the animation
function pauseAnimation() {
  cancelAnimationFrame(animationFrameId); // Cancel the current animation frame
}

// Function to resume the animation
function resumeAnimation() {
  animateCircle(); // Restart the animation from where it paused
}
</script>



<template>
    <div class="new-music">
            <div class="about-music" display="flex" flex-direction="column">
                <div class="title-container">
                    <p class="title">{{ title }}</p>
                    <div :class="{ 'is-active': isActive }" class="play-circle" id="p">
                      <svg class="circle" viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                          :d="circlePath"
                          fill="black" class="the-circle"
                        />
                      </svg>
                        <button class="play" @click="play()" :style="{ backgroundImage: `url(${url})`, backgroundColor: fill }"></button>
                    </div>
                </div>
                <p class="desc">{{ desc }}</p>
                <MusicLinks class="links" :spotify="spotify" :youtube="youtube" :apple="apple"/>
            </div>
            <img class="art" :src="src"/>
    </div>
</template>

<style scoped>

.new-music {
    border-radius: 40px;
    margin: 0 2vw 0 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.about-music {
    margin: 2vw 0 2vw 2vw;
    display: flex; 
    flex-direction: column;
    padding: 0;
}

.art {
    width: 20vw;
    height: auto;
    margin: 2vw 2vw 2vw 0;
    border-radius: 10px;
}

.play {
    position: relative;
    margin: 5px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    border-width: 0px; 
    border-radius: 13px;
    width: 40px;
    height: 40px;
    filter: brightness(100%);
    z-index: 4;
    outline: none;
}

.play:hover {
    cursor: pointer;
}

.play-circle {
  position: relative;
  align-content: center;
  width: 50px;
  height: 50px;
  border-width: 0px;
  border-radius: 13px;
  overflow: hidden;
  padding: 0;
  margin: 0 0 0 2vw;
  z-index: 2;
}

.circle {
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.title {
  margin: 0;
}

.title-container {
  display: flex; 
  flex-direction: row; 
  align-items: center;
}

.desc {
  width: 24vw;
}

.links {
  margin-left: 10px;
}

@media (max-aspect-ratio: 5/3) {
  .new-music {
    flex-direction: column;
    align-items: center;
  }

  .art {
    width: 45vw;
    align-self: center;
    margin: 0 2vw 2vw 2vw;
  }
  
  .about-music {
    width: 45vw;
    align-items: center;
  }

  .desc {
    width: 45vw;
  }

  .links {
    margin: 0;
    align-self: center;
  }

  .title-container {
    align-self: center;
  }
}

@media (max-aspect-ratio: 4/3) {
  .new-music {
    margin: 0;
  }

  .art {
    width: 66vw;
    align-self: center;
    margin: 0 0 5vh 0;
  }
  
  .about-music {
    width: 86vw;
    align-items: center;
  }

  .desc {
    width: 80vw;
    text-align: center;
  }

  .title-container {
    align-self: center;
  }
}

</style>