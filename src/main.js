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
      user: {}
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  updateName(state, name) {
    state.name = name;
  },
  updateEmail(state, email) {
    state.email = email;
  },
})

app.use(store)

app.mount('#app')
