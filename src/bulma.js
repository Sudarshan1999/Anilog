var burger = document.querySelector('.burger');
if (burger) {
	var menu = document.querySelector('#' + burger.dataset.target);
	burger.addEventListener('click', function() {
		burger.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	});
} else {
	console.log("burger is not defined")
}