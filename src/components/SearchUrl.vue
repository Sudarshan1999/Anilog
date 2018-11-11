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
			const { getConcepts } = require('../services/searchUrl.js')

			var concepts,
				names = [],
				animal

			getConcepts(this.url).then(concepts => {
				if (concepts != null) {
					// old
					// for (var i = 0; i < concepts.length; i++) {
					// 	names.push(concepts[i]['name'])
					// }

					concepts.forEach(concept => names.push(concept['name']))

					const animalNames = require('../data/animalNames.json')

					for (var i = 0; i < names.length; i++) {
						if (animalNames.indexOf(names[i]) != -1) {
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
				}
			})
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
