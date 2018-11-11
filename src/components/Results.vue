<template>
	<iframe width="600" height="450" frameborder="0" style="border:0" :src="query" allowfullscreen>
	</iframe>
</template>

<script>
export default {
	name: 'Results',
	data() {
		const mapsApiKey = 'AIzaSyDip6TA8DIbe0T5dvKAzAZFHVlHebdi3do'
		const search = 'Phoenix+Zoo'
		const coordinates = '33.4511924,-111.9480369'
		const query = `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${search}&center=${coordinates}`

		console.log(query)

		return {
			query,
		}
	},
}
</script>

