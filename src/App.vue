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

    <!-- Footer Navigation bg-fixed-bottom -->
  </main>
</template>

<!-- <script>
export default {
  methods: {
    onCheckmarkIncremented(kravnummer) {
      console.log(`Värdet har ökat till ${kravnummer}!`)
    }
  }
}
</script> -->

<style>
main {
  height: auto;
}
</style>
