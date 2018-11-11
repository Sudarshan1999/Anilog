const {
	clarifaiObject
} = require('../constants/clarifai.js')

export function getConceptsUrl(url) {
	return new Promise((resolve, reject) => {
		clarifaiObject.models
			.predict(Clarifai.GENERAL_MODEL, url)
			.then(response => {
				resolve(response['outputs'][0]['data']['concepts'])
			})
	})
}