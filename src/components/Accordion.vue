<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{ title: string, text: string }>();
const isAccordionOpen = ref(false);
const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value;
}
</script>

<template>
  <div class="accordion-container">
    <div :class="['accordion', {active: isAccordionOpen}]" @click="toggleAccordion">
      <span class="title">{{ props.title }}</span>
      <span>{{ isAccordionOpen ? '-' : '+' }}</span>
    </div>
    <div :class="['panel', {open: isAccordionOpen}]">
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>


<style>
.accordion {
  color: #444;
  cursor: pointer;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;

  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;

  .title {
    font-size: 1.60em;
    font-weight: 700;
    color: #646cff;
  }
}

.panel {
  padding: 0 18px;
  display: none;
  overflow: hidden;

  &.open {
    display: block;
  }
}
</style>