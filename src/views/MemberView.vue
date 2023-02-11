<script setup>
import FooterBar from '../components/FooterBar.vue'
</script>

<template>
  <main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>

    <form class="wrapper" @submit.prevent="submitForm">
      <label for="namnet">Namn:</label>
      <input :name="name" type="text" v-model="$store.state.user.name">
      <label for="emalj">Email:</label>
      <input :name="email" type="text" v-model="$store.state.user.email">
      <!-- routerlänk med knapp -->
      <button type="submit">Aktivera konto</button>
    </form>
    <p> med $store å allt: {{ this.$store.state.user.name }} och {{ this.$store.state.user.email }} </p>
    <br>
    <p> med textinterpolering från data(): {{ name }} & {{ email }} </p>
    <FooterBar class="bg-white foten" />
  </main>

</template>

<script>
export default {
  // data() {
  //   return {
  //     testet: this.$store.state.testet,
  //   }
  // },

  // Computed properties that are declared object literals.
  // Each property has a get & set function.
  computed: {
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(varde) {
        // this.updateName(varde);
        this.$store.commit("updateName", varde)
      }
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(varde) {
        // this.updateEmail(varde);
        this.$store.commit("updateEmail", varde)
      }
    },
    exist: {
      get() {
        return this.$store.state.user.exist;
      },
      set() {
        // this.updateExistence()
        this.$store.commit("updateExistence")
      }
    }
  },

  methods: {
    submitForm() {
      this.$store.commit('setUser', {
        name: this.name,
        email: this.email,
        // exist: !this.exist
        exist: true
      })
      localStorage.setItem("profilnamn", this.name)
      localStorage.setItem("profilemalj", this.email)
      localStorage.setItem("profil", true)
      // this.$store.commit('updateTestet')
      this.$router.push('/')
    }
  }
}
</script>


<style>
.foten {
  position: fixed;
  bottom: 0;
}

/* main {
  height: 90vh;
} */
</style>
