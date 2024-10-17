<script setup>
import { ref } from 'vue';
import srcQiz from './data/quizes.json';

const quizes = ref(srcQiz);
</script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz Vue</h1>
      <input type="text" name="" id="search-input">
    </header>
    <section id="quiz-container">
      <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" :alt="quiz.title">
        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
          <button>Next</button>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin: 30px 0 10px 0;
  display: flex;
  align-items: center;
}

#title {
  margin-right: 20px;
  font-weight: bold;
}

#search-input {
  border: none;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

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