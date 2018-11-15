<template>
	<div>
		<br><br><br>

		<div>
			<h3>Search by URL</h3>
			<input id="url" type="text" v-model="url" placeholder="Image URL"><br>
			<button v-on:click="searchUrl">submit</button><br> {{animal}}
			<img v-bind:src="url">
		</div>
	</div>
</template>

<script>
const { getConceptsUrl, getLocation, getAnimal } = require('../services.js')
const { placesPromises } = require('../constants.js')

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
			getConceptsUrl(this.url)
				.then(concepts => getAnimal(concepts))
				.then(animal => {
					console.log(animal)
					this.animal = animal

					return getLocation(animal, [33.4511924, -111.9480369])
				})
				.then(location => {
					console.log(location)
					this.$router.push({
						name: 'Results',
						params: {
							animal: this.animal,
							location,
						},
					})
				})
		},
	},
}
</script>
