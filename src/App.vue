<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>

<!-- Header & Navigation -->
<header>
  <NavigationBar />
</header>

<!-- main content per sida -->
<RouterView />

<!-- Footer Navigation -->
<FooterBar />

</template>

<style>
  main {
    height: 90vh;
  }
</style>
