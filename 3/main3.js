const circles = document.querySelectorAll('circle');

circles.forEach((circle, index) => {
	anime({
		targets: circle,
		direction: 'alternate',
		r: Math.random() * 2,
		easing: 'easeInOutSine',
		delay: index * 10,
		loop: true
	});
});
