<script setup lang="ts">
import {ref} from "vue";
import {Accordion} from "../interfaces/IProduct.ts";
import Arrows from "./Arrows.vue";

const props = defineProps<{ accordion: Accordion }>();
const accordion = ref<Accordion>(props.accordion);
const isAccordionOpen = ref(false);
const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value;
}
</script>

<template>
  <div class="accordion-container">
    <div :class="['accordion', {active: isAccordionOpen}]" @click="toggleAccordion">
      <div class="accordion-header">
        <span class="title" v-html="accordion.title" />
        <Arrows :is-accordion-open="isAccordionOpen"/>
      </div>
      <span v-if="accordion.subtitle" class="subtitle" v-html="accordion.subtitle" />
    </div>
    <div :class="['panel', {open: isAccordionOpen}]">
      <p v-html="accordion.text" />
    </div>
  </div>
</template>


<style>
.accordion {
  color: #444;
  cursor: pointer;
  padding: 20px 10px;

  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .title {
    font-size: 44px;
    font-weight: 700;
    color: rgb(61, 153, 212);
    box-shadow: inset 0 -0.5em 0 rgba(61, 153, 212, 0.3), 0 0 0 rgba(61, 153, 212, 0.3);

    @media (max-width: 1250px) {
      flex-basis: 95%;
    }
  }

  .subtitle {
    font-size: 24px;
    font-weight: 700;
    color: rgb(61, 153, 212);
  }
}

.panel {
  padding: 0 10px;
  display: none;
  overflow: hidden;
  color: #000;

  &.open {
    display: block;
  }
}
</style>