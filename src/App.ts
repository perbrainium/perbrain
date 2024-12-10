import Base from "./components/Base";
import Navbar from "./components/layouts/Navbar";
import Tableft from "./components/layouts/Tableft";
import Router from "./router";

export default class App extends Base {
	constructor() {
		super();
		this.ctn.className = "app";

		const navbar = new Navbar();
		const tableft = new Tableft();
		const routerView = new Router();

		const main = document.createElement("div");
		main.className = "main";

		main.append(tableft.ctn, routerView.ctn);

		this.ctn.append(navbar.ctn, main);
	}
}
