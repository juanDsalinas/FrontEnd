import { LitElement,html } from "lit-element";

export class MyElement extends LitElement {
    render(){
        return html`
        <h2>Hola  Mundo!!</h2>
        `;
    }
}

customElements.define('my-element', MyElement)