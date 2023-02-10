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
    <div class="cta-member">
      <RouterLink to="/member">Subscribe to Doge News</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.hundkojan {
  display: flex;
  justify-self: flex-start;
  align-items: center;
}

.hundkojan h2 {
  font-size: 2.8em;
  font-family: var(--dogelogo);
}

.navbar {
  width: 100vw;
  border-bottom: 2px solid rgb(72, 60, 60);
}

.navbar .lankar {
  display: flex;
  justify-self: center;
  align-items: center;
  font-size: 2em;
}

.navbar .lankar a {
  text-decoration: none;
  color: black;
  margin: auto 20px;
  font-family: var(--dogelogo);
}

.cta-member {
  padding: 10px;
  margin-right: 10px;
}

.cta-member a {
  font-size: 1.7em;
  text-decoration: none;
  color: black;
  margin: auto 20px;
  font-family: var(--dogelogo);
}
</style>
