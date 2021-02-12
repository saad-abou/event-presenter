import Vue from 'vue'
import App from './App.vue'
import Inscription from './Inscription.vue'
import Home from './Home.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes =[
  {path: '/home', component: Home },
  {path: '*', redirect: '/'  },
  {path: '/', component: Inscription}
];

const router = new VueRouter({
   routes,
   mode: 'history'
})



new Vue({
  vuetify,
  router,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')
