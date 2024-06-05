import './assets/main.css'

import { createApp } from 'vue'
import { createPinia, PiniaVuePlugin, defineStore } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinata = createPinia

app.use(createPinia())
app.use(router)

app.mount('#app')

export const useUserStore = defineStore('user',{
})

import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql