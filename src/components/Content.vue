<script setup lang="ts">
import Accordion from "./Accordion.vue";
import {Product} from "../interfaces/IProduct.ts";

const props = defineProps<{ product: Product }>();
const accordions = props.product.accordions;
</script>

<template>
  <Accordion v-for="accordion in accordions" :key="accordion.title" :title="accordion.title" :text="accordion.text" />
</template>