import Home from './scripts/pages/index.mjs'

export default class App {

	/*
	|--------------------------------------------------------------------------
	| Criação da Aplicação
	|--------------------------------------------------------------------------
	*/


	constructor() {
		this.log()
		this.load()
	}


	load() {
		this.showContent()
		this.createPage()
	}


	/*
	|--------------------------------------------------------------------------
	| Mostrar conteudo ao carregar a página
	|--------------------------------------------------------------------------
	*/


	showContent() {
		gsap.to('body', {
			delay: 1,
			autoAlpha: 1,
			onComplete: _ => {
			}
		})
	}

	/*
	|--------------------------------------------------------------------------
	| Log de carregamento
	|--------------------------------------------------------------------------
	*/

	createPage() {
		this.page = new Home();
		this.page.create();
	}


	/*
	|--------------------------------------------------------------------------
	| Log de carregamento
	|--------------------------------------------------------------------------
	*/

	log() {
		console.log("\n%cmade with ❤ by %c@evvvrado", "text-style:none;  font-family: consolas; color:$white; background-color: #ff3434; padding: 5px; margin-top: 5px; margin-bottom: 15px;", "text-style:none;  font-family: consolas; color:#fff; background-color: #ff3434; padding: 5px; margin-top: 5px; margin-bottom: 15px;")
	}
}

new App();