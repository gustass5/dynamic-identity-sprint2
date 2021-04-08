anime({
	targets: 'circle',
	rotate: function () {
		return anime.random(-360, 360);
	},
	easing: 'easeInQuint',
	direction: 'alternate'
});
