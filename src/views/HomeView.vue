<script setup>
import InputOutpout from '../components/InputOutpout.vue';
// import axios from 'axios'
import News from '../components/News.vue';
</script>

<template>
  <main>
    <h1>Huvudsida</h1>
    <h3>Bli medlem:</h3>
    <InputOutpout />

    <h2>Nyheter</h2>
    <!-- <p>info: {{ output }} </p> -->
    <News />

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

  /*   methods: {
      // async newsFetch() {                                            Vanlig fetch
      //   const response = await fetch('https://avancera.app/cities/')
      //   const result = await response.json()
      //   this.output = result[0].name
      // }
      newsFetch() {
        const nyckeln = this.nyckeln
        console.log(nyckeln)
        // .then(res => this.output = res.data.articles[0].title)
  
        axios.get(`https://newsapi.org/v2/top-headlines?country=se&category=general&apiKey=${nyckeln}`)
          .then(res => console.log(res.data.articles))
  
        // axios.get("https://avancera.app/cities/")
        //   .then(result => this.output = result.data[0].name)
      }
  
    },
  
    mounted() {
      this.newsFetch()
    } */
}

</script>

<style scoped>
button {
  padding: 8px;
}
</style>
