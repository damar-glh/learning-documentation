<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const { totalQuestions, correctAnswers } = defineProps(['totalQuestions', 'correctAnswers']);
</script>

<template>
  <section id="result-container">
    <h1 class="result-title">Quiz Result</h1>
    <p class="result-text">You have answered {{ correctAnswers }} out of {{ totalQuestions }} questions correctly.</p>
    <RouterLink to="/" class="button">Back to Home</RouterLink>
  </section>
</template>

<style scoped>
#result-container {
  margin-top: 30px;
}

.result-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.result-text {
  font-size: 20px;
  font-weight: bold;
}

.button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #a0ced9;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

</style>