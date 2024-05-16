import './assets/main.css'

import { createApp } from 'vue'
import { createPinia, PiniaVuePlugin, defineStore } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  pinia,
})

export const useUserStore = defineStore('user',{
})
