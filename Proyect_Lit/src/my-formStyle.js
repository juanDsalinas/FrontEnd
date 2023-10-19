import { css } from "lit-element";

export default css `
* {
    padding:0;
    margin:0;
    box-sizing:border-box;
}

form {
    background-color:#FFCF96;
    width:300px;
    height:380px;
    display:flex;
    flex-direction:column;
    padding: 20px;
    border-radius:5px;
}

.logo {
    background-color:#fff;
    width:50px;
    height:50px;
    border-radius:50%;
}

.cuerpo{
    padding-top:40px;
    width:100%;
    height:100px;
    display:flex;
    gap:15px;
    flex-direction:column;
    color:#000;
}

.cuerpo > input {
    padding:5px;
}

button {
    margin: 130px 0 0 0;
    width:100px;
    background-color:#ff8800;
    padding:10px 0;
    color:#fff;
    border:none;
    border-radius:5px;
}

button:hover{
    background-color:#e79435;
}
`;