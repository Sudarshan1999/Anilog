const {
	clarifaiObject,
	placesPromises
} = require('./constants.js')

const animalNames = require('./data/animalNames.json')

// search url code

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

// upload image code

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
			.then((response) => {
				const concepts = response['outputs'][0]['data']['concepts'];
				if (concepts) {
					resolve(concepts);
				}
			})
	})
}

// common code

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

export function getLocation(animal, coordinates) {
	return placesPromises.placeSearch({
		location: coordinates,
		types: 'zoos containing ' + animal,
		input: 'zoos',
	}).then(response => {
		if (response['status'] == "REQUEST_DENIED") {
			console.error('Invalid response', response)
			throw new TypeError("Invalid response", response)
		} else {
			return {
				lat: response['results'][1]['geometry']['location']['lat'],
				lng: response['results'][1]['geometry']['location']['lng'],
			}
		}
	})
}