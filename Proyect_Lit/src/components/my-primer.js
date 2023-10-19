import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MyPrimer extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.base=0;
        this.altura=0;
        this.area=0;
    }    

    handleInputChange(){
        const inputBase = this.shadowRoot.getElementById('base');
        const inputAltura = this.shadowRoot.getElementById('altura');
        this.base = inputBase.value;
        this.altura = inputAltura.value;
    }

    calcularArea(){
        this.area = this.base * this.altura;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Area Cuadrado</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Base</label>
                            <input type="number" id="base" placeholder="ingrese la base"
                            @input=${this.handleInputChange}>
                        </div>
                        <div class="child-2">
                            <label>altura</label>
                            <input type="number" id="altura" placeholder="ingrese la altura"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.calcularArea}>Calcular Área</button>
                    </form>
                </div>
                <div class="resultado">Resultado : ${this.area}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-primer',MyPrimer)