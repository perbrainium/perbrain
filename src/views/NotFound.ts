import Base from "@/components/Base";

export default class NotFound extends Base {
    constructor() {
        super()
        this.ctn.innerHTML = `
            <h1>404 Not Found</h1>
        `
    }
}