const circles = document.querySelectorAll('circle');

anime({
	targets: circles,
	translateX: 0,
	translateY: 0,
	r: { value: 5, easing: 'easeInSine', duration: 1200 },
	direction: 'alternate',
	loop: true,
	delay: 1500
});
