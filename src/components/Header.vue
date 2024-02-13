<script setup lang="ts">
import {Product} from "../interfaces/IProduct.ts";

const props = defineProps<{ product: Product }>();
const title: string = props.product.title;
</script>

<template>
  <div class="header">
    <img src="/public/images/site/logo_seitz_pos.svg" title="Eugen Seitz AG" alt="Eugen Seitz AG">
    <h1>Service information {{ title }}</h1>
  </div>
</template>

<style>
.header {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url("/public/images/site/seitz-unternehmen 1284_Zuschnitt.jpg") no-repeat center;
  color: rgb(122, 227, 166);

  @media (max-width: 1250px) {
    &:after {
      content: none !important;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 38, 62);
    opacity: 0.8;
  }

  &:after {
    --element-size: calc(100vw * 0.4);
    content: "";
    display: block;
    position: absolute;
    width: var(--element-size);
    height: var(--element-size);
    right: 0px;
    bottom: 0px;
    background-color: rgb(255, 255, 255);
    clip-path: polygon(100% 40%, 100% 100%, 0% 100%);
    z-index: 2;
    transform: translate(1px, 1px);
  }

  img {
    position: absolute;
    z-index: 3;
    width: 175px;
    top: 12px;
    left: 30px;
  }

  h1 {
    max-width: 1240px;
    margin: 0 auto;
    padding-right: 40%;
    padding-left: 30px;
    position: relative;
    z-index: 3;
  }
}
</style>