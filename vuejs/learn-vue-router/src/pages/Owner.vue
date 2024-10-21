<script setup>
import { useRoute } from "vue-router";
import product from "../data/Data.json";

const route = useRoute();

const { owner } = product.find((productItem) => productItem.id === Number(route.params.id));
</script>

<template>
  <div v-if="owner">
    <div class="product">
      <h2>Owner</h2>
      <h2>{{ owner.name }}</h2>
      <p>{{ owner.email }}</p>
    </div>
  </div>
  <div v-else>
    <p>Owner not found.</p>
  </div>
</template>

<style scoped>
.product {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>