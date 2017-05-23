// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home';
import HomeFromVue from './components/HelloFromVux';
import Vuex from 'vuex';
import ProductPage from './components/ProductPage.vue';
import Discount from './components/Discount.vue';


Vue.use(Vuex)
Vue.use(VueRouter)


const routes = [{
    path: '/',
    component: Home
}, {
    path: '/test',
    component: HomeFromVue
}, {
    path: '/list/:id',
    component: ProductPage
}, {
    path: '/discount',
    component: Discount
}]

import vuexI18n from 'vuex-i18n'

require('es6-promise').polyfill()

/**
 * you can add your module here
 */
let store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
})

store.registerModule('vux', {
    state: {
        demoScrollTop: 0,
        isLoading: false,
        direction: 'forward'
    },
    mutations: {
        updateDemoPosition(state, payload) {
            state.demoScrollTop = payload.top
        },
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        },
        updateDirection(state, payload) {
            state.direction = payload.direction
        }
    },
    actions: {
        updateDemoPosition({ commit }, top) {
            commit({ type: 'updateDemoPosition', top: top })
        }
    }
})

Vue.use(vuexI18n.plugin, store)
import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin); //console.log(Vue.http)

import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin); //add loading plugin

const router = new VueRouter({
    routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')