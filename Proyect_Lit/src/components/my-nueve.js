import { LitElement,html } from "lit-element";
import styleScss from './my-primerStyle';

export class MyNueve extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor(){
        super();
        this.hora=0;
        this.segundo=0;
    }    

    handleInputChange(){
        const rad = this.shadowRoot.getElementById('horas');
        this.hora = rad.value;
    }

    calcularTiempo(){
        this.segundo = this.hora * 3600;
        this.requestUpdate();
    }


    render(){
        return html`
        <div class="container">
            <title>Area</title>
            <div class="operacion">
                <div class="child">Conversor de Horas a Segundos</div>
                <div class="child-1">
                    <form>
                        <div class="child-2">
                            <label>Horas</label>
                            <input type="number" id="horas" placeholder="ingrese la base"
                            @input=${this.handleInputChange}>
                        </div>
                        <button @click=${this.calcularTiempo}>Calcular Tiempo</button>
                    </form>
                </div>
                <div class="resultado">Resultado(Segundos) : ${this.segundo}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('my-nueve',MyNueve)