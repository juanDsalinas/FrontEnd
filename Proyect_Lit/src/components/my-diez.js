import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MyDiez extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.num1=0;
        this.num2=0;
        this.num3=0;
        this.num4=0;
        this.resultado=0;
    }    

    handleInputChange(){
        const nume1 = this.shadowRoot.getElementById('uno');
        const nume2 =  this.shadowRoot.getElementById('dos');
        const nume3 = this.shadowRoot.getElementById('tres');
        const nume4 = this.shadowRoot.getElementById('cuatro');
        if (nume1 && nume2 && nume3 && nume4) {
            this.num1 = parseFloat(nume1.value);
            this.num2 = parseFloat(nume2.value);
            this.num3 = parseFloat(nume3.value);
            this.num4 = parseFloat(nume4.value);
        }
    }

    calcularMulti(){
        this.resultado = (this.num1*this.num2)*(this.num3*this.num4);
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Multiplicar 4 numeros</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Numero1</label>
                            <input type="number" id="uno" placeholder="ingrese el primero"
                            @input=${this.handleInputChange}>
                        </div>
                        <div class="child-2">
                            <label>Numero2</label>
                            <input type="number" id="dos" placeholder="ingrese el segundo"
                            @input=${this.handleInputChange}>
                        </div>
                        <div class="child-2">
                            <label>Numero3</label>
                            <input type="number" id="tres" placeholder="ingrese el tercero"
                            @input=${this.handleInputChange}>
                        </div>
                        <div class="child-2">
                            <label>Numero4</label>
                            <input type="number" id="cuatro" placeholder="ingrese el cuarto"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.calcularMulti}>Calcular</button>
                    </form>
                </div>
                <div class="resultado">Resultado : ${this.resultado}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-diez',MyDiez)