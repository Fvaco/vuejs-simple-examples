import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './App.vue'
import {routes} from "./routes";
import store from './store/store';

axios.defaults.baseURL = "[Configure here your server's base path]";

Vue.use(VueRouter);

Vue.filter("currency", value =>{
    return '$' + value.toLocaleString()
});

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
