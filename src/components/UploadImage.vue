<template>
	<div>
		<br><br><br>

		<div>
			<h3>Upload an Image</h3>

			<input type="file" @change="onFileChanged">
			<!-- <button @click="onUpload">Upload!</button> -->
			<br>
			{{animal}}
		</div>
	</div>
</template>

<script>
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

			const {
				encodeAsURL,
				getConceptsB64,
				getAnimal,
			} = require('../services/uploadImage.js')

			// 33.4511924, -111.9480369

			encodeAsURL(file)
				.then(base64 => getConceptsB64(base64))
				.then(concepts => getAnimal(concepts))
				.then(animal => {
					this.animal = animal

					this.$router.push({
						name: 'Results',
						params: {
							animal,
						},
					})
				})
		},
		// onUpload() {},
	},
}
</script>
