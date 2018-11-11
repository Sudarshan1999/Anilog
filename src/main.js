// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router.js";
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

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: {
		App
	},
	template: "<App/>"
});