<template>
	<div class="app">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div class="container">
				<a href="#/">
					<span class="navbar-brand">Anilog</span>
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link" href="#/searchUrl">Search URL</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#/uploadImage">Upload Image</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>


<script>
export default {
	name: 'Navbar',
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
