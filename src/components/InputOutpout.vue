<template>
    <form class="wrapper" @submit.prevent="submitForm">
      <label for="namnet">Namn:</label>
      <input name="namnet" type="text" v-model="$store.state.name">
      <label for="emalj">Email:</label>
      <input name="emalj" type="text" v-model="$store.state.email">
      <button type="submit">Aktivera konto</button>
  </form>
  <p> {{ this.$store.state.name }} och {{ this.$store.state.email }} </p>
<!-- Tidigare text input kod. -->
  <!-- <div class="wrapper">
    <textarea :name="formular" id="formular" cols="30" rows="10" v-model="textinput" ></textarea>
    <p> {{ textinput }} </p>
  </div> -->
</template>

<script>


  export default {
    // data() {
    //   return {
    //     name: this.$store.state.name,
    //     email: this.$store.state.email
    //   }
    // },
    methods: {
      submitForm() {
        this.$store.commit('setUser', {
          name: this.name,
          email: this.email
        })
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    margin: 30px;
    padding: 20px;
  }
  .wrapper > * {
    margin: auto 5px;
  }
</style>
