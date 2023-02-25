import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'
// import './registerServiceWorker'

const app = createApp(App)
app.use(router)
app.component(VueFeather.name, VueFeather)
app.mount('#app')


import { en2fa } from './utils.js'

var myMixIn = {
    methods: {
        en2fa: en2fa
    }
}
app.mixin(myMixIn);