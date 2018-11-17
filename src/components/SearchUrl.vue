<template>
	<div class="container has-text-centered">
		<div class="column is-6 is-offset-3">
			<h1 class="title">
				Search a URL
			</h1>
			<div class="box">
				<div class="field is-grouped">
					<p class="control is-expanded">
						<input class="input" type="text" v-model="url" placeholder="Enter the Image URL">
					</p>
					<p class="control">
						<button class="button is-info" v-on:click="searchUrl">Search</button>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const { getConceptsUrl, getLocation, getAnimal } = require('../services.js')

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
