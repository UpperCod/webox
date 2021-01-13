import { c } from "atomico";
import { html } from "atomico/html";
import { href } from "../assets/vars.css";
import "./component-2.js";

function component() {
    console.log(import("./sub/dinamic-import.js"));
    return html`<host shadowDom>
        <link rel="stylesheet" href=${href} />
        lorem...ss
    </host>`;
}

customElements.define("component-1", c(component));
