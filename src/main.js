// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

//Firebase Authentication
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5FSaIifYg4dyaPUv5pyzu_YPLjwgc0S0",
  authDomain: "sunhackstest.firebaseapp.com",
  databaseURL: "https://sunhackstest.firebaseio.com",
  projectId: "sunhackstest",
  storageBucket: "sunhackstest.appspot.com",
  messagingSenderId: "441353782902"
};

firebase.initializeApp(config);

(function($) {
  var predictWithURL = function(url) {
    const Clarifai = require("clarifai");
    var concepts;
    const clarifaiObject = new Clarifai.App({
      apiKey: "806a013982f0402eb76adaa64b7a9acb"
    });
    clarifaiObject.models
      .predict(Clarifai.GENERAL_MODEL, this.url)
      .then(response => {
        var concepts = response["outputs"][0]["data"]["concepts"];
        console.log(concepts);
      });
  };
});
/*
clarifaiObject.models.predict(Clarifai.GENERAL_MODEL, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg")
 .then(response=>{
    var concepts = response['outputs'][0]['data']['concepts']
    console.log(concepts)
 })*/

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
