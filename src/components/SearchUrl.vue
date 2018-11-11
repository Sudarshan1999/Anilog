<template>
	<div>
		<br><br><br>

		<div>
			<h3>Search by URL</h3>
			<input id="url" type="text" v-model="url" placeholder="Image URL"><br>
			<button v-on:click="searchUrl">submit</button><br>
			{{animal}}
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
			animal: '',
		}
	},
	methods: {
		searchUrl() {
			const { getConceptsUrl } = require('../services/searchUrl.js')
			const { getAnimal } = require('../services/uploadImage.js')
			const { placesPromises } = require('../constants/places.js')

			getConceptsUrl(this.url)
				.then(concepts => getAnimal(concepts))
				.then(animal => {
					this.animal = animal

					return placesPromises.placeSearch({
						location: [33.4511924, -111.9480369],
						types: 'zoos containing ' + animal,
						input: 'zoos',
					})
				})
				.then(response => {
					console.log(response)

					const geometry = response['results'][1]['geometry']

					const location = {
						lat: location['location']['lat'],
						lng: location['location']['lng'],
					}

					console.log(location)

					this.$router.push({
						name: 'Results',
						params: {
							animal,
							location,
						},
					})
				})
		},
	},
}
</script>
