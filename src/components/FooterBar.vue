<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="footer">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/todo">Todo</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    width: 100vw;
    /* max-width: 50%;
    flex: 0 0 50%; */
    border-top: 2px solid rgb(72, 60, 60);
  }
  .footer img {
    margin-right: 30px;
  }
  .footer nav {
    display: flex;
    justify-content: space-between;
    width: 20vw;
    align-items: center;
    font-size: 2em;
  }

  #app > div > nav > a {
    text-decoration: none;
    color: black;
    margin: auto 20px;
  }
  /* #app > header > div > nav > a {

  } */

</style>
