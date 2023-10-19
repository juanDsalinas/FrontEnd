import {css} from "lit-element";

export default css `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/* Estilos del encabezado */
.header {
    background-color: #2196F3; /* Azul */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.circle-icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #E91E63; /* Rosa */
    margin-left: 10px;
}

/* Estilos del dashboard */
.dashboard {
    background-color: #4CAF50; /* Verde */
    display: flex;
}

/* Estilos de la barra lateral */
.barra-lateral {
    background-color: #333; /* Gris oscuro */
    width: 250px;
    height: 100vh;
    padding: 20px;
    color: #fff;
}

.menu-item {
    height: 40px;
    margin: 10px 0;
    display: flex;
    align-items: center;
}

.menu-item a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
}

.menu-item .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
}

/* Estilos del pie de página */
.footer {
    text-align: center;
    padding: 20px 0;
    color: #fff;
    background-color: #333; /* Gris oscuro */
}

/* Estilos del contenido */
.contenido {
    flex: 1;
    padding: 20px;
    background-color: #fff; /* Fondo blanco */
}

`;