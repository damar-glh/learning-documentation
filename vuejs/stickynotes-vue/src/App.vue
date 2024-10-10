<script setup>
import {ref} from 'vue';

const showForm = ref(false);
const NewMemo = ref("");
const memos = ref([]);
const errorMessages = ref("");
const editMemoId = ref(null)

const addMemo = () => {
  if (!NewMemo.value) {
    errorMessages.value = "Please enter a memo"
    return;
  }
  if (editMemoId.value !== null) {
    const memo = memos.value.find((memo) => memo.id === editMemoId.value);
    memo.memo = NewMemo.value;
    memo.date =new Date().toLocaleDateString();
    memo.time = new Date().toLocaleTimeString();
  } else {
    memos.value.push({
      id: Date.now(),
      memo: NewMemo.value,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    })
  }
  editMemoId.value = null;
  NewMemo.value = "";
  showForm.value = false;
};

const deleteMemo = (id) => {
  memos.value = memos.value.filter((memo) => memo.id !== id)
}

const editMemo = (id) => {
  const memo = memos.value.find((memo) => memo.id === id);
  NewMemo.value = memo.memo;
  showForm.value = true;
  editMemoId.value = id;
}
</script>

<template>
  <main>
    <div class="container">
      {{ memos }}
      {{ editMemoId }}
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="header-button">add +</button>
      </header>
      <div class="card-container">
        <div v-for="memo in memos" class="card" :key="memo.id" :style="{backgroundColor: memo.backgroundColor}">
          <div class="card-dt">
            <p class="card-content">
              {{ memo.memo }}
            </p>
            <div class="card-button">
              <button @click="editMemo(memo.id)">✏️</button>
              <button @click="deleteMemo(memo.id)">❌</button>
            </div>
          </div>
          <div class="card-dt">
            <p>
              {{ memo.date }}
            </p>
            <p>
              {{ memo.time }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-close-btn">&times;</button>
        <p v-if="errorMessages" class="form-error">{{ errorMessages }}</p>
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
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-dt {
  display: flex;
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

.form-error {
  color: red;
}

.card-button {
  text-align: center;
  height: 25px;
  width: 25px;
}
</style>
