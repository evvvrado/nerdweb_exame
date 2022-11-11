import Component from '../classes/Component.mjs'

export default class Splash extends Component {
	constructor(element) {
		super(
			{
				element,
				elements: {
				}
			}
		)
	}


	hide() {
		if (sessionStorage.getItem('usedSplash'))
			// gsap.fromTo(this.selector, { autoAlpha: 0, opacity: 0, }, {
			// autoAlpha: 0, opacity: 0, onComplete: _ => {
			this.destroy()
		// }
		// })
		else
			gsap.to(this.selector, {
				ease: "power1.in", scale: 2, duration: 1, opacity: 0, delay: 3, onComplete: _ => {
					sessionStorage.setItem('usedSplash', true)
					// this.destroy()
				}
			})

	}

	show() { }

	destroy() {
		this.element.parentNode.removeChild(this.element)
	}
}