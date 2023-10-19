import { LitElement,html } from "lit-element";
import styleScss from './my-ochoStyle';

export class MyOcho extends LitElement {
    static get styles(){
        return[styleScss]
    }

    constructor() {
        super();
        this.grados = 0;
        this.result = 0;
      }
    
      handleInputChange() {
        const grado = this.shadowRoot.getElementById('grado');
        if (grado) {
          this.grados = parseFloat(grado.value);
        }
      }
    
      calcularSeno() {
        this.result = this.grados * (Math.PI / 180);
        this.result = Math.sin(this.result);
        this.requestUpdate(); 
      }
    
      render() {
        return html`
          <div class='container-form'>
            <div class='title-form'>Calcular Seno</div>
            <div class='data-container'>
              <label for="grados">Grados:</label>
              <br>
              <input id="grado" type="number" @input=${this.handleInputChange}>
              <br>
              <button @click=${this.calcularSeno} class = 'button-seno'>Calcular</button>
              <p class='result-seno'>Resultado: ${this.result}</p>
            </div>
          </div>
        `;
      }
}

customElements.define('my-ocho',MyOcho)