import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import jquery from 'jquery';
import modal from 'bootstrap/js/src/modal';

// styles
import './assets/scss/index.scss'

// font awesome
import {library as fontAwesomeLib} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {
    faHome,
    faBug
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faNpm,
    faTelegramPlane,
    faLinkedinIn,
    faSkype
} from '@fortawesome/free-brands-svg-icons'

fontAwesomeLib.add(
    faHome,
    faGithub,
    faBug,
    faNpm,
    faTelegramPlane,
    faLinkedinIn,
    faSkype
);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
    jquery,
    modal,
    store,
    render: h => h(App),
}).$mount('#app')
