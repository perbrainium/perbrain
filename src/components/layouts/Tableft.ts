import Base from "../Base";

export default class Tableft extends Base {
    constructor() {
        super();

        this.ctn.className = "tableft";

        const links = [{
            path: "#/",
            name: "Home"
        },{
            path: "#/about",
            name: "About"
        }]

        for(const link of links) {
            const a = document.createElement("a");
            a.href = link.path;
            a.innerText = link.name;

            this.ctn.append(a, " - ");
        }
    }
}