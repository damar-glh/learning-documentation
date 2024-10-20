<script setup>
import {RouterLink} from "vue-router";
import product from "../data/Data.json";

</script>

<template>
  <div>
    <h1>Home</h1>
    <p>This is the home page.</p>
    <div class="product">
      <h2>Products</h2>
      <ul>
        <li v-for="item in product" :key="item.id">
          <RouterLink :to="'/products/' + item.id">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
