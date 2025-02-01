<script setup>
import PayPalForm from './PayPalForm.vue';


</script>

<template>
    <div class="vert-container">
    <h2 style="margin-top: calc(100px + 3vh);">Disc Golf</h2> 
    <div class="photos">
        <p style=" margin-left: 5vw; margin-top: 0;">&#8195; &#8195; Swerve Watersports also has a disc golf course right here in Manchester, Tennessee. Play for $4 or free with the purchase of a disc or buy a membership and play all the time for just $105. This membership will give you 10% off on all discs from our Proshop! The Proshop has limited hours especially during winter so please call or text to let someone know you are coming! Be sure to sign the waiver and venmo @michaelbullockswerve for payments. You can view an interactive course map here at <a target="_blank" href="https://udisc.com/courses/swerve-1PXs">UDisc</a></p>
        <PayPalForm class="photo" style="margin-right: 5vw; margin-top: 5vh;"
        buttonId="M2SC3LU3SSBJA"
        label="Disc Golf"
        description="Disc Golf"
        :options="[
            { value: 'Disc Golf Round', label: 'Disc Golf Round $4.00 USD' },
            { value: 'Disc Golf Membership', label: 'Disc Golf Membership $105.00 USD' },
            { value: 'Disc Golf round and Disc Rental', label: 'Disc Golf round and Disc Rental $9.00 USD' }
        ]" 
        />
    </div>
    <div class="photos" style="align-items:start;">
        <img class="photo" src="../assets/discgolf.webp" style="width: 400px; height: auto;"/>
        <div class="vert-container">
            <img class="photo" src="../assets/discgolfback12.webp" style="width: 400px; height: auto;"/>
            <img class="photo" src="../assets/hole24.webp" style="width: 400px; height: auto;"/>
        </div>
        <div class="vert-container">
            <img class="photo" src="../assets/hole17.webp" style="width: 400px; height: auto;"/>
            <img class="photo" src="../assets/hole15.webp" style="width: 400px; height: auto;"/>
        </div>
    </div>
</div>
</template>