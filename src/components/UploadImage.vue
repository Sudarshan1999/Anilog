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
			} = require('../services/uploadImage.js')

			encodeAsURL(file).then(base64 => {
				console.log(base64)
				getConceptsB64(base64).then(concepts => {
					console.log(concepts)
					if (concepts != null) {
						//

						var concepts,
							names = [],
							animal

						concepts.forEach(concept => names.push(concept['name']))

						const animalNames = require('../data/animalNames.json')

						for (var i = 0; i < names.length; i++) {
							if (animalNames.indexOf(names[i]) != -1) {
								this.animal = names[i]
								break
							}
						}
						console.log(animal)
					}
				})
			})
		},
		// onUpload() {},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
