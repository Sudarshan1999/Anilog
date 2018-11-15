<template>
	<div id="app">

		<Navbar />

		<router-view />
	</div>

</template>

<script>
import Navbar from '@/components/Navbar'
export default {
	name: 'App',
	components: {
		Navbar,
	},
}
</script>

<style>
body {
	padding-top: 54px;
}

@media (min-width: 992px) {
	body {
		padding-top: 56px;
	}
}

.bg-image-full {
	background: no-repeat center center scroll;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	background-size: cover;
	-o-background-size: cover;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
