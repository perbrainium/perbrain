import "bootstrap-icons/font/bootstrap-icons.min.css";
import type iconsType from "bootstrap-icons/font/bootstrap-icons.json";

interface IcnOps {
    size ?: string;
    color ?: string;
}

// return icon
// Ex: <i class="bi-alarm"></i>
export default function Icon(name: keyof typeof iconsType, ops?: IcnOps) {
    const i = document.createElement("i");
    i.className = `bi-${name}`;

    if(ops) {
        if(ops.size) i.style.fontSize = ops.size;
        if(ops.color) i.style.color = ops.color;
    }

    return i;
}