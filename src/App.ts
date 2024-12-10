import Base from "./components/Base";
import Elm from "./components/Elm";
import Navbar from "./components/layouts/Navbar";
import Tableft from "./components/layouts/Tableft";
import Router from "./router";

export default class App extends Base {
	constructor() {
		super();
		this.className = "app"

		const navbar = new Navbar();
		const tableft = new Tableft();
		const routerView = new Router();

		const main = new Elm("div");
		main.className = "main"
		
		main.append(tableft, routerView);
		this.append(navbar, main);
	}
}
