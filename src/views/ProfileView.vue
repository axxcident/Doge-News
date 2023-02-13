<script setup>
</script>

<template>
  <div class="profil">
    <div class="row">
      <div class="col">
        <h2>Välkommen till hundkojan</h2>
        <p>Skriv ditt eget inlägg:</p>
        <form @submit.prevent="publiceraNyhet">
          <label for="title">Titel:</label>
          <input type="text" v-model="posts.title">
          <label for="inlagg">Inlägg</label>
          <textarea v-model="posts.inlagg" cols="50" rows="10"></textarea>
          <div class="bredknapp">
            <button class="pangknappen" type="submit">Publicera</button>
          </div>
        </form>
      </div>
      <div class="col">
        <p> {{ this.$store.state.user.name }} </p>
        <p> {{ this.$store.state.user.email }} </p>
        <p> {{ this.$store.state.user.password }} </p>
        <img :src="user.profilbild" alt="profilbilden">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        name: this.$store.state.user.name,
        email: this.$store.state.user.email,
        password: this.$store.state.user.password,
        exist: this.$store.state.user.exist,
        profilbild: this.$store.state.user.profilbild
      },
      posts: {
        inlagg: "",
        title: ""
      }
    }
  },
  emits: ['publicera-nyhet'],
  methods: {
    publiceraNyhet() {
      this.$emit("publicera-nyhet", this.posts)
      console.log("skickar data: ", this.posts.title, " och ", this.posts.inlagg)
      this.$store.dispatch('createPost', this.posts);
    }
  }
}

// {
  // inlagg: this.inlagg,
  // title: this.title
  //  }

</script>

<style>
.profil {
  margin-top: 20vh;
  padding: 10px 20px;
}

.profil .row .col h2 {
  line-height: 2em;
}

.profil .row .col img {
  height: 600px;
  widows: 400px;
}
</style>
