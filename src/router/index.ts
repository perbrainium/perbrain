
/*
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
*/

import Base from "../components/Base"

export function currentHash() {
  return window.location.hash
}

export function currentPath(): string {
  return currentHash().slice(1) || '/'
}

async function getView(name: string) {
  return import(`../views/${name}/index.ts`).then( modules => modules.default )
}

export default class Router extends Base {
  constructor(){
    super();
    this.ctn.className = "view";
    
    window.addEventListener('hashchange', () => {
      this.toView();
    })
    this.toView()
  }

  toView(){
    switch(currentPath()){
      case "/":
        this.render("home")
        break;
      case "/about":
        this.render("about")
        break;
    }
  }

  async render(name: string){
    this.ctn.innerHTML = "";
    const View = await getView(name);
    this.ctn.appendChild(new View().ctn)
  }
}

