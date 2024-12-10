import Base from "../../components/Base";
import homePage from "./index.html?raw"

export default class Home extends Base {
    constructor() {
        super()
        this.ctn.innerHTML = homePage
    }
}