<script setup>
import { ref, onMounted } from 'vue'
import ProShopItem from './ProShopItem.vue';
import ItemDetails from './ItemDetails.vue';
import proShopItems from '../proShopItems.json';

const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const allItems = ref([]);
const outOfStock = ref([]);

onMounted(() => {
  allItems.value = proShopItems.allItems.map(item => ({
    ...item,
    imgSrc: images[`../assets/${item.imgSrc}`]?.default || item.imgSrc // Use the imported image or fallback to the original path
  }));
  outOfStock.value = proShopItems.outOfStock.map(item => ({
    ...item,
    imgSrc: images[`../assets/${item.imgSrc}`]?.default || item.imgSrc
  }));
});

const itemDetailsProps = ref({
  title: "",
  price: "",
  imgSrc: "",
  imgAlt: "",
  description: "",
  payPalFormProps: {}
});

const selectedItemIndex = ref(-1);
const temporaryIndex = ref(-1);

function handleItemSelected(index) {
  itemDetailsProps.value = allItems.value[index];

  selectedItemIndex.value = index;
  let tempIndex = selectedItemIndex.value
  let tempLocation = document.querySelector(`#item-${tempIndex}`).getBoundingClientRect().left
  let nextLocation = document.querySelector(`#item-${tempIndex + 1}`).getBoundingClientRect().left
  // temp index = selectedItemIndex + how many index to next wrap, 
  while (nextLocation !== null && tempLocation < nextLocation) { 
    tempIndex++; 
    tempLocation = document.querySelector(`#item-${tempIndex}`).getBoundingClientRect().left
    nextLocation = document.querySelector(`#item-${tempIndex + 1}`) == null ? null : document.querySelector(`#item-${tempIndex + 1}`).getBoundingClientRect().left
    if (tempIndex == 1000) { 
      console.log('broke')
      break; }
  }
   temporaryIndex.value = tempIndex
}

</script>

<template>
<div class="vert-container">
    <h2 style="margin-top: calc(100px + 3vh);">The Proshop </h2>
    <p style="text-align: center">We carry a variety of boardsport and watersport products and everything you will need with them. Give us a call we
    can help you find equipment and or give advice.</p>
    <div class="proshop-container">
      <template v-for="(item, index) in allItems" :key="index">
        <div class="proshop-item" :id="'item-' + index">
          <ProShopItem
            :title="item.title"
            :price="item.price"
            :imgSrc="item.imgSrc"
            :imgAlt="item.imgAlt"
            :description="item.description"
            :payPalFormProps="item.payPalFormProps"
            :isSelected="selectedItemIndex === index"
            @item-selected="handleItemSelected(index)"
          />
          
        </div>
        <ItemDetails  v-if="temporaryIndex === index" style="margin: 3vh 0 5vh 0; width: 90vw;" v-bind="itemDetailsProps" />
      </template>
    </div>
</div>
</template>

<style scoped>

.proshop-container {
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: space-evenly; 
  width: 90vw; 
  margin: 0 5vw 0 5vw;
  align-items: center;
}

.proshop-item {
  margin-bottom: 2vh; 
  width: 20vw;
  min-width: 230px;
}

</style>