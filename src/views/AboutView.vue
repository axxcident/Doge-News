<template>
  <main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>

    <form class="wrapper" @submit.prevent="submitForm">
      <label for="namnet">Namn:</label>
      <input :name="name" type="text" v-model="$store.state.name">
      <label for="emalj">Email:</label>
      <input :name="email" type="text" v-model="$store.state.email">
      <!-- routerlänk med knapp -->
      <button type="submit">Aktivera konto</button>
    </form>
    <p> med $store å allt: {{ this.$store.state.name }} och {{ this.$store.state.email }} </p>
    <br>
    <p> med textinterpolering från data(): {{ name }} & {{ email }} </p>

  </main>

</template>

<script>
export default {

  data() {
    return {
      testet: this.$store.state.testet
    }
  },

  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(varde) {
        this.updateName(varde);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(varde) {
        this.updateEmail(varde);
      }
    }
  },
  methods: {
    submitForm() {
      this.$store.commit('setUser', {
        name: this.name,
        email: this.email
      })
      this.$store.commit('updateTestet')
      this.$router.push('/')
    }
  }
}
</script>


<style>
main {
  height: 90vh;
}
</style>
