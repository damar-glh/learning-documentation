<script setup>
import {ref, watch} from 'vue';
import srcQiz from './data/quizes.json';
import QuizCard from './components/QuizCard.vue';

const quizes = ref(srcQiz);
const searchInput = ref('');
const notFound = ref(false);

watch(searchInput, (newValue) => {
  if (newValue === '') {
    quizes.value = srcQiz;
    notFound.value = false;
  } else {
    quizes.value = srcQiz.filter((quiz) => {
      return quiz.title.toLowerCase().includes(newValue.toLowerCase());
    });
  }
  notFound.value = quizes.value.length === 0;
});
</script>

<template>
  <main>
    <header>
      <h1 id="title">Quiz Vue</h1>
      <input type="text" name="" id="search-input" v-model.trim="searchInput"/>
    </header>
    <section id="quiz-container">
      <div v-if="notFound">
        <p>Topik quiz Not Found!!</p>
      </div>
      <QuizCard v-else v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
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
</style>