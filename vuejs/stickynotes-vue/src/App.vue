<script setup>
import { ref } from 'vue';

const showForm = ref(false);
const NewMemo = ref(" ");
const memos = ref([]);

const addMemo = () => {
  memos.value.push({
    id: Date.now(),
    memo: NewMemo.value,
    date: new Date().toLocaleDateString(),
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  })
  NewMemo.value = " ";
  showForm.value = false;
};
</script>

<template>
  <main>
    {{ memos }}
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="header-button">add +</button>
      </header>
      <div class="card-container">
        <div class="card">
          <p class="card-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p class="card-date">
            12/12/2024
          </p>
        </div>
      </div>
    </div>
    <div v-show="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-close-btn">&times;</button>
        <textarea v-model="NewMemo" name="memo" id="memo" cols="30" rows="10"></textarea>
        <button @click="addMemo" class="form-submit-btn">Add</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vh;
}

.container {
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #495a7d;
}

.header-button {
  border: none;
  padding: 10px;
  width: 100px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #495a7d;
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 225px;
  height: 225px;
  padding: 10px;
  background-color: #ffa6c1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  width: 420px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
}

textarea {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #495a7d;
}

.form-close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  color: #495a7d;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
}

.form-submit-btn {
  border: none;
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  background-color: #495a7d;
  color: white;
  font-size: 20px;
  margin-top: 15px;
}
</style>
