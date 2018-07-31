//// The Vue build version to load with the `import` command
//// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
//import App from './App'
//import Mobile from './Mobile'
//
////Vue.config.productionTip = false
//var width = document.documentElement.clientWidth
////var app='<App/>'
//var mobile='<Mobile/>'
///* eslint-disable no-new */
//new Vue({
//el: '#app',
////render: h => h(width > 500 ? App : Mobile)
//components: { Mobile },
//template: mobile
//})

import Vue from 'vue'
import App from './App'
import Mobile from './Mobile'

var width = document.documentElement.clientWidth
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(width > 500 ? App : Mobile)
})