<script setup lang="ts">
import Accordion from "./Accordion.vue";
import {Product} from "../interfaces/IProduct.ts";

const props = defineProps<{ product: Product }>();
const accordions = props.product.accordions;
const image: string = props.product.image;
const title: string = props.product.title;
</script>

<template>
  <div class="content">
    <div class="content-info">
      <Accordion
          v-for="accordion in accordions"
          :key="accordion.title"
          :accordion="accordion"
      />
    </div>
    <div class="content-image">
      <img :src="`/public/images/products/${image}`" :alt="title" />
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  > div {
    padding: 0 10px;
  }

  .content-info {
    width: 80%;
  }

  .content-image {
    width: 20%;
    padding-top: 20px;

    img {
      width: 100%;
    }
  }
}
</style>