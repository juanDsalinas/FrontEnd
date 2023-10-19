import { css } from "lit-element";

export default css `
.container-form {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .title-form {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .data-container {
    text-align: left;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="number"] {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .button-seno {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .button-seno:hover {
    background-color: #0056b3;
  }
  
  .result-seno {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }
`;