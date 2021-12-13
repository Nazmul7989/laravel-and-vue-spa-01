import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from "./router/routes";
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'



require('./bootstrap');

var toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    closeButton: true,
    timeOut: 5000,
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
}
Vue.use(CxltToastr, toastrConfigs)

Vue.use(VueRouter)
Vue.use(CxltToastr)

Vue.component('app-header', require('./components/partial/header').default);

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
