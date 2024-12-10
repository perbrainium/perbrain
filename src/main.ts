import App from "./App";
import { initStore } from "./stores";
import "./assets/css/main.css";

async function init() {
    await initStore();

    const app = new App();

    document.body.appendChild(app.ctn)
}

init()