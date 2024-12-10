import Base from "./Base";

export default class InputFiles extends Base {
  ctn = document.createElement("input");
  constructor() {
    super();

    this.setAttributes({
        "type": "file",
        "multiple": "true"
    })

    this.onEvent("change", (event) => {
        this.emits("change", event)
    })
  }

  upload() {
    this.ctn.click();
  }
}
