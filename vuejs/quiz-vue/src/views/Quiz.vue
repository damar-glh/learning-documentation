<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import quizes from '@/data/quizes.json'

const route = useRoute();
const quiz = quizes.find((quiz) => quiz.id === parseInt(route.params.id));
const currentIndexQuestion = ref(0)
</script>

<template>
  <div class="quiz">
    <QuizHeader />
    <QuizContent :question="quiz.questions[currentIndexQuestion]" />
  </div>
</template>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>