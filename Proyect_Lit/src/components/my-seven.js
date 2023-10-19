import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MySeven extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.peso=0;
        this.altura=0;
        this.IMC=0;
    }    

    handleInputChange(){
        const pes = this.shadowRoot.getElementById('peso');
        const alt = this.shadowRoot.getElementById('altura');
        this.peso = pes.value;
        this.altura = alt.value;
    }

    calcularIMC(){
        this.IMC = (this.altura*2)/this.peso;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Calcular IMC</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Peso</label>
                            <input type="number" id="peso" placeholder="ingrese su peso en Kg"
                            @input=${this.handleInputChange}>
                        </div>
                        <div class="child-2">
                            <label>Altura</label>
                            <input type="number" id="altura" placeholder="ingrese su altura en Cm"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.calcularIMC}>Calcular IMC</button>
                    </form>
                </div>
                <div class="resultado">Resultado : ${this.IMC}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-seven',MySeven)