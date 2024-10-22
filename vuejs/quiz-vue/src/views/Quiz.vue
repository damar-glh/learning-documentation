<script setup>
import { useRoute } from "vue-router";
import {computed, ref, watch} from "vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import quizes from '@/data/quizes.json'

const route = useRoute();
const quiz = quizes.find((quiz) => quiz.id === parseInt(route.params.id));
const currentIndexQuestion = ref(0);

const questionPage = computed(() => `${currentIndexQuestion.value + 1}/${quiz.questions.length}`);
// const questionPage = ref(`${currentIndexQuestion.value + 1}/${quiz.questions.length}`);
//
// watch(
//     () => currentIndexQuestion.value,
//     (currentIndexQuestion) => {
//         questionPage.value = `${currentIndexQuestion + 1}/${quiz.questions.length}`;
//     }
// )
</script>

<template>
  <div class="quiz">
    <QuizHeader :questionPage="questionPage"/>
    <QuizContent :question="quiz.questions[currentIndexQuestion]" />
    <button @click="currentIndexQuestion++" :disabled="currentIndexQuestion === quiz.questions.length -1">Next</button>
    <button @click="currentIndexQuestion--" :disabled="currentIndexQuestion === 0">Previous</button>
  </div>
</template>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>