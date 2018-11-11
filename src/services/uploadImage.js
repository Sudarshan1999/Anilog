const {
	clarifaiObject
} = require('../constants/clarifai.js')

const animalNames = require('../data/animalNames.json')

export function encodeAsURL(file) {
	return new Promise((resolve, _reject) => {
		var reader = new FileReader();
		reader.onloadend = () => {
			resolve(reader.result.substring(reader.result.indexOf(';') + 8))
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
				const concepts = response['outputs'][0]['data']['concepts'];
				if (concepts) {
					resolve(concepts);
				}
			})
	})
}

export function getAnimal(concepts) {
	return new Promise((resolve, _reject) => {
		const candidates = concepts
			.map(concept => concept['name'])
			.filter((concept) => animalNames.indexOf(concept) != -1);

		console.log(candidates.length + " candidates");
		console.log(candidates)

		resolve(candidates[0])

	})
}