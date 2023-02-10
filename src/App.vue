<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
// import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <main>
    <!-- Header & Navigation -->
    <header class="fixed-top bg-white">
      <NavigationBar />
    </header>

    <!-- main content per sida -->
    <RouterView />

    <!-- Footer Navigation bs fixed-bottom -->
    <!-- <FooterBar class="bg-white" /> -->
  </main>
</template>

<style>
main {
  height: auto;
}
</style>
