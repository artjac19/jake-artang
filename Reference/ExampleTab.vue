<!-- always start with the 3 sections, script setup for js, template for html, and style for css -->
<script setup>
import { ref } from 'vue';
import PayPalForm from './PayPalForm.vue'; // this is so we can use the PayPalForm in this component

const imageSource = ref("david1ball.webp"); // ref() means that when the object is changed here it will automatically change wherever it's
                                            // referenced in html

const switchImage = () => {
    if (imageSource.value == "david1ball.webp") {
        imageSource.value = "kidtwoski.webp"
    } else {
        imageSource.value = "david1ball.webp"
    }
}

</script>

<template>
    <div class="vert-container" style="margin-top: 12.5vh"> <!-- i've generally been stacking vertically initially, 
        then horizontally within. notice the margin top at 12.5vh, this is because the tabs at the top are fixed and won't affect
        your object placement, so you have to move everything below them manually. -->
        <h2 style="margin-bottom: 5vh;">Example Title</h2>
        <div class="photos" style="margin-left: 5vw; margin-right: 5vw;">
            <!-- because this div is the photos class, objects will stack horizontally, however once the screen aspect ratio gets past
             3/2, they will switch to vertically to stay large and in frame. -->
            <p>&#8195; &#8195;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet, nibh nec rutrum volutpat, ante turpis 
                tempus lacus, non condimentum quam est quis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Cras auctor vitae turpis in volutpat. Quisque convallis eros eu odio volutpat, ut dapibus 
                lacus porta. Curabitur sit amet erat suscipit, accumsan risus quis, ornare lacus.</p> <!-- the &#8195; &#8195; is some unicode for tab -->
            <img class="photo" :src="'src/assets/' + imageSource" alt="david 1 ball" style="width: auto; height: 300px;">
            <!-- the : before the src is called a v-binding, it tells the html to look in the javascript for the variable, in this case imageSource-->
            <img class="photo" src="../assets/kidbackwrap.webp" alt="kid back wrap" style="width: auto; height: 300px;">
        </div>
        <div class="photos">
            <!-- PayPal object to use in place of the old paypal button. -->
            <PayPalForm style="margin-bottom: 4vh; align-self: center;"
                class="photo"
                :options="[
                    { value: 'Lesson', label: 'Lesson $50.00 USD' },
                    { value: 'Ten Pack', label: 'Ten Pack $400.00 USD' },
                    { value: '1 Day Lessons', label: '1 Day Lessons $140.00 USD' },
                    { value: 'Collegiate Day Stay', label: 'Collegiate Day Stay $140.00 USD' },
                    { value: 'Event Practice 4 passes', label: 'Event Practice 4 passes $15.00 USD' },
                    { value: 'Season Pass', label: 'Season Pass $2,450.00 USD' }
                ]" 
            />
            <button class="submit-button" style="width: 10vw; height: 10vh; margin-left: 3vw;" @click="switchImage()">Switch Image</button>
            <!-- @click is shorthand for v-on:click, just means when this button is pushed run the switchImage function.-->
        </div>
    </div>
</template>

<style>

</style>