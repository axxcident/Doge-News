<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <img alt="Doge News" class="logo" src="../assets/Dogeboi.png" width="125" height="125" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  /* max-width: 50%;
    flex: 0 0 50%; */
  border-bottom: 2px solid rgb(72, 60, 60);
}

.wrapper nav {
  display: flex;
  justify-content: space-between;
  /* width: 30vw; */
  align-items: center;
  font-size: 2em;
}

#app>header>div>nav a {
  text-decoration: none;
  color: black;
  margin: auto 20px;
}
</style>
