<template>
	<div class="container has-text-centered">
		<div class="column is-6 is-offset-3">
			<h1 class="title">
				Upload an Image
			</h1>
			<div class="box">
				<div class="file has-name is-fullwidth">
					<label class="file-label">
						<input class="file-input" type="file" name="resume" @change="onFileChanged">
						<span class="file-cta">
							<span class="file-icon">
								<i class="fas fa-upload"></i>
							</span>
							<span class="file-label">
								Choose a file
							</span>
						</span>
						<span class="file-name">
							{{fileName}}
						</span>
					</label>
				</div>
			</div>
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

export default {
	name: 'UploadImage',
	data() {
		return {
			fileName: '',
			animal: '',
		}
	},
	methods: {
		onFileChanged(event) {
			const file = event.target.files[0]

			this.fileName = file.name

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
