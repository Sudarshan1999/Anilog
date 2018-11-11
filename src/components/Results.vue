<template>
	<!-- <iframe width="600" height="450" frameborder="0" style="border:0" :src="query" allowfullscreen>
	</iframe> -->

	<div>

		<!-- Animal: Lion -->
		Name: Phoenix Zoo<br>
		Coordinates: [33.4511924, -111.9480369]<br>

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

		// const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'
		console.log(this.$route.params)
		return {
			// query,
			imageUrl: 'https://i.imgur.com/omihjNj.png',
		}
	},
}
</script>

