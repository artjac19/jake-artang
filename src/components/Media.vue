<script setup>

import { onMounted } from 'vue';

onMounted(() => {
  if (videoElement.value) {
    videoElement.value.load(); // Force browser to process the video
  }
});


</script>

<template>
    <div style="display: flex; flex-direction: column; align-items: center; margin: 0; padding: 0;">
        <p class="blurb">When I'm not making music or coding websites I like to do cool things and make cool edits with my friends. Feel free to reach out if you want something filmed/edited in my style.</p>
        <div class="videos">
            <video class="video" ref="videoElement" preload="metadata" muted playsinline controls>
                <source src="../assets/edits/missourijrdev.mp4" type="video/mp4">
            </video>
            <video class="video" ref="videoElement" preload="metadata" muted playsinline controls>
                <source src="../assets/edits/newcameditcomp.mp4" type="video/mp4">
            </video>
            <img src="../assets/edits/laurenmoneyshot.png" class="video">
            <video class="video" ref="videoElement" preload="metadata" muted playsinline controls>
                <source src="../assets/edits/wii.mp4" type="video/mp4">
            </video>
            <img src="../assets/edits/trey.png" class="video">
            <img src="../assets/edits/sawyer.png" class="video">
            <video class="video" ref="videoElement" preload="metadata" muted playsinline controls>
                <source src="../assets/edits/pickos24.mp4" type="video/mp4">
            </video>
            <img src="../assets/edits/reed1ball.png" class="video">
            <video class="video" ref="videoElement" preload="metadata" muted playsinline controls>
                <source src="../assets/edits/Santas.mp4" type="video/mp4">
            </video>
            <img src="../assets/edits/aidenbflip.png" class="video">
            <video class="video" ref="videoElement" preload="metadata" muted playsinline controls>
                <source src="../assets/edits/hawaii25.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<style scoped>

.videos {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 90rem;
    align-self: center;
    width: fit-content;
}

.video {
    margin: 0 2vw 4vw 2vw;
    width: 300px;
    height:fit-content;
    border-radius: 40px;
    border: 4px solid  rgb(197, 143, 197);
}

.blurb {
    background-color:  rgb(197, 143, 197);
}

@media (max-aspect-ratio: 2) {
    .videos {
        height: 110rem;
    }
}

@media (max-aspect-ratio: 8/5) {
    .videos {
        height: 150rem;
    }
}

@media (max-aspect-ratio: 4/3) {
    .videos {
        height: 1000rem;
    }

    .video {
        width: 400px;
    }
}

@media (max-aspect-ratio: 3/4) {
    .video {
        width: 300px;
        margin: 0 0 4vh 0;
    }
}

</style>