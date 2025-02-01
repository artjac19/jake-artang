<script setup>


</script>

<template>
    <p class="blurb blue">I'm currently doing my undergrad in computer science 
        at UW-Madison, during this time I've been creating websites for myself and others. 
        If you are a creative person looking for a fully customized website that fits your personality better than drag & drop 
        website builders, reach out to my email linked in the corner, my response time is usually within a few days. Below are a few examples of my work.</p>
    <div class="examples">
    <p class="blurb gray">News article style website <b><a href="https://rethinkingmusiceducation.com" target="_blank">Rethinking Music Education</a></b> for one of my poly-sci courses Spring 2024</p>
    <img src="../assets/musiceducation.webp">
    <p class="blurb green">Full redesign of <b><a class="dark" href="https://swervewatersports.com" target="_blank">Swerve Watersports</a></b> while I worked there as a ski coach and boat driver during the Summer of 2024.</p>
    <p>Before:</p>
    <img src="../assets/oldswerve.webp" width="800" height="auto" style="border-radius: 40px;">
    <p>After:</p>
    <img src="../assets/newswerve.webp" width="800" height="auto" style="border-radius: 40px;">
    </div>
</template>

<style scoped>

img {
    border: 5px solid var(--db);
    width: 60vw;
    min-width: 350px;
    height: auto; 
    border-radius: 40px;
}

.examples {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.green {
    background-color: rgb(93, 179, 93);
    margin: 30px 15vw 30px 15vw;
}

.dark {
  color: #135597;
}

.dark:hover {
  color: #2f628b;
}

.dark:visited {
  color: #4a2f5e;
}

.blue {
    background-color: var(--db); 
    color: var(--eg);
}

.gray {
    background-color: rgb(36, 36, 36);
    color: var(--eg);
}

</style>