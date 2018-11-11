const {
	clarifaiObject
} = require('../constants/clarifai.js')
const {
	placesPromises
} = require('../constants/places.js')

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

export function getLocation(animal, coordinates) {
	return placesPromises.placeSearch({
		location: [33.4511924, -111.9480369],
		types: 'zoos containing ' + animal,
		input: 'zoos',
	}).then(response => ({
		lat: response['results'][1]['geometry']['location']['lat'],
		lng: response['results'][1]['geometry']['location']['lng'],
	}))
}