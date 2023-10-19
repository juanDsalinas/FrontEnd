import { css } from "lit-element";

export default css `
* {
    padding:0;
    margin:0;
    box-sizing:border-box;
}

/* Estilos generales */
.container {
    text-align: center;
    margin: 20px;
}

/* Estilos para el título */
title {
    font-size: 24px;
    font-weight: bold;
}

/* Estilos para la sección de operación */
.operacion {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Estilos para las secciones de los elementos */
.child {
    flex: 1;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
}

.child-1 {
    flex: 2;
    text-align: center;
    margin: 10px;
}

#btn {
    padding:5px;
    border-radius:5px;
    border:none;
}

/* Estilos para el formulario */
form {
    text-align: center;
}

.child-2 {
    margin: 10px;
}

/* Estilos para las etiquetas y los campos de entrada */
label {
    display: block;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Estilos para el resultado */
.resultado {
    font-weight: bold;
    margin: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}

`;
