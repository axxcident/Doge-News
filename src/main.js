import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)

const store = createStore({
  state() {
    return {
      user: {
        name: localStorage.getItem("profilnamn") || "",
        email: localStorage.getItem("profilemalj") || "",
        password: localStorage.getItem("password") || "",
        exist: localStorage.getItem("profil") || false,
        profilbild: localStorage.getItem("profilbild") || ""
      },
      API_KEY: "879394147b4940aa9d8fad9b70a548fb",
      posts: [],
      searchCategory: "business"
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addPosts(state, post) {
      state.posts.push(
        {
          title: post.title,
          inlagg: post.inlagg
        }
      );
    }
  },
  actions: {
    createPost({ commit }, post) {
      commit('addPosts', post)
    },
  },
  updateExistence(state) {
    // state.user.exist = !state.user.exist;
    state.user.exist = true;
    // localStorage.setItem("profil", true)
  },
  updateName(state, name) {
    state.user.name = name;
    // localStorage.setItem("profilnamn", name)
  },
  updateName(state, password) {
    state.user.password = password;
    // localStorage.setItem("profilnamn", name)
  },
  updateEmail(state, email) {
    state.user.email = email;
    // localStorage.setItem("profilemalj", user)
  },
  updateBild(state, bild) {
    state.user.profilbild = bild;
    // localStorage.setItem("profilemalj", user)
  }
})

app.use(store)
app.use(bootstrap)
app.mount('#app')
