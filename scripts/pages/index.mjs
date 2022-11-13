
export default class Home {
	constructor() {

		this.id = 'home';
		this.selector = 'body';
		this.selectorChildren = {
			slide: '.services__slide',
			superMenu: '.navigation-bar__menu',
			triggerSuperMenu: '.navigation-bar__link__menu',

			mobileMenu: '.header__mobile-menu',
			triggerMobileMenu: ['.header__actions__button-mobile', '.header__mobile-menu__upper__close'],
		}
	}

	create() {
		this.element = document.querySelector(this.selector)
		this.elements = {}

		_.each(this.selectorChildren, (entry, key) => {
			if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
				this.elements[key] = entry
			} else {
				this.elements[key] = document.querySelectorAll(entry)

				if (this.elements[key].length === 0) this.elements[key] = null
				else if (this.elements[key].length === 1) this.elements[key] = document.querySelector(entry)
			}
		})

		this.setEventListeners();
	}

	setEventListeners() {
		this.createSlide();

		this.slide.actions.next.addEventListener('click', this.slide.handleNextSlide);
		this.slide.actions.previous.addEventListener('click', this.slide.handlePreviousSlide);

		this.slide.actionsMobile.next.addEventListener('click', this.slide.handleNextSlide);
		this.slide.actionsMobile.previous.addEventListener('click', this.slide.handlePreviousSlide);

		this.elements.triggerSuperMenu.addEventListener('click', () => {
			(this.elements.superMenu.classList.contains("show")) ? this.elements.superMenu.classList.remove('show') : this.elements.superMenu.classList.add('show');
			(this.elements.triggerSuperMenu.classList.contains("show")) ? this.elements.triggerSuperMenu.classList.remove('show') : this.elements.triggerSuperMenu.classList.add('show')
		})


		_.each(this.elements.triggerMobileMenu, (element, index) => {
			this.element.querySelector(element).addEventListener('click', () => {
				(this.elements.mobileMenu.classList.contains("show")) ? this.elements.mobileMenu.classList.remove('show') : this.elements.mobileMenu.classList.add('show')
			})
		})
	}

	createSlide() {
		this.slide = {
			element: this.elements.slide,
			cards: this.elements.slide.querySelector('.services__slide__card'),
			actions: {
				next: this.elements.slide.querySelector('.services__slide__action__next'),
				previous: this.elements.slide.querySelector('.services__slide__action__previous'),
			},
			actionsMobile: {
				next: this.element.querySelector('.services__slide__action-mobile__next'),
				previous: this.element.querySelector('.services__slide__action-mobile__previous'),
			}
		}

		this.slide.handlePreviousSlide = () => {
			this.slide.element.scrollLeft = this.slide.element.scrollLeft - this.slide.cards.offsetWidth
		}

		this.slide.handleNextSlide = () => {
			this.slide.element.scrollLeft = this.slide.element.scrollLeft + this.slide.cards.offsetWidth
		}
	}

}