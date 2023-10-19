import { css } from "lit-element";

export default css `
/* Estilos para el formulario vertical */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.child-2 {
    margin: 10px;
    width: 100%; /* Asegura que los campos de entrada ocupen todo el ancho disponible */
}

/* Estilos para el botón de cálculo */
button {
    margin: 10px;
}

/* Estilos para el resultado */
.resultado {
    font-weight: bold;
    margin: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    color: #333;
}

`;
