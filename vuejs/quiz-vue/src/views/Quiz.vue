<script setup>
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import quizes from '@/data/quizes.json'
import QuizResult from "@/components/QuizResult.vue";

const route = useRoute();
const quiz = quizes.find((quiz) => quiz.id === parseInt(route.params.id));
const currentIndexQuestion = ref(0);
const selectCorrectAnswer = ref(0);
const showResult = ref(false);

const questionPage = computed(() => `${currentIndexQuestion.value + 1}/${quiz.questions.length}`);
const barProgress = computed(() => `${(currentIndexQuestion.value + 1) * 100 / quiz.questions.length}%`);

function selectOptionsAnswer(answers) {
    if (answers.correct) {
      selectCorrectAnswer.value++;
    }

    if (currentIndexQuestion.value === quiz.questions.length - 1) {
      showResult.value = true;
    } else {
      currentIndexQuestion.value++;
    }
}
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
    <QuizHeader :questionPage="questionPage" :barProgress="barProgress"/>
    <QuizContent v-if="!showResult" :question="quiz.questions[currentIndexQuestion]" @selectAnswer="selectOptionsAnswer"/>
    <QuizResult v-else :totalQuestions="quiz.questions.length" :correctAnswers="selectCorrectAnswer"/>
<!--    <div class="button">-->
<!--      <div class="button-prev-next">-->
<!--        <button @click="currentIndexQuestion&#45;&#45;" :disabled="currentIndexQuestion === 0">Previous</button>-->
<!--        <button @click="currentIndexQuestion++" :disabled="currentIndexQuestion === quiz.questions.length -1">Next-->
<!--        </button>-->
<!--      </div>-->
<!--      <button @click="" :hidden="currentIndexQuestion < quiz.questions.length -1">Submit</button>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.button {
  display: flex;
  justify-content: space-between;
}

.button-prev-next {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>