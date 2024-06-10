import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {

  })

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();
app.use(router)
app.use(pinia);
app.mount('#app');
