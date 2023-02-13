<script setup>
import New from './New.vue'
import axios from 'axios'
</script>

<template>
  <div v-if="posts" v-for="post in posts" v-bind:key="post.index" class="container nyhetsblock">
    <div class="row">
      <div class="bildtitel col">
        <h4 class="titel"> {{ post.title }} </h4>
        <img src="../assets/breakingnews.jpg" alt="url till bild">
      </div>
      <div class="col innehall">
        <p v-if="post.content"> {{ post.content }} </p>
        <p v-else> {{ lorem }} </p>
        <!-- <a v-bind:href="nyheter.url">Länk till artikel</a> -->
      </div>
    </div>
  </div>
  <New v-for="nyhet in news" :key="nyhet.index" :nyheter="nyhet" />
</template>


<script>
export default {
  data() {
    return {
      nyckeln: this.$store.state.API_KEY,
      posts: this.$store.state.posts || [],
      news: [],
      lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id itaque tempora voluptatem quia reiciendis, delectus quam earum est nulla?"
    }
  },

  methods: {
    newsFetch() {
      const nyckeln = this.nyckeln
      // console.log(nyckeln)
      axios.get(`https://newsapi.org/v2/top-headlines?country=se&category=business&apiKey=${nyckeln}`)
        .then(res => this.news = res.data.articles)
    }
  },

  mounted() {
    this.newsFetch()
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
  justify-content: center;
  text-align: left;
  font-size: 1.4em;
  flex-direction: column;
}

.nyhetsblock {
  margin: 7vh auto 7vh;
}
</style>
