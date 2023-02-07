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
      user: {}
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  }
})

app.use(store)

app.mount('#app')
