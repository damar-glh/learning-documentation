<script setup>
import { defineProps } from 'vue'

const { question } = defineProps(['question']);
const emit = defineEmits(['selectAnswer']);

function selectAnswer(answers) {
  emit('selectAnswer', answers);
};
</script>

<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="options-container">
    <div class="option" v-for="option in question.answers" :key="option.id" @click="selectAnswer(option)">
      <p class="option-label">{{ option.label }}.</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>

<style scoped>
#question-container {
  margin-top: 30px;
}

.question-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: #a0ced9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
  background-color: #e2e2e2;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>