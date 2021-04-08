const circles = document.querySelectorAll('circle');

circles.forEach((circle, index) => {
	anime({
		targets: circle,
		translateY: 150 * (index % 2 === 0 ? -1 : 1),
		direction: 'alternate',
		r: (Math.random() * (circles.length - index)) / 10,
		easing: 'easeInOutSine',
		delay: index * 10
	});
});
