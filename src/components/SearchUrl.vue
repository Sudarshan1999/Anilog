<template>
	<div>
		<br><br><br>

		<div>
			<h3>Search by URL</h3>
			<input id="url" type="text" v-model="url" placeholder="Image URL"><br>
			<button v-on:click="searchUrl">submit</button><br>
			<img v-bind:src="url">
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchUrl',
	data() {
		return {
			url: '',
		}
	},
	methods: {
		searchUrl() {
			const Clarifai = require('clarifai')
			const clarifaiObject = new Clarifai.App({
				apiKey: '806a013982f0402eb76adaa64b7a9acb',
			})
			var concepts,
				names = [],
				animal
			var promise = new Promise((resolve, reject) => {
				clarifaiObject.models
					.predict(Clarifai.GENERAL_MODEL, this.url)
					.then(response => {
						resolve(response['outputs'][0]['data']['concepts'])
					})
			})

			promise.then(concepts => {
				if (concepts != null) {
					for (var i = 0; i < concepts.length; i++) {
						names.push(concepts[i]['name'])
					}
					const AnimalNames = require('../Data/AnimalNames.json')

					for (var i = 0; i < names.length; i++) {
						if (AnimalNames.indexOf(names[i]) != -1) {
							animal = names[i]
							break
						}
					}
					console.log(animal)
					var GooglePlacesPromises = require('googleplaces-promises')
					var placesPromises = new GooglePlacesPromises(
						'AIzaSyBiXTklAzda7cc6iT5SjuvT7K-w8ZsX-wI'
					)
					var searchParams = {
							location: [33.4512, -111.948],
							types: 'zoos containing ' + animal,
							input: 'zoos',
						},
						placeSearch = placesPromises.placeSearch(searchParams)
					console.log(searchParams)
					placeSearch
						.then(function(response) {
							console.log(response)
							console.log(response['results'][0])
						})
						.fail(function(error) {
							console.log(error)
						})
					// const rp = require('request-promise')
					// var options = {
					// uri: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
					// qs: {
					//     key: 'location=33.4242,-111.9281&radius=500&type=zoos%containgin%'+animal+'&key=AIzaSyBiXTklAzda7cc6iT5SjuvT7K-w8ZsX-wI'
					//     // -> uri + '?access_token=xxxxx%20xxxxx'
					// },
					// headers: {
					//     'User-Agent': 'Request-Promise'
					// },
					// json: true // Automatically parses the JSON string in the response
					// };

					// rp(options)
					//     .then(function (response) {
					//         console.log(response);
					//     })
					//     .catch(function (err) {
					//         // API call failed...
					//     });
				}
			})
		},
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
