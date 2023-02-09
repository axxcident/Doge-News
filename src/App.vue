<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>

  <!-- Header & Navigation -->
  <header class="fixed-top bg-white">
    <NavigationBar />
  </header>

  <!-- main content per sida -->
  <RouterView />

  <!-- Footer Navigation -->
  <FooterBar class="fixed-bottom bg-white" />


</template>

<style>
main {
  height: 90vh;
}
</style>
