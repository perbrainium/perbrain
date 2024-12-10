import { initPers } from "./pers";

export async function initStore() {
    await Promise.all([
        initPers()
    ])
}