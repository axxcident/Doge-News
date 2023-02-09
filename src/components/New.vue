<script setup>
</script>

<template>
  <div class="behallare">
    <div class="bildtitel">
      <h4 class="titel"> {{ nyheter.title }} </h4>
      <img v-bind:src="nyheter.urlToImage" alt="url till bild">
    </div>
    <p class="innehall"> {{ nyheter.content }} </p>
  </div>
</template>


<!-- <h4 class="titel"> (första) titeln ligger på res.data.articles[0].title </h4> -->
<!-- url till bild res.data.articles[0].urlToImage -->
<!-- <p class="innehall"> (första) innehållet ligger på res.data.articles[0].content </p> -->
<!-- <a href="">länk till artikel res.data.articles[0].url</a> -->

<!-- Hela artikeln content:
  https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article -->

<script>
export default {
  data() {
    return {
      nyckeln: this.$store.state.API_KEY,
    }
  },
  props: {
    nyheter: {
      required: true,
      type: Object
    }
  }
}
</script>


<style scoped>
.bildtitel img {
  width: 400px;
  height: 300px;
}
</style>
