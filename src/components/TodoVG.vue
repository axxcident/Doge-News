<template>
  <ul>
    <li>Webbanrop görs information från en eller flera webbtjänster visas i webbapplikationen (Undvik CORS-problem och använd helst HTTPS, för applikationen ska fungera bra som publicerad; Visa åtminstone tio värden; Använd inte Cities-tjänsten eller någon annan webbtjänst som har tagits upp som ett exempel)
En egen json fil med information går också bra som jag har demonstrerat och den bör innehålla minst 10st objekt (10 olika id med information i varje)
    </li>
    <li>
      Textinterpolering ({{ och }}) används
    </li>
    <li>
      Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)
    </li>
    <li>
      Villkorlig rendering (v-if) används
    </li>
    <li>
      Listrendering (v-for) används
    </li>
    <li>
      Händelser (v-on eller dess kortform) används
    </li>
    <li>
      v-model (och värdet som matas in) används
    </li>
    <li>
      En Single Page Application, bestående av minst två webbsidor, ska skapas med Vue Router (Använd både router-link och router-view)
    </li>
    <li>
      Minst en icke-Vue-Router-.vue-komponent ska skapas (App.vue räknas inte)
    </li>
    <li>
      Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)
    </li>
    <li>
      Källkoden för projektet publiceras på GitHub (eller liknande)
    </li>
    <li>
      Inlämningen ska ske på ithsdistans med en länk till ert projekt
    </li>
    <li>
      Ska kunna laddas ned och kunna köras på vilken dator som helst med npm install
    </li>
    <li>
      <b>För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav uppfyllas:</b>
    </li>
    <li>
      Använd någonting annat än fetch (till exempel Axios) för att göra webbanropen
    </li>
    <li>
      Minst en beräknad egenskap (computed) används
    </li>
    <li>
      Minst en bevakare (watch) används
    </li>
    <li>
      Alla props ska vara typsäkra (Man bestämmer vilken typ det är, ”type: number” osv)
    </li>
    <li>
      Minst ett custom event används (skickas och tas emot)
    </li>
    <li>
      Vuex körs i “strict mode”, och minst ett datavärde sparas i, uppdateras (via en mutation), och hämtas från, Vuex alternativt att man använder dess motsvarighet som finns i Vue s egna nedladdning ”pinia”
    </li>
    <li>
      Använd minst ett Vue Router-adressparametervärde
    </li>
    <li>
      Bootstrap ska användas i någon utsträckning
    </li>
    <li>
      Det finns en ESLint-konfiguration för projektet, som alla filer följer
    </li>
    <li>
      Det finns en Prettier-konfiguration för projektet, som alla filer följer
    </li>
  </ul>
</template>

<script></script>

<style>
  ul li {
    margin: 10px;
  }
</style>
