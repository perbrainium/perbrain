import Base from "./Base";

export default class Button extends Base {
    ctn = document.createElement("button") 

    constructor(options: {
        label: string
    }) {
        super();
        
        this.ctn.innerText = options.label;

        this.ctn.addEventListener("click", (event) => {
            this.emits("click", event)
        })
    }
}