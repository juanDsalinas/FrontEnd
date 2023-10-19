import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MySexto extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.cop=0;
        this.dolar=0;
    }    

    handleInputChange(){
        const colombianos = this.shadowRoot.getElementById('cop');
        this.cop = colombianos.value;
    }

    convertir(){
        this.dolar = this.cop * 0.00024;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">COP a USD</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Dinero en pesos Colombianos</label>
                            <input type="number" id="cop" placeholder="ingrese la cantidad"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.convertir}>Convertir a dolares</button>
                    </form>
                </div>
                <div class="resultado">Resultado : ${this.dolar}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-sexto',MySexto)