import Component from '../classes/Component.mjs'

export default class Animation extends Component {
	constructor({ element, elements }) {
		super({
			element,
			elements
		})

		this.wasAnimated = false;

		this.createObserver()
		this.animateOut()
	}

	createObserver() {
		this.observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					// console.log('animatein');
					if (this.wasAnimated) { return }
					this.wasAnimated = true;
					this.animateIn()
				} else {
					// console.log('animateout');
					this.animateOut()
				}
			})
		})

		this.observer.observe(this.element)
	}


	animateIn() { }

	animateOut() { }

	onResize() { }
}