import Base from "@/components/Base";
import Button from "@/components/Button";
import InputFiles from "@/components/InputFiles";
// import { UploadFiles } from "@/modules/files";

export default class Home extends Base {
    constructor() {
        super()
        // this.ctn.innerHTML = homePage
        
        const btn1 = new Button({label: "btn 1"})
        const file = new InputFiles();

        file.onEmit("change", function(e: InputEvent){
            console.log(e)
        })

        this.append(btn1)
    }
}