<template>
	<div class="container has-text-centered">
		<div class="column is-6 is-offset-3">
			<h1 class="title">
				Have a picture of an animal but not sure where to find more?
			</h1>
			<h2 class="subtitle">
				With Anilog, powered by Clarifai Image Recognition and GCP's Places and Maps API, each image uploaded is complared to a database of other animals. From there, we take our best guess at what that animal is and reccomend another place where that animal can be found.
			</h2>
			<div class="box">
				<div class="field is-grouped">
					<p class="control is-expanded">
						<input class="input" type="text" placeholder="Enter the Image URL">
					</p>
					<p class="control">
						<a class="button is-info">
							Search
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>
