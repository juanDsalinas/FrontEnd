import { LitElement,html } from "lit-element";
import styleScss from './my-formStyle';

export class MyForm extends LitElement {
    static get styles(){
        return [styleScss]
    }

    render(){
        return html`
        <form>
            <div class="logo"></div>
            <div class="cuerpo">
                <label>Username</label>
                <input type="text" placeholder="Username">
                <label>Password</label>
                <input type="password" placeholder="password">
            </div>
            <button>¡Click me!</button>
        </form> 
        `;
    }
}

customElements.define('my-form',MyForm)