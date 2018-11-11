<template>
	<div>
		<br><br><br>

		<div>
			<h3>Upload an Image</h3>

			<input type="file" @change="onFileChanged">
			<!-- <button @click="onUpload">Upload!</button> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'UploadImage',
	data: function() {
		return {
			url: '',
		}
	},
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
</style>
