<script setup>
import { useRoute } from "vue-router";
import product from "../data/Data.json";

const route = useRoute();

const products = product.find((productItem) => productItem.id === Number(route.params.id));
</script>

<template>
  <div>
    <h1>Product</h1>
    <p>This is the product page.</p>
    <div class="product">
      <h2>Product</h2>
      <h2>{{ products.name }}</h2>
      <img :src="products.image" :alt="products.name" />
      <p>{{ products.description }}</p>
      <p>Rp. {{ products.price }}</p>
    </div>
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