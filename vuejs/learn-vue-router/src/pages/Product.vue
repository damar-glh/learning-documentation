<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import product from "../data/Data.json";

const route = useRoute();
const router = useRouter();
const productId = Number(route.params.id);

const products = product.find((productItem) => productItem.id === productId);

function showOwner() {
  router.push({ name: "Owner", params: { id: productId } });
}

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div>
    <h1>Product</h1>
    <p>This is the product page.</p>
    <div class="product" v-if="products">
      <h2>Product</h2>
      <h2>{{ products.name }}</h2>
      <img :src="products.image" :alt="products.name" />
      <p>{{ products.description }}</p>
      <p>Rp. {{ products.price }}</p>
      <button @click="showOwner">Show Owner</button>
      <button @click="goBack">Go Back</button>
      <RouterView />
    </div>
    <div v-else>
      <p>Product not found.</p>
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