import './assets/main.css'

import { createApp } from 'vue'
import Notification from 'notiwind'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)
app.use(router)
app.use(Notification)
app.use(MotionPlugin)

app.mount('#app')
