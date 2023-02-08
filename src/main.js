import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

import './assets/main.css'

const app = createApp(App)

app.use(router)

const store = createStore({
  state() {
    return {
      name: "",
      email: "",
      user: {},
      // testa ha boolean som ändras när det finns en user.
      testet: false,
      API_KEY: "879394147b4940aa9d8fad9b70a548fb"
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    updateTestet() {
      this.state.testet = !this.state.testet
    }
  },
  updateName(state, name) {
    state.name = name;
  },
  updateEmail(state, email) {
    state.email = email;
  }
})

app.use(store)

app.mount('#app')
