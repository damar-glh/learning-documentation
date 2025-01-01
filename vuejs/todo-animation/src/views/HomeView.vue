<script setup>
import {ref} from 'vue'
import gsap from 'gsap'

const tasks = ref([
  {id: 1, name: 'Learn Vue 3'},
  {id: 2, name: 'Learn TypeScript'},
  {id: 3, name: 'Learn Vite'},
])

const newTask = ref('')

const addTask = () => {
  if (newTask.value) {
    tasks.value.unshift(
      {
        id: tasks.value.length + 1,
        name: newTask.value
      }
    )
    newTask.value = ''
  } else {
    alert('Please enter a task')
  }
}

const removeTask = (task) => {
  tasks.value = tasks.value.filter(t => t.id !== task.id)
}

const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateX(-30px)'
}

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 0.3,
    delay: el.dataset.index * 0.3,
  })
}

const beforeLeave = (el) => {
  el.style.position = 'absolute'
  el.style.transform = 'translateX(0px)'
}

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    x: 30,
    scale: 0,
    duration: 0.3,
    delay: el.dataset.index * 0.3,
  })
}
</script>

<template>
  <div class="container">
    <div class="input">
      <input type="text" placeholder="Add a task" v-model="newTask" @keyup.enter="addTask()">
      <button @click="addTask()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-plus">
          <path d="M5 12h14"/>
          <path d="M12 5v14"/>
        </svg>
      </button>
    </div>
    <TransitionGroup name="list" appear @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <div v-for="(task, index) in tasks" :key="task.id" :data-index="index" class="card-list">
      {{ task.name }}
      <div class="btn-edit">
<!--        <button @click="tasks.value = tasks.value.filter(t => t.id !== task.id)">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
<!--               class="lucide lucide-pencil-ruler">-->
<!--            <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/>-->
<!--            <path d="m8 6 2-2"/>-->
<!--            <path d="m18 16 2-2"/>-->
<!--            <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/>-->
<!--            <path-->
<!--                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>-->
<!--            <path d="m15 5 4 4"/>-->
<!--          </svg>-->
<!--        </button>-->
        <button @click="removeTask(task)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="lucide lucide-trash-2">
            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            <line x1="10" x2="10" y1="11" y2="17"/>
            <line x1="14" x2="14" y1="11" y2="17"/>
          </svg>
        </button>
      </div>
    </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.container {
  max-width: 300px;
  margin: 0 auto;
}

.container .input {
  display: flex;
  gap: 15px;
  align-items: center;
}

.container button {
  border: none;
  cursor: pointer;
  height: 40px;
}

.container input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
}

.card-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
}

.btn-edit {
  display: flex;
  gap: 10px;
  justify-content: center;
}

/*
.list-enter-from {
	opacity: 0;
	transform: scale(0.6);
}

.list-enter-to {
	opacity: 1;
	transform: scale(1);
}

.list-enter-active {
	transition: all 0.5s ease;
}
*/
/*
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}

.list-leave-to {
  opacity: 0;
  transform: scale(0);
}

.list-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
*/

.list-move {
  transition: all 0.5s ease;
}
</style>