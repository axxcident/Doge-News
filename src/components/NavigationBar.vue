<script setup>

</script>

<template>
    <div class="wrapper">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
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
  .wrapper img {
    margin-right: 30px;
  }
  .wrapper nav {
    display: flex;
    justify-content: space-between;
    width: 20vw;
    align-items: center;
    font-size: 2em;
  }

  #app > header > div > nav > a {
    text-decoration: none;
    color: black;
  }

</style>
