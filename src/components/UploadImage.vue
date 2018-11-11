<template>
	<div>
		<div class="Navbar">
			<a href="http://localhost:8080/#/">Home</a>
			<a href="http://localhost:8080/#/searchUrl">Search by URL</a>
			<a href="http://localhost:8080/#/uploadImage">Upload an Image</a>
		</div>

		<br><br><br>

		<div>
			<h3>Upload an Image</h3>

			<input type="file" @change="onFileChanged">
			<button @click="onUpload">Upload!</button>

			<!-- <input id="url" type="text" v-model="url" placeholder="Image URL"><br>
			<button v-on:click="searchUrl">submit</button><br>
			<img v-bind:src="url"> -->

		</div>
	</div>
</template>

<script>
export default {
	name: 'UploadImage',
	// data() {
	// 	return {
	// 		file: null,
	// 	}
	// },
	methods: {
		onFileChanged(event) {
			const file = event.target.files[0]

			const { clarifaiObject } = require('../constants/clarifai.js')
			const { encodeAsURL } = require('../services/uploadImage.js')

			encodeAsURL(file).then(base64 => {
				console.log(base64)
				clarifaiObject.models
					.predict(Clarifai.GENERAL_MODEL, {
						base64: base64,
					})
					.then(response => {
						// do something with response
						console.log(response['outputs'][0]['data']['concepts'])
					})
			})
		},
		onUpload() {},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/style/uploadImage.css';
/* Add a black background color to the top navigation */
.Navbar {
	background-color: #333;
	overflow: hidden;
	position: fixed; /* Set the navbar to fixed position */
	top: 0; /* Position the navbar at the top of the page */
	width: 98.5%; /* Full width */
}

/* Style the links inside the navigation bar */
.Navbar a {
	float: left;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
}

/* Change the color of links on hover */
.Navbar a:hover {
	background-color: #ddd;
	color: black;
}

/* Add a color to the active/current link */
.Navbar a.active {
	background-color: red;
	color: white;
}
</style>