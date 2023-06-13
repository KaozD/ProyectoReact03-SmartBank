import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaObscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitchTema from "./Components/SwitchTema";

function App() {

  const [ tema, setTema ] = useState( true );

  const toggleTema = () => {
    setTema( ( tema ) => !tema )
  }
  return (
    <ThemeProvider theme={ tema ? temaClaro : temaObscuro } >
      
      <GlobalStyle />
      <BtnTema onClick={ toggleTema }>
        <SwitchTema tema={ tema }  />
      </BtnTema>
      <Header />
      <Container />

    </ThemeProvider>
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

/*Cambio de temas
Para realizar el cambio de temas dentro de nuestro proyecto primero llamaremos a la libreria:
ThemeProvider de SC de la siguiente forma:
        import { ThemeProvider } from "styled-components";
  
Despues deberemos ya tener establecidas las variables para poder agregarlos

y para que los temas puedan tener efecto, encapsularemos los componentes que veran el cambio
ejemplo:
    <ThemeProvider theme={ temaObscuro } >  al encapsular deberemos usar theme y darle uno de los valores 
                                            que previamente establecimos
      <GlobalStyle />
      <Header />
      <Container />

    </ThemeProvider>
 
*/
