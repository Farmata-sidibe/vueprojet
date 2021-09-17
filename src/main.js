// l’objet [Vue] est fourni par le framework [vue.js] ;
import Vue from 'vue'
//l’objet[App] est fourni par le fichier [vuejs-01/App.vue] ;
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from "axios";
import Vueaxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.prototype.$apiurl = "https://api.hairs-style.fr/";

















// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vueaxios, axios);

//configuration de l’objet [Vue] ;
Vue.config.productionTip = false

//génèrent le code HTML de l’application. 
new Vue({
    router,
    //Ligne 10, c’est le fichier [App.vue] qui le génère ;
    render: h => h(App)
        ////chargent le code HTML généré dans la section [<div id=’app’></div>] du fichier [public/index.html] ;
}).$mount('#app')