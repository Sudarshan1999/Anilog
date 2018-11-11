<template>
	<div>

		<!-- Header - set the background image for the header in the line below -->
		<header class="py-5 bg-image-full" style="background-image: url('../assets/Banner.png');">
			<div style="height: 200px;"></div>
		</header>

		<!-- Content section -->
		<section class="py-5">
			<div class="container">
				<h1>Search Animal by Image URL</h1>
				<p class="lead">Have a picture of an animal but not sure where to find more?</p>
				<p>With Anilog, powered by Clarifai Image Recognition and GCP's Places and Maps API, each image uploaded is complared to a database of other animals. From there, we take our best guess at what that animal is and reccomend another place where that animal can be found.</p>
			</div>
		</section>

		<!-- Image Section - set the background image for the header in the line below -->
		<section class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1081');">
			<!-- Put anything you want here! There is just a spacer below for demo purposes! -->
			<div style="height: 200px;"></div>
		</section>

		<!-- Content section -->
		<section class="py-5">
			<div class="container">
				<h1>Find Animal through an Uploaded Image</h1>
				<p class="lead">Take a picture of an animal but not sure where to find more?</p>
				<p>With Anilog, powered by Clarifai Image Recognition and GCP's Places and Maps API, each image uploaded is complared to a database of other animals. From there, we take our best guess at what that animal is and reccomend another place where that animal can be found.</p>
			</div>
		</section>

		<!-- Footer -->
		<footer class="py-5 bg-dark">
			<div class="container">
				<p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
			</div>
		</footer>

	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
}
</script>