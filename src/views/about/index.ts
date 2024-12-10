import Base from "../../components/Base";
import aboutPage from "./index.html?raw"

export default class About extends Base {
    constructor() {
        super()
        this.ctn.innerHTML = aboutPage
    }
}