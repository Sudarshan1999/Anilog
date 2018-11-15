const Clarifai = require('clarifai')
const clarifaiObject = new Clarifai.App({
	apiKey: '806a013982f0402eb76adaa64b7a9acb',
})

const GooglePlacesPromises = require('googleplaces-promises')
const placesPromises = new GooglePlacesPromises(
	'AIzaSyBiXTklAzda7cc6iT5SjuvT7K-w8ZsX-wI'
)
export {
	clarifaiObject,
	placesPromises
}