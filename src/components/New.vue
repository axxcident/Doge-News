<script setup>
</script>

<template>
  <div class="container nyhetsblock">
    <div class="row">
      <div class="bildtitel col">
        <h4 class="titel"> {{ nyheter.title }} </h4>
        <img v-bind:src="nyheter.urlToImage" alt="url till bild">
      </div>
      <p v-if="nyheter.content" class="innehall col"> {{ nyheter.content }} </p>
      <p v-else class="innehall col"> {{ lorem }} </p>
    </div>
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
      lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id itaque tempora voluptatem quia reiciendis, delectus quam earum est nulla?"
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

.titel {
  font-family: var(--dogelogo);
  margin: 35px auto;
  line-height: 1.4em;
}

.innehall {
  font-family: var(--teaxter);
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 1.4em;
}

.container {
  margin-bottom: 40px;
}
</style>
