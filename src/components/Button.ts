import Base from "./Base";

export default class Button extends Base {
    ctn = document.createElement("button") 

    constructor(options: {
        label: string
    }) {
        super();
        
        this.innerText = options.label;

        this.onEvent("click", (event) => {
            this.emits("click", event)
        })
    }
}