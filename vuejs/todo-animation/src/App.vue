<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/about">About</RouterLink>
  </div>
  <Transition name="route">
    <RouterView/>
  </Transition>
</template>

<style scoped>
.container {
  max-width: 300px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  font-weight: normal;
  color: black;
}

.route-enter-active, .route-leave-active {
  transition: all 0.5s ease-in-out;
}

.route-enter-from, .route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.route-enter-to, .route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
