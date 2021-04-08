const circles = document.querySelectorAll('circle');
anime({
	targets: circles,
	delay: anime.stagger(50),
	translateY: function () {
		return anime.random(0, 150);
	},

	translateX: function () {
		return anime.random(0, -60);
	},
	scale: 0,
	skew: function () {
		return anime.random(0, 10);
	},
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine'
});
