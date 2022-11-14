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
		this.createPage()
	}

	/*
	|--------------------------------------------------------------------------
	| Criação da Página
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