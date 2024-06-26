import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'
import store from './store/index'


createApp(App).use(store).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
