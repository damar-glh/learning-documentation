<script setup>
import { defineProps } from 'vue';

const { questionPage, barProgress } = defineProps(['questionPage', 'barProgress']);
</script>

<template>
  <header>
    <h4>Questions {{ questionPage }}</h4>
    <div class="bar">
      <div class="bar-progress" :style="{width: barProgress}"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

.bar {
  width: 100%;
  height: 50px;
  border: 3px solid #a0ced9;
}

.bar-progress {
  height: 100%;
  width: 0%;
  background-color: #a0ced9;
}
</style>