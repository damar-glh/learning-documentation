<script setup>
import {useRouter} from 'vue-router';

const { quiz } = defineProps(['quiz']);
const router = useRouter();

function goQuiz() {
  router.push({name: 'quiz', params: {id: quiz.id}})
}
</script>

<template>
  <div class="card" @click="goQuiz">
    <img :src="quiz.img" :alt="quiz.title">
    <div class="card-body">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
      <button>Next</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 270px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 0 10px;
}

h2 {
  font-weight: bold;
}
</style>