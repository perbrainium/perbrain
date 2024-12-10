interface Emits {
  [name: string]: Array<Function>;
}

export default class Base {
  ctn: HTMLElement = document.createElement("div");

  constructor() {}

  // event emit and subscribe

  #emitsListeners: Emits = {};

  emits(event: string, detail = {}) {
    if (!this.#emitsListeners[event]) return;

    for (const listener of this.#emitsListeners[event]) {
      listener(detail);
    }
  }

  onEmit(event: string, callback: Function) {
    if (!this.#emitsListeners[event]) this.#emitsListeners[event] = [];

    this.#emitsListeners[event].push(callback);
  }

  unEmit(event: string, callback: Function) {
    if (!this.#emitsListeners[event]) return;

    const idx = this.#emitsListeners[event].findIndex(
      (item) => item === callback
    );
    if (idx >= 0) this.#emitsListeners[event].splice(idx, 1);
  }

  // Event DOM

  onEvent(
    event: keyof HTMLElementEventMap,
    callback: EventListenerOrEventListenerObject
  ) {
    this.ctn.addEventListener(event, callback);
  }

  unEvent(
    event: keyof HTMLElementEventMap,
    callback: EventListenerOrEventListenerObject
  ) {
    this.ctn.removeEventListener(event, callback);
  }

  // DOM Wrap
  append(...childs: Array<HTMLElement | Base | string>) {
    const newChilds = childs.map(child => {
      if(child instanceof Base) return child.ctn

      return child
    })
    this.ctn.append(...newChilds)
  }

  appendChild(child: HTMLElement | Base) {
    if (child instanceof Base) {
      this.ctn.appendChild(child.ctn); // Append the `ctn` property
    } else {
      this.ctn.appendChild(child); // Append the HTMLElement
    }
  }

  get className() {
    return this.ctn.className;
  }
  set className(name: string) {
    this.ctn.className = name;
  }

  setAttribute(attr: string, value: string) {
    // for quickly call innerTExt and innerHTML 
    if(attr === 'text'){
      this.innerText = value
      return
    }
    if(attr === 'html'){
      this.innerHTML = value
      return
    }
    this.ctn.setAttribute(attr, value);
  }

  setAttributes(attrs: { [key: string]: string }) {
    for(const key in attrs) {
      this.setAttribute(key, attrs[key])
    }
  }

  get innerText() {
    return this.ctn.innerText;
  }
  set innerText(text: string) {
    this.ctn.innerText = text;
  }

  get innerHTML() {
    return this.ctn.innerHTML;
  }
  set innerHTML(text: string) {
    this.ctn.innerHTML = text;
  }
}
