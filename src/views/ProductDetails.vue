<script setup lang="ts">
import Content from "../components/Content.vue";
import Header from "../components/Header.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import products from "../../public/products.json";
import {Product} from "../interfaces/IProduct.ts";

const route = useRoute();
const productId = ref<string>(`${route.params.id}`);
const product = ref<Product>(products.byId[productId.value]);
</script>

<template>
  <Header :product="product"/>
  <Content :product="product"/>
</template>