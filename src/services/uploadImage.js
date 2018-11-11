const {
	clarifaiObject
} = require('../constants/clarifai.js')

export function encodeAsURL(file) {
	return new Promise((resolve, _reject) => {
		var reader = new FileReader();
		reader.onloadend = () => {
			var k = reader.result
			var i = k.indexOf(';') + 8
			k = k.substring(i);
			resolve(k)
		}
		reader.readAsDataURL(file);
	})

}

export function getConceptsB64(base64) {
	return new Promise((resolve, _reject) => {
		clarifaiObject.models
			.predict(Clarifai.GENERAL_MODEL, {
				base64
			})
			.then(response => {
				resolve(response['outputs'][0]['data']['concepts']);
			})
	})
}