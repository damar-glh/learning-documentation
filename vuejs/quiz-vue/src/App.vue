<template>
  <main>
    <header>
      <h1 id="title">Quiz Vue</h1>
      <input type="text" name="" id="search-input">
    </header>
  </main>
</template>
<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin: 30px 0 10px 0;
  display: flex;
  align-items: center;
}

#title {
  margin-right: 20px;
  font-weight: bold;
}

#search-input {
  border: none;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 5px;
}
</style>