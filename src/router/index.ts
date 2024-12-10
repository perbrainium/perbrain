/*
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
*/

import Base from "../components/Base";
import { currentUrl, getView, onPathChange, unPathChange, pushPath, toPath } from "./utils";

export const routes: { [key: string]: string } = {
  "/": "Index",
  "/about": "About",
  "/404": "NotFound",
};

export default class Router extends Base {
  constructor() {
    super();
    this.className = "view";

    this.toView();

    onPathChange(() => this.toView());
  }

  toView() {
    let nameRoute = routes[currentUrl().pathname];
    if (!nameRoute) nameRoute = "NotFound";
    this.render(nameRoute);
  }

  async render(name: string) {
    this.innerHTML = "";
    const View = await getView(name);
    this.appendChild(new View());
  }
}

export {
  onPathChange,
  unPathChange,
  currentUrl,
  pushPath,
  toPath,
}