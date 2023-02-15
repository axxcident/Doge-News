<script setup>
</script>

<template>
  <div class="container nyhetsblock">
    <div class="row">
      <div class="bildtitel col">
        <h4 class="titel"> {{ nyheter.title }} </h4>
        <img v-if="nyheter.urlToImage" v-bind:src="nyheter.urlToImage" alt="url till bild">
        <img v-else src="../assets/breakingnews.jpg" alt="url till bild">
      </div>
      <div class="col innehall">
        <p v-if="nyheter.content"> {{ nyheter.content }} </p>
        <p v-else> {{ lorem }} </p>
        <button @click="newPage">Läs mer</button>
        <a v-bind:href="nyheter.url" target="_blank">Länk till artikel</a>
      </div>
    </div>
  </div>
</template>


<!-- HALLÅ RICHARD. Om du ser detta. Jag skulle haft en sida till med allt textinnehåll från själva nyhetsartiklarna
     som jag hade tänkt skrapa fram.. Men det är omöjligt att skrapa, ens komma åt dem pga CORS -->

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
    },
    index: {
      required: true,
      type: Number
    }
  },
  methods: {
    newPage() {
      // console.log(this.index)
      this.$router.push(`/nyhet/:${this.index}`)
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
  justify-content: center;
  text-align: left;
  font-size: 1.4em;
  flex-direction: column;
}

.nyhetsblock {
  margin: 7vh auto 7vh;
}


/* .container {
  margin-bottom: 40px;
} */
</style>
