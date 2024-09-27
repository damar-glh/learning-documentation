<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment(){
  count.value++;
}

function decrement() {
  count.value--;
}
</script>

<template>
  <main>
    <div>
      <h1>Count Counter</h1>
      <span id="value">
        {{ count }}
      </span>
      <div>
        <button @click="increment" id="increment">Increment</button>
        <button @click="decrement" id="decrement">Decrement</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  background-color: #333333;
  padding: 20px;
  border-radius: 8px;
}

#value {
  font-size: 2rem;
  color: #ffffff;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

button:hover {
  background-color: #45a049;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>