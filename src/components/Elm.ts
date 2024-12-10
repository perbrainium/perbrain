import Base from "./Base";

export default class Elm extends Base {
  constructor(tag?: keyof HTMLElementTagNameMap) {
    super();
    
    if (tag) this.ctn = document.createElement(tag);
  }
}
