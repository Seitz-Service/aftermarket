<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";
import Content from "../components/Content.vue";
import Header from "../components/Header.vue";
import {Product} from "../interfaces/IProduct.ts";
import {products} from "../products.ts";

const route = useRoute();
const productId = ref<string>(`${route.params.id}`);
const product = ref<Product>(products.filter((product: Product) => product.id === productId.value)[0]);
// todo: 404 here
</script>

<template>
  <Header :product="product"/>
  <Content :product="product"/>
</template>