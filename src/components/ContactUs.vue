<script setup>
import { ref } from 'vue';


const showEmail = ref(false);

const isHovering = ref(false);

const isCopied = ref(false);


const toggleEmail = (() => {
  showEmail.value = !showEmail.value;
  if (showEmail.value) {
    setTimeout(() => {
      showEmail.value = false;
      console.log("Email visibility reset to false after timeout.");
    }, 30000);
    isHovering.value = false;
    isCopied.value = false;
  }
})

const copyEmail = () => {
  const email = "jake.artang@gmail.com";
  navigator.clipboard.writeText(email);
  isCopied.value = true;
  isHovering.value = false;
  setTimeout(() => {
    showEmail.value = false;
    console.log("Email visibility reset to false after timeout.");
  }, 3000);
};

</script>

<template>
    <div class="email">
      <div style="margin-bottom: .7vh; display: flex; flex-direction: row; align-items: center;">
        <a href="https://open.spotify.com/artist/6NPdLNwQEqgBNx0XbuHmgl?si=w-2snzLDQAitB84O0EEsVg" class="be-gone" target="_blank">
            <div class="eggshell spotify"></div>
            <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
        </a>

        <a href="https://youtube.com/@jakedoesjazz-ex5fd?si=048KHkaBR3_l9BOy" class="be-gone" target="_blank">
            <div class="eggshell youtube"></div>
            <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
        </a>
        
        <a href="https://www.instagram.com/jakedoesjazz" target="_blank" style="position: relative; display: inline-block;">
            <div class="eggshell insta"></div>
            <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
        </a>
        
        <a href="https://www.tiktok.com/@jakedoesjazz" target="_blank" style="position: relative; display: inline-block;">
            <div class="eggshell tiktok"></div>
            <span class="link-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;"></span>
        </a>
        <button class="mailbtn" @click="toggleEmail" style="position: relative; display: inline-block;"></button> 
        </div>
        <p 
        v-show="showEmail" 
        class="email-name" 
        @mouseover="isHovering = true" 
        @mouseleave="isHovering = false" 
        @click="copyEmail"
      >
      <span class="text-content">
          <span class="email-text" v-if="isHovering && !isCopied">Copy</span>
          <span class="email-text" v-else-if="isCopied">Copied!</span>
          <span class="email-text" v-else>jake.artang@gmail.com</span>
      </span>
      </p>
    </div>
</template>

<style scoped>

.email {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: end;
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
  background-color: var(--eg);
  -webkit-mask-image: url('../assets/Icons/email.webp');
  mask-image: url('../assets/Icons/email.webp');
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 35px;
  height: 35px;
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

.be-gone {
  position: relative; 
  display: inline-block;
}

.eggshell {
  background-color: var(--eg);
  mask-repeat: no-repeat;
  mask-size: contain;
}

.tiktok {
  -webkit-mask-image: url('../assets/Icons/tiktoklogo.webp'); 
  mask-image: url('../assets/Icons/tiktoklogo.webp'); 
  margin-right: 3vw;
  width: 30px;
  height: 30px;
}

.insta {
  -webkit-mask-image: url('../assets/Icons/instagramlogo.webp'); 
  mask-image: url('../assets/Icons/instagramlogo.webp'); 
  margin-right: 3vw;
  width: 30px;
  height: 30px;
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

.email-text {
  font-size: 1em;
}

@media (max-aspect-ratio: 5/3) {
  .be-gone {
    display: none;
  }

  .email-name {
    min-width: 145px;
    padding: 0px 3px 0px 3px;
  }

  .email-text {
    font-size: .7em;
  }
}

@media (max-aspect-ratio: 4/3) {
  .email {
    display: none;
  }
}

</style>