<script setup>

</script>

<template>
    <div class="menu-container">
        <img src="../assets/BestPhotos/DSC02663.JPG" class="image" />
        <div class="vertical-container">
            <p class="header">About</p>
            <p class="menu-item">Jake Artang is a jazz pianist from Prior Lake, Minnesota. He started playing piano at a young age, exploring the works of Beethoven, Debussy, and Scott Joplin throughout gradeschool. Entering high school, he took to jazz. Under the guidance of local piano legend Peter Shu, he began to find his own sound. 
                
                <br><br>He takes inspiration from a wide selection of jazz artists. This includes jazz greats Oscar Peter, Vince Gauraldi, and Antonio Carlos Jobim as well as newer, electronic jazz artists such as Anomalie, Kiefer, J3PO (Jason Polluck), and Robert Glasper. 
                
                <br><br>Since then, he has been a part of numerous bands and jazz combos, and has published "First Impressions", a solo piano EP containing fresh takes on classic tunes. He is currently a student at UW-Madison double majoring in jazz piano and computer science.</p>
        </div>
    </div>
    
</template>


<style scoped>

.vertical-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0;
}
.header {
    margin-top: 5vh;
    margin-left: 10vh;
    padding: 0;
}
.image {
    margin-top: 5vh;
    margin-left: 0vh;
    width: auto;
    height: 70vh;
  }

.menu-item {
    position: relative;
    margin-top: 0vh;
    margin-left: 10vh;
    margin-right: 10vh;
    line-height: 2;
    padding: 0;
}

.menu-container {
    align-items:  start;
}
</style>