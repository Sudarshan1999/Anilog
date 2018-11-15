<template>
	<div>
		<br><br><br>

		<div>
			<h3>Upload an Image</h3>

			<input type="file" @change="onFileChanged">
			<!-- <button @click="onUpload">Upload!</button> -->
			<br> {{animal}}
		</div>
	</div>
</template>

<script>
const {
	encodeAsURL,
	getConceptsB64,
	getAnimal,
	getLocation,
} = require('../services.js')
const { placesPromises } = require('../constants.js')

export default {
	name: 'UploadImage',
	data() {
		return {
			animal: '',
		}
	},
	methods: {
		onFileChanged(event) {
			const file = event.target.files[0]

			encodeAsURL(file)
				.then(base64 => getConceptsB64(base64))
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
		// onUpload() {},
	},
}
</script>
