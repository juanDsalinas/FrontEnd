import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MyQuinto extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.celsius=0;
        this.farenheit=0;
    }    

    handleInputChange(){
        const cels = this.shadowRoot.getElementById('celsius');
        this.celsius = cels.value;
    }

    calcularCelsius(){
        this.farenheit = (this.celsius * (9/5)) + 32;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Celsius a Farenheit</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Celsius</label>
                            <input type="number" id="celsius" placeholder="ingrese el valor en grados celsius"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.calcularCelsius}>Convertir</button>
                    </form>
                </div>
                <div class="resultado">Resultado : ${this.farenheit}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-quinto',MyQuinto)