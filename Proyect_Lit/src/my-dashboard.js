import { LitElement,html } from "lit-element";
import styleScss from './my-dashboardStyle';
import './components/my-primer';
import './components/my-segundo';
import './components/my-tercer';
import './components/my-cuarto';
import './components/my-quinto';
import './components/my-sexto';
import './components/my-seven';
import './components/my-ocho';
import './components/my-nueve';
import './components/my-diez';

export class MyDashboard extends LitElement {
    static get styles(){
        return[styleScss]
    }
    
    render(){
        return html`
        
        <div class="header">
        <h2>Yuvio</h2>
        <div class="circle-icon"></div>
    </div>
    <div class="dashboard">
        <div class="barra-lateral">
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio1')}>Ejercicio 1</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio2')}>Ejercicio 2</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio3')}>Ejercicio 3</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio4')}>Ejercicio 4</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio5')}>Ejercicio 5</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio6')}>Ejercicio 6</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio7')}>Ejercicio 7</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio8')}>Ejercicio 8</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio9')}>Ejercicio 9</a>
            </div>
            <div class="menu-item">
                <div class="circle"></div>
                <a href="#" @click=${() => this.mostrarEjercicio('ejercicio10')}>Ejercicio 10</a>
            </div>
            <div class="footer">
                <p>Bienvenido, Querido Usuario</p>
            </div>
        </div>
        <div class="contenido"></div>
    </div>
        `;
    }

    mostrarEjercicio(componente) {
        const ejercicioContainer = this.shadowRoot.querySelector('.contenido');
        switch (componente) {
            case 'ejercicio1':
                ejercicioContainer.innerHTML = '<my-primer></my-primer>';
                break;
            case 'ejercicio2':
                ejercicioContainer.innerHTML = '<my-segundo></my-segundo>'; 
                break;
            case 'ejercicio3':
                ejercicioContainer.innerHTML = '<my-tercer></my-tercer>'; 
                break;
            case 'ejercicio4':
                ejercicioContainer.innerHTML = '<my-cuarto></my-cuarto>'; 
                break;
            case 'ejercicio5':
                ejercicioContainer.innerHTML = '<my-quinto></my-quinto>'; 
                break;
            case 'ejercicio6':
                    ejercicioContainer.innerHTML = '<my-sexto></my-sexto>';
                    break;
            case 'ejercicio7':
                    ejercicioContainer.innerHTML = '<my-seven></my-seven>'; 
                    break;
            case 'ejercicio8':
                    ejercicioContainer.innerHTML = '<my-ocho></my-ocho>'; 
                    break;
            case 'ejercicio9':
                    ejercicioContainer.innerHTML = '<my-nueve></my-nueve>'; 
                    break;
            case 'ejercicio10':
                    ejercicioContainer.innerHTML = '<my-diez></my-diez>'; 
                    break;
            default:
                break;
        }
    }
    
}

customElements.define('my-dashboard', MyDashboard);