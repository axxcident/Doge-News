<script setup>
import FooterBar from '../components/FooterBar.vue'
</script>

<template>
  <!-- Todo list för eget Vue projekt -->
  <ul>
    <li>
      <input type="checkbox" value="check1" v-model="checkad">
      Webbanrop görs information från en eller flera webbtjänster visas i webbapplikationen (Undvik CORS-problem och
      använd helst HTTPS, för applikationen ska fungera bra som publicerad; Visa åtminstone tio värden; Använd inte
      Cities-tjänsten eller någon annan webbtjänst som har tagits upp som ett exempel)
      En egen json fil med information går också bra som jag har demonstrerat och den bör innehålla minst 10st objekt
      (10 olika id med information i varje)
    </li>
    <li>
      <input type="checkbox" value="check2" v-model="checkad">
      Textinterpolering ({{ "och" }}) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check3">
      Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check4">
      Villkorlig rendering (v-if) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check5">
      Listrendering (v-for) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check6">
      Händelser (v-on eller dess kortform) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check7">
      v-model (och värdet som matas in) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check8">
      En Single Page Application, bestående av minst två webbsidor, ska skapas med Vue Router (Använd både router-link
      och router-view)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check9">
      Minst en icke-Vue-Router-.vue-komponent ska skapas (App.vue räknas inte)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check10">
      Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check11">
      Källkoden för projektet publiceras på GitHub (eller liknande)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check12">
      Inlämningen ska ske på ithsdistans med en länk till ert projekt
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check13">
      Ska kunna laddas ned och kunna köras på vilken dator som helst med npm install
    </li>
    <li>
      <b>För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav uppfyllas:</b>
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check14">
      Använd någonting annat än fetch (till exempel Axios) för att göra webbanropen
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check15">
      Minst en beräknad egenskap (computed) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check16">
      Minst en bevakare (watch) används
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check17" @click="onClick()">
      Alla props ska vara typsäkra (Man bestämmer vilken typ det är, ”type: number” osv)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check18" @click="onClick()">
      Minst ett custom event används (skickas och tas emot)
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check19" @click="onClick()">
      Vuex körs i “strict mode”, och minst ett datavärde sparas i, uppdateras (via en mutation), och hämtas från, Vuex
      alternativt att man använder dess motsvarighet som finns i Vue s egna nedladdning ”pinia”
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check20" @click="onClick()">
      Använd minst ett Vue Router-adressparametervärde
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check21" @click="onClick()">
      Bootstrap ska användas i någon utsträckning
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check22" @click="onClick()">
      Det finns en ESLint-konfiguration för projektet, som alla filer följer
    </li>
    <li>
      <input type="checkbox" v-model="checkad" value="check23" @click="onClick()">
      Det finns en Prettier-konfiguration för projektet, som alla filer följer
    </li>
  </ul>

  <FooterBar class="bg-white" />

</template>

<script>
export default {
  data() {
    return {
      checkad: ["check1", "check2", "check3", "check4", "check5", "check6", "check7", "check8", "check9", "check10", "check11", "check12", "check13", "check14", "check15", "check17", "check20", "check21", "check22",],
    }
  }
}
</script>

<style scoped>
ul {
  max-width: 75vw;
  justify-content: center;
  margin: 15vh auto 4vh;
}

ul>* {
  margin: 10px;
}
</style>
