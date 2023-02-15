<script setup>
import FooterBar from '../components/FooterBar.vue'
import axios from 'axios'
</script>

<template>
  <main>
    <div class="selling-point">
      <h2>Be a good boi and become a member!</h2>
      <p>Get email notifications on when it's time to go for a walk, when the mailman is at the door or when it's time
        to get up!</p>
      <p>Just fill in your information and we'll hide it somewhere safe in the garden.</p>
    </div>
    <div class="row">
      <form class="CTAformen" @submit.prevent="submitForm">
        <!-- forminput -->
        <div class="col forminput">
          <div class="skriv">
            <label for="namnet">Namn:</label>
            <input type="text" v-model="$store.state.user.name">
          </div>
          <div class="skriv">
            <label for="emalj">Email:</label>
            <input type="text" v-model="$store.state.user.email">
          </div>
          <div class="skriv">
            <label for="password">Lösenord:</label>
            <input type="password" v-model="$store.state.user.password">
          </div>
        </div>
        <!-- forminput -->
        <div class="col forminput">
          <img v-bind:src="profilbilden" alt="profilbild" width="200" height="200">
          <!-- <img src="../assets/Dogeboi.png" alt="profilbild" width="200" height="200"> -->
          <button @click="nyBild" type="button">Generera ny Doge</button>
        </div>
        <div class="bredknapp">
          <button class="pangknappen" type="submit">Aktivera konto</button>
        </div>
      </form>
    </div>

    <br>
    <p> med $store å allt: {{ this.$store.state.user.name }} och {{ this.$store.state.user.email }} och {{
      this.$store.state.user.password
    }} </p>
    <p> med textinterpolering från computed:{} {{ name }} & {{ email }} och {{ password }} & bild från data() {{
      this.profilbilden
    }} </p>
    <FooterBar class="bg-white" />
  </main>

</template>

<script>
export default {
  data() {
    return {
      hundbilden: this.$store.state.user.profilbild,
      profilbilden: ""
    }
  },

  mounted() {
    this.nyBild()
  },

  // Computed properties that are declared object literals.
  // Each property has a get & set function.
  computed: {
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(varde) {
        this.$store.commit("updateName", varde)
      }
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(varde) {
        this.$store.commit("updatePassword", varde)
      }
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(varde) {
        this.$store.commit("updateEmail", varde)
      }
    },
    exist: {
      get() {
        return this.$store.state.user.exist;
      },
      set() {
        this.$store.commit("updateExistence")
      }
    },
    profilbilden: {
      get() {
        return this.profilbilden;
      },
      set() {
        this.$store.commit("updateBild", profilbilden)
      }
    }
  },

  methods: {
    submitForm() {
      this.$store.commit('setUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        // exist: !this.exist
        exist: true
      })
      localStorage.setItem("profilnamn", this.name)
      localStorage.setItem("profilemalj", this.email)
      localStorage.setItem("password", this.password)
      localStorage.setItem("profil", true)
      localStorage.setItem("profilbild", this.profilbilden)
      // this.$store.commit('updateTestet')
      this.$router.push('/')
    },
    // Hämta Hundbild-funktionen
    nyBild() {
      axios.get("https://random.dog/woof.json")
        .then(res => {
          if (res.data.url.includes("gif") || res.data.url.includes("mp4") || res.data.url.includes("webm")) {
            nyBild()
          }
          else {
            this.profilbilden = res.data.url
          }
        })
    }
  }
}
</script>


<style scoped>
.selling-point {
  margin: 20vh auto 5vh;
  text-align: center;
}

.selling-point p,
h2 {
  padding: 7px;
}

.CTAformen {
  margin: auto;
  display: flex;
  flex: 0 0 55vw;
  max-width: 55vw;
  flex-wrap: wrap;
}

.CTAformen .forminput {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

.CTAformen .forminput .skriv {
  display: flex;
  flex-direction: row;
  padding: 5px;
  max-width: 20vw;
}

.CTAformen .forminput .skriv input {
  min-width: 5vw;
}

.CTAformen .forminput .skriv label {
  min-width: 5vw;
  padding-right: 3vw;
}

.CTAformen .forminput button {
  margin-top: 12px;
  padding: 5px;
}

.bredknapp {
  width: 100%;
}

.pangknappen {
  width: 140px;
  padding: 10px;
}

/* .foten {
  position: fixed;
  bottom: 0;
} */
</style>
