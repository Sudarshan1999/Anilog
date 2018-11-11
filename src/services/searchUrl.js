const {
	clarifaiObject
} = require('../constants/clarifai.js')

export function getConceptsUrl(url) {
	return new Promise((resolve, _reject) => {
		clarifaiObject.models
			.predict(Clarifai.GENERAL_MODEL, url)
			.then((response) => {
				const concepts = response['outputs'][0]['data']['concepts'];
				if (concepts) {
					resolve(concepts);
				}
			})
	})
}