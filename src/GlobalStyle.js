import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: grey;
  }
`;

export default GlobalStyle

/*Declaracion de Estilos Globales e Implementacion
Podemos generar un archivo global de estilos a la hora de usar Styled Components.
Esto con el fin de tener un estilo global en todo el proyecto dentro de React

primero importando una variable de la siguiente manera:

    import { createGlobalStyle } from "styled-components";

Despues crearemos la variable que contendra todos los estilos deseados de esta forma:

    const GlobalStyle = createGlobalStyle` *{ todos los estilos deseados }`;

  Primero que nada la declaracion de la variable debera iniciar con una mayuscula, despues debera llevar 
  el mimo valor que el ingresado en la parte que importamos, y ya dentro de las  ` ` debera empezar con * 
  y encapsulado con {}.
  Una vez este todo declarado exportaremos nuestro archivo usando: 

    export default GlobalStyle

*/