<script setup lang="ts">
import {Product} from "../interfaces/IProduct.ts";

const props = defineProps<{ product: Product }>();
const title: string = props.product.title;
</script>

<template>
  <header class="header">
    <h1>Service information {{ title }}</h1>
  </header>
</template>

<style>
.header {
  width: 100%;
  height: 50vh;
  background-color: #646cff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>