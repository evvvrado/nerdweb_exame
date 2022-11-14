import Animation from "../classes/Animation.mjs";

export default class Block extends Animation {
	constructor({ element, elements }) {
		super({
			element,
			elements
		})
	}


	animateIn() {
		gsap.fromTo(this.element, {
			autoAlpha: 0,
			y: '100%'
		}, {
			autoAlpha: 1,
			delay: .5,
			duration: 1.5,
			ease: 'expo.out',
			stagger: {
				axis: 'x',
				amount: 1,
			},
			y: '0%'
		})
	}

	animateOut() {
		// gsap.set(this.element, {
		// 	autoAlpha: 0
		// })
	}

	onResize() {
		this.elementsLines = calculate(this.elementLinesSpans)
	}
}