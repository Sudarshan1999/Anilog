<template>
	<!-- <iframe width="600" height="450" frameborder="0" style="border:0" :src="query" allowfullscreen>
	</iframe> -->

	<div>

		<br><br><br> Animal: {{animal}}<br> Place: Phoenix Zoo<br> Coordinates: {{location['lat'] ? location['lat']: ''}}, {{location['lng'] ? location['lng']: ''}}

		<br><br><br>

		<img :src="imageUrl">
	</div>
</template>

<script>
export default {
	name: 'Results',
	data() {
		// const mapsApiKey = 'AIzaSyDip6TA8DIbe0T5dvKAzAZFHVlHebdi3do'
		// const search = 'Phoenix+Zoo'
		// const coordinates = '33.4511924,-111.9480369'
		// const query = `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${search}&center=${coordinates}`

		// console.log(query)

		const animal = this.$route.params.animal
		const location = this.$route.params.location

		return {
			// query,
			imageUrl: 'https://i.imgur.com/omihjNj.png',
			animal,
			location,
		}
	},
}
</script>

