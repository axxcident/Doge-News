<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <div class="hundkojan">
      <img alt="Doge News" class="logo" src="../assets/Dogeboi.png" width="100" height="100" />
      <h2>Doge News</h2>
    </div>
    <nav class="lankar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.hundkojan {
  display: flex;
  justify-self: flex-start;
  align-items: center;
}

.hundkojan h2 {
  /* line-height: 1.4em; */
  font-size: 2.8em;
  font-family: var(--dogelogo);
}

.navbar {
  /* display: flex;
  justify-content: center; */
  width: 100vw;
  /*   // max-width: 50%;
  // flex: 0 0 50%; */
  border-bottom: 2px solid rgb(72, 60, 60);
}

/* .lada .lankar { */
.navbar .lankar {
  display: flex;
  justify-self: center;
  /* justify-content: space-between; */
  /* width: 30vw; */
  align-items: center;
  font-size: 2em;
  margin-right: 39vw;
}

.navbar .lankar a {
  text-decoration: none;
  color: black;
  margin: auto 20px;
  font-family: var(--dogelogo);
}
</style>
