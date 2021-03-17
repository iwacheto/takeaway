import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavbarPlugin, BInputGroup, InputGroupPlugin } from 'bootstrap-vue'


// Bootstrap
Vue.use(NavbarPlugin, BInputGroup, InputGroupPlugin)

// Vuex Store
import store from './store/store';


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
