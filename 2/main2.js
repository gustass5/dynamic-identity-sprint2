const circles = document.querySelectorAll('circle');

circles.forEach((circle, index) => {
	anime({
		targets: circle,
		translateX: 250,
		direction: 'alternate',
		easing: 'easeInOutSine',
		delay: index * 10
	});
});
