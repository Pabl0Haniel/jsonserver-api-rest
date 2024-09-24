/*Fornece acesso ao núcleo do React*/
import React from "react";

/*Conecta o React com o navegador, permitindo que os componentes sejam convertidos em elementos HTML e exibidos na página.*/
import ReactDOM from "react-dom";

/*O App é o ponto inicial da aplicação React, que será renderizado dentro do DOM.*/
import App from "./App";

/*Chama a função render() do ReactDOM, responsável por "montar" a aplicação React no DOM do navegador.*/
ReactDOM.render(

  /*É um componente que envolve o App para ativar verificações e alertas no desenvolvimento*/
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  /*Seleciona o elemento do DOM com o ID root. Este ID é normalmente definido em um arquivo HTML que serve como estrutura base para a aplicação.*/
  document.getElementById("root")
);
