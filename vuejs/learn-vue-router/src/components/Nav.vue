<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/" exact-active-class="my-active-class">Home</RouterLink>
      |
      <RouterLink to="/about" exact-active-class="my-active-class">About</RouterLink>
      |
      <RouterLink to="/contact" exact-active-class="my-active-class">Contact</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.my-active-class {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>