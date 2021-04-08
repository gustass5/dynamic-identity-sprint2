const circles = document.querySelectorAll('circle');
const innitialPosition = Array.from(circles).map(circle => {
	return { x: circle.cx.baseVal.value, y: circle.cy.baseVal.value };
});

setTimeout(() => {
	circles.forEach(circle => {
		anime({
			targets: circle,
			translateX: 0,
			translateY: 0,
			cx: anime.random(0, 1100),
			cy: anime.random(-400, 400),
			duration: 1000
		});
	});
}, 1000);

setTimeout(() => {
	circles.forEach(circle => {
		anime({
			targets: circle,
			translateX: anime.random(-20, 20),
			translateY: anime.random(-20, 20),
			duration: 5000,
			easing: 'linear'
		});
	});
}, 1500);

setTimeout(() => {
	anime({
		targets: 'circle',
		translateX: 0,
		translateY: 0,
		cx: 840,
		cy: 80,
		easing: 'linear'
	});
}, 6000);

setTimeout(() => {
	for (let i = 0; i < innitialPosition.length; i++) {
		anime({
			targets: circles[i],
			cx: innitialPosition[i].x,
			cy: innitialPosition[i].y
		});
	}
}, 8000);
