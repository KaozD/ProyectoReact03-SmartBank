import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";



function App() {
  return (
    <>
    
      <GlobalStyle />
      <Header />
      <Container />

    </>
  );
}

export default App;

/*Llamando a un estilo Global
Ya con el archivo de estilos globales solo nos falta llamarlo en la parte de App.js de nuestro
archivo de React de la siguiente forma:

  Primero importamos :
      import GlobalStyle from "./GlobalStyle";

  Y despues declaramos dentro de:    
      function App() {
          return (
            <>
            
              <GlobalStyle />

              <Header />
              <Container />

            </>
          );
        }    

  Asi react sabra que primero debera añadir los estilos globales antes de continuar con los demas 
  componentes.

*/
