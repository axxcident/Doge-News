<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer">
    <nav>
      <!-- <img alt="Doge News" class="logo" src="../assets/Dogeboi.png" width="100" height="100" /> -->
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: block;
  padding: 15px;
  bottom: 0;
  border-top: 2px solid rgb(72, 60, 60);
}

.footer nav {
  display: flex;
  flex-direction: column;
}

.footer nav a {
  font-size: 1.5em;
  line-height: 2em;
  font-family: var(--dogelogo);
  text-decoration: none;
  color: black;
  margin: auto 20px;
  width: fit-content;
}
</style>
