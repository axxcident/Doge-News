<script setup>
import News from '../components/News.vue';
import FooterBar from '../components/FooterBar.vue'
</script>

<template>
  <main>
    <p v-if="this.$store.state.user.exist">Välkommen {{ this.$store.state.user.name }}!</p>
    <h1 class="rubrik">Senaste Nytt</h1>
    <News />
    <FooterBar class="bg-white" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      nyckeln: this.$store.state.API_KEY,
      output: null
    }
  },
}

</script>

<style scoped>
main {
  margin-top: 20vh;
}

main p {
  margin-left: 51px;
  font-family: var(--dogelogo);
  font-size: 1.7em;
}

main .rubrik {
  text-align: center;
  margin-bottom: 3vh;
  line-height: 1.3em;
  font-family: var(--headline);
}
</style>
