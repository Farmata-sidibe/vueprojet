import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from "axios";
import Vueaxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vueaxios, axios);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')