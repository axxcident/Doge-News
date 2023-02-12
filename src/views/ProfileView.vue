<script setup>
</script>

<template>
  <div class="profil">
    <div class="row">
      <div class="col">
        <h2>Välkommen till hundkojan</h2>
        <p>Skriv ditt eget inlägg:</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
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
      }
      // user: {
      //   name: localStorage.getItem("profilnamn"),
      //   email: localStorage.getItem("profilemalj"),
      //   password: localStorage.getItem("password"),
      //   exist: this.$store.state.user.exist,
      //   profilbild: localStorage.getItem("profilbild") || ""
      // }
    }
  }
}
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
