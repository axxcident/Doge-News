<script setup>
// import axios from 'axios'
// import { JSDOM } from 'jsdom'
// import { Readability } from '@mozilla/readability'
// we need axios to make HTTP requests
// const axios = require('axios');
// and we need jsdom and Readability to parse the article HTML
// const { JSDOM } = require('jsdom');
// const { Readability } = require('@mozilla/readability');


// --------------------------------- OBS DENNA SIDA/ROUTE FUNKAR EJ. CORS blockar allt ---------------------------------------
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Här ska data finnas</h3>
        <p>Som du kan se så är vi på nyhet {{ $route.params.page }}</p>
      </div>
      <div class="col">
        <p> Här ligger kontent: {{ kontent }} {{ $route.params.page }}</p>
      </div>
      <button class="getbackBTN" @click="getBack">Gå tillbaka till huvudsidan</button>
    </div>
  </div>

</template>

<script >
export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      kontent: 'CORS blockar allt. Denna sida är bara för att visa att jag uppfyllt kravet om "Vue Router-adressparametervärde"!',
      scrapsida: ""
    }
  },

  // mounted() {
  //   this.fetchArticle()
  // },

  methods: {
    getBack() {
      this.$router.push(`/`)
    }

    // fetchArticle() {
    //   const url = "https://newsapi.org/v2/top-headlines?country=se&category=business&apiKey=879394147b4940aa9d8fad9b70a548fb"
    // const scrapet = axios.get(url)
    //   .then(res => this.scrapsida = res.data.articles[0].url);
    // console.log(scrapet)
    // .then(res => console.log(res.data.articles[0].url));

    // axios.get(this.scrapsida)
    //   .then(({ data }) => console.log(data));
    // .then(res => this.kontent = res.data.articles[0].content);

    // axios.get(url).then(function (r1) {
    //   // At this point we will have some search results from the API. Take the first search result...
    //   let firstResult = r1.data.articles[0];
    //   //   // ...and download the HTML for it, again with axios
    //   axios.get(firstResult.url).then(function (r2) {
    //     this.kontent = r2.data
    //     // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    //     let dom = new JSDOM(r2.data, {
    //       url: firstResult.url
    //     });
    //     // now pass the DOM document into readability to parse
    //     let article = new Readability(dom.window.document).parse();
    //     // Done! The article content is in the textContent property
    //     console.log(article.textContent);
    //   })
    // })
    // }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20vh;
}

.col * {
  line-height: 2em;
}
</style>
