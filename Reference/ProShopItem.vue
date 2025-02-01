<script setup>
import { defineProps, defineEmits } from 'vue';

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
  },
  isSelected: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['item-selected']);

function itemSelected() {
  emit('item-selected');
  console.log('itemSelected and being emitted')
}
</script>

<template>
  <button id="button" class="vert-container button-hover" @click="itemSelected()" :style="{minWidth: '230px', width: '20vw', borderWidth: '0', paddingTop: '2vh', backgroundColor: isSelected ? '#444' : 'rgb(20, 20, 20)'}">
    <img :src="imgSrc" :alt="imgAlt" style="width: 200px; height: auto; margin-bottom: 3vh; border-radius: 1vh;" />
    <p class="item" style="text-align: center;">{{ title }} <br> {{ price }}</p>
  </button>
</template>