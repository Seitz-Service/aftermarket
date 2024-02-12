<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{ title: string, subtitle: string, text: string }>();
const isAccordionOpen = ref(false);
const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value;
}
</script>

<template>
  <div class="accordion-container">
    <div :class="['accordion', {active: isAccordionOpen}]" @click="toggleAccordion">
      <div class="accordion-header">
        <span class="title" v-html="props.title" />
        <span>{{ isAccordionOpen ? '-' : '+' }}</span>
      </div>
      <span v-if="props.subtitle" class="subtitle" v-html="props.subtitle" />
    </div>
    <div :class="['panel', {open: isAccordionOpen}]">
      <p v-html="props.text" />
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
    font-size: 1.60em;
    font-weight: 700;
    color: #02adea;
    position: relative;
  }
}

.panel {
  padding: 0 10px;
  display: none;
  overflow: hidden;

  &.open {
    display: block;
  }
}
</style>