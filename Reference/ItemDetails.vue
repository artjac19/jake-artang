<script setup>
import { defineProps } from 'vue';
import PayPalForm from './PayPalForm.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  }, description: {
    type: String,
    required: true
  }, payPalFormProps: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="item-details">
      
    <img :src="imgSrc" :alt="imgAlt" class="item-image" />
      <div class="details">
          <p style="font-size: 1.45em; margin: 2vh 0 0 3vh;" >{{ title }}</p>
          <p style="margin: 0 0 0 3vh">{{ price }}</p>
          <p class="" style="margin: 0 0 3vh 3vh">{{ description }}</p>
      </div>
      <payPalForm style="align-self: center;" v-bind="payPalFormProps"/>
  </div>
</template>

<style scoped>
.item-details {
  border-radius: 3vh;
  padding: 3vh 3vh 3vh 0;
  margin: 0;
  background-color: #444;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.details {
  width: 40vw;
}

.item-image {
  border-radius: 1vh; 
  width: auto; 
  height: 50vh; 
  margin: 3vh 0vh 3vh 3vh;
}

@media (max-aspect-ratio: 3/2) {
  .item-details {
    flex-direction: column;
  }

  .details {
    display: flex; 
    flex-direction: column;
    align-self: center;
    min-width: 80vw;
  }

  p {
    text-align: center;
  }

  .item-image {
    width:fit-content;
    align-self: center;
  }

}
</style>