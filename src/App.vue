<script>
export default {
  beforeCreate() {
    // make the store available as a property on this.$store
    this.$store = this.$options.store;
  },
  components: {
    NavigationBar,
    RouterView,
  },
};
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

<style>
main {
  height: auto;
}
</style>
