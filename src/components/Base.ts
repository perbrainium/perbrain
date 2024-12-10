interface EventEmits {
  [name: string]: Function;
}

export default class Base {
  ctn: HTMLElement = document.createElement("div");

  events: EventEmits = {};
  constructor() {
  }

  emits(eventName: string, detail = {}) {
    this.events[eventName](detail);
  }

  on(eventName: string, callback: Function) {
    this.events[eventName] = callback;
  }
}
