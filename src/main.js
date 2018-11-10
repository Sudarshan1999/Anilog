// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const Clarifai = require('clarifai');

Vue.config.productionTip = false

const clarifaiObject = new Clarifai.App({
  apiKey: '806a013982f0402eb76adaa64b7a9acb'
 });

 console.log(clarifaiObject);
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
