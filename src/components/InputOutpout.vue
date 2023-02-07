<template>
    <form class="wrapper" @submit.prevent="submitForm">
      <label for="namnet">Namn:</label>
      <!-- $store.state.name -->
      <input :name="name" type="text" v-model="$store.state.name">
      <label for="emalj">Email:</label>
      <input :name="email" type="text" v-model="$store.state.email">
      <button type="submit">Aktivera konto</button>
  </form>
  <p> med $store å allt: {{ this.$store.state.name }} och {{ this.$store.state.email }} </p>
  <br>
  <p> med textinterpolering från data(): {{ name }} & {{ email }} </p>
  <br>
  <p v-if="testing"> Name:{{ name }} & Email:{{ email }} </p>
<!-- Tidigare text input kod. -->
  <!-- <div class="wrapper">
    <textarea :name="formular" id="formular" cols="30" rows="10" v-model="textinput" ></textarea>
    <p> {{ textinput }} </p>
  </div> -->
</template>

<script>


  export default {

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
        // uppdatera komponent.
        // this.$forceUpdate() denna gör ingenting
        // location.reload() denna rensar all data
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
