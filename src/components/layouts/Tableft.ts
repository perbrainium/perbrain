import { toPath } from "@/router";
import Base from "../Base";
import Elm from "../Elm";

export default class Tableft extends Base {
    constructor() {
        super();

        this.className = "tableft";

        const links = [{
            path: toPath("/"),
            name: "Home"
        },{
            path: toPath("/about"),
            name: "About"
        }]

        for(const link of links) {
            const a = new Elm("a");
            a.setAttributes({
                href: link.path,
                text: link.name
            })

            this.append(a, " - ");
        }
    }
}