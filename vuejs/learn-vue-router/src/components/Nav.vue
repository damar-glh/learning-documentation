<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/about">About</RouterLink>
      |
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </div>
</template>