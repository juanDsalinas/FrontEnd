import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MyCuarto extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.lado=0;
        this.perimetro=0;
    }    

    handleInputChange(){
        const lad = this.shadowRoot.getElementById('lado');
        this.lado = lad.value;
    }

    calcularPerimetro(){
        this.perimetro = this.lado * 4;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Perimetro Cuadrado</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Perimetro</label>
                            <input type="number" id="lado" placeholder="ingrese el valor de un lado"
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

customElements.define('my-cuarto',MyCuarto)