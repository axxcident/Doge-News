<script setup>
import New from './New.vue'
import axios from 'axios'
</script>

<template>
  <New class="news-wrapper" v-for="nyhet in news" :key="nyhet.index" :nyheter="nyhet" />
</template>


<script>
export default {
  data() {
    return {
      nyckeln: this.$store.state.API_KEY,
      news: []
    }
  },

  methods: {
    // async newsFetch() {                                            Vanlig fetch
    //   const response = await fetch('https://avancera.app/cities/')
    //   const result = await response.json()
    //   this.output = result[0].name
    // }
    newsFetch() {
      const nyckeln = this.nyckeln
      // console.log(nyckeln)

      axios.get(`https://newsapi.org/v2/top-headlines?country=se&category=business&apiKey=${nyckeln}`)
        .then(res => this.news = res.data.articles)

      // axios.get("https://avancera.app/cities/")
      //   .then(result => this.output = result.data[0].name)
    }

  },

  mounted() {
    this.newsFetch()
  }
}
</script>


<style scoped>
.news-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
