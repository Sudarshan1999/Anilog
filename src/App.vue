<template>
	<section class="hero is-info is-fullheight">

		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item" href="#/">
							<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
						</a>
						<span class="navbar-burger burger" data-target="navbarMenu">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div id="navbarMenu" class="navbar-menu">
						<div class="navbar-end">
							<span class="navbar-item">
								<a class="button is-white is-outlined" href="#/searchUrl">
									<span class="icon">
										<i class="fas fa-search"></i>
									</span>
									<span>Search URL</span>
								</a>
							</span>
							<span class="navbar-item">
								<a class="button is-white is-outlined" href="#/uploadImage">
									<span class="icon">
										<i class="fas fa-upload"></i>
									</span>
									<span>Upload Image</span>
								</a>
							</span>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<div class="hero-body">
			<router-view />
		</div>

	</section>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style>
html,
body {
	font-family: 'Open Sans', serif;
}
.hero.is-info {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://unsplash.it/1200/900?random') no-repeat center center fixed;

	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
.hero .nav,
.hero.is-success .nav {
	-webkit-box-shadow: none;
	box-shadow: none;
}
.hero .subtitle {
	padding: 3rem 0;
	line-height: 1.5;
}
</style>

