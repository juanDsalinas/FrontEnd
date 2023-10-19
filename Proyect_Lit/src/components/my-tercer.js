import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MyTercer extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.radio=0;
        this.pi=3.1416;
        this.perimetro=0;
    }    

    handleInputChange(){
        const rad = this.shadowRoot.getElementById('radio');
        this.radio = rad.value;
    }

    calcularPerimetro(){
        this.perimetro = this.radio * this.pi;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Perimetro Circulo</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Base</label>
                            <input type="number" id="radio" placeholder="ingrese la base"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.calcularPerimetro}>Calcular Perimetro</button>
                    </form>
                </div>
                <div class="resultado">Resultado : ${this.perimetro}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-tercer',MyTercer)