import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import SearchUrl from "@/components/SearchUrl";
import UploadImage from "@/components/UploadImage";

Vue.use(Router);

export default new Router({
	routes: [{
		path: "/",
		name: "Home",
		component: Home
	}, {
		path: "/searchUrl",
		name: "SearchUrl",
		component: SearchUrl
	}, {
		path: "/uploadImage",
		name: "UploadImage",
		component: UploadImage
	}]
});